#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function writeJsonPretty(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function listFiles(dir) {
  try { return fs.readdirSync(dir).filter((f) => f.endsWith('.json')); } catch { return []; }
}

function readJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return null; }
}

function readTalentProfiles() {
  const talentFile = path.join(__dirname, '..', 'data', 'talent.ts');
  const src = fs.readFileSync(talentFile, 'utf8');
  const anchor = src.indexOf('export const TALENT_PROFILES');
  if (anchor === -1) return [];
  const after = src.slice(anchor);
  const eq = after.indexOf('=');
  if (eq === -1) return [];
  const arrStart = after.indexOf('[', eq);
  if (arrStart === -1) return [];
  let depth = 0;
  let endPos = -1;
  for (let i = arrStart; i < after.length; i++) {
    const ch = after[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) { endPos = i; break; }
    }
  }
  if (endPos === -1) return [];
  const arrayText = after.slice(arrStart, endPos + 1);
  // eslint-disable-next-line no-new-func
  const profiles = Function('return ' + arrayText)();
  return Array.isArray(profiles) ? profiles : [];
}

function generateTalentInsights() {
  const profiles = readTalentProfiles();
  const nowIso = new Date().toISOString();

  const skillsCount = new Map();
  for (const p of profiles) {
    for (const s of p.skills || []) skillsCount.set(s, (skillsCount.get(s) || 0) + 1);
  }
  const trendingSkills = Array.from(skillsCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }));

  const topRated = [...profiles]
    .filter((p) => typeof p.rating === 'number')
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5)
    .map((p) => ({ slug: p.slug, name: p.name, rating: p.rating, bookings: p.bookings || 0 }));

  const mostBooked = [...profiles]
    .filter((p) => typeof p.bookings === 'number')
    .sort((a, b) => (b.bookings || 0) - (a.bookings || 0))
    .slice(0, 5)
    .map((p) => ({ slug: p.slug, name: p.name, bookings: p.bookings, rating: p.rating || null }));

  const insights = {
    generatedAt: nowIso,
    totals: {
      profiles: profiles.length,
      distinctSkills: skillsCount.size,
    },
    trendingSkills,
    topRated,
    mostBooked,
  };

  const outDir = path.join(__dirname, '..', 'public', 'automations', 'talent-insights');
  ensureDir(outDir);
  const stamp = nowIso.replace(/[:.]/g, '-');
  writeJsonPretty(path.join(outDir, `insights-${stamp}.json`), insights);
  writeJsonPretty(path.join(outDir, 'latest.json'), insights);
  return { key: 'talent-insights', name: 'Autonomous Talent Insights', latestPath: '/automations/talent-insights/latest.json', stampPath: `/automations/talent-insights/insights-${stamp}.json`, generatedAt: nowIso };
}

function generateMarketplacePulse() {
  const profiles = readTalentProfiles();
  const nowIso = new Date().toISOString();

  const avgRate = profiles.length ? Math.round((profiles.reduce((a, p) => a + (p.hourlyRateUsd || 0), 0) / profiles.length) * 10) / 10 : 0;
  const availability = profiles.reduce((acc, p) => {
    acc[p.availability] = (acc[p.availability] || 0) + 1;
    return acc;
  }, {});
  const regions = profiles.reduce((acc, p) => {
    const r = (p.timezone || 'Unknown');
    acc[r] = (acc[r] || 0) + 1;
    return acc;
  }, {});

  const pulse = {
    generatedAt: nowIso,
    metrics: {
      profiles: profiles.length,
      avgHourlyRateUsd: avgRate,
      availability,
      regions,
    },
  };

  const outDir = path.join(__dirname, '..', 'public', 'automations', 'pulse');
  ensureDir(outDir);
  const stamp = nowIso.replace(/[:.]/g, '-');
  writeJsonPretty(path.join(outDir, `pulse-${stamp}.json`), pulse);
  writeJsonPretty(path.join(outDir, 'latest.json'), pulse);
  return { key: 'marketplace-pulse', name: 'Marketplace Pulse', latestPath: '/automations/pulse/latest.json', stampPath: `/automations/pulse/pulse-${stamp}.json`, generatedAt: nowIso };
}

