# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MCP Hub is a **unified TypeScript-based platform** for managing multiple MCP (Model Context Protocol) servers with a dashboard interface and CLI tools. It acts as a **central hub that aggregates local and remote MCPs** from various sources, providing Claude with **organized access to all tools through a single connection point**.

The platform eliminates the need to manage individual MCP server connections by creating a centralized aggregation layer that Claude can connect to once and access all available MCP tools and resources.

The project is structured as a TypeScript monorepo with multiple packages using Node.js workspaces.

## Architecture

This is a **monorepo** with the following packages:
- `@mcp-hub/cli` - Command-line interface for managing and controlling the MCP hub
- `@mcp-hub/server` - Central aggregation server that proxies/routes requests to multiple MCP servers
- `@mcp-hub/shared` - Shared TypeScript interfaces and utilities for MCP protocol handling
- `@mcp-hub/dashboard` - Web dashboard for visual management of the MCP ecosystem

### Core Architecture Concept

The hub operates as a **proxy/aggregation layer**:
1. **Multiple MCP Sources** → **MCP Hub Server** → **Single Claude Connection**
2. Claude connects to one hub endpoint instead of managing multiple MCP server connections
3. The hub routes requests to appropriate MCP servers and aggregates responses
4. Provides unified tool discovery and resource management across all connected MCPs

The project uses **TypeScript with ESM modules** and follows a workspace structure where each package can depend on others.

## Common Development Commands

### Building
- `npm run build` - Build all packages using TypeScript project references
- `npm run build:clean` - Clean all dist folders and rebuild from scratch  
- `npm run clean` - Remove all dist directories

### Development
- `npm run dev` - Start both server and CLI in development mode (parallel)
- `npm run dev:server` - Start only the server in watch mode
- `npm run dev:cli` - Start only the CLI in development mode
- `npm start` - Start the production server

### Package-specific commands
- `npm --workspace @mcp-hub/cli run dev` - Run CLI in development
- `npm --workspace @mcp-hub/server run dev` - Run server with tsx watch
- `npm --workspace @mcp-hub/server run start` - Run production server

## Key Files and Configuration

- `tsconfig.base.json` - Base TypeScript configuration with strict settings
- `servers.json` - Example MCP server configurations
- Each package has its own `tsconfig.json` extending the base config
- Uses **tsx** for TypeScript execution in development
- All packages are configured as **ESM modules**

## MCP Hub Management

The CLI manages the central MCP hub and its connected servers. Based on the CLI commands specification:
- `mcp-hub add <server-path>` - Register new MCP servers to the hub
- `mcp-hub list` - Show all registered MCP servers and their connection status
- `mcp-hub start/stop <server-id>` - Control individual MCP server processes
- `mcp-hub status` - Overview of the hub and all connected MCP servers

### Hub Workflow
1. **Register MCPs** - Add local/remote MCP servers to the hub configuration
2. **Start Hub Server** - Launch the central aggregation server 
3. **Connect Claude** - Point Claude to the single hub endpoint
4. **Unified Access** - Claude can discover and use tools from all registered MCPs

## Development Notes

- The project is in early development - currently implements basic server setup
- **Hub server** (packages/server) will act as the central MCP aggregation point
- **CLI tool** provides management interface for the hub and connected MCPs
- **Dashboard** will offer web-based visualization and control
- Uses **Commander.js** for CLI parsing and **Express + WebSocket** for MCP protocol
- Planned to use **SQLite** for persistence of hub configuration and MCP metadata
- No test framework is configured yet

### Key Implementation Goals
- **MCP Protocol Aggregation** - Route and proxy MCP requests between Claude and multiple servers
- **Tool Discovery** - Aggregate and present all available tools from connected MCPs
- **Connection Management** - Handle connecting to local processes, remote servers, and various MCP types
- **Resource Aggregation** - Unified access to resources across all connected MCP servers