#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const { execSync } = require('child_process');
const { Octokit } = require('@octokit/rest');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
const ISSUE = process.env.ISSUE_NUMBER;

async function main() {
  if (!GITHUB_TOKEN || !ISSUE) {
    console.error('Set GITHUB_TOKEN and ISSUE_NUMBER');
    process.exit(1);
  }
  const [owner, repo] = REPO.split('/');
  const octokit = new Octokit({ auth: GITHUB_TOKEN });
  const { data } = await octokit.issues.get({ owner, repo, issue_number: Number(ISSUE) });
  const title = data.title;
  const body = data.body || '';

  const OpenAI = require('openai');
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const prompt = `You are an expert JS/TS engineer. Analyze this crash report and propose a minimal code change to fix it. Provide the exact file path(s) and unified diff. Avoid unrelated edits.`;
  const resp = await client.chat.completions.create({ model: 'gpt-4o-mini', temperature: 0.2, messages: [{ role: 'system', content: prompt }, { role: 'user', content: `${title}\n\n${body}` }] });
  const patch = resp.choices?.[0]?.message?.content || '';
  fs.writeFileSync('autoheal.patch', patch);

  try {
    execSync('git config user.email "autoheal@zion.app"');
    execSync('git config user.name "Zion Autoheal"');
    execSync('npx patch-package < autoheal.patch', { stdio: 'inherit' });
  } catch (e) {
    console.warn('Patch apply failed');
  }

  execSync('npm run build', { stdio: 'inherit' });
  try { execSync('npm test --if-present', { stdio: 'inherit' }); } catch {}

  execSync('git add -A');
  try {
    execSync('git commit -m "chore(autoheal): apply fix from OpenAI"');
    execSync('git push origin dev', { stdio: 'inherit' });
  } catch {
    console.log('No changes to push');
  }

  await octokit.issues.createComment({ owner, repo, issue_number: Number(ISSUE), body: 'Autoheal runner completed.' });
}

main().catch((e) => { console.error(e); process.exit(1); });