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
  const args = {
    ref: "main",
    wait: false,
    only: [],
    skip: [],
    list: false,
    delayMs: 3000,
    verbose: false,
    maxParallel: 1,
    rerunFailed: true,
    coreFirst: true,
    changedOnly: false,
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--ref" && argv[i + 1]) { args.ref = argv[++i]; continue; }
    if (a === "--wait") { args.wait = true; continue; }
    if (a === "--list") { args.list = true; continue; }
    if (a === "--verbose") { args.verbose = true; continue; }
    if (a === "--delay" && argv[i + 1]) { args.delayMs = Number(argv[++i]) || 3000; continue; }
    if (a === "--only" && argv[i + 1]) { args.only = argv[++i].split(",").map(s => s.trim()).filter(Boolean); continue; }
    if (a === "--skip" && argv[i + 1]) { args.skip = argv[++i].split(",").map(s => s.trim()).filter(Boolean); continue; }
    if (a === "--max-parallel" && argv[i + 1]) { args.maxParallel = Math.max(1, Number(argv[++i]) || 1); continue; }
    if (a === "--no-rerun-failed") { args.rerunFailed = false; continue; }
    if (a === "--no-core-first") { args.coreFirst = false; continue; }
    if (a === "--changed-only") { args.changedOnly = true; continue; }
  }
  return args;
}

function getEnvToken() {
  return process.env.GH_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_PAT || process.env.GITHUB_PAT || "";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function requestWithRetry(fn, { verbose = false, tries = 5, baseDelayMs = 1000 } = {}) {
  let attempt = 0;
  let lastErr;
  while (attempt < tries) {
    try {
      const res = await fn();
      return res;
    } catch (err) {
      lastErr = err;
      const status = err.response?.status;
      const retriable = !status || status >= 500 || status === 429;
      if (!retriable) break;
      const delay = Math.min(20000, baseDelayMs * Math.pow(2, attempt)) + Math.floor(Math.random() * 250);
      if (verbose) console.warn(`[retry] attempt ${attempt + 1}/${tries} after error ${status || err.code || err.message}, waiting ${delay}ms`);
      await sleep(delay);
      attempt++;
    }
  }
  throw lastErr;
}

async function dispatchWorkflow({ token, owner, repo, workflowFile, ref, verbose }) {
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${encodeURIComponent(workflowFile)}/dispatches`;
  const headers = { Authorization: `token ${token}`, Accept: "application/vnd.github+json", "User-Agent": `${owner}-${repo}-workflow-dispatcher` };
  await requestWithRetry(() => axios.post(url, { ref }, { headers }), { verbose });
}

async function getLatestRun({ token, owner, repo, workflowFile, ref }) {
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${encodeURIComponent(workflowFile)}/runs?branch=${encodeURIComponent(ref)}&event=workflow_dispatch&per_page=1`;
  const headers = { Authorization: `token ${token}`, Accept: "application/vnd.github+json", "User-Agent": `${owner}-${repo}-workflow-dispatcher` };
  const res = await requestWithRetry(() => axios.get(url, { headers }), { verbose: false });
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

async function rerunWorkflowRun({ token, owner, repo, runId, verbose }) {
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/runs/${runId}/rerun`;
  const headers = { Authorization: `token ${token}`, Accept: "application/vnd.github+json", "User-Agent": `${owner}-${repo}-workflow-dispatcher` };
  await requestWithRetry(() => axios.post(url, {}, { headers }), { verbose });
}

function writeGithubSummary(markdown) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  try { fs.appendFileSync(summaryPath, markdown + "\n"); } catch (_) { /* noop */ }
}

function getChangedFiles() {
  try {
    const { execSync } = require("child_process");
    const base = process.env.BASE_REF || "origin/main";
    const out = execSync(`git diff --name-only ${base}...HEAD`, { encoding: "utf8" });
    return out.split(/\r?\n/).filter(Boolean);
  } catch {
    return [];
  }
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

  let selected = allFiles.filter(f => {
    if (args.only.length > 0) return args.only.includes(f);
    if (args.skip.length > 0) return !args.skip.includes(f);
    return true;
  });
  if (args.changedOnly) {
    const changed = getChangedFiles();
    // simple heuristic: always include core, and include workflows whose filename appears in changes
    const core = new Set(["actionlint.yml", "commitlint.yml", "ci.yml"]);
    selected = selected.filter(f => core.has(f) || changed.some(p => p.includes(path.basename(f).replace(/\.yml$/, ""))));
    if (selected.length === 0) selected = Array.from(core).filter(f => allFiles.includes(f));
  }
  if (args.coreFirst) {
    const coreList = ["actionlint.yml", "commitlint.yml", "ci.yml", "pr-smoke.yml", "playwright-smoke.yml"]; 
    const set = new Set(selected);
    const head = coreList.filter(f => set.has(f));
    const tail = selected.filter(f => !head.includes(f));
    selected = [...head, ...tail];
  }

  if (args.list) {
    console.log(JSON.stringify({ owner: repoInfo.owner, repo: repoInfo.repo, ref: args.ref, workflows: selected }, null, 2));
    process.exit(0);
  }

  const results = [];
  async function processOne(wf) {
    try {
      console.log(`▶ Dispatching ${wf} on ${args.ref}`);
      await dispatchWorkflow({ token, owner: repoInfo.owner, repo: repoInfo.repo, workflowFile: wf, ref: args.ref, verbose: args.verbose });
      if (!args.wait) {
        results.push({ workflow: wf, status: "dispatched", conclusion: null, url: null });
        return;
      }
      let run = await waitForRunCompletion({ token, owner: repoInfo.owner, repo: repoInfo.repo, workflowFile: wf, ref: args.ref, verbose: args.verbose });
      if (!run || run.status !== "completed") {
        console.log(`⏳ ${wf}: no completed run yet`);
        results.push({ workflow: wf, status: run?.status || "unknown", conclusion: run?.conclusion || "unknown", url: run?.html_url || null });
        return;
      }
      if (run.conclusion !== "success" && args.rerunFailed) {
        console.log(`↻ Rerunning failed workflow once: ${wf}`);
        try {
          await rerunWorkflowRun({ token, owner: repoInfo.owner, repo: repoInfo.repo, runId: run.id, verbose: args.verbose });
          run = await waitForRunCompletion({ token, owner: repoInfo.owner, repo: repoInfo.repo, workflowFile: wf, ref: args.ref, verbose: args.verbose });
        } catch (e) {
          if (args.verbose) console.warn(`[warn] rerun failed for ${wf}:`, e.response?.status || e.message);
        }
      }
      const ok = run && run.status === "completed" && run.conclusion === "success";
      console.log(`${ok ? "✅" : "❌"} ${wf}: ${run?.conclusion || "unknown"} → ${run?.html_url || ""}`);
      results.push({ workflow: wf, status: run?.status || "unknown", conclusion: run?.conclusion || "unknown", url: run?.html_url || null });
    } catch (err) {
      const msg = err.response?.data || err.message || String(err);
      console.error(`❌ Failed to dispatch ${wf}:`, msg);
      results.push({ workflow: wf, status: "error", conclusion: null, error: msg });
    } finally {
      await sleep(args.delayMs);
    }
  }

  const queue = [...selected];
  const workers = Math.min(args.maxParallel, queue.length || 1);
  const running = [];
  for (let i = 0; i < workers; i++) {
    running.push((async function runWorker() {
      while (queue.length) {
        const next = queue.shift();
        await processOne(next);
      }
    })());
  }
  await Promise.all(running);

  const summary = {
    total: results.length,
    success: results.filter(r => r.conclusion === "success").length,
    failed: results.filter(r => r.conclusion && r.conclusion !== "success").length,
    unknown: results.filter(r => !r.conclusion && r.status !== "error").length,
    errors: results.filter(r => r.status === "error").length,
    results
  };
  const jsonSummary = "\n=== Summary ===\n" + JSON.stringify(summary, null, 2);
  console.log(jsonSummary);
  const md = [
    `\n## Workflows Summary for ${repoInfo.owner}/${repoInfo.repo} @ ${args.ref}`,
    ``,
    `- Total: ${summary.total}`,
    `- Success: ${summary.success}`,
    `- Failed: ${summary.failed}`,
    `- Unknown: ${summary.unknown}`,
    `- Errors: ${summary.errors}`,
    ``,
    `| Workflow | Conclusion | URL |`,
    `|---|---|---|`,
    ...summary.results.map(r => `| ${r.workflow} | ${r.conclusion || r.status || ""} | ${r.url || ""} |`)
  ].join("\n");
  writeGithubSummary(md);
  // Persist history locally if repo is present
  try {
    const outDir = path.resolve(__dirname, "../public/reports/workflows");
    fs.mkdirSync(outDir, { recursive: true });
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    fs.writeFileSync(path.join(outDir, `report-${ts}.json`), JSON.stringify(summary, null, 2));
    fs.writeFileSync(path.join(outDir, `latest.json`), JSON.stringify(summary, null, 2));
  } catch (_) {}
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


