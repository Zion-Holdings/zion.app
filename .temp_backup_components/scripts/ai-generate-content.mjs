#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
if (!OPENAI_API_KEY) { console.log('No OPENAI_API_KEY'); process.exit(0); }

function safeSlug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0,80); }

async function propose() {
  const prompt = `Propose 3 high-impact blog topics and 2 service page expansions for an AI marketplace (talent-client platform). Output JSON { blogs: [{title, summary, keywords[]}], services: [{title, valueProp, outline[]}]} .`;
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.7 })
  });
  const json = await res.json();
  try { return JSON.parse(json?.choices?.[0]?.message?.content || '{}'); } catch { return { blogs: [], services: [] }; }
}

function writeBlogDraft(title, summary, keywords) {
  const slug = safeSlug(title);
  const dir = path.join(process.cwd(), 'pages', 'blog');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${slug}.tsx`);
  if (fs.existsSync(file)) return;
  const body = `export default function ${slug.replace(/-([a-z])/g, (_,c)=>c.toUpperCase())}(){return <article className=\"container mx-auto p-6\"><h1 className=\"text-2xl font-bold\">${title}</h1><p className=\"mt-3\">${summary}</p><ul className=\"mt-4 list-disc pl-6\">${(keywords||[]).map(k=>`<li>${k}</li>`).join('')}</ul></article>}
`;
  fs.writeFileSync(file, body);
}

function writeServiceDraft(title, outline) {
  const slug = safeSlug(title);
  const dir = path.join(process.cwd(), 'pages', 'services');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${slug}.tsx`);
  if (fs.existsSync(file)) return;
  const body = `export default function ${slug.replace(/-([a-z])/g, (_,c)=>c.toUpperCase())}(){return <section className=\"container mx-auto p-6\"><h1 className=\"text-2xl font-bold\">${title}</h1><ol className=\"mt-3 list-decimal pl-6\">${(outline||[]).map(s=>`<li>${s}</li>`).join('')}</ol></section>}
`;
  fs.writeFileSync(file, body);
}

async function main(){
  const ideas = await propose();
  for(const b of ideas.blogs||[]) writeBlogDraft(b.title, b.summary, b.keywords);
  for(const s of ideas.services||[]) writeServiceDraft(s.title, s.outline);
  console.log('✅ Content drafts generated');
}

main().catch(e=>{console.error(e); process.exit(0);});