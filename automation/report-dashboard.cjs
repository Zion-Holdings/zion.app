#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();

function maybeReadJSON(p) {
  try { return fse.readJSONSync(p); } catch (_) { return null; }
}

async function main() {
  const dashboard = { generatedAt: new Date().toISOString(), sections: {} };

  const linkLatest = maybeReadJSON(path.join(ROOT, 'public', 'reports', 'links', 'latest.json'));
  if (linkLatest) dashboard.sections.links = linkLatest.summary;

  const freshness = maybeReadJSON(path.join(ROOT, 'public', 'reports', 'content-freshness.json'));
  if (freshness) dashboard.sections.freshness = freshness;

  const searchIndex = maybeReadJSON(path.join(ROOT, 'public', 'search', 'index.json'));
  if (searchIndex) dashboard.sections.search = { pages: Array.isArray(searchIndex) ? searchIndex.length : 0 };

  const embeddings = maybeReadJSON(path.join(ROOT, 'public', 'search', 'embeddings.json'));
  if (embeddings) dashboard.sections.embeddings = { entries: Array.isArray(embeddings) ? embeddings.length : 0 };

  const graph = maybeReadJSON(path.join(ROOT, 'public', 'graph', 'knowledge-graph.json'));
  if (graph) dashboard.sections.graph = { nodes: graph.nodes?.length || 0, edges: graph.edges?.length || 0 };

  const talentIndex = maybeReadJSON(path.join(ROOT, 'public', 'talent', 'index.json'));
  if (talentIndex) dashboard.sections.talent = { profiles: Array.isArray(talentIndex) ? talentIndex.length : 0 };

  const out = path.join(ROOT, 'public', 'reports', 'dashboard.json');
  await fse.ensureDir(path.dirname(out));
  await fse.writeJSON(out, dashboard, { spaces: 2 });
  console.log('Report dashboard generated');
}

main().catch((err) => { console.error(err); process.exit(1); });