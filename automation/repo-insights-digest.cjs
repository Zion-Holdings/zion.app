#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function safeReadJson(abs, fallback = null) {
  try { return JSON.parse(fs.readFileSync(abs, 'utf8')); } catch { return fallback; }
}

function fileExists(abs) {
  try { fs.accessSync(abs, fs.constants.F_OK); return true; } catch { return false; }
}

function parseCsvCount(abs) {
  try {
    const txt = fs.readFileSync(abs, 'utf8');
    const lines = txt.trim().split(/\r?\n/);
    return Math.max(0, lines.length - 1); // naive rows excluding header
  } catch { return 0; }
}

function main() {
  const root = path.resolve(__dirname, '..');
  const now = new Date();

  const datasets = {};

  datasets.contentRegistry = safeReadJson(path.join(root, 'public', 'automation', 'content-registry.json'), { datasets: [] });
  datasets.todoSummary = safeReadJson(path.join(root, 'public', 'automation', 'todo-summary.json'), { items: [] });
  datasets.knowledgeGraph = safeReadJson(path.join(root, 'data', 'reports', 'repo-knowledge-graph.json'), { nodes: [], edges: [] });
  datasets.unusedExports = safeReadJson(path.join(root, 'data', 'analysis', 'unused-exports.json'), []);
  datasets.linkReportCount = parseCsvCount(path.join(root, 'link_report.csv'));

  const digest = {
    generatedAtUtc: now.toISOString(),
    metrics: {
      todoItems: datasets.todoSummary.items?.length || 0,
      knowledgeGraph: {
        nodes: datasets.knowledgeGraph.nodes?.length || 0,
        edges: datasets.knowledgeGraph.edges?.length || 0,
      },
      unusedExports: Array.isArray(datasets.unusedExports) ? datasets.unusedExports.length : 0,
      externalLinksChecked: datasets.linkReportCount,
      contentDatasets: Array.isArray(datasets.contentRegistry.datasets) ? datasets.contentRegistry.datasets.length : 0,
    },
    highlights: [],
  };

  if (digest.metrics.unusedExports > 0) {
    digest.highlights.push(`${digest.metrics.unusedExports} potential unused exports detected.`);
  }
  if (digest.metrics.todoItems > 0) {
    digest.highlights.push(`${digest.metrics.todoItems} TODO items summarized.`);
  }
  if (digest.metrics.knowledgeGraph.nodes > 0) {
    digest.highlights.push(`Knowledge graph has ${digest.metrics.knowledgeGraph.nodes} nodes.`);
  }

  const publicDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'repo-daily-digest.json'), JSON.stringify(digest, null, 2));

  const md = [];
  md.push('# Daily Repo Insights Digest');
  md.push('');
  md.push(`Generated: ${now.toISOString()}`);
  md.push('');
  md.push('## Metrics');
  md.push('');
  md.push(`- TODO items: ${digest.metrics.todoItems}`);
  md.push(`- Knowledge graph: ${digest.metrics.knowledgeGraph.nodes} nodes, ${digest.metrics.knowledgeGraph.edges} edges`);
  md.push(`- Unused exports: ${digest.metrics.unusedExports}`);
  md.push(`- External links checked: ${digest.metrics.externalLinksChecked}`);
  md.push(`- Content datasets registered: ${digest.metrics.contentDatasets}`);
  md.push('');
  if (digest.highlights.length) {
    md.push('## Highlights');
    md.push('');
    for (const h of digest.highlights) md.push(`- ${h}`);
    md.push('');
  }

  const docsDir = path.join(root, 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'DAILY_DIGEST.md'), md.join('\n'));

  console.log('Repo insights digest generated.');
}

if (require.main === module) {
  try { main(); } catch (err) { console.error(err); process.exit(1); }
}