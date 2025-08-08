#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG_DIR_PRIMARY = path.join(__dirname, 'logs');
const LOG_DIR_SECONDARY = __dirname; // also scan automation root for *.log and *.out

function collectLogFilesFromDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  try {
    const files = fs.readdirSync(dirPath);
    return files
      .filter((f) => f.endsWith('.log') || f.endsWith('.out'))
      .map((f) => ({ file: path.join(path.basename(dirPath), f), abs: path.join(dirPath, f) }));
  } catch {
    return [];
  }
}

function readLogs() {
  const candidates = [
    ...collectLogFilesFromDirectory(LOG_DIR_PRIMARY),
    ...collectLogFilesFromDirectory(LOG_DIR_SECONDARY),
  ];
  const entries = [];
  for (const c of candidates) {
    try {
      const content = fs.readFileSync(c.abs, 'utf8');
      entries.push({ file: c.file, content });
    } catch {}
  }
  return entries;
}

function scanPackageScripts() {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  const scripts = pkg.scripts || {};
  const referencedPaths = [];
  for (const [name, cmd] of Object.entries(scripts)) {
    const mNode = cmd.match(/node\s+([^\s&;]+)/);
    const mBash = cmd.match(/bash\s+([^\s&;]+)/);
    const target = (mNode && mNode[1]) || (mBash && mBash[1]);
    if (target && (target.startsWith('automation/') || target.startsWith('./automation/'))) {
      const abs = path.resolve(path.join(__dirname, '..'), target);
      referencedPaths.push({ scriptName: name, cmd, target, abs });
    }
  }
  const missing = referencedPaths.filter((r) => !fs.existsSync(r.abs));
  return { referencedPaths, missing };
}

function parseIssuesFromLogs(entries) {
  const issues = [];
  const patterns = [
    { key: 'module_not_found', regex: /Cannot find module ['\"]([^'\"]+)['\"]/i },
    { key: 'esm_in_cjs', regex: /Cannot use import statement outside a module/ },
    { key: 'addr_in_use', regex: /EADDRINUSE.*:(\d+)/ },
  ];
  for (const { file, content } of entries) {
    for (const p of patterns) {
      let m;
      const re = new RegExp(p.regex.source, p.regex.flags || '');
      if ((m = re.exec(content))) {
        issues.push({ type: p.key, match: m[1] || null, file });
      }
    }
  }
  return issues;
}

function scanOnce() {
  const logs = readLogs();
  const pkgScan = scanPackageScripts();
  const logIssues = parseIssuesFromLogs(logs);
  const issues = [];
  for (const m of pkgScan.missing) {
    issues.push({ type: 'missing_script_file', target: m.target, abs: m.abs, scriptName: m.scriptName });
  }
  for (const i of logIssues) issues.push(i);
  return { timestamp: new Date().toISOString(), issues };
}

if (require.main === module) {
  const result = scanOnce();
  console.log(JSON.stringify(result, null, 2));
}

module.exports = { scanOnce };


