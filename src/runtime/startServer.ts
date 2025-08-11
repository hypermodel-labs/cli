import { init } from "./init.js";
import { createTools } from "./createTools.js";
import { connectServer } from "./connectServer.js";
 
export const startMcpServer = async (generatedDir?: string) => {
   
    console.log("initializing server")
    const server = await init(generatedDir)

    console.log('Creating tools...');
    await createTools(server, generatedDir);

    console.log('Starting server...');
    await connectServer(server);

    console.log('Successfully generated MCP tools and started server!');
}