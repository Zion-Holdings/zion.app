import fs from 'fs';
import path from 'path';
import { Nation } from '../types/nation';

const dataDir = path.join(process.cwd(), 'data');
const nationsPath = path.join(dataDir, 'nations.json');

function ensureStore() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(nationsPath)) fs.writeFileSync(nationsPath, JSON.stringify([]));
}

export function readAllNations(): Nation[] {
  ensureStore();
  const raw = fs.readFileSync(nationsPath, 'utf-8');
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function writeAllNations(nations: Nation[]) {
  ensureStore();
  fs.writeFileSync(nationsPath, JSON.stringify(nations, null, 2));
}

export function getNationBySlug(slug: string): Nation | undefined {
  return readAllNations().find(n => n.slug === slug);
}

export function upsertNation(nation: Nation): Nation {
  const nations = readAllNations();
  const idx = nations.findIndex(n => n.id === nation.id);
  if (idx >= 0) {
    nations[idx] = nation;
  } else {
    nations.push(nation);
  }
  writeAllNations(nations);
  return nation;
}

export function deleteNationBySlug(slug: string): boolean {
  const nations = readAllNations();
  const filtered = nations.filter(n => n.slug !== slug);
  const changed = filtered.length !== nations.length;
  if (changed) writeAllNations(filtered);
  return changed;
}