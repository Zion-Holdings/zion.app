import fs from 'fs';
import path from 'path';

export type JsonRecord = Record<string, unknown> | Array<unknown>;

const dataDir = path.resolve(process.cwd(), 'data');

function ensureDataDir(): void {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

export function readJsonFile<T extends JsonRecord>(fileName: string, fallback: T): T {
  ensureDataDir();
  const targetPath = path.join(dataDir, fileName);
  try {
    if (!fs.existsSync(targetPath)) {
      fs.writeFileSync(targetPath, JSON.stringify(fallback, null, 2), 'utf8');
      return fallback;
    }
    const raw = fs.readFileSync(targetPath, 'utf8');
    return JSON.parse(raw) as T;
  } catch (error) {
    return fallback;
  }
}

export function writeJsonFile<T extends JsonRecord>(fileName: string, data: T): void {
  ensureDataDir();
  const targetPath = path.join(dataDir, fileName);
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
}

export function updateJsonFile<T extends JsonRecord>(fileName: string, updater: (current: T) => T, fallback: T): T {
  const current = readJsonFile<T>(fileName, fallback);
  const updated = updater(current);
  writeJsonFile<T>(fileName, updated);
  return updated;
}