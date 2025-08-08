#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const DB_PATH = path.join(process.cwd(), 'data', 'community', 'db.json');
const LOG_DIR = path.join(process.cwd(), 'data', 'reports', 'moderation');

if (!OPENAI_API_KEY) {
  console.log('No OPENAI_API_KEY, skipping moderation.');
  process.exit(0);
}

if (!fs.existsSync(DB_PATH)) {
  console.log('No community db.json, skipping moderation.');
  process.exit(0);
}

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));

function chunk(arr, size) { return arr.reduce((a, _, i) => (i % size ? a : [...a, arr.slice(i, i + size)]), []); }

async function classify(text) {
  const prompt = `Moderate and tag the following forum content. Return JSON with fields: { abusive: boolean, severity: 0-3, tags: string[], action?: 'lock'|'none', reason: string }\nText:\n${text.slice(0, 4000)}`;
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0 })
  });
  const json = await res.json();
  const content = json?.choices?.[0]?.message?.content || '{}';
  try { return JSON.parse(content); } catch { return { abusive: false, severity: 0, tags: [], action: 'none', reason: 'parse_error' }; }
}

async function run() {
  const changes = [];
  const now = new Date().toISOString();
  // Moderate threads
  for (const th of db.threads || []) {
    const analysis = await classify(`${th.title}\n${th.body}`);
    if (analysis.tags?.length) {
      const tags = Array.from(new Set([...(th.tags || []), ...analysis.tags.slice(0, 5)]));
      if (tags.join('|') !== (th.tags || []).join('|')) { th.tags = tags; th.updatedAt = now; changes.push({ type: 'tag', id: th.id, tags }); }
    }
    if (analysis.abusive && analysis.severity >= 2 && !th.isLocked) {
      th.isLocked = true; th.updatedAt = now; changes.push({ type: 'lock', id: th.id, reason: analysis.reason });
    }
  }
  // Moderate replies (optional locking parent severity)
  for (const rp of db.replies || []) {
    const analysis = await classify(rp.body || '');
    if (analysis.abusive && analysis.severity >= 2 && !rp.isDeleted) {
      rp.isDeleted = true; rp.updatedAt = now; changes.push({ type: 'delete-reply', id: rp.id, reason: analysis.reason });
    }
  }
  if (changes.length) {
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
    const logName = path.join(LOG_DIR, `moderation-${Date.now()}.json`);
    fs.writeFileSync(logName, JSON.stringify({ ts: now, changes }, null, 2));
    console.log(`✅ Moderation updated ${changes.length} items`);
  } else {
    console.log('No moderation changes.');
  }
}

run().catch((e) => { console.error(e); process.exit(0); });