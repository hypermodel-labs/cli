### Configure MCP Client Settings

Add or Update Configuration on your MCP Client (Cursor, Windsurf et al.)

```bash
npx -y -p @hypermodel/cli@latest cli config add <client> '<config_json>'
```

Where:
- `<client>` can be one of: `cursor`, `windsurf`, or `claude`
- `<config_json>` is a JSON string containing your configuration

Example:
```bash
# Add or update a server configuration for Cursor
npx -y -p @hypermodel/cli@latest cli config add cursor '{"@yourorg/mcp": {"url": "http://localhost:3000", "env": { "apiKey": "XXX" } } }'
```

#### Remove Configuration

```bash
npx -y -p @hypermodel/cli@latest cli config remove <client> <servername>
```

Example:
```bash
# Remove a server configuration from Cursor
npx -y -p @hypermodel/cli@latest cli config remove cursor @yourorg/mcp
```

#### Configuration Storage

Configurations are stored in the following locations based on the client:
- Cursor: `~/.cursor/mcp.json`
- Windsurf: `~/.codeium/windsurf/mcp_config.json`
- Claude: `~/Library/Application Support/Claude/claude_desktop_config.json`

All configurations are stored under the `mcpServers` key in the config file. When adding new configurations, they will be merged with existing ones, and when updating existing configurations, they will be overwritten.
