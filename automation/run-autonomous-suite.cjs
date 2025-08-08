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
  // Convert TS single quotes and trailing commas are fine for JS eval
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
  return { latestPath: '/automations/talent-insights/latest.json', stampPath: `/automations/talent-insights/insights-${stamp}.json`, generatedAt: nowIso };
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
  return { latestPath: '/automations/pulse/latest.json', stampPath: `/automations/pulse/pulse-${stamp}.json`, generatedAt: nowIso };
}

function updateLatestManifest(entries) {
  const manifestPath = path.join(__dirname, '..', 'data', 'reports', 'automations-latest.json');
  const existing = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : { automations: [] };
  const map = new Map(existing.automations.map((e) => [e.key, e]));
  for (const e of entries) map.set(e.key, e);
  const updated = { updatedAt: new Date().toISOString(), automations: Array.from(map.values()) };
  writeJsonPretty(manifestPath, updated);
}

(function main() {
  const insights = generateTalentInsights();
  const pulse = generateMarketplacePulse();
  updateLatestManifest([
    { key: 'talent-insights', name: 'Autonomous Talent Insights', latestUrl: insights.latestPath, lastGeneratedAt: insights.generatedAt },
    { key: 'marketplace-pulse', name: 'Marketplace Pulse', latestUrl: pulse.latestPath, lastGeneratedAt: pulse.generatedAt },
  ]);
  console.log('Autonomous suite completed.');
})();