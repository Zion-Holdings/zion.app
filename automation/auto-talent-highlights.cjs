#!/usr/bin/env node
/*
  Auto Talent Highlights: Reads the local talent dataset and produces a simple
  markdown highlights file suitable for the site.
*/
const fs = require('fs');
const path = require('path');

async function loadTalent() {
  // Load the TS file in a simple way: read it and eval the exported array using a regex.
  // This avoids a TS transpilation step.
  const file = path.join(process.cwd(), 'data', 'talent.ts');
  const src = fs.readFileSync(file, 'utf8');
  const match = src.match(/export const TALENT_PROFILES: TalentProfile\[] = \[(\s|\S)*?\];/);
  if (!match) return [];
  const arrText = src.substring(src.indexOf('['), src.lastIndexOf(']') + 1);
  // Unsafe eval guard: in repo-controlled file only. Otherwise, fallback.
  try {
    const jsonish = arrText
      .replace(/(\w+):/g, '"$1":')
      .replace(/'([^']*)'/g, '"$1"');
    const parsed = JSON.parse(jsonish);
    return parsed;
  } catch (e) {
    return [];
  }
}

async function main() {
  const talent = await loadTalent();
  const outDir = path.join(process.cwd(), 'data', 'automation');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const lines = [];
  lines.push(`# Talent Highlights`);
  lines.push('');
  if (talent.length === 0) {
    lines.push('No talent data found.');
  } else {
    for (const t of talent) {
      lines.push(`- **${t.name}** — ${t.title} (${t.location}) • $${t.hourlyRateUsd}/hr`);
    }
  }
  const out = lines.join('\n');
  fs.writeFileSync(path.join(outDir, 'talent-highlights.md'), out, 'utf8');
  console.log('[auto-talent-highlights] Wrote data/automation/talent-highlights.md');
}

main().catch((e) => {
  console.error('auto-talent-highlights failed', e);
  process.exit(1);
});