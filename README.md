![OpenAPI-MCP Architecture](assets/openapi-mcp.png)

# OpenAPI x MCP

Generate a type-safe MCP (Model Context Protocol) server from an OpenAPI specification.

## Installation

You can use the cli using npm:

```bash
pnpm generate <ABSOLUTE_PATH_TO_SPEC_YAML_OR_JSON>

```


## CLI Commands

The package provides several CLI commands for managing your MCP server:

### Generate Server Code

Generate the MCP server code from your OpenAPI specification:

```bash
pnpm generate  <ABSOLUTE_PATH_TO_SPEC_YAML_OR_JSON> --output <dir> (optional)

```

>This will create the mcp server files in the `src/generated` folder. 

### Run the server locally


Build the server

```bash
pnpm build:server
```
> You need to run generate command before thi.s 

```bash
pnpm start
```
This will start the server at `http:localhost:3001` 

![OpenAPI-MCP Demo](assets/log.png)


## Environment Variables

The server uses dotenv for configuration. Create a `.env` file in your project root with the necessary environment variables.

## Dependencies

This package uses several key dependencies:
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
