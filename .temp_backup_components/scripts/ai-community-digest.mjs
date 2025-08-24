#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const DB = path.join(process.cwd(), 'data', 'community', 'db.json');
const OUT_DIR = path.join(process.cwd(), 'data', 'reports', 'community-digest');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

if (!fs.existsSync(DB)) { console.log('No community DB'); process.exit(0); }
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

const db = JSON.parse(fs.readFileSync(DB, 'utf8'));

const threads = (db.threads || []).slice().sort((a,b)=> (b.votes+(b.replyCount*0.5)) - (a.votes+(a.replyCount*0.5))).slice(0,10);

async function summarize(items){
  if (!OPENAI_API_KEY) return 'OpenAI key missing; listing top threads.';
  const text = items.map((t,i)=> `${i+1}. ${t.title} (votes: ${t.votes}, replies: ${t.replyCount})\n${t.body.slice(0,300)}`).join('\n\n');
  const prompt = `Create a concise weekly digest from forum threads with actionable bullet points and highlights.\n\n${text}`;
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.3 })
  });
  const json = await res.json();
  return json?.choices?.[0]?.message?.content || '';
}

function escapeXml(s){return s.replace(/[<&>]/g,c=>({"<":"&lt;","&":"&amp;",">":"&gt;"}[c]));}

async function main(){
  const summary = await summarize(threads);
  const now = new Date();
  const iso = now.toISOString();
  const md = [`# Community Digest (${iso})\n`, summary, '\n', ...threads.map(t=>`- ${t.title} — votes:${t.votes} replies:${t.replyCount}`)].join('\n');
  const mdFile = path.join(OUT_DIR, `digest-${Date.now()}.md`);
  fs.writeFileSync(mdFile, md);

  const items = threads.map(t=>`<item><title>${escapeXml(t.title)}</title><link>https://ziontechgroup.com/community/thread/${t.id}</link><pubDate>${iso}</pubDate><description>${escapeXml(t.body.slice(0,300))}</description></item>`).join('\n');
  const rss = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Zion Community Digest</title><link>https://ziontechgroup.com/community</link><description>Top community threads</description><lastBuildDate>${iso}</lastBuildDate>${items}</channel></rss>`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'community-digest.xml'), rss);
  console.log('✅ Community digest generated');
}

main().catch(e=>{console.error(e); process.exit(0);});