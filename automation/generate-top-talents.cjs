#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reviewsPath = path.join(process.cwd(), 'data', 'reviews.json');
const talentsPath = path.join(process.cwd(), 'data', 'talent.ts');
const outDir = path.join(process.cwd(), 'public', 'automations');
const outFile = path.join(outDir, 'top-talents.json');

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return []; }
}

function safeExtractTalents() {
  // Quick parse of talent.ts for slugs and names without TS execution
  try {
    const raw = fs.readFileSync(talentsPath, 'utf8');
    const entries = [...raw.matchAll(/slug:\s*'([^']+)'[\s\S]*?name:\s*'([^']+)'/g)];
    const map = {};
    for (const m of entries) { map[m[1]] = m[2]; }
    return map;
  } catch {
    return {};
  }
}

(function run() {
  const reviews = readJson(reviewsPath).filter((r) => r && r.approved && !r.removed && r.toRole === 'talent');
  const byTalent = new Map();
  for (const r of reviews) {
    const arr = byTalent.get(r.toId) || [];
    arr.push(r);
    byTalent.set(r.toId, arr);
  }
  const talentNameMap = safeExtractTalents();
  const ranked = Array.from(byTalent.entries()).map(([talentSlug, arr]) => {
    const avg = arr.reduce((s, r) => s + (r.rating || 0), 0) / (arr.length || 1);
    return {
      talentSlug,
      talentName: talentNameMap[talentSlug] || talentSlug,
      averageRating: Math.round(avg * 10) / 10,
      totalReviews: arr.length,
      mostRecent: arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3).map((r) => ({ id: r.id, rating: r.rating, createdAt: r.createdAt })),
    };
  }).sort((a, b) => b.averageRating - a.averageRating || b.totalReviews - a.totalReviews).slice(0, 20);

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), items: ranked }, null, 2));
  console.log(`[generate-top-talents] wrote ${outFile} with ${ranked.length} items`);
})();