#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'automation', 'logs', 'cursor-memory.log');
const memoryDir = path.join(__dirname, 'cursor-memory');
const memorySummary = path.join(memoryDir, 'memory-summary.json');

if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}
if (!fs.existsSync(memoryDir)) {
  fs.mkdirSync(memoryDir, { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, line);
}

function loadSummary() {
  try {
    return JSON.parse(fs.readFileSync(memorySummary, 'utf8'));
  } catch {
    return { totalEntries: 0, categories: {}, confidenceDistribution: { high: 0, medium: 0, low: 0 }, lastUpdated: null };
  }
}

function saveSummary(summary) {
  fs.writeFileSync(memorySummary, JSON.stringify(summary, null, 2));
}

async function run() {
  log('🧠 Cursor memory automation started');

  // Kick a rules/memory generator if present (non-blocking)
  try {
    const generator = path.join(__dirname, 'automation', 'cursor-rules-generator.cjs');
    if (fs.existsSync(generator)) {
      const { spawn } = require('child_process');
      spawn(process.execPath, [generator], { stdio: 'inherit' })
        .on('exit', (code) => log(`🧠 Initial rules generation exited with code ${code}`));
    }
  } catch (err) {
    log(`❌ Initial generator error: ${err.message}`);
  }

  // Persist a lightweight status summary used by npm run cursor:memory:status
  const summary = loadSummary();

  function heartbeat() {
    summary.totalEntries += 1;
    const category = 'system';
    summary.categories[category] = (summary.categories[category] || 0) + 1;
    summary.confidenceDistribution.high += 1;
    summary.lastUpdated = new Date().toISOString();
    saveSummary(summary);
    log('🧠 Memory maintenance heartbeat');
  }

  // Initial write so status command has data immediately
  heartbeat();
  setInterval(heartbeat, 60 * 1000);

  // Periodic rules refresh if generator exists
  setInterval(() => {
    try {
      const generator = path.join(__dirname, 'automation', 'cursor-rules-generator.cjs');
      if (fs.existsSync(generator)) {
        const { spawn } = require('child_process');
        spawn(process.execPath, [generator], { stdio: 'inherit' })
          .on('exit', (code) => log(`🧠 Periodic refresh finished with code ${code}`));
      }
    } catch (e) {
      log(`❌ Periodic refresh error: ${e.message}`);
    }
  }, 60 * 60 * 1000);
}

run();


