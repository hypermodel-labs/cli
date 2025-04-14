import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
// Dynamically import paths from GENERATED_OUTPUT_DIR
// @ts-ignore
const { meta } = await import(/* @vite-ignore */`./src${process.env.GENERATED_OUTPUT_DIR}/oas.js`);

// Create server instance
export const init = () => new McpServer({
    name: `${meta.info.title}'s MCP Server`,
    version: `${meta.info.version}`,
});
  