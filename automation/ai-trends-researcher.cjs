#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

const LOG_DIR = path.join(__dirname, 'logs');
const OUT_DIR = path.join(__dirname, 'research');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const LOG = path.join(LOG_DIR, 'ai-trends-researcher.log');

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
      });
    }).on('error', reject);
  });
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function gatherSources() {
  const sources = [];
  try {
    // Hugging Face blog RSS via JSON proxy (example public endpoint)
    const hf = await fetchText('https://huggingface.co/blog/feed.xml');
    sources.push({ name: 'huggingface-blog', content: hf?.slice(0, 200000) || '' });
  } catch (e) { log(`HF fetch error: ${e.message}`); }
  try {
    // OpenAI research blog RSS
    const oai = await fetchText('https://openai.com/blog/rss');
    sources.push({ name: 'openai-blog', content: oai?.slice(0, 200000) || '' });
  } catch (e) { log(`OpenAI fetch error: ${e.message}`); }
  try {
    // Papers with Code trending
    const pwc = await fetchText('https://paperswithcode.com/trends');
    sources.push({ name: 'pwc-trends', content: pwc?.slice(0, 200000) || '' });
  } catch (e) { log(`PWC fetch error: ${e.message}`); }
  return sources;
}

function summarize(text) {
  const lines = text.split(/\n+/).filter(Boolean);
  const bullets = lines
    .map((l) => l.trim())
    .filter((l) => /\b(AI|LLM|model|framework|tool|release|benchmark|agent|autonomous|RAG|vector|inference)\b/i.test(l))
    .slice(0, 30);
  return bullets;
}

async function main() {
  log('🚀 AI Trends Researcher start');
  const sources = await gatherSources();
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outPath = path.join(OUT_DIR, `ai-trends-${timestamp}.json`);

  const findings = [];
  for (const s of sources) {
    const bullets = summarize(s.content || '');
    findings.push({ source: s.name, items: bullets });
  }

  const summary = {
    timestamp: new Date().toISOString(),
    findings,
    hints: [
      'Consider generating new automations for any repeated patterns in tools or frameworks mentioned.',
      'Add agents to try new SDKs or APIs by scaffolding integration tests first.',
      'Create orchestrators to run experiments on new fine-tuning or inference optimizations.',
    ],
  };

  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2));
  log(`✅ Wrote research: ${outPath}`);
}

if (require.main === module) {
  main().catch((e) => { log(`❌ Fatal: ${e.message}`); process.exit(1); });
}