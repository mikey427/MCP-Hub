#!/usr/bin/env node

import { program } from "commander";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    console.log(`Hey, ${options.name}!`);
  });

program.parse(process.argv);

const server = new McpServer({
  name: "My MCP Server",
  version: "1.0.0",
  description: "My MCP Server Description",
  resources: {},
  tools: {},
  prompts: {},
});

async function main() {
    const transport = 
}

main();
