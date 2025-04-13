import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { meta } from "./oas";

// Create server instance
export const init = () => new McpServer({
    name: `${meta.info.title}'s MCP Server`,
    version: `${meta.info.version}`,
});
  