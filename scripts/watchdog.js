#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const perfLog = path.join(process.cwd(), 'logs/perf/hourly.log');
const securityLog = path.join(process.cwd(), 'logs/security/hourly-fix.log');
const selfHealLog = path.join(process.cwd(), 'logs/self-heal.log');

function ensureFile(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '');
  }
}

[perfLog, securityLog, selfHealLog].forEach(ensureFile);

let perfCount = 0;
let securityCount = 0;

function logSelfHeal(message) {
  const entry = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFile(selfHealLog, entry, () => {});
}

function runSelfHeal() {
  exec('git pull && npm install && npm audit fix --force && pm2 restart all', (err) => {
    logSelfHeal(err ? `Self-heal failed: ${err.message}` : 'Self-heal executed');
  });
  perfCount = 0;
  securityCount = 0;
}

function processLine(type, line) {
  if (type === 'perf') {
    if (/error/i.test(line)) {
      perfCount += 1;
      if (perfCount >= 3) runSelfHeal();
    } else {
      perfCount = 0;
    }
  } else if (type === 'security') {
    if (/critical/i.test(line)) {
      securityCount += 1;
      if (securityCount >= 3) runSelfHeal();
    } else {
      securityCount = 0;
    }
  }
}

function tail(file, type) {
  let position = 0;
  fs.stat(file, (err, stats) => {
    if (!err) position = stats.size;
  });

  fs.watch(file, () => {
    fs.stat(file, (err, stats) => {
      if (err || stats.size <= position) return;
      const stream = fs.createReadStream(file, { start: position, end: stats.size });
      stream.on('data', chunk => {
        const lines = chunk.toString().split(/\r?\n/);
        lines.forEach(line => line && processLine(type, line));
      });
      position = stats.size;
    });
  });
}

tail(perfLog, 'perf');
tail(securityLog, 'security');

console.log('Watchdog started...');
