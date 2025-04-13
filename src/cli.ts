import { Command } from 'commander';
import { convertTypesToObject } from './generators/convertTypesToObject';
import * as fs from 'fs';
import * as path from 'path';
import { generateSingleFileTypesFromOas } from './generators/generateTypes';
import { stripTSIgnore } from './strip-ts-ignore';

const program = new Command();

program
  .name('openapi-mcp')
  .description('CLI to generate MCP tools from OpenAPI specs')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate MCP tools from OpenAPI spec')
  .argument('<filepath>', 'Path to OpenAPI specification file')
  .action(async (filepath: string) => {
    try {
      // Resolve absolute path
      const absolutePath = path.resolve(filepath);
      
      // Check if file exists
      if (!fs.existsSync(absolutePath)) {
        console.error(`Error: File not found at ${absolutePath}`);
        process.exit(1);
      }

      console.log('Generating types from OpenAPI spec file...');
      const typesFilePath = await generateSingleFileTypesFromOas(absolutePath, "oas");

      await convertTypesToObject(typesFilePath);

      console.log(`✅ Mcp server objects & types generated`);
      await fs.promises.cp('src/runtime', 'src/generated', { recursive: true });
      console.log('✅ Runtime injected');

      stripTSIgnore();

      console.log('✅ Cleaned up files');

      await fs.promises.cp('src/generated', 'dist', { recursive: true });
      console.log('✅ Ready to publish');

    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program.parse();
