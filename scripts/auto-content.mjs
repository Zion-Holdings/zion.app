#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, '..', 'pages', 'blog');

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function generateTitleAndIntro() {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY || '';
  const fallback = {
    title: 'AI Engineering Trends ' + new Date().toISOString().slice(0, 10),
    intro: 'A brief exploration of emerging AI engineering practices and platform capabilities.'
  };
  if (!OPENAI_API_KEY) return fallback;
  try {
    const prompt = 'Give a concise blog title and a 2-sentence intro about a practical AI engineering topic. Return JSON with keys title and intro.';
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.5, response_format: { type: 'json_object' } })
    });
    const data = await resp.json();
    const content = data.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(content);
    if (parsed?.title && parsed?.intro) return parsed;
    return fallback;
  } catch {
    return fallback;
  }
}

async function main() {
  if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
  const { title, intro } = await generateTitleAndIntro();
  const slug = slugify(title).slice(0, 90) + '-chat';
  const file = path.join(pagesDir, `${slug}.tsx`);
  if (fs.existsSync(file)) {
    console.log('Already exists, skipping:', file);
    return;
  }
  const content = `export default function Post(){return (<div className=\"prose prose-invert max-w-none\"><h1>${title}</h1><p>${intro}</p><p>More details coming soon...</p></div>);}`;
  fs.writeFileSync(file, content, 'utf8');
  console.log('Created blog post:', file);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}