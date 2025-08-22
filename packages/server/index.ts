#!/usr/bin/env node

import { program } from "commander";
// import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    if (options.name) console.log(`Hey, ${options.name}!`);
  });

program.parse(process.argv);

// const testMcp = new McpServer({
//   name: "My MCP Server",
//   version: "1.0.0",
//   description: "My MCP Server Description",
//   resources: {},
//   tools: {},
//   prompts: {},
// });

async function main() {
  const app = express();
  app.get("/", (_req, res) => res.send("MCP Server running"));

  const httpServer = http.createServer(app);
  const wss = new WebSocketServer({ server: httpServer, path: "/mcp" });

  wss.on("connection", (ws) => {
    // Incoming messages from client
    ws.on("message", async (raw) => {
      try {
        const msg = JSON.parse(raw.toString());
        console.log("Received message:", msg);
        // TODO: pass into SDK’s request/notification handler
        // const response = await serverCore.handleMessage(msg);
        // if (response) ws.send(JSON.stringify(response));
      } catch (e) {
        ws.send(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

    // Example: send a welcome notification (adjust to protocol structure)
    ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        method: "welcome",
        params: { server: "My MCP Server" },
      })
    );
  });

  const port = Number(process.env.PORT || 3000);
  httpServer.listen(port, () =>
    console.log(
      `MCP HTTP/WebSocket server listening on http://localhost:${port} (WS path /mcp)`
    )
  );
}

main();
