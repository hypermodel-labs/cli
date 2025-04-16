import { Command, Option } from 'commander';
import { convertTypesToObject } from './generators/convertTypesToObject.js';
import * as fs from 'fs';
import * as path from 'path';
import { generateSingleFileTypesFromOas } from './generators/generateTypes.js';
import { execSync } from 'child_process';
import * as os from 'os';

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
  .name('@usemodel-dev/cli')
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
      console.log("Running from:", process.cwd(), options.output);
      // Resolve absolute path
      const absolutePath = path.resolve(filepath);
      
      // Check if file exists
      if (!fs.existsSync(absolutePath)) {
        console.error(`Error: File not found at ${absolutePath}`);
        process.exit(1);
      }

      console.log('Generating types from OpenAPI spec file...');
      const typesFilePath = await generateSingleFileTypesFromOas(absolutePath, "oas", options.output);

      await convertTypesToObject(typesFilePath, options.output);

      console.log(`✅ Mcp server objects & types generated`);

      // stripTSIgnore(options.output);
      console.log('✅ Cleaned up files');

      try {
        execSync(`./node_modules/.bin/tsc ${options.output}/oas.ts ${options.output}/output.ts --module NodeNext --target es2022 --moduleResolution node16`, { stdio: 'inherit' });
        console.log('✅ TypeScript compilation complete');
      } catch (error) {
        console.error('Error during TypeScript compilation:', error);
      }
      // await fs.promises.cp('src/generated', 'dist', { recursive: true, filter: (src, _) => !src.includes('.ts') });
      console.log('✅ Ready to publish');

    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program.parse();
