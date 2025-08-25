import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { randomUUID } from "crypto";
import { Anthropic } from "@anthropic-ai/sdk";
import {
  MessageParam,
  Tool,
} from "@anthropic-ai/sdk/resources/messages/messages.mjs";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import readline from "readline/promises";
import dotenv from "dotenv";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// dotenv.config();

// // const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
// // if (!ANTHROPIC_API_KEY) {
// //   throw new Error("ANTHROPIC_API_KEY is not set");
// // }

// class MCPClient {
//   private mcp: Client;
//   private anthropic: Anthropic;
//   private transport: StdioClientTransport | null = null;
//   private tools: Tool[] = [];

//   constructor() {
//     this.anthropic = new Anthropic({
//       // apiKey: ANTHROPIC_API_KEY,
//     });
//     this.mcp = new Client({ name: "mcp-client-cli", version: "1.0.0" });
//   }
//   // methods will go here
// }

const server = new McpServer({
  name: "test",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
    prompts: {},
  },
});

async function main() {
  // const transport = new StreamableHTTPServerTransport({
  //   sessionIdGenerator: () => randomUUID(),
  // });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  // const app = express();
  // const port = 3000;
  // app.use(express.json());
  // app.all("/mcp", (req, res) => {
  //   transport.handleRequest(req, res);
  // });
  // app.get("/", (req, res) => {
  //   res.send("MCP Server running!");
  // });
  // app.listen(port, () => {
  //   console.log(`MCP Server listening on port ${port}`);
  // });
}

main();
