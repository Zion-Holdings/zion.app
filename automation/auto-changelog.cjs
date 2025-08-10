#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openaiKey = process.env.OPENAI_API_KEY;

function getGitLog() {
  try {
    const raw = execSync("git log --since='24 hours ago' --date=iso --pretty=format:%H%n%ad%n%s%n%b%n---", { encoding: 'utf8' });
    const entries = raw.split('\n---\n').map(block => block.trim()).filter(Boolean).map(block => {
      const lines = block.split('\n');
      const hash = lines.shift();
      const date = lines.shift();
      const subject = lines.shift();
      const body = lines.join('\n');
      return { hash, date, subject, body };
    });
    return entries;
  } catch (e) {
    return [];
  }
}

async function summarize(entries) {
  if (!openaiKey) {
    return '# Automated Changelog\n\nOpenAI API key not configured. Listing commits:\n' + entries.map(e => `- ${e.subject}`).join('\n');
  }
  const client = new OpenAI({ apiKey: openaiKey });
  const input = `Summarize these commits from the last 24h into a clear changelog. Group by type (feat, fix, ci, docs, chore, refactor, perf, test, build), include brief bullets, and mention impacted areas. If empty, say \"No significant changes in the last 24 hours.\"\n\n${entries.map(e => `- ${e.subject} (hash: ${e.hash})\n${e.body}`).join('\n')}`;
  const resp = await client.responses.create({ model: 'gpt-4o-mini', input, temperature: 0.3 });
  let text = '';
  const out0 = resp.output && resp.output[0];
  if (out0 && out0.type === 'message') {
    text = out0.content.filter(c => c.type === 'output_text').map(c => c.text).join('\n');
  }
  return text || 'No significant changes in the last 24 hours.';
}

async function main() {
  const entries = getGitLog();
  const md = await summarize(entries);
  const header = `# Daily Automated Changelog\n\nGenerated: ${new Date().toISOString()}\n`;
  const docsDir = path.join(process.cwd(), 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'CHANGELOG_AUTO.md'), header + '\n' + md + '\n');
  console.log('Wrote docs/CHANGELOG_AUTO.md');
}

main().catch(e => { console.error(e); process.exit(1); });