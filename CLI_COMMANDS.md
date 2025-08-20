# MCP Hub - CLI Commands Specification

## Core Commands

### Server Management
- `mcp-hub add <server-path>` - Register a new MCP server
- `mcp-hub remove <server-id>` - Unregister an MCP server
- `mcp-hub list` - Show all registered servers with status

### Process Control
- `mcp-hub start <server-id>` - Start a specific server
- `mcp-hub stop <server-id>` - Stop a specific server  
- `mcp-hub restart <server-id>` - Restart a specific server
- `mcp-hub start-all` - Start all registered servers
- `mcp-hub stop-all` - Stop all running servers

### Monitoring & Information
- `mcp-hub status` - Overview of all servers (running/stopped)
- `mcp-hub logs <server-id>` - View server logs
- `mcp-hub metrics <server-id>` - Show usage metrics for a server
- `mcp-hub info <server-id>` - Detailed information about a server

### Configuration
- `mcp-hub config set <key> <value>` - Set configuration option
- `mcp-hub config get <key>` - Get configuration value
- `mcp-hub config list` - Show all configuration options

## Command Output Format
- **Status displays**: Tabular format showing server ID, name, status, uptime
- **Logs**: Timestamped entries with log levels
- **Metrics**: Key-value pairs or simple charts for usage data
- **Errors**: Clear error messages with suggested actions

## Command Aliases
- `mcp-hub ls` → `mcp-hub list`
- `mcp-hub rm` → `mcp-hub remove`
- `mcp-hub up` → `mcp-hub start`
- `mcp-hub down` → `mcp-hub stop`