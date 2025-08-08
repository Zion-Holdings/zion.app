#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'automation', 'logs', 'cursor-memory.log');
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, line);
}

async function run() {
  log('🧠 Cursor memory automation started');
  try {
    const generator = path.join(__dirname, 'automation', 'cursor-rules-generator.cjs');
    if (fs.existsSync(generator)) {
      require(generator);
      log('🧠 Rules and memory generation executed');
    } else {
      log('⚠️ cursor-rules-generator.cjs not found');
    }
  } catch (err) {
    log(`❌ Memory automation error: ${err.message}`);
  }
  setInterval(() => {
    try {
      const generator = path.join(__dirname, 'automation', 'cursor-rules-generator.cjs');
      if (fs.existsSync(generator)) {
        const { spawn } = require('child_process');
        const proc = spawn(process.execPath, [generator], { stdio: 'inherit' });
        proc.on('exit', (code) => {
          log(`🧠 Periodic refresh finished with code ${code}`);
        });
      }
    } catch (e) {
      log(`❌ Periodic refresh error: ${e.message}`);
    }
  }, 60 * 60 * 1000);
}

run();


