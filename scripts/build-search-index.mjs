#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, '..', 'public');
const dataDir = path.join(root, '..', 'data');

function readTalent() {
  const p = path.join(dataDir, 'talent.ts');
  if (!fs.existsSync(p)) return [];
  const src = fs.readFileSync(p, 'utf8');
  // naive parse: extract TALENT_PROFILES array JSON-like by eval via temporary module
  // safer: a regex to pull objects; but we can import ts via ts-node/register, which is heavy.
  // Instead, fallback to a tiny heuristic JSON conversion.
  const match = src.match(/TALENT_PROFILES:\s*TalentProfile\[]\s*=\s*\[(\s|\S)*?\];/);
  if (!match) return [];
  const arrText = match[0].replace(/^[\s\S]*?=\s*/, '').replace(/;\s*$/, '');
  // Replace quotes in types like 'Full‑Stack' are fine; keep as JS
  let list = [];
  try {
    // use dynamic eval in a sandboxed function
    // eslint-disable-next-line no-new-func
    const fn = new Function(`return (${arrText})`);
    list = fn();
  } catch (e) {
    list = [];
  }
  return list.map((p) => ({
    type: 'talent',
    id: p.slug,
    title: p.name,
    subtitle: p.title,
    location: p.location,
    tags: p.skills,
    hourlyRateUsd: p.hourlyRateUsd,
    availability: p.availability,
    description: p.bio,
  }));
}

function main() {
  const idx = [
    ...readTalent(),
  ];
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const out = path.join(publicDir, 'search-index.json');
  fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), items: idx }, null, 2));
  console.log(`Wrote ${idx.length} items to ${out}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}