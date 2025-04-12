import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { meta } from "./generated/openai_oas";

// Create server instance
export const server = new McpServer({
    name: `${meta.info.title}'s MCP Server`,
    version: `${meta.info.version}`,
});
  