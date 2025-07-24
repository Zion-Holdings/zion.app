#!/usr/bin/env node
const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
const SCRIPTS = [
  frontend-fix.js',
  backend-fix.py',
  dependency-update.js',
  dependency-update.py
]
const LOG_DIR = path.join(__dirname, logs');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR)
function runScript(script)  {
  const ext = path.extname(script)
const cmd =
    ext === .js
      ? `node ${script}`
      : ext === .py
        ? `python3 ${script}`
        : null;
  if (!cmd) return
const logFile = path.join(LOG_DIR, `${script.replace(/\..+$/, )}.log`)
const out = fs.createWriteStream(logFile, { flags: a' })
const proc = exec(cmd, { cwd: __dirname });
  proc.stdout.pipe(out);
  proc.stderr.pipe(out);
  proc.on('exit', (code) => {
    out.write(
      `\n[${new Date().toISOString()}] Script ${script} exited with code ${code}\n`,
    );
    out.end();
  });
}

function runAll()  {
  SCRIPTS.forEach(runScript);
}

// Run immediately
runAll();

// Schedule to run every hour
setInterval(runAll, 60 * 60 * 1000);

console.log(
  Performance automation runner started. Logs in automation/performance/logs/',
);
