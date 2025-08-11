import { Command, Option } from 'commander';
import { convertTypesToObject } from './generators/convertTypesToObject.js';
import * as fs from 'fs';
import * as path from 'path';
import { generateSingleFileTypesFromOas } from './generators/generateTypes.js';
import * as os from 'os';
import ts from 'typescript';
import { execSync } from 'child_process';

// Type definitions for configuration
interface ServerConfig {
  url: string;
  env?: Record<string, string>;
  [key: string]: unknown;
}

interface McpConfig {
  mcpServers: Record<string, ServerConfig>;
}

const program = new Command();

program
  .name('@hypermodel/cli')
  .description('CLI to generate MCP tools from OpenAPI specs')
  .version('0.0.1');

// Helper function to get config path based on client
const getConfigPath = (client: string): string => {
  const homeDir = os.homedir();
  switch (client.toLowerCase()) {
    case 'cursor':
      return path.join(homeDir, '.cursor', 'mcp.json');
    case 'windsurf':
      return path.join(homeDir, '.codeium', 'windsurf', 'mcp_config.json');
    case 'claude-desktop':
      return path.join(homeDir, 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json');
    case 'claude':
      return path.join(homeDir, 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json');
    default:
      throw new Error('Invalid client type. Must be one of: cursor, windsurf, or claude');
  }
};

// Helper function to ensure directory exists and merge JSON config
const writeJsonToFile = (filePath: string, newConfig: Record<string, ServerConfig>) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existingConfig: McpConfig = { mcpServers: {} };
  
  // Try to read existing config if it exists
  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      existingConfig = JSON.parse(fileContent) as McpConfig;
    }
  } catch (error) {
    console.warn(`Warning: Could not read existing config file. Creating new one.`);
  }

  // Ensure mcpServers exists
  if (!existingConfig.mcpServers) {
    existingConfig.mcpServers = {};
  }

  // Merge new config into mcpServers
  existingConfig.mcpServers = {
    ...existingConfig.mcpServers,
    ...newConfig
  };

  // Write back the merged config
  fs.writeFileSync(filePath, JSON.stringify(existingConfig, null, 2));
};

const configCommand = program.command('config');

configCommand
  .command('add')
  .description('Add or update MCP server configuration for a client')
  .argument('<client>', 'Client type (cursor, windsurf, or claude)')
  .argument('<config>', 'Configuration JSON string')
  .action((client: string, configStr: string) => {
    try {
      // Parse the config JSON
      const config = JSON.parse(configStr) as Record<string, ServerConfig>;
      const configPath = getConfigPath(client);
      
      writeJsonToFile(configPath, config);
      console.log(`✅ Configuration saved successfully to ${configPath}`);
      
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error('Error: Invalid JSON configuration');
      } else {
        console.error('Error:', error instanceof Error ? error.message : String(error));
      }
      process.exit(1);
    }
  });

configCommand
  .command('remove')
  .description('Remove a server configuration from a client')
  .argument('<client>', 'Client type (cursor, windsurf, or claude)')
  .argument('<servername>', 'Name of the server to remove')
  .action((client: string, servername: string) => {
    try {
      const configPath = getConfigPath(client);
      
      // Read existing config
      let existingConfig: McpConfig = { mcpServers: {} };
      if (fs.existsSync(configPath)) {
        const fileContent = fs.readFileSync(configPath, 'utf-8');
        existingConfig = JSON.parse(fileContent) as McpConfig;
      }

      // Ensure mcpServers exists
      if (!existingConfig.mcpServers) {
        existingConfig.mcpServers = {};
      }

      // Check if server exists
      if (!existingConfig.mcpServers[servername]) {
        console.error(`Error: Server "${servername}" not found in ${client} configuration`);
        process.exit(1);
      }

      // Remove the server
      delete existingConfig.mcpServers[servername];

      // Write back the config
      fs.writeFileSync(configPath, JSON.stringify(existingConfig, null, 2));
      console.log(`✅ Server "${servername}" removed successfully from ${client} configuration`);
      
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program
  .command('generate')
  .description('Generate MCP tools from OpenAPI spec')
  .argument('<filepath>', 'Path to OpenAPI specification file')
  .addOption(new Option('-o, --output <dir>', 'Path to output directory').default('.'))
  .action(async (filepath: string, options: { output: string }) => {
    try {
      // Resolve absolute path
      const absolutePath = path.resolve(filepath);
      
      // Check if file exists
      if (!fs.existsSync(absolutePath)) {
        console.error(`Error: File not found at ${absolutePath}`);
        process.exit(1);
      }

      // Default output directory: .hypermodel under the current working directory
      const computedDefaultOutput = path.join(process.cwd(), '.hypermodel');
      const outputDir = options.output && options.output !== '.' ? path.resolve(options.output) : computedDefaultOutput;

      fs.mkdirSync(outputDir, { recursive: true });

      console.log("Using output directory:", outputDir);

      // Ensure Node treats generated JS as ESM regardless of the surrounding project
      const pkgPath = path.join(outputDir, 'package.json');
      try {
        let pkgJson: Record<string, unknown> = {};
        if (fs.existsSync(pkgPath)) {
          try {
            pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')) as Record<string, unknown>;
          } catch {
            // If existing package.json is invalid, overwrite with minimal valid ESM config
            pkgJson = {};
          }
        }
        if ((pkgJson as any).type !== 'module') {
          (pkgJson as any).type = 'module';
          fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2));
          console.log('✅ Ensured ESM module type in generated directory');
        }
      } catch (e) {
        console.warn('⚠️  Could not ensure ESM package.json in output directory:', e);
      }

      console.log('Generating types from OpenAPI spec file...');
      const typesFilePath = await generateSingleFileTypesFromOas(absolutePath, "oas", outputDir);

      await convertTypesToObject(typesFilePath, outputDir);

      console.log(`✅ Mcp server objects & types generated`);

      // stripTSIgnore(options.output);
      console.log('✅ Cleaned up files');

      // Transpile to CommonJS JavaScript without requiring a local tsconfig or tsc binary
      const filesToTranspile = [path.join(outputDir, 'oas.ts'), path.join(outputDir, 'output.ts')];
      const compilerOptions: ts.TranspileOptions["compilerOptions"] = {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        esModuleInterop: true,
        resolveJsonModule: true,
        skipLibCheck: true,
        removeComments: false,
      };

      for (const tsFile of filesToTranspile) {
        if (!fs.existsSync(tsFile)) continue;
        const tsCode = fs.readFileSync(tsFile, 'utf-8');
        const { outputText, diagnostics } = ts.transpileModule(tsCode, {
          compilerOptions,
          fileName: tsFile,
          reportDiagnostics: true,
        });
        const jsFile = tsFile.replace(/\.ts$/, '.js');
        fs.writeFileSync(jsFile, outputText, 'utf-8');
        if (diagnostics && diagnostics.length) {
          const formatted = diagnostics
            .map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n'))
            .join('\n');
          console.warn(`⚠️  Transpile diagnostics for ${path.basename(tsFile)}:\n${formatted}`);
        }
      }

      console.log('✅ JavaScript artifacts generated');
      // await fs.promises.cp('src/generated', 'dist', { recursive: true, filter: (src, _) => !src.includes('.ts') });
      console.log('✅ Ready to publish');

    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

// Add remote @hypermodel/docs server to a client's MCP config, preserving everything else
program
  .command('add-docs')
  .description('Add or update the @hypermodel/docs MCP server for a client (cursor, windsurf, or claude)')
  .argument('<client>', 'Client type (cursor, windsurf, or claude)')
  .action((client: string) => {
    try {
      const normalizedClient = client.toLowerCase();

      // If targeting Claude app via its CLI, prefer invoking Claude's official CLI over file edits
      if (normalizedClient === 'claude') {
        const addCmd = 'claude mcp add --transport sse hypermodel https://mcp.hypermodel.dev/sse';
        try {
          const out = execSync(addCmd, { stdio: 'pipe' }).toString();
          if (out.trim().length) process.stdout.write(out);
          console.log('✅ Added/updated hypermodel MCP server in Claude via CLI');
          return;
        } catch (e: any) {
          const stdoutMsg = (e?.stdout ? e.stdout.toString() : '').trim();
          const stderrMsg = (e?.stderr ? e.stderr.toString() : '').trim();
          const combined = `${stdoutMsg}\n${stderrMsg}`.toLowerCase();
          // If already exists, remove and re-add to update
          if (combined.includes('already exists')) {
            try {
              const rmOut = execSync('claude mcp remove hypermodel', { stdio: 'pipe' }).toString();
              if (rmOut.trim().length) process.stdout.write(rmOut);
              const addOut = execSync(addCmd, { stdio: 'pipe' }).toString();
              if (addOut.trim().length) process.stdout.write(addOut);
              console.log('✅ Updated hypermodel MCP server in Claude via CLI');
              return;
            } catch (e2: any) {
              const c2 = `${e2?.stdout ? e2.stdout.toString() : ''}\n${e2?.stderr ? e2.stderr.toString() : ''}`;
              if (c2.trim().length) process.stderr.write(c2);
              console.error('Error: Failed to update hypermodel MCP server via Claude CLI.');
              process.exit(1);
            }
          }
          if (stdoutMsg.length) process.stdout.write(stdoutMsg + '\n');
          if (stderrMsg.length) process.stderr.write(stderrMsg + '\n');
          console.error('Error: Failed to execute "claude" CLI. Please ensure Claude CLI is installed and on your PATH.');
          process.exit(1);
        }
      }

      const configPath = getConfigPath(normalizedClient);

      // Read existing config if present
      let existingConfig: McpConfig & Record<string, unknown> = { mcpServers: {} } as McpConfig & Record<string, unknown>;
      if (fs.existsSync(configPath)) {
        try {
          const fileContent = fs.readFileSync(configPath, 'utf-8');
          existingConfig = JSON.parse(fileContent) as McpConfig & Record<string, unknown>;
        } catch {
          // If existing file is unreadable/invalid, fall back to a minimal valid config
          existingConfig = { mcpServers: {} } as McpConfig & Record<string, unknown>;
        }
      }

      // Ensure mcpServers exists
      if (!existingConfig.mcpServers || typeof existingConfig.mcpServers !== 'object') {
        (existingConfig as McpConfig).mcpServers = {};
      }

      // Update only the @hypermodel/docs server entry, preserving any other properties under it
      const currentDocsConfig: ServerConfig | Record<string, unknown> =
        ((existingConfig as McpConfig).mcpServers['@hypermodel/docs'] as ServerConfig | Record<string, unknown>) || {};

      (existingConfig as McpConfig).mcpServers['@hypermodel/docs'] = {
        ...(currentDocsConfig as Record<string, unknown>),
        url: 'https://mcp.hypermodel.dev/sse',
      } as ServerConfig;

      // Write back to disk
      const dir = path.dirname(configPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(configPath, JSON.stringify(existingConfig, null, 2));
      console.log(`✅ Added/updated @hypermodel/docs in ${client} configuration at ${configPath}`);
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program.parse();
