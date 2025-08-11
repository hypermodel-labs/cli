import { startMcpServer } from "./startServer.js";

// Allow passing the generated directory as first CLI argument
const argDir = process.argv[2];
startMcpServer(argDir);