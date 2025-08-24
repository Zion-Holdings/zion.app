#!/usr/bin/env node
const { Octokit } = require('@octokit/rest');
const { readFileSync } = require('fs');

async function main(){
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) { console.log('No GITHUB_TOKEN, skipping'); return; }
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath) { console.log('No GITHUB_EVENT_PATH, skipping'); return; }
  const payload = JSON.parse(readFileSync(eventPath, 'utf8'));
  const issue = payload.issue;
  if (!issue) { console.log('Not an issue event'); return; }
  const owner = payload.repository.owner.login;
  const repo = payload.repository.name;
  const number = issue.number;
  const title = (issue.title || '').toLowerCase();
  const body = (issue.body || '').toLowerCase();

  const labels = new Set();
  if (/(bug|error|fail|exception)/.test(title+body)) labels.add('bug');
  if (/(feat|feature|enhance|improve)/.test(title+body)) labels.add('enhancement');
  if (/(doc|readme|docs)/.test(title+body)) labels.add('documentation');
  if (/(perf|speed)/.test(title+body)) labels.add('performance');
  if (/(sec|security|vuln|xss|csrf)/.test(title+body)) labels.add('security');

  if (labels.size === 0) labels.add('triage');

  const octokit = new Octokit({ auth: token });
  await octokit.issues.addLabels({ owner, repo, issue_number: number, labels: Array.from(labels) });
  console.log('Added labels', Array.from(labels).join(', '));
}

main().catch(e=>{ console.error(e); process.exit(0); });