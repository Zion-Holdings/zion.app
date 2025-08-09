#!/usr/bin/env node
const { Octokit } = require('@octokit/rest');
const { readFileSync } = require('fs');

async function main(){
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!token) { console.log('No GITHUB_TOKEN found; skipping'); return; }
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath) { console.log('No GITHUB_EVENT_PATH; skipping'); return; }
  const payload = JSON.parse(readFileSync(eventPath, 'utf8'));
  if (!payload.pull_request) { console.log('Not a PR event'); return; }
  const { number, head, base } = payload.pull_request;
  const owner = payload.repository.owner.login;
  const repo = payload.repository.name;

  const octokit = new Octokit({ auth: token });
  const diff = await octokit.pulls.get({ owner, repo, pull_number: number }).then(r => r.data);
  let body = `PR #${number}: ${diff.title}\n\n`;
  body += `From ${head.ref} into ${base.ref}\n\n`;
  // Fallback summary if no OpenAI key
  let aiSummary = `Automated review could not run without OPENAI_API_KEY. Ensure tests pass and lint is clean.`;
  if (openaiKey) {
    try {
      const { OpenAI } = require('openai');
      const client = new OpenAI({ apiKey: openaiKey });
      const files = await octokit.pulls.listFiles({ owner, repo, pull_number: number }).then(r=>r.data);
      const changes = files.slice(0,20).map(f=>`${f.status} ${f.filename} (+${f.additions}/-${f.deletions})`).join('\n');
      const prompt = `Provide a concise, actionable code review focusing on correctness, security, performance, and DX. Here are the changed files with stats:\n${changes}`;
      const resp = await client.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.2 });
      aiSummary = resp.choices[0].message.content || aiSummary;
    } catch (e) {
      aiSummary = aiSummary + ` (Error: ${e.message})`;
    }
  }

  await octokit.issues.createComment({ owner, repo, issue_number: number, body: `🤖 AI Review\n\n${aiSummary}` });
  console.log('Posted AI review comment');
}

main().catch(e=>{ console.error(e); process.exit(0); });