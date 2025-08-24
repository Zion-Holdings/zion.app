#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';

async function fetchIssues() {
  const [owner, repo] = REPO.split('/');
  const octokit = new Octokit({ auth: GITHUB_TOKEN });
  const { data } = await octokit.issues.listForRepo({ owner, repo, state: 'open', per_page: 100 });
  return data.map((i) => ({ number: i.number, title: i.title, body: i.body || '', labels: i.labels?.map((l) => typeof l === 'string' ? l : l.name) || [] }));
}

async function cluster(issues) {
  const prompt = `Group issues into themes with priority (P0-P3). Return Markdown with sections: Themes, Prioritized Backlog (with #issue numbers), and Next 2 Weeks Plan.`;
  const input = issues.map(i => `#${i.number} ${i.title} [${i.labels.join(',')}]\n${(i.body||'').slice(0,400)}`).join('\n\n');
  const resp = await client.chat.completions.create({ model: 'gpt-4o-mini', temperature: 0.2, messages: [ { role: 'system', content: prompt }, { role: 'user', content: input } ] });
  return resp.choices?.[0]?.message?.content || '';
}

async function main() {
  const issues = await fetchIssues();
  const md = await cluster(issues);
  const dir = path.join(process.cwd(), 'data', 'reports', 'roadmap');
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `roadmap-${Date.now()}.md`);
  fs.writeFileSync(file, md || '# Roadmap\n\n(No content)');
  console.log('Wrote', file);
}

main().catch((e) => { console.error(e); process.exit(1); });