import { init } from "./init";
import { createTools } from "./createTools";
import { connectServer } from "./connectServer";

export const startMcpServer = async () => {
   
    console.log("initializing server")
    const server = init()

    console.log('Creating tools...');
    await createTools(server);

    console.log('Starting server...');
    await connectServer(server);

    console.log('Successfully generated MCP tools and started server!');
}