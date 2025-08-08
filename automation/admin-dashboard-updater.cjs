#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const DATA_DIR = path.join(__dirname, '..', 'data', 'admin');
const ROOT = path.join(__dirname, '..');

function listOrchestrators() {
  const dir = __dirname;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('-orchestrator.cjs'));
  return files.map((f) => ({ id: f, name: f.replace(/\.cjs$/, ''), status: 'unknown' }));
}

function listFactories() {
  const dir = __dirname;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('-factory.cjs'));
  return files.map((f) => ({ id: f, name: f.replace(/\.cjs$/, ''), status: 'available' }));
}

function buildStatus() {
  const agents = [...listOrchestrators(), ...listFactories()].map((a) => ({
    ...a,
    workload: 'n/a',
    nextSteps: ['Run', 'Report'],
    services: ['local'],
    lastUpdated: new Date().toISOString(),
    status: a.status === 'unknown' ? 'idle' : a.status,
  }));
  return { agents, updatedAt: new Date().toISOString() };
}

async function postToApi(status) {
  const base = process.env.ADMIN_BASE_URL || 'http://localhost:3000';
  const key = process.env.AGENT_INTERNAL_KEY || 'DEV_INTERNAL_KEY';
  try {
    await axios.post(`${base}/api/admin/update-status`, status, { headers: { 'x-internal-key': key } });
  } catch (e) {
    // fallback to file write
  }
}

function writeToFile(status) {
  const dir = path.join(ROOT, 'data', 'admin');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const p = path.join(dir, 'agents-status.json');
  fs.writeFileSync(p, JSON.stringify(status, null, 2));
}

async function runOnce() {
  const status = buildStatus();
  writeToFile(status);
  await postToApi(status);
  console.log(`[admin-dashboard-updater] Updated ${status.agents.length} agents at ${status.updatedAt}`);
}

async function main() {
  if (process.argv.includes('--watch')) {
    await runOnce();
    setInterval(runOnce, 60 * 1000);
  } else {
    await runOnce();
  }
}

if (require.main === module) {
  main();
}