const cron = require('node-cron');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const BASE_URL = process.env.BACKEND_BASE_URL || 'http://localhost:3001';
const ENDPOINTS = (process.env.MONITOR_ENDPOINTS
  ? process.env.MONITOR_ENDPOINTS.split(',')
  : ['/healthz', '/recommendations', '/sync/status'])
  .map((p) => p.trim());

const BASE_LOG_DIR = process.env.WATCHDOG_LOG_PATH || path.join(__dirname, '..', '..', 'logs');
const LOG_DIR = path.join(BASE_LOG_DIR, 'perf');
const LOG_FILE = path.join(LOG_DIR, 'hourly.log');
const MAX_LOG_SIZE = 5 * 1024 * 1024; // 5MB

function rotateLogs() {
  if (fs.existsSync(LOG_FILE)) {
    const { size } = fs.statSync(LOG_FILE);
    if (size >= MAX_LOG_SIZE) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const rotated = path.join(LOG_DIR, `hourly-${timestamp}.log`);
      fs.renameSync(LOG_FILE, rotated);
    }
  }
}

async function measureEndpoint(endpoint) {
  const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`;
  const samples = [];
  for (let i = 0; i < 3; i++) {
    const start = process.hrtime.bigint();
    let res;
    try {
      res = await fetch(url);
      await res.text();
    } catch (err) {
      console.error(`Request error for ${url}:`, err.message);
      return { url, avg: Infinity };
    }
    const end = process.hrtime.bigint();
    samples.push(Number(end - start) / 1e6); // ms
  }
  const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
  return { url, avg };
}

function logSlowResponses(results) {
  rotateLogs();
  fs.mkdirSync(LOG_DIR, { recursive: true });
  const lines = results
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 5)
    .map((r) => `${new Date().toISOString()} ${r.url} ${r.avg.toFixed(2)}ms`) 
    .join('\n') + '\n';
  fs.appendFileSync(LOG_FILE, lines);
}

function restartService() {
  const cmd = process.env.RESTART_CMD || 'pm2 restart all';
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error('Service restart failed:', err.message);
    } else {
      console.log('Service restarted:', stdout || stderr);
    }
  });
}

async function sendAlert(message) {
  const url = process.env.ALERT_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });
  } catch (err) {
    console.error('Failed to send alert webhook:', err.message);
  }
}

async function monitor() {
  const results = [];
  for (const ep of ENDPOINTS) {
    results.push(await measureEndpoint(ep));
  }
  logSlowResponses(results);
  const slow = results.find((r) => r.avg > 500);
  if (slow) {
    const msg = `Endpoint ${slow.url} average ${slow.avg.toFixed(2)}ms exceeded threshold`; 
    await sendAlert(msg);
    restartService();
  }
}

cron.schedule('0 * * * *', monitor);

// Run immediately when script starts
monitor().catch((err) => console.error('Monitor error:', err));
