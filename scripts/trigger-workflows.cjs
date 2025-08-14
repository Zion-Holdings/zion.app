#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const axios = require("axios");

function parseRepoFromPackage() {
  try {
    const pkg = require(path.resolve(__dirname, "../package.json"));
    const url = (pkg.repository && (pkg.repository.url || pkg.repository)) || "";
    // Examples:
    // https://github.com/owner/repo.git
    // https://github.com/owner/repo
    // git@github.com:owner/repo.git
    // git@github.com:owner/repo
    let match = url.match(/github\.com[/:]([^/]+)\/(.+?)(?:\.git)?$/i);
    if (!match) return null;
    return { owner: match[1], repo: match[2] };
  } catch (e) {
    return null;
  }
}

function parseArgs(argv) {
  const args = { ref: "main", wait: false, only: [], skip: [], list: false, delayMs: 3000, verbose: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--ref" && argv[i + 1]) { args.ref = argv[++i]; continue; }
    if (a === "--wait") { args.wait = true; continue; }
    if (a === "--list") { args.list = true; continue; }
    if (a === "--verbose") { args.verbose = true; continue; }
    if (a === "--delay" && argv[i + 1]) { args.delayMs = Number(argv[++i]) || 3000; continue; }
    if (a === "--only" && argv[i + 1]) { args.only = argv[++i].split(",").map(s => s.trim()).filter(Boolean); continue; }
    if (a === "--skip" && argv[i + 1]) { args.skip = argv[++i].split(",").map(s => s.trim()).filter(Boolean); continue; }
  }
  return args;
}

function getEnvToken() {
  return process.env.GH_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_PAT || process.env.GITHUB_PAT || "";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dispatchWorkflow({ token, owner, repo, workflowFile, ref }) {
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${encodeURIComponent(workflowFile)}/dispatches`;
  const headers = { Authorization: `token ${token}`, Accept: "application/vnd.github+json", "User-Agent": `${owner}-${repo}-workflow-dispatcher` };
  await axios.post(url, { ref }, { headers });
}

async function getLatestRun({ token, owner, repo, workflowFile, ref }) {
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${encodeURIComponent(workflowFile)}/runs?branch=${encodeURIComponent(ref)}&event=workflow_dispatch&per_page=1`;
  const headers = { Authorization: `token ${token}`, Accept: "application/vnd.github+json", "User-Agent": `${owner}-${repo}-workflow-dispatcher` };
  const res = await axios.get(url, { headers });
  const runs = res.data && res.data.workflow_runs ? res.data.workflow_runs : [];
  return runs[0] || null;
}

async function waitForRunCompletion({ token, owner, repo, workflowFile, ref, timeoutMs = 60 * 60 * 1000, pollIntervalMs = 15000, verbose = false }) {
  const start = Date.now();
  let latestRun = null;
  // Initial backoff to allow run to appear
  await sleep(5000);
  while (Date.now() - start < timeoutMs) {
    try {
      latestRun = await getLatestRun({ token, owner, repo, workflowFile, ref });
    } catch (err) {
      if (verbose) console.error(`[warn] failed to fetch latest run for ${workflowFile}:`, err.response?.status || err.message);
    }
    if (latestRun && latestRun.status === "completed") {
      return latestRun;
    }
    if (verbose) console.log(`[info] waiting on ${workflowFile}…`);
    await sleep(pollIntervalMs);
  }
  return latestRun; // may be null or still in_progress
}

async function main() {
  const args = parseArgs(process.argv);
  const repoInfo = parseRepoFromPackage();
  if (!repoInfo) {
    console.error("Could not determine GitHub owner/repo from package.json repository.url");
    process.exit(2);
  }
  const token = getEnvToken();
  if (!token && !args.list) {
    console.error("Missing GitHub token. Set GH_TOKEN or GITHUB_TOKEN with 'repo' and 'workflow' scopes.");
    process.exit(2);
  }

  const workflowsDir = path.resolve(__dirname, "../.github/workflows");
  const allFiles = fs.readdirSync(workflowsDir)
    .filter(f => f.endsWith(".yml") || f.endsWith(".yaml"))
    .sort((a, b) => a.localeCompare(b));

  const selected = allFiles.filter(f => {
    if (args.only.length > 0) return args.only.includes(f);
    if (args.skip.length > 0) return !args.skip.includes(f);
    return true;
  });

  if (args.list) {
    console.log(JSON.stringify({ owner: repoInfo.owner, repo: repoInfo.repo, ref: args.ref, workflows: selected }, null, 2));
    process.exit(0);
  }

  const results = [];
  for (const wf of selected) {
    try {
      console.log(`▶ Dispatching ${wf} on ${args.ref}`);
      await dispatchWorkflow({ token, owner: repoInfo.owner, repo: repoInfo.repo, workflowFile: wf, ref: args.ref });
      if (args.wait) {
        const run = await waitForRunCompletion({ token, owner: repoInfo.owner, repo: repoInfo.repo, workflowFile: wf, ref: args.ref, verbose: args.verbose });
        if (!run) {
          console.log(`⏳ ${wf}: no run found yet (continuing)`);
          results.push({ workflow: wf, status: "unknown", conclusion: "unknown", url: null });
        } else if (run.status !== "completed") {
          console.log(`⏳ ${wf}: still ${run.status} → ${run.html_url}`);
          results.push({ workflow: wf, status: run.status, conclusion: run.conclusion, url: run.html_url });
        } else {
          const ok = run.conclusion === "success";
          console.log(`${ok ? "✅" : "❌"} ${wf}: ${run.conclusion} → ${run.html_url}`);
          results.push({ workflow: wf, status: run.status, conclusion: run.conclusion, url: run.html_url });
        }
      } else {
        results.push({ workflow: wf, status: "dispatched", conclusion: null, url: null });
      }
    } catch (err) {
      const msg = err.response?.data || err.message || String(err);
      console.error(`❌ Failed to dispatch ${wf}:`, msg);
      results.push({ workflow: wf, status: "error", conclusion: null, error: msg });
    }
    await sleep(args.delayMs);
  }

  const summary = {
    total: results.length,
    success: results.filter(r => r.conclusion === "success").length,
    failed: results.filter(r => r.conclusion && r.conclusion !== "success").length,
    unknown: results.filter(r => !r.conclusion && r.status !== "error").length,
    errors: results.filter(r => r.status === "error").length,
    results
  };
  console.log("\n=== Summary ===\n" + JSON.stringify(summary, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


