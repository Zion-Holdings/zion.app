#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

(async () => {
  const base = process.env.SITE_BASE_URL || process.env.URL || process.env.NETLIFY_BASE_URL;
  const start = base || 'https://example.com';
  const graph = { base: start, generatedAt: new Date().toISOString(), nodes: [], edges: [] };

  try {
    const res = await axios.get(start, { timeout: 10000 });
    const $ = cheerio.load(res.data);
    const anchors = Array.from($('a')).map(a => $(a).attr('href')).filter(Boolean);
    const abs = anchors.map(h => { try { return new URL(h, start).href; } catch { return null; } }).filter(Boolean);
    const internal = abs.filter(u => u.startsWith(new URL(start).origin));
    const unique = Array.from(new Set(internal));

    graph.nodes = [start, ...unique];
    graph.edges = unique.map(u => ({ from: start, to: u }));
  } catch (e) {
    graph.error = String(e);
  }

  writeFile(path.resolve(process.cwd(), 'data/internal-link-graph.json'), JSON.stringify(graph, null, 2));
  console.log('Internal link graph written to data/internal-link-graph.json');
})();