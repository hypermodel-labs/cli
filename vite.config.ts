import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import type { OutputChunk, OutputAsset } from 'rollup';
import fs from "fs";
import path from "path";

// Custom plugin to add shebang
function addShebangPlugin() {
  return {
    name: 'add-shebang',
    generateBundle(options: any, bundle: { [fileName: string]: OutputChunk | OutputAsset }) {
      // Find the main entry point
      const mainEntry = Object.values(bundle).find(
        (chunk): chunk is OutputChunk => chunk.type === 'chunk' && chunk.isEntry
      );
      
      if (mainEntry) {
        mainEntry.code = `#!/usr/bin/env node\n${mainEntry.code}`;
      }
    },
  };
}

const generatedIndexPath = path.resolve(__dirname, "./src/generated/index.ts");
const inputFiles = ["./src/cli.ts"];

if (fs.existsSync(generatedIndexPath)) {
  inputFiles.push("./src/generated/index.ts");
}

export default defineConfig({
  plugins: [nodePolyfills(), addShebangPlugin()],
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: inputFiles,
      output: {
        format: "es",
        entryFileNames: "[name].js",
      },
      external: [
        "@modelcontextprotocol/sdk",
        "@modelcontextprotocol",
        "@redocly",
        "ts-morph",
        "zod",
        "fs",
        "path",
        "node:perf_hooks",
        "yaml",
        "openapi-typescript",
        "remeda",
        "prettier",
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
        "node:crypto",
        "node:stream",
        "node:http",
        "node:https",
        "node:url",
        "node:os",
        "node-stdlib-browser",
        "child_process"
      ],
    },
    sourcemap: true,
    target: "node16",
    minify: false,
  },
});
