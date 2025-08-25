import fs from "fs";
// const fs = require("fs").promises;

async function main() {
  console.log("hello from MCP Hub!");

  const rawServerData = fs.readFileSync("../../servers.json", "utf8");
  const mcpServers = JSON.parse(rawServerData);
  console.log(mcpServers);
}

main();