function generateRoleIntelligence() {
  const profiles = readTalentProfiles();
  const nowIso = new Date().toISOString();
  // Simple heuristic mapping
  const roleMap = [
    { role: 'LLM Engineer', includes: ['LLM', 'LangChain', 'RAG', 'OpenAI'] },
    { role: 'Cloud Architect', includes: ['AWS', 'Kubernetes', 'Terraform', 'Serverless'] },
    { role: 'Data Scientist', includes: ['Python', 'PyTorch', 'NLP'] },
    { role: 'Full-Stack AI Engineer', includes: ['Next.js', 'TypeScript', 'OpenAI'] },
    { role: 'Security Engineer', includes: ['AppSec', 'Threat', 'IAM', 'Zero Trust'] },
  ];

  const candidates = roleMap.map((rm) => {
    const matches = profiles.filter((p) => (p.skills || []).some((s) => rm.includes.some((k) => s.toLowerCase().includes(k.toLowerCase()))));
    const top = matches
      .map((p) => ({ slug: p.slug, name: p.name, score: (p.rating || 0) + (p.bookings || 0) / 50 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    return { role: rm.role, topCandidates: top, totalMatches: matches.length };
  });

  const out = { generatedAt: nowIso, roles: candidates };
  const outDir = path.join(__dirname, '..', 'public', 'automations', 'role-intel');
  ensureDir(outDir);
  const stamp = nowIso.replace(/[:.]/g, '-');
  writeJsonPretty(path.join(outDir, `roles-${stamp}.json`), out);
  writeJsonPretty(path.join(outDir, 'latest.json'), out);
  return { key: 'role-intel', name: 'Role Intelligence', latestPath: '/automations/role-intel/latest.json', stampPath: `/automations/role-intel/roles-${stamp}.json`, generatedAt: nowIso };
}

function generateRateDistribution() {
  const profiles = readTalentProfiles();
  const nowIso = new Date().toISOString();
  const buckets = [0, 50, 75, 100, 125, 150, 200];
  const dist = {};
  for (let i = 0; i < buckets.length - 1; i++) {
    const label = `$${buckets[i]}-$${buckets[i + 1]}`;
    dist[label] = 0;
  }
  for (const p of profiles) {
    const r = p.hourlyRateUsd || 0;
    let placed = false;
    for (let i = 0; i < buckets.length - 1; i++) {
      if (r >= buckets[i] && r < buckets[i + 1]) {
        dist[`$${buckets[i]}-$${buckets[i + 1]}`] += 1;
        placed = true;
        break;
      }
    }
    if (!placed) dist['$200+'] = (dist['$200+'] || 0) + 1;
  }
  const out = { generatedAt: nowIso, buckets: dist };
  const outDir = path.join(__dirname, '..', 'public', 'automations', 'rate-distribution');
  ensureDir(outDir);
  const stamp = nowIso.replace(/[:.]/g, '-');
  writeJsonPretty(path.join(outDir, `rates-${stamp}.json`), out);
  writeJsonPretty(path.join(outDir, 'latest.json'), out);
  return { key: 'rate-distribution', name: 'Rate Distribution', latestPath: '/automations/rate-distribution/latest.json', stampPath: `/automations/rate-distribution/rates-${stamp}.json`, generatedAt: nowIso };
}

function generateTrendsWithDelta() {
  const nowIso = new Date().toISOString();
  const dir = path.join(__dirname, '..', 'public', 'automations', 'pulse');
  const files = listFiles(dir).filter((f) => f.startsWith('pulse-')).sort();
  const latest = readJson(path.join(dir, 'latest.json'));
  const prevFile = files.length >= 2 ? files[files.length - 2] : null;
  const prev = prevFile ? readJson(path.join(dir, prevFile)) : null;
  const delta = {};
  if (latest && prev) {
    delta.profiles = (latest.metrics?.profiles || 0) - (prev.metrics?.profiles || 0);
    delta.avgHourlyRateUsd = (latest.metrics?.avgHourlyRateUsd || 0) - (prev.metrics?.avgHourlyRateUsd || 0);
    delta.availability = {};
    const keys = new Set([...(Object.keys(latest.metrics?.availability || {})), ...(Object.keys(prev.metrics?.availability || {}))]);
    for (const k of keys) {
      delta.availability[k] = (latest.metrics?.availability?.[k] || 0) - (prev.metrics?.availability?.[k] || 0);
    }
    delta.regions = {};
    const rkeys = new Set([...(Object.keys(latest.metrics?.regions || {})), ...(Object.keys(prev.metrics?.regions || {}))]);
    for (const k of rkeys) {
      delta.regions[k] = (latest.metrics?.regions?.[k] || 0) - (prev.metrics?.regions?.[k] || 0);
    }
  }
  const out = { generatedAt: nowIso, baselineGeneratedAt: latest?.generatedAt || null, previousGeneratedAt: prev?.generatedAt || null, delta };
  const outDir = path.join(__dirname, '..', 'public', 'automations', 'trends');
  ensureDir(outDir);
  const stamp = nowIso.replace(/[:.]/g, '-');
  writeJsonPretty(path.join(outDir, `trends-${stamp}.json`), out);
  writeJsonPretty(path.join(outDir, 'latest.json'), out);
  return { key: 'trends', name: 'Trends (Delta)', latestPath: '/automations/trends/latest.json', stampPath: `/automations/trends/trends-${stamp}.json`, generatedAt: nowIso };
}

function updateLatestManifest(entries) {
  const manifestPath = path.join(__dirname, '..', 'data', 'reports', 'automations-latest.json');
  const existing = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : { automations: [] };
  const map = new Map((existing.automations || []).map((e) => [e.key, e]));
  for (const e of entries) map.set(e.key, { key: e.key, name: e.name, latestUrl: e.latestPath, lastGeneratedAt: e.generatedAt });
  const updated = { updatedAt: new Date().toISOString(), automations: Array.from(map.values()) };
  writeJsonPretty(manifestPath, updated);
}

(function main() {
  const results = [];
  results.push(generateTalentInsights());
  results.push(generateMarketplacePulse());
  results.push(generateRoleIntelligence());
  results.push(generateRateDistribution());
  results.push(generateTrendsWithDelta());
  updateLatestManifest(results);
  console.log('Autonomous suite completed.');
})();