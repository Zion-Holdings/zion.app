#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');
const axios = require('axios');

function slugify(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

async function fetchTrending() {
  // Hacker News RSS as a simple public signal
  const url = 'https://hnrss.org/frontpage';
  const res = await axios.get(url, { timeout: 15000 });
  const xml = res.data || '';
  const items = [];
  const itemRegex = /<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<guid[\s\S]*?>([\s\S]*?)<\/guid>[\s\S]*?<pubDate>([\s\S]*?)<\/pubDate>[\s\S]*?<\/item>/gi;
  let m;
  while ((m = itemRegex.exec(xml))) {
    items.push({ title: m[1], link: m[2], guid: m[3], pubDate: m[4] });
    if (items.length >= 5) break;
  }
  return items;
}

async function generateDraft(topic, openai) {
  const title = `How ${topic.title} Impacts AI-Native Talent Protocols`;
  const slug = slugify(title);
  const date = new Date().toISOString().slice(0, 10);
  const header = `---\ntitle: ${title}\ndate: ${date}\nsource: ${topic.link}\n---\n\n`;

  if (!openai) {
    const body = `In this brief, we explore ${topic.title} and its implications for AI-native talent ecosystems.\n\nKey takeaways:\n- Trend overview\n- Risks and opportunities\n- Practical steps for founders\n\n`;
    return { slug, content: header + body };
  }

  const prompt = `Write a concise blog draft (400-600 words) for founders about: ${topic.title}. Frame it around implications for AI-native talent protocols, include actionable steps, and a brief risks/opportunities section.`;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are an expert startup strategist and writer.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.6,
  });
  const content = completion.choices?.[0]?.message?.content || '';
  return { slug, content: header + content + '\n' };
}

async function main() {
  const repoRoot = process.cwd();
  const draftsDir = path.join(repoRoot, 'docs', 'blog-drafts');
  const logsDir = path.join(repoRoot, 'automation_logs');
  await fs.ensureDir(draftsDir);
  await fs.ensureDir(logsDir);

  let openai = null;
  try {
    const OpenAI = require('openai');
    const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (apiKey) openai = new OpenAI({ apiKey });
  } catch (_) {}

  const topics = await fetchTrending();
  const picked = topics.slice(0, 3);

  const written = [];
  for (const t of picked) {
    try {
      const draft = await generateDraft(t, openai);
      const file = path.join(draftsDir, `${draft.slug}.md`);
      await fs.writeFile(file, draft.content, 'utf-8');
      written.push({ file: path.relative(repoRoot, file), source: t.link });
    } catch (e) {
      console.error('Draft generation failed for', t.title, e.message);
    }
  }

  const status = {
    ranAt: new Date().toISOString(),
    topics: picked.map(t => ({ title: t.title, link: t.link })),
    drafts: written,
  };
  await fs.writeJson(path.join(logsDir, 'content-intelligence-status.json'), status, { spaces: 2 });
  console.log('Content Intelligence Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });