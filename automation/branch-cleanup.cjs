#!/usr/bin/env node

/**
 * Branch Cleanup Script
 * - Deletes branches whose PRs were merged into main
 * - Deletes stale ephemeral branches older than a threshold with no open PRs
 *
 * Requires environment variables when run in GitHub Actions:
 * - GITHUB_TOKEN (automatically provided)
 * - GITHUB_REPOSITORY (owner/repo)
 */

const { env, exit } = process;

const GITHUB_TOKEN = env.GITHUB_TOKEN || env.GH_TOKEN || "";
const REPOSITORY = env.GITHUB_REPOSITORY || ""; // format: owner/repo
const API_BASE = "https://api.github.com";

const DAYS_STALE = Number(env.BRANCH_STALE_DAYS || 14);
const EPHEMERAL_PREFIXES = (env.BRANCH_PREFIXES || "cursor/,feat/,fix/,chore/,refactor/")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

if (!GITHUB_TOKEN) {
  console.error("GITHUB_TOKEN is required");
  exit(1);
}
if (!REPOSITORY.includes("/")) {
  console.error("GITHUB_REPOSITORY must be in the form 'owner/repo'");
  exit(1);
}

const [OWNER, REPO] = REPOSITORY.split("/");

async function ghFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      "authorization": `Bearer ${GITHUB_TOKEN}`,
      "accept": "application/vnd.github+json",
      "x-github-api-version": "2022-11-28",
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }
  return res;
}

async function paginatedGet(path, query = {}) {
  const params = new URLSearchParams(query);
  params.set("per_page", String(query.per_page || 100));
  let url = `${API_BASE}${path}?${params.toString()}`;
  const items = [];
  while (url) {
    const res = await ghFetch(url);
    const data = await res.json();
    if (Array.isArray(data)) items.push(...data);
    const link = res.headers.get("link");
    if (link && link.includes('rel="next"')) {
      const match = link.split(",").find((l) => l.includes('rel="next"'));
      url = match ? match.split(";")[0].trim().slice(1, -1) : null;
    } else {
      url = null;
    }
  }
  return items;
}

function daysAgo(dateStr) {
  const then = new Date(dateStr).getTime();
  const now = Date.now();
  return (now - then) / (1000 * 60 * 60 * 24);
}

function branchMatchesEphemeral(name) {
  return EPHEMERAL_PREFIXES.some((p) => name.startsWith(p));
}

async function listBranches() {
  return paginatedGet(`/repos/${OWNER}/${REPO}/branches`);
}

async function listMergedPRBranches() {
  // Fetch recently closed PRs targeting main and collect merged ones
  const prs = await paginatedGet(`/repos/${OWNER}/${REPO}/pulls`, {
    state: "closed",
    base: "main",
    sort: "updated",
    direction: "desc",
  });
  const mergedHeads = new Set();
  for (const pr of prs) {
    if (pr.merged_at && pr.head && pr.head.ref && pr.head.repo && pr.head.repo.full_name === REPOSITORY) {
      mergedHeads.add(pr.head.ref);
    }
  }
  return Array.from(mergedHeads);
}

async function getBranchCommitDate(branchName) {
  const res = await ghFetch(`${API_BASE}/repos/${OWNER}/${REPO}/commits/${encodeURIComponent(branchName)}`);
  const data = await res.json();
  // Prefer committer date (push date) if available
  return (data.commit && (data.commit.committer?.date || data.commit.author?.date)) || null;
}

async function hasOpenPR(branchName) {
  const prs = await paginatedGet(`/repos/${OWNER}/${REPO}/pulls`, {
    state: "open",
    head: `${OWNER}:${branchName}`,
  });
  return prs.length > 0;
}

async function deleteBranch(branchName) {
  // Cannot delete protected branches; API will error which we catch and continue
  try {
    await ghFetch(`${API_BASE}/repos/${OWNER}/${REPO}/git/refs/heads/${encodeURIComponent(branchName)}`, {
      method: "DELETE",
    });
    console.log(`Deleted branch: ${branchName}`);
    return true;
  } catch (err) {
    console.warn(`Skipping delete for ${branchName}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log(`Starting branch cleanup for ${REPOSITORY}`);

  const branches = await listBranches();
  const branchNames = branches.map((b) => b.name).filter((n) => n !== "main" && n !== "master");

  const mergedBranchesSet = new Set(await listMergedPRBranches());

  let deletedCount = 0;

  // 1) Delete branches that have been merged via PR into main
  for (const name of branchNames) {
    if (mergedBranchesSet.has(name)) {
      const ok = await deleteBranch(name);
      if (ok) deletedCount += 1;
    }
  }

  // 2) Delete stale ephemeral branches with no open PRs and older than threshold
  for (const name of branchNames) {
    if (!branchMatchesEphemeral(name)) continue;
    if (mergedBranchesSet.has(name)) continue; // already handled
    const open = await hasOpenPR(name);
    if (open) continue;
    const commitDate = await getBranchCommitDate(name);
    if (!commitDate) continue;
    const ageDays = daysAgo(commitDate);
    if (ageDays >= DAYS_STALE) {
      const ok = await deleteBranch(name);
      if (ok) deletedCount += 1;
    }
  }

  console.log(`Branch cleanup complete. Deleted ${deletedCount} branches.`);
}

main().catch((err) => {
  console.error("Branch cleanup failed:", err);
  exit(1);
});