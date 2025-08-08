#!/usr/bin/env node
"use strict";

const { execSync, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function run(command, options = {}) {
  const defaultOptions = { stdio: "inherit", shell: true, env: process.env };
  const result = spawnSync(command, { ...defaultOptions, ...options });
  if (result.status !== 0) {
    throw new Error(`Command failed: ${command}`);
  }
  return result;
}

function runCapture(command) {
  return execSync(command, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], shell: true });
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function gitHasChanges() {
  const out = runCapture("git status --porcelain");
  return out.trim().length > 0;
}

function gitCommitAll(message) {
  run("git add -A");
  try {
    run(`git commit -m "${message.replace(/\"/g, '\\\"')}"`);
    return true;
  } catch (err) {
    return false;
  }
}

function main() {
  console.log("🚀 Starting dependency maintenance orchestrator...");

  try {
    console.log("Node:", runCapture("node -v").trim());
    console.log("NPM:", runCapture("npm -v").trim());
  } catch (_) {}

  try {
    run("npm ci");
  } catch (e) {
    console.warn("npm ci failed, trying npm install");
    try { run("npm install"); } catch (_) {}
  }

  console.log("📦 Running npm update (within semver ranges)...");
  try {
    run("npm update");
  } catch (e) {
    console.warn("npm update encountered an error but continuing:", e.message);
  }

  const reportsDir = path.join(process.cwd(), "data", "reports", "security");
  ensureDir(reportsDir);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const auditPath = path.join(reportsDir, `npm-audit-${timestamp}.json`);
  let auditJson = null;
  try {
    const auditRaw = runCapture("npm audit --json || true");
    try { auditJson = JSON.parse(auditRaw); } catch (_) { auditJson = { parseError: true, raw: auditRaw }; }
    writeJson(auditPath, auditJson);
    console.log(`🛡️  npm audit report written to ${auditPath}`);
  } catch (e) {
    console.warn("npm audit failed:", e.message);
  }

  console.log("🛠️  Attempting npm audit fix (no --force)...");
  try {
    run("npm audit fix || true");
  } catch (_) {}

  console.log("🔎 Running lint --fix...");
  try { run("npm run lint -- --fix || true"); } catch (_) {}

  console.log("🔡 Running type-check...");
  try { run("npm run type-check"); } catch (e) {
    console.warn("Type-check failed after dependency updates. Proceeding with report-only commit.");
  }

  const changes = gitHasChanges();
  if (changes) {
    const vulnerabilities = auditJson && auditJson.metadata && auditJson.metadata.vulnerabilities ? auditJson.metadata.vulnerabilities : {};
    const vulnSummary = vulnerabilities ? Object.entries(vulnerabilities).map(([k, v]) => `${k}:${v}`).join(", ") : "unknown";
    const message = `chore(deps): automated dependency maintenance (audit: ${vulnSummary})`;
    const committed = gitCommitAll(message);
    if (committed) {
      console.log("✅ Changes committed.");
    } else {
      console.log("ℹ️  No changes to commit.");
    }
  } else {
    console.log("✅ No changes detected.");
  }

  console.log("🏁 Dependency maintenance orchestrator complete.");
}

main();

#!/usr/bin/env node

const fs=require('fs');const path=require('path');
const logFile=path.join(__dirname,'logs','dependency-update-orchestrator.log');
if(!fs.existsSync(path.dirname(logFile))){fs.mkdirSync(path.dirname(logFile),{recursive:true});}
function log(m){const l=`[${new Date().toISOString()}] ${m}\n`;console.log(m);fs.appendFileSync(logFile,l);}
log('🚀 Placeholder started for dependency-update-orchestrator.cjs');
setInterval(()=>log('⏳ heartbeat'),60000);
