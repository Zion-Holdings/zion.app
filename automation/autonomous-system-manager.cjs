#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(LOG_DIR, "autonomous-system-manager.runtime.log");

function ensureLogDir() {
  try {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  } catch (_) {}
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  try {
    fs.appendFileSync(LOG_FILE, line, "utf8");
  } catch (_) {}
  process.stdout.write(line);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  ensureLogDir();
  const args = process.argv.slice(2);
  log(`Starting autonomous-system-manager with args: ${JSON.stringify(args)}`);

  // Signal ready to PM2 if wait_ready is enabled
  if (typeof process.send === "function") {
    try { process.send("ready"); } catch (_) {}
  }

  let running = true;
  const stop = () => {
    if (!running) return;
    running = false;
    log("Shutting down autonomous-system-manager gracefully...");
    clearInterval(heartbeatInterval);
    clearInterval(taskInterval);
    setTimeout(() => process.exit(0), 100);
  };

  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);

  // Lightweight heartbeat and noop task to keep the process healthy
  const heartbeatInterval = setInterval(() => {
    const mem = process.memoryUsage();
    log(`heartbeat ok | rss=${mem.rss} heapUsed=${mem.heapUsed}`);
  }, 15000);

  const taskInterval = setInterval(() => {
    log("autonomous routine tick");
  }, 60000);

  // Prevent process from exiting
  while (running) {
    await delay(60000);
  }
}

main().catch((err) => {
  try { log(`Fatal error: ${err && err.stack ? err.stack : String(err)}`); } catch (_) {}
  process.exit(1);
});


