import fs from "fs";
import yaml from "yaml";
import {pick} from "remeda";
import openapiTS, { astToString, OpenAPI3 } from "openapi-typescript";
import prettier from "prettier";
import path from "path";
export async function generateMeta(oas: any, opts: { exportDefault?: boolean } = {}) {
  const data = pick(oas, ["info", "servers"]);
  const content = `
    export const meta = ${JSON.stringify(data)} as const
    ${opts.exportDefault ? "export default meta" : ""}
    `;

  return  await prettyFormat(content, { parser: "typescript" });
}

export async function getJson<T>(input: string): Promise<T> {
  const text = await fs.promises.readFile(input, 'utf-8');
  return parseJsonOrYaml(text) as T;
}

export function parseJsonOrYaml(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch (err) {
    if (!(err instanceof SyntaxError)) {
      throw err;
    }
    return yaml.parse(text);
  }
}

export async function generateSingleFileFromOas(
  oasPath: string,
  opts: { name: string }
) {
  const oas = await getJson<any>(oasPath);

  const meta =  await generateMeta(oas, { exportDefault: false });
  const types = await generateTypes(oas, { exportDefault: true });
  const prettyMeta = await prettyFormat(meta, { parser: "typescript" });
  const prettyTypes = await prettyFormat(types, { parser: "typescript" });
  return `
${prettyMeta}
${prettyTypes}
  `;
}

export async function prettyFormat(
  content: string,
  opts?: { parser?: "typescript" | "json" | "yaml" }
) {
  return prettier.format(content, {
    // @ts-ignore
    ...(await import("../prettier.config.js")).default,
    parser: opts?.parser ?? "typescript",
  });
}

export async function generateTypes(
  oas: any,
  opts: { exportDefault?: boolean } = {}
) {
  const nodes = await openapiTS(oas as OpenAPI3);
  const types = astToString(nodes);

  return `${types}
  
  export type metaType = typeof meta

  export interface oasTypes {
    components: components
    operations: operations
    paths: paths
    webhooks: webhooks
    schemas: components["schemas"]
    meta: metaType
  }
  
  ${opts.exportDefault ? "export default oasTypes" : ""}
  `;
}


export const generateSingleFileTypesFromOas = async (filePath: string, fileName: string): Promise<string> => {
  const ret = await generateSingleFileFromOas(filePath, {name: fileName})
  

  
  const generatedFilePath = `./src/generated/oas.ts`

  // Ensure the directory exists
  const outputDir = path.dirname(generatedFilePath);
  fs.mkdirSync(outputDir, { recursive: true });
  
  fs.writeFileSync(generatedFilePath, ret)

  console.log(`✅ Written to ${generatedFilePath}`);

  return generatedFilePath
}
