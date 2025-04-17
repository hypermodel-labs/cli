# OpenAPI x MCP

![OpenAPI-MCP Architecture](assets/openapi-mcp.png)

Generate a type-safe MCP (Model Context Protocol) server from an OpenAPI specification.

## Overview

This package allows you to generate and run a type-safe MCP server from your OpenAPI specification. It provides CLI tools for server generation, configuration management, and server execution.

If you would like to use an external configuration for a server with your MCP client, you can use the CLI to add it a single command. 

## Installation

```bash
npx -y -p @usemodel-dev/cli@latest
```

## Usage

### 1. Generate Server Code

Generate the MCP server code from your OpenAPI specification:

```bash
npx -y -p @usemodel-dev/cli@latest cli generate <ABSOLUTE_PATH_TO_SPEC_YAML_OR_JSON>
```

> This will create the mcp server files in the `cwd()` directory.

#### Run server with npx

```bash
npx -y -p @usemodel-dev/cli@latest server
```

### 2. Configure MCP Client Settings

Add or Update Configuration on your MCP Client (Cursor, Windsurf et al.)

```bash
npx -y -p @usemodel-dev/cli@latest cli config add <client> '<config_json>'
```

Where:
- `<client>` can be one of: `cursor`, `windsurf`, or `claude`
- `<config_json>` is a JSON string containing your configuration

Example:
```bash
# Add or update a server configuration for Cursor
npx -y -p @usemodel-dev/cli@latest cli config add cursor '{"@yourorg/mcp": {"url": "http://localhost:3000", "env": { "apiKey": "XXX" } } }'
```

#### Remove Configuration

```bash
npx -y -p @usemodel-dev/cli@latest cli config remove <client> <servername>
```

Example:
```bash
# Remove a server configuration from Cursor
npx -y -p @usemodel-dev/cli@latest cli config remove cursor @yourorg/mcp
```

#### Configuration Storage

Configurations are stored in the following locations based on the client:
- Cursor: `~/.cursor/mcp.json`
- Windsurf: `~/.codeium/windsurf/mcp_config.json`
- Claude: `~/Library/Application Support/Claude/claude_desktop_config.json`

All configurations are stored under the `mcpServers` key in the config file. When adding new configurations, they will be merged with existing ones, and when updating existing configurations, they will be overwritten.


## Local development

1. Build the server:
```bash
pnpm build
```

> Note: You need to run the generate command before building.

2. Start the server:
```bash
pnpm start
```

This will start the server at `http://localhost:3001`


### Environment Variables

The server uses dotenv for configuration. Create a `.env` file in your project root with the necessary environment variables.

## Dependencies

- @modelcontextprotocol/sdk: For MCP implementation
- express: For the server framework
- openapi-typescript: For TypeScript type generation
- zod: For runtime type validation

## Contributing

This project is hosted on GitHub at https://github.com/@usemodel-dev/cli.git. Feel free to open issues or submit pull requests.

## License

MIT

## Package Information

Current version: 0.0.1
