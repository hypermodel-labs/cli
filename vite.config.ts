import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import fs from "fs";
import path from "path";

const generatedIndexPath = path.resolve(__dirname, "./src/generated/index.ts");
const inputFiles = ["./src/cli.ts"];

if (fs.existsSync(generatedIndexPath)) {
  inputFiles.push("./src/generated/index.ts");
}

export default defineConfig({
  plugins: [nodePolyfills()],
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
