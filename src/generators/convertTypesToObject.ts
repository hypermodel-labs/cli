import { Project, SourceFile, Type, Node, InterfaceDeclaration, TypeAliasDeclaration } from "ts-morph";
import fs from "fs";
import path from "path";

export const convertTypesToObject = async (typesFilePath: string): Promise<string> => {
  const project = new Project({
    tsConfigFilePath: "./tsconfig.json",
  });

  const sourceFile = project.addSourceFileAtPath(typesFilePath);
  const interfaceNames = ["components", "paths", "operations"];

  const lines = interfaceNames.map(name => convertInterface(sourceFile, name));
  const result = lines.join("\n\n");
  const outputFilePath = `./src/generated/output.ts`;
  
  // Ensure the directory exists
  const outputDir = path.dirname(outputFilePath);
  fs.mkdirSync(outputDir, { recursive: true });
  
  // Write the file
  fs.writeFileSync(outputFilePath, result);
  console.log(`✅ Written to ${outputFilePath}`);

  return outputFilePath
};

function convertInterface(sourceFile: SourceFile, interfaceName: string) {
  const iface = sourceFile.getInterfaceOrThrow(interfaceName);
  const initializer = resolveType(iface.getType());
  return `export const ${interfaceName} = ${initializer} as const;`;
}

function resolveType(type: Type, depth = 0): string {
  // primitives
  if (type.isString()) return '""';
  if (type.isNumber()) return "0";
  if (type.isBoolean()) return "true";
  if (type.isUndefined()) return "undefined";

  // arrays
  if (type.isArray()) {
    const elem = type.getArrayElementTypeOrThrow();
    return `[${resolveType(elem, depth + 1)}]`;
  }

  // object or interface
  if (type.isObject()) {
    // attempt named interface/type alias
    const sym = type.getSymbol();
    if (sym) {
      const decl = sym.getDeclarations()[0];
      if (Node.isInterfaceDeclaration(decl) || Node.isTypeAliasDeclaration(decl)) {
        const members = (decl as InterfaceDeclaration | TypeAliasDeclaration)
          .getType()
          .getProperties();
        return `{ ${members
          .map(p => formatProperty(p, decl))
          .join(", ")} }`;
      }
    }
    // anonymous object
    const props = type.getProperties();
    return `{ ${props
      .map(p => {
        const decl = p.getDeclarations()[0];
        return formatProperty(p, decl);
      })
      .join(", ")} }`;
  }

  // unions: pick first non-nullish branch
  if (type.isUnion()) {
    const nonNull = type.getUnionTypes().filter(t => !t.isUndefined());
    return resolveType(nonNull[0] || type.getUnionTypes()[0], depth);
  }

  // fallback
  return "{}";
}

function formatProperty(p: import("ts-morph").Symbol, declNode: Node): string {
  const name = p.getName();
  const optional =
    Node.isPropertySignature(declNode) && declNode.hasQuestionToken();
  const propType = p.getTypeAtLocation(declNode);
  const value = optional ? "undefined" : resolveType(propType);
  return `${JSON.stringify(name)}: ${value}`;
}