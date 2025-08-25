#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(LOG_DIR, "real-time-performance-monitor.runtime.log");

function ensureLogDir() { try { fs.mkdirSync(LOG_DIR, { recursive: true }); } catch (_) {} }
function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  try { fs.appendFileSync(LOG_FILE, line, "utf8"); } catch (_) {}
  process.stdout.write(line);
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

function delay(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function main() {
  ensureLogDir();
  log("Starting real-time performance monitor");

  let running = true;
  const stop = () => { running = false; log("Stopping real-time performance monitor..."); };
  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);

  while (running) {
    const mem = process.memoryUsage();
    const cpuLoad = process.cpuUsage();
    log(
      `metrics rss=${formatBytes(mem.rss)} heapUsed=${formatBytes(mem.heapUsed)} cpuUser=${cpuLoad.user} cpuSystem=${cpuLoad.system}`
    );
    await delay(30000);
  }
}

main().catch((err) => { try { log(`Fatal: ${err && err.stack ? err.stack : String(err)}`); } catch (_) {} process.exit(1); });


