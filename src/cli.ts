import { Command, Option } from 'commander';
import { convertTypesToObject } from './generators/convertTypesToObject';
import * as fs from 'fs';
import * as path from 'path';
import { generateSingleFileTypesFromOas } from './generators/generateTypes';
import { stripTSIgnore } from './strip-ts-ignore';
import { execSync } from 'child_process';

const program = new Command();

program
  .name('@usemodel-dev/cli')
  .description('CLI to generate MCP tools from OpenAPI specs')
  .version('0.0.1');

program
  .command('generate')
  .description('Generate MCP tools from OpenAPI spec')
  .argument('<filepath>', 'Path to OpenAPI specification file')
  .addOption(new Option('-o, --output <dir>', 'Path to output directory').default('./src/generated'))
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
      await fs.promises.cp('src/runtime', options.output, { recursive: true });
      console.log('✅ Runtime injected');

      stripTSIgnore(options.output);
      console.log('✅ Cleaned up files');

      // await fs.promises.cp('src/generated', 'dist', { recursive: true, filter: (src, _) => !src.includes('.ts') });
      console.log('✅ Ready to publish');

    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program.parse();
