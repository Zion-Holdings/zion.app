#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const repoOwner = 'Zion-Holdings';
const repoName = 'zion.app';
const token = process.env.GITHUB_TOKEN || process.env.ACTIONS_TOKEN || process.env.GH_TOKEN || '';

async function fetchWorkflows() {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows?per_page=100`;
  const { data } = await axios.get(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  return data.workflows || [];
}

async function fetchLatestRunState(workflowId) {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows/${workflowId}/runs?per_page=1`;
  const { data } = await axios.get(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  const run = (data.workflow_runs || [])[0];
  if (!run) return { status: 'unknown', conclusion: 'unknown', html_url: '' };
  return { status: run.status, conclusion: run.conclusion, html_url: run.html_url };
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

async function main() {
  try {
    const workflows = await fetchWorkflows();
    const rows = [];
    for (const wf of workflows) {
      const latest = await fetchLatestRunState(wf.id);
      rows.push({
        id: wf.id,
        name: wf.name,
        path: wf.path,
        badge: `https://github.com/${repoOwner}/${repoName}/actions/workflows/${path.basename(wf.path)}/badge.svg`,
        url: `https://github.com/${repoOwner}/${repoName}/actions/workflows/${path.basename(wf.path)}`,
        latest
      });
    }

    const md = [
      `# GitHub Actions Health`,
      '',
      `Updated: ${new Date().toISOString()}`,
      '',
      '| Workflow | Status | Link |',
      '|---|---|---|',
      ...rows.map(r => `| ![badge](${r.badge}) ${r.name} | ${r.latest.conclusion || r.latest.status} | [Runs](${r.url}) |`)
    ].join('\n');

    const mdPath = path.join(process.cwd(), 'docs', 'actions-health.md');
    const jsonPath = path.join(process.cwd(), 'public', 'actions-health.json');
    ensureDir(mdPath);
    ensureDir(jsonPath);
    fs.writeFileSync(mdPath, md);
    fs.writeFileSync(jsonPath, JSON.stringify({ updatedAt: new Date().toISOString(), workflows: rows }, null, 2));

    console.log(`Wrote ${rows.length} workflows to docs/actions-health.md and public/actions-health.json`);
  } catch (err) {
    console.error('Failed to produce actions health report:', err.response?.data || err.message);
    process.exit(0);
  }
}

main();