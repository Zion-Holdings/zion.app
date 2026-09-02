#!/usr/bin/env node
"use strict";
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const repoRoot = path.resolve(__dirname, "../..");
process.chdir(repoRoot);

const outDir = path.join(repoRoot, "out");
const statusPath = path.join(repoRoot, "automation", "reports", "build-deploy-runner.json");
const statePath = path.join(repoRoot, "automation", "reports", "build-deploy-runner-latest.json");

function now() {
  return new Date().toISOString();
}
function writeState(s) {
  try {
    fs.mkdirSync(path.dirname(statePath), { recursive: true });
    fs.writeFileSync(statePath, JSON.stringify({ checkedAt: now(), ...s }, null, 2));
  } catch {}
}
function log(...args) {
  console.log(`[${new Date().toISOString()}]`, ...args);
}

function run(label, cmd, env) {
  try {
    const out = execSync(cmd, { cwd: repoRoot, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], env, timeout: 1000 * 60 * 20 });
    log(`[${label}] ok`);
    return out;
  } catch (e) {
    const msg = (e.stderr || e.message || "").toString().split("\n").slice(-3).join("\n");
    log(`[${label}] failed: ${msg}`);
    throw e;
  }
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  log("runner start");

  const env = {
    ...process.env,
    PATH: [process.env.PATH, "/c/Users/Zion/AppData/Local/hermes/node"].filter(Boolean).join(path.delimiter),
    CI: "1",
    NEXT_TELEMETRY_DISABLED: "1",
  };

  let buildOk = false;
  let verifyOk = false;
  let deployOk = false;
  let errors = [];

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      log(`build attempt ${attempt}`);
      run("build", "npm run build", env);
      buildOk = true;
      break;
    } catch (e) {
      errors.push(`build-attempt-${attempt}: ${e.message}`);
      if (attempt === 1) await sleep(1000 * 15);
    }
  }

  if (buildOk) {
    try {
      const verifyOut = run("verify", "node scripts/checks/build-and-verify.cjs", env);
      verifyOk = /verified local static export/.test(verifyOut || "");
    } catch (e) {
      errors.push(`verify: ${e.message}`);
    }
  }

  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) {
    log("deploy skipped: missing GITHUB_TOKEN");
  } else if (buildOk && verifyOk) {
    try {
      run("deploy", "node scripts/deploy-gh-pages-contents.cjs", env);
      deployOk = true;
    } catch (e) {
      errors.push(`deploy: ${e.message}`);
    }
  }

  const status = {
    checkedAt: now(),
    buildOk,
    verifyOk,
    deployOk,
    tokenPresent: Boolean(token),
    errors,
  };
  writeState(status);
  if (!buildOk || !verifyOk) {
    log("runner failed", JSON.stringify(status, null, 2));
    process.exit(1);
  }
  log("runner done", JSON.stringify(status, null, 2));
}

try {
  main();
} catch {
  writeState({ checkedAt: now(), buildOk: false, verifyOk: false, deployOk: false });
  process.exit(1);
}
