import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import * as path from "path";
import { pathToFileURL } from "url";

// Create server instance loading meta from generated directory
export const init = async (generatedDir?: string) => {
  const base = generatedDir ?? path.join(process.cwd(), '.hypermodel');
  const oasUrl = pathToFileURL(path.join(base, 'oas.js')).href;
  const { meta } = await import(oasUrl);
  return new McpServer({
    name: `${meta.info?.title ?? 'OpenAPI'}'s MCP Server`,
    version: `${meta.info?.version ?? '0.0.0'}`,
  });
}
  