# Hypermodel CLI

[![npm version](https://img.shields.io/npm/v/%40hypermodel%2Fcli)](https://www.npmjs.com/package/@hypermodel/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/hypermodel-labs/cli/blob/main/LICENSE)

![OpenAPI-MCP Architecture](assets/openapi-mcp.png)

## Generate an MCP (Model Context Protocol) server from an OpenAPI specification.


This package allows you to generate and run an MCP server from your OpenAPI specification. It provides CLI tools for server generation, configuration management, and server execution.

If you would like to use an external configuration for a server with your MCP client, you can also use the CLI to add it to your IDE / Client with a single command. 

More [here](./CONFIG.md)

## Installation

```bash
npx -y -p @hypermodel/cli@latest
```

## Usage

### Generate MCP Server Code

Generate the MCP server code from your OpenAPI specification:

```bash
npx -y -p @hypermodel/cli@latest cli generate <ABSOLUTE_PATH_TO_SPEC_YAML_OR_JSON>
```

> This will create the mcp server files in a `.hypermodel` directory.



#### Run server with npx

```bash
npx -y -p @hypermodel/cli@latest server
```

> This spins up a local mcp server at http://localhost:3001/sse

## Dependencies

- @modelcontextprotocol/sdk: For MCP implementation
- express: For the server framework
- openapi-typescript: For TypeScript type generation
- zod: For runtime type validation

## Contributing

This project is hosted on GitHub at https://github.com/hypermodel-labs/cli.git. 

Feel free to open issues or submit pull requests.

## License

MIT

## Package Information

Current version: 0.0.1
