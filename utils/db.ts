import fs from 'fs';
import path from 'path';

const DATA_ROOT = path.join(process.cwd(), 'data', 'marketplace');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_ROOT)) {
    fs.mkdirSync(DATA_ROOT, { recursive: true });
  }
}

function getFilePath(fileName: string): string {
  ensureDataDir();
  return path.join(DATA_ROOT, fileName);
}

export function readJsonFile<T>(fileName: string, defaultValue: T): T {
  try {
    const filePath = getFilePath(fileName);
    if (!fs.existsSync(filePath)) {
      return defaultValue;
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (error) {
    return defaultValue;
  }
}

export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
}