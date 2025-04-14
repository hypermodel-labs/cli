import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
// Dynamically import paths from GENERATED_OUTPUT_DIR
const cwd = process.cwd();
const { meta } = await import(`${cwd}/oas.js`).catch((e) => {
  console.log("[DEBUG] Error:", e)
});

// Create server instance
export const init = () => new McpServer({
    name: `${meta.info.title}'s MCP Server`,
    version: `${meta.info.version}`,
});
  