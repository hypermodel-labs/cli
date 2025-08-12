import { Command, Option } from 'commander';
import { convertTypesToObject } from './generators/convertTypesToObject.js';
import * as fs from 'fs';
import * as path from 'path';
import { generateSingleFileTypesFromOas } from './generators/generateTypes.js';
import * as os from 'os';
import ts from 'typescript';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const railwayBin = path.join(__dirname, '../node_modules/.bin/railway');

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

program
  .command('deploy')
  .description('Deploy the generated MCP server to Railway')
  .addOption(new Option('-d, --dir <directory>', 'Directory containing generated files').default('.hypermodel'))
  .addOption(new Option('-n, --name <name>', 'Railway service name'))
  .addOption(new Option('-e, --env <env...>', 'Environment variables in KEY=VALUE format'))
  .action(async (options: { dir: string; name?: string; env?: string[] }) => {
    try {
      // Resolve the deployment directory
      const deployDir = path.isAbsolute(options.dir) ? options.dir : path.resolve(options.dir);
      
      // Check if deployment directory exists
      if (!fs.existsSync(deployDir)) {
        console.error(`Error: Directory not found at ${deployDir}`);
        console.log('💡 Run "generate" command first to create the deployment files');
        process.exit(1);
      }

      // Check for required files
      const requiredFiles = ['output.js', 'oas.js'];
      const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(deployDir, file)));
      
      if (missingFiles.length > 0) {
        console.error(`Error: Missing required files: ${missingFiles.join(', ')}`);
        console.log('💡 Run "generate" command first to create the deployment files');
        process.exit(1);
      }

      console.log(`🚀 Deploying from directory: ${deployDir}`);

      // Railway CLI is bundled as dependency
      try {
        execSync(`"${railwayBin}" --version`, { stdio: 'pipe' });
      } catch (error) {
        console.error('Error: Railway CLI failed to execute', error);
        console.log('💡 Railway CLI is bundled with this tool. Please report this issue.');
        console.log('   Or visit: https://docs.railway.app/quick-start');
        process.exit(1);
      }

      // Check if user is logged in to Railway
      if (!process.env.RAILWAY_TOKEN) {
        console.error('Error: RAILWAY_TOKEN environment variable not set');
        console.log('💡 Set RAILWAY_TOKEN environment variable or login with: railway login');
        process.exit(1);
      }

      // Create Railway project if it doesn't exist
      try {
        execSync(`"${railwayBin}" status`, { cwd: deployDir, stdio: 'pipe' });
        console.log('✅ Using existing Railway project');
      } catch (error) {
        console.log('📦 Creating new Railway project...');
        try {
          const projectName = options.name || `hypermodel-${Date.now()}`;
          execSync(`"${railwayBin}" create --name "${projectName}"`, { cwd: deployDir, stdio: 'pipe' });
          console.log(`✅ Created Railway project: ${projectName}`);
        } catch (createError) {
          console.error('Error: Failed to create Railway project');
          console.error(createError instanceof Error ? createError.message : String(createError));
          process.exit(1);
        }
      }

      // Set environment variables if provided
      if (options.env && options.env.length > 0) {
        console.log('⚙️  Setting environment variables...');
        for (const envVar of options.env) {
          const [key, ...valueParts] = envVar.split('=');
          const value = valueParts.join('=');
          
          if (!key || !value) {
            console.warn(`Warning: Skipping invalid environment variable: ${envVar}`);
            continue;
          }

          try {
            execSync(`"${railwayBin}" env set ${key}="${value}"`, { cwd: deployDir, stdio: 'pipe' });
            console.log(`✅ Set ${key}`);
          } catch (error) {
            console.warn(`Warning: Failed to set environment variable ${key}`);
          }
        }
      }

      // Create a simple package.json with start script if it doesn't have one
      const packageJsonPath = path.join(deployDir, 'package.json');
      let packageJson: any = { type: 'module' };
      
      if (fs.existsSync(packageJsonPath)) {
        try {
          packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
        } catch (error) {
          console.warn('Warning: Invalid package.json, creating new one');
        }
      }

      // Ensure package.json has the necessary scripts and dependencies
      if (!packageJson.scripts) {
        packageJson.scripts = {};
      }
      
      if (!packageJson.scripts.start) {
        packageJson.scripts.start = 'node output.js';
      }

      // Add necessary dependencies for MCP server
      if (!packageJson.dependencies) {
        packageJson.dependencies = {};
      }
      
      const requiredDeps = {
        '@modelcontextprotocol/sdk': '^1.6.1',
        'express': '^4.21.2'
      };

      Object.entries(requiredDeps).forEach(([pkg, version]) => {
        if (!packageJson.dependencies[pkg]) {
          packageJson.dependencies[pkg] = version;
        }
      });

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log('✅ Updated package.json for deployment');

      // Deploy to Railway
      console.log('🚀 Deploying to Railway...');
      try {
        const deployOutput = execSync(`"${railwayBin}" up`, { 
          cwd: deployDir, 
          stdio: 'pipe',
          maxBuffer: 1024 * 1024 * 10 // 10MB buffer
        });
        console.log(deployOutput.toString());
        
        // Get the deployment URL
        try {
          const statusOutput = execSync(`"${railwayBin}" status`, { cwd: deployDir, stdio: 'pipe' });
          const status = statusOutput.toString();
          const urlMatch = status.match(/https:\/\/[^\s]+/);
          
          if (urlMatch) {
            console.log(`✅ Deployment successful!`);
            console.log(`🌐 URL: ${urlMatch[0]}`);
          } else {
            console.log(`✅ Deployment successful! Check Railway dashboard for URL.`);
          }
        } catch (statusError) {
          console.log(`✅ Deployment successful! Check Railway dashboard for details.`);
        }
        
      } catch (deployError) {
        console.error('Error: Deployment failed');
        if (deployError instanceof Error) {
          console.error(deployError.message);
        }
        process.exit(1);
      }

    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program.parse();
