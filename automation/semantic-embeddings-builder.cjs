#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUTPUT_DIR = path.join(ROOT, 'public', 'search');
const OUTPUT_EMBED = path.join(OUTPUT_DIR, 'embeddings.json');
const OUTPUT_META = path.join(OUTPUT_DIR, 'meta.json');

function listPages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current);
    for (const entry of entries) {
      const full = path.join(current, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (entry === 'api') continue;
        stack.push(full);
      } else if (/\.(tsx|jsx|ts|js)$/.test(entry)) {
        results.push(full);
      }
    }
  }
  return results;
}

function routeFromFile(full) {
  let rel = full.replace(PAGES_DIR, '').replace(/\\/g, '/');
  rel = rel.replace(/\.(tsx|jsx|ts|js)$/, '');
  if (rel.endsWith('/index')) rel = rel.slice(0, -6) || '/';
  return rel.startsWith('/') ? rel : `/${rel}`;
}

function extractTitle(content) {
  const m = content.match(/<title>([^<]+)<\/title>/i);
  return m ? m[1].trim() : '';
}

function extractH1(content) {
  const m = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  return m ? m[1].trim() : '';
}

function cleanText(content) {
  return content
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/[^a-zA-Z0-9_\-\s]/g, ' ')
    .replace(/\s+/g, ' ') 
    .trim();
}

function tokenize(text) {
  return text.toLowerCase().split(/\s+/).filter((t) => t && t.length <= 40);
}

function bowWeights(tokens) {
  const freq = new Map();
  for (const t of tokens) {
    freq.set(t, (freq.get(t) || 0) + 1);
  }
  const entries = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]).slice(0, 200);
  return Object.fromEntries(entries);
}

function simpleHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}

function hashedVector(weights, dims = 256) {
  const vec = new Float32Array(dims);
  for (const [token, w] of Object.entries(weights)) {
    const idx = simpleHash(token) % dims;
    vec[idx] += w;
  }
  return Array.from(vec);
}

async function openAIEmbed(texts) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ZION;
  if (!apiKey) return null;
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const res = await client.embeddings.create({
      model: 'text-embedding-3-small',
      input: texts,
    });
    return res.data.map((d) => d.embedding);
  } catch (e) {
    return null;
  }
}

async function main() {
  const files = listPages(PAGES_DIR);
  const metas = [];
  const corpus = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const route = routeFromFile(file);
    const title = extractTitle(content);
    const h1 = extractH1(content);
    const text = cleanText(content);
    metas.push({ route, title, h1 });
    corpus.push(`${title}. ${h1}. ${text}`.slice(0, 8000));
  }

  let embeddings = await openAIEmbed(corpus);
  if (!embeddings) {
    embeddings = corpus.map((t) => hashedVector(bowWeights(tokenize(t)), 256));
  }

  await fse.ensureDir(OUTPUT_DIR);
  await fse.writeJSON(OUTPUT_META, metas, { spaces: 2 });
  await fse.writeJSON(OUTPUT_EMBED, embeddings.map((e, i) => ({ route: metas[i].route, vector: e })), { spaces: 2 });
  console.log(`Semantic embeddings built for ${embeddings.length} pages`);
}

main().catch((err) => { console.error(err); process.exit(1); });