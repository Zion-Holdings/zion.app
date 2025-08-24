#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const OpenAI = require('openai');

const ROOT = process.cwd();
const outDir = path.join(ROOT, 'data', 'reports', 'release');
const mdFile = path.join(ROOT, 'docs', 'RELEASE_NOTES.md');

function git(cmd) {
  return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(path.dirname(mdFile), { recursive: true });

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const log = git(`git log --since='${since}' --pretty=format:%H:::%s`);
  if (!log) {
    console.log('No commits in the last 24h');
    return;
  }
  const entries = log.split('\n').map((l) => {
    const [hash, subject] = l.split(':::');
    return { hash, subject };
  });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OPENAI_API_KEY not set');
    process.exit(1);
  }
  const openai = new OpenAI({ apiKey });
  const prompt = `Summarize the following commit subjects into succinct release notes with 3-7 bullet points and a short overview. Focus on user-visible impact.\n\n${entries.map(e => '- ' + e.subject).join('\n')}`;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a release notes generator. Be concise and useful.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.2,
  });
  const summary = completion.choices?.[0]?.message?.content?.trim() || '';

  const payload = { generatedAt: new Date().toISOString(), commits: entries, notes: summary };
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(payload, null, 2));

  const header = `\n\n## ${new Date().toISOString().split('T')[0]}\n`;
  fs.appendFileSync(mdFile, header + '\n' + summary + '\n');
  console.log('Release notes updated');
}

main().catch((e) => { console.error(e); process.exit(1); });