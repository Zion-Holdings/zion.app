#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const TALENT_INDEX = path.join(ROOT, 'public', 'talent', 'index.json');
const OUTPUT = path.join(ROOT, 'public', 'graph', 'knowledge-graph.json');

function listMarkdownAndPages(dir) {
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
      } else if (/\.(md|mdx|tsx|jsx)$/.test(entry)) {
        results.push(full);
      }
    }
  }
  return results;
}

function routeFromFile(full) {
  let rel = full.replace(PAGES_DIR, '').replace(/\\/g, '/');
  rel = rel.replace(/\.(md|mdx|tsx|jsx)$/i, '');
  if (rel.endsWith('/index')) rel = rel.slice(0, -6) || '/';
  return rel.startsWith('/') ? rel : `/${rel}`;
}

function extractTagsFromContent(content) {
  const tags = new Set();
  const words = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^a-zA-Z0-9_\-\s]/g, ' ')
    .toLowerCase()
    .split(/\s+/);
  for (const w of words) {
    if (w.length >= 3 && w.length <= 30) tags.add(w);
  }
  return Array.from(tags).slice(0, 200);
}

async function main() {
  await fse.ensureDir(path.dirname(OUTPUT));
  const files = listMarkdownAndPages(PAGES_DIR);

  const nodes = [];
  const edges = [];
  const tagToNodeId = new Map();
  const pageToNodeId = new Map();

  function ensureTagNode(tag) {
    if (tagToNodeId.has(tag)) return tagToNodeId.get(tag);
    const id = `tag:${tag}`;
    nodes.push({ id, type: 'tag', label: tag });
    tagToNodeId.set(tag, id);
    return id;
  }

  function ensurePageNode(route) {
    if (pageToNodeId.has(route)) return pageToNodeId.get(route);
    const id = `page:${route}`;
    nodes.push({ id, type: 'page', label: route });
    pageToNodeId.set(route, id);
    return id;
  }

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const tags = extractTagsFromContent(content);
    const route = routeFromFile(file);
    const pageId = ensurePageNode(route);
    for (const tag of tags) {
      const tagId = ensureTagNode(tag);
      edges.push({ source: tagId, target: pageId, weight: 1 });
    }
  }

  // Incorporate talent tags
  if (fs.existsSync(TALENT_INDEX)) {
    try {
      const talent = fse.readJSONSync(TALENT_INDEX);
      for (const t of talent) {
        const personId = `talent:${t.id}`;
        nodes.push({ id: personId, type: 'talent', label: t.name || t.slug });
        for (const tag of t.tags || []) {
          const tagId = ensureTagNode(String(tag).toLowerCase());
          edges.push({ source: tagId, target: personId, weight: 2 });
        }
      }
    } catch (_) {}
  }

  const graph = { generatedAt: new Date().toISOString(), nodes, edges };
  await fse.writeJSON(OUTPUT, graph, { spaces: 2 });
  console.log(`Knowledge graph: ${nodes.length} nodes, ${edges.length} edges`);
}

main().catch((err) => { console.error(err); process.exit(1); });