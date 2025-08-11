// esbuild.config.ts
import { build, Format, Platform, LogLevel } from "esbuild";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = "dist";

// Ensure output directory exists before writing files
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const sharedOptions = {
  bundle: true,
  platform: "node" as Platform,
  format: "esm" as Format,
  target: "node16",
  sourcemap: true,
  minify: false,
  external: [
    "@modelcontextprotocol/sdk",
    "@modelcontextprotocol",
    "@redocly",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "ts-morph",
    "zod",
    "fs",
    "path",
    "node:perf_hooks",
    "yaml",
    "openapi-typescript",
    "remeda",
    "prettier",
    "typescript",
    "express",
    "async_hooks",
    "commander",
    "node-stdlib-browser",
    "detect-port",
    "crypto",
    "stream",
    "http",
    "https",
    "url",
    "os",
    "child_process",
  ],
  plugins: [],
  absWorkingDir: process.cwd(),
  logLevel: "info" as LogLevel,
  alias: {
    src: path.resolve("./src"),
  },
  mainFields: ["module", "main"],
  resolveExtensions: [".ts", ".js", ".mjs", ".jsx", ".json"],
  nodePaths: [path.join(process.cwd(), "node_modules")],
};

// Build CLI bundle
await build({
  ...sharedOptions,
  entryPoints: ["./src/cli.ts"],
  outfile: path.join(OUTPUT_DIR, "cli.js"),
  write: false,
}).then((result) => {
  if (result.outputFiles) {
    for (const output of result.outputFiles) {
      if (output.path.endsWith("cli.js")) {
        const shebang = "#!/usr/bin/env node\n";
        fs.writeFileSync(output.path, shebang + output.text);
      } else {
        fs.writeFileSync(output.path, output.text);
      }
    }
  }
});

// Build Runtime bundle
await build({
  ...sharedOptions,
  entryPoints: ["./src/runtime/index.ts"],
  outfile: path.join(OUTPUT_DIR, "server.js"),
  write: false,
}).then((result) => {
  if (result.outputFiles) {
    for (const output of result.outputFiles) {
      if (output.path.endsWith("server.js")) {
        const shebang = "#!/usr/bin/env node\n";
        fs.writeFileSync(output.path, shebang + output.text);
      } else {
        fs.writeFileSync(output.path, output.text);
      }
    }
  }
});
