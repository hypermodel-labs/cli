import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import express, { Request, Response } from 'express';
import { detect } from 'detect-port';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

/**
 * Similar to https://github.com/modelcontextprotocol/typescript-sdk/pull/197/files
 */
class TransportManager {
    private transports: Map<string, SSEServerTransport>;

    constructor() {
        this.transports = new Map();
    }

    addTransport(transport: SSEServerTransport, res: Response): string {
        const sessionId = transport.sessionId;
        this.transports.set(sessionId, transport);
        
        // Set up cleanup when response ends
        res.on('close', () => {
            this.removeTransport(sessionId);
        });
        
        return sessionId;
    }

    removeTransport(sessionId: string) {
        if (this.transports.has(sessionId)) {
            this.transports.delete(sessionId);
        }
    }

    getTransport(sessionId: string): SSEServerTransport | undefined {
        return this.transports.get(sessionId);
    }

    getAllTransports(): SSEServerTransport[] {
        return Array.from(this.transports.values());
    }
}

const DEFAULT_PORT = 3001;
export async function connectServer(server: McpServer): Promise<express.Application> {
    const app = express();
    const port = await detect(DEFAULT_PORT);
    const transportManager = new TransportManager();

    // Increase JSON payload limit to handle larger messages
    app.use(express.json({ limit: '10mb' }));

    app.get('/sse', async (req: Request, res: Response) => {
        try {
            // Set headers for SSE
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');
            
            const transport = new SSEServerTransport('/messages', res);
            const sessionId = transportManager.addTransport(transport, res);
            
            await server.connect(transport);
        } catch (error) {
            console.error('Error establishing SSE connection:', error);
            res.status(500).json({ error: 'Failed to establish SSE connection' });
        }
    });

    app.post('/messages', async (req: Request, res: Response) => {
        const connectionId = req.query.sessionId as string;
        
        console.log('Connection ID', connectionId);
        if (!connectionId) {
            res.status(400).json({ error: 'Missing connection ID param' });
            return;
        }

        const transport = transportManager.getTransport(connectionId);
        

        if (transport) {
            try {
                await transport.handlePostMessage(req, res, req.body);
            } catch (error) {
                console.error('Error handling POST message for connectionId:', connectionId, error);
                
                // If there's a critical error, clean up the transport
                if (error instanceof Error && error.message.includes('connection closed')) {
                    transportManager.removeTransport(connectionId);
                }
            }
        } else {
            res.status(404).json({ error: 'Connection not found' });
        }
    });

    app.listen(port, () => {
        if(port !== DEFAULT_PORT) {
            console.error(`[DEBUG] Port ${DEFAULT_PORT} is already in use. MCP Server running on SSE at http://localhost:${port}`);
        } else {
            console.error(`[DEBUG] MCP Server running on SSE at http://localhost:${port}`);
        }
    });

    return app;
} 
