import { z } from "zod";
import createClient from "openapi-fetch";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
// Dynamically import paths from GENERATED_OUTPUT_DIR
const cwd = process.cwd();
const { paths } = await import(`${cwd}/output.js`).catch((e) => {
  console.log("[DEBUG] Error:", e)
});
const { meta } = await import(`${cwd}/oas.js`).catch((e) => {
  console.log("[DEBUG] Error:", e)
});
type Paths = typeof paths

const client = createClient<Paths>({
  baseUrl: meta.servers[0].url,
  headers: {
    "Authorization": `Bearer ${process.env.API_KEY}`,
  },
});


const createToolName = (path: string) => {
  return path.replace(/"/g, '').replace(/\//g, '_').replace(/{(\w+)_id}/g, '_with_$1_id_').split('_').filter(Boolean).join('_')
}


export const createTools = async (server: McpServer) => {
  const pathKeys = Object.keys(paths)
  pathKeys.forEach((p) => {
  const path = paths[p as keyof typeof paths]
  const method = (path.get && "get") || (path.post && "post") || (path.put && "put") || (path.delete && "delete") || (path.patch && "patch"); 
  if(method) {
    const toolName = method + "_" + createToolName(p);
    const toolDescription = `Use this tool to ${method} ${p}`;
    server.tool(
      toolName,
      toolDescription,
      {
        body: z.record(z.string(), z.any()).optional().describe("Request body"),
        parameters: z.record(z.string(), z.any()).optional().describe("Request parameters"),
        method: z.enum(['get', 'post', 'put', 'delete', 'patch']).describe("Request HTTP method"),
        headers: z.record(z.string(), z.any()).optional().describe("Request headers"),
      },
      async ({body, parameters, method, headers }) => {
        try {
          const clientMethod = client[method.toUpperCase()];
          const response = await clientMethod(p as any, { // TODO: improve type here.
              params: parameters,
              body: body,
              headers: headers,
          });
          return {
              content: [
                  {
                      type: 'text',
                      text: JSON.stringify(response.data, undefined, 2),
                  },
              ],
          };
      }
      catch (error) {
          console.log("[DEBUG] Error:", error)
          const errMsg = JSON.stringify(error, undefined, 2);
          return {
              isError: true,
              content: [
                  {
                      type: 'text',
                      text: errMsg,
                  },
              ],
          };
      }
      }
    );
  }
})
}

