#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'cursor');
const LOGS_DIR = path.join(__dirname, 'logs');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function collectSignals() {
  const logs = fs.existsSync(LOGS_DIR) ? fs.readdirSync(LOGS_DIR).filter(f => f.endsWith('.log')) : [];
  const signals = [];
  for (const file of logs) {
    const content = fs.readFileSync(path.join(LOGS_DIR, file), 'utf8');
    if (/ERROR|addr_in_use|module_not_found|failed|SyntaxError/i.test(content)) {
      signals.push({ source: file, reason: 'error_detected' });
    }
  }
  if (signals.length === 0) signals.push({ source: 'periodic', reason: 'improvement_cycle' });
  return signals.slice(0, 5);
}

function craftPrompts(signals) {
  const base = 'You are a senior automation engineer working on a Next.js app with extensive Node-based automation. Analyze recent issues and propose targeted fixes or enhancements with code edits.';
  return signals.map(s => ({
    title: `Cursor Task: ${s.reason} from ${s.source}`,
    prompt: `${base}\nContext Source: ${s.source}\nReason: ${s.reason}\nActions:\n- Identify root cause\n- Propose code edits\n- Generate or fix agents\n- Commit and push\n- Ensure continuous operation`
  }));
}

function main() {
  ensureDir(REPORT_DIR);
  const signals = collectSignals();
  const prompts = craftPrompts(signals);
  fs.writeFileSync(path.join(REPORT_DIR, 'cursor-prompts.json'), JSON.stringify({ generatedAt: new Date().toISOString(), prompts }, null, 2));
  console.log(`Cursor analyzer: prepared ${prompts.length} prompt(s)`);
}

main();


