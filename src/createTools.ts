import { z } from "zod";
import createClient from "openapi-fetch";
import { paths } from "./generated/output";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { meta } from "./generated/openai_oas";

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


export const createTools = (server: McpServer) => {
  const pathKeys = Object.keys(paths)
  pathKeys.forEach((p) => {
  const path = paths[p as keyof typeof paths]
  const method = (path.get && "get") || (path.post && "post") || (path.put && "put") || (path.delete && "delete") || (path.patch && "patch"); 
  if(method) {
    const toolName = method + "_" + createToolName(p);
    const toolDescription = `Use this tool to ${method} ${p}`;
    console.log("[DEBUG] Creating tool:", toolName)
    console.log("[DEBUG] toolDescription:", toolDescription)
    server.tool(
      toolName,
      toolDescription,
      {
        requestBody: z.record(z.string(), z.any()).describe("Request body"),
        parameters: z.record(z.string(), z.any()).describe("Request parameters"),
        method: z.enum(['get', 'post', 'put', 'delete', 'patch']).describe("Request HTTP method"),
        headers: z.record(z.string(), z.any()).describe("Request headers"),
      },
      async ({requestBody, parameters, method, headers }) => {
        try {
          // @ts-ignore
          const clientMethod = client[method]; 
          const response = await clientMethod(p as any, { // TODO: improve type here.
              params: parameters,
              body: requestBody,
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

