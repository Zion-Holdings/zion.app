#!/usr/bin/env node

/*
  AI Content Curator
  - If OPENAI_API_KEY is set, produce or refresh small curated artifacts
  - Writes data under data/ai-curation/
  - Skips gracefully if environment lacks credentials
*/

const fs = require('fs');
const path = require('path');
const https = require('https');

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[ai-curation ${ts}] ${msg}`);
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

async function generateIdeas() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    log('OPENAI_API_KEY not set; skipping');
    return null;
  }

  const body = JSON.stringify({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a concise curator for a tech product website.' },
      { role: 'user', content: 'Generate 5 short actionable growth experiments for an AI marketplace homepage. Return as a JSON array of objects with fields: title, hypothesis, metric, effort (1-5), impact (1-5).' },
    ],
    temperature: 0.5,
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };

  const response = await fetchJson('https://api.openai.com/v1/chat/completions', options, body);
  const text = response?.choices?.[0]?.message?.content?.trim();
  if (!text) return [];

  // Try to parse JSON from model output; fallback to plain text lines
  try {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) return parsed;
  } catch {}

  return text
    .split('\n')
    .map((line) => line.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean)
    .slice(0, 5)
    .map((t) => ({ title: t, hypothesis: '', metric: '', effort: 2, impact: 3 }));
}

function fetchJson(url, options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve({});
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  try {
    const outDir = path.join(process.cwd(), 'data', 'ai-curation');
    ensureDir(outDir);

    const ideas = (await generateIdeas()) || [];
    const ideasPath = path.join(outDir, 'growth-experiments.json');
    fs.writeFileSync(ideasPath, JSON.stringify({ updatedAt: new Date().toISOString(), items: ideas }, null, 2));
    log(`wrote ${ideas.length} experiments to ${ideasPath}`);
  } catch (e) {
    log(`error: ${e.message}`);
    process.exit(0);
  }
}

main();