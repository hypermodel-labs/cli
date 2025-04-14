import { Project, ts } from 'ts-morph';
import path from 'path';
import fs from 'fs';

// Function to recursively get all TypeScript files
function getTypeScriptFiles(dir: string): string[] {
  const files: string[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getTypeScriptFiles(fullPath));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}


export const stripTSIgnore = (outputDir: string) => {
// Initialize ts-morph project
const project = new Project();

// Get the runtime directory path
const generatedDir = outputDir

if (!fs.existsSync(generatedDir)) {
  console.error('Generated directory not found!', generatedDir);
  process.exit(1);
}

// Get all TypeScript files
const tsFiles = getTypeScriptFiles(generatedDir);

// Add files to the project
tsFiles.forEach(file => project.addSourceFileAtPath(file));

// Process each source file
project.getSourceFiles().forEach(sourceFile => {
  let fileModified = false;
  sourceFile.getDescendantsOfKind(ts.SyntaxKind.SingleLineCommentTrivia).forEach(comment => {
    const text = comment.getText();
    if (text.includes('@ts-ignore') || text.includes('@ts-nocheck')) {
      comment.remove();
      fileModified = true;
    }
  });
  sourceFile.getStatements().forEach(statement => {
    const leadingComments = statement.getLeadingCommentRanges();
    if (leadingComments) {
      leadingComments.forEach(comment => {
        if (comment.getText().includes('@ts-ignore') || comment.getText().includes('@ts-nocheck')) {
          comment.remove();
          fileModified = true;
        }
      });
    }
  });

  // Save the file if it was modified
  if (fileModified) {
    sourceFile.saveSync();
  }
});

}