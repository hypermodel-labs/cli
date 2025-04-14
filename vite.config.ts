import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import type { OutputChunk, OutputAsset } from "rollup";
import path from "path";
import dynamicImport from "vite-plugin-dynamic-import";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";

// Custom plugin to add shebang
function addShebangPlugin() {
  return {
    name: "add-shebang",
    generateBundle(
      options: any,
      bundle: { [fileName: string]: OutputChunk | OutputAsset }
    ) {
      // Find the main entry point
      const mainEntry = Object.values(bundle).find(
        (chunk): chunk is OutputChunk => chunk.type === "chunk" && chunk.isEntry
      );

      if (mainEntry) {
        mainEntry.code = `#!/usr/bin/env node\n${mainEntry.code}`;
      }
    },
  };
}

// Plugin to handle window references in Node.js
function handleWindowPlugin() {
  return {
    name: 'handle-window',
    transform(code) {
      // Replace window.dispatchEvent with a no-op in Node environment
      return {
        code: code.replace(
          /window\.dispatchEvent\(e\)/g,
          'typeof window !== "undefined" && window.dispatchEvent(e)'
        ),
        map: null
      };
    }
  };
}

const generatedIndexPath = path.resolve(
  __dirname,
  `${process.env.VITE_OUTPUT_DIR}/index.ts`
);
const inputFiles = {
  "cli": "./src/cli.ts",
  "runtime/index": "./src/runtime/index.ts"
};

export default defineConfig(({ mode }) => {
  return {
    define: {
      "process.env.GENERATED_OUTPUT_DIR": JSON.stringify(
        process.env.GENERATED_OUTPUT_DIR
      ),
      global: "globalThis",
    },
    plugins: [
      nodePolyfills({
        protocolImports: true,
      }),
      addShebangPlugin(),
      handleWindowPlugin(),
      dynamicImportVars({
        warnOnError: true,
        include: ['./src/generated/*.js']
      })
      // dynamicImport({
      //   loose: true,
      //   filter(id) {
      //     if (id.includes("@modelcontextprotocol/sdk")) {
      //       return true;
      //     }
      //   },
      // }),
    ],
    build: {
      outDir: "./dist",
      rollupOptions: {
        input: inputFiles,
        output: {
          format: "es",
          entryFileNames: "[name].js",
          chunkFileNames: "chunks/[name]-[hash].js",
        },
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
          "child_process",
        ],
      },
      sourcemap: true,
      target: "node16",
      minify: false,
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
        'src': path.resolve(__dirname, './src'),
        // './generated': path.resolve(__dirname, './generated'),
      }
    },
  };
});
