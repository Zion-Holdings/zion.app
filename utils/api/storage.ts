import fs from 'fs';
import path from 'path';

export type JsonObject = Record<string, unknown>;

const ROOT_DATA_DIR = path.resolve(process.cwd(), 'data', 'ipo-portal');

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function resolveDataPath(relativePath: string): string {
  const target = path.join(ROOT_DATA_DIR, relativePath);
  ensureDir(path.dirname(target));
  return target;
}

export function readJsonFile<T = unknown>(relativePath: string, fallback: T): T {
  try {
    const fullPath = resolveDataPath(relativePath);
    if (!fs.existsSync(fullPath)) {
      writeJsonFile(relativePath, fallback);
      return fallback;
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(content) as T;
  } catch (error) {
    return fallback;
  }
}

export function writeJsonFile(relativePath: string, data: unknown): void {
  const fullPath = resolveDataPath(relativePath);
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
}

export function appendAuditLog(event: JsonObject): void {
  const auditPath = 'audit-log.json';
  const existing = readJsonFile<JsonObject[]>(auditPath, []);
  existing.push({ ...event, timestamp: new Date().toISOString() });
  writeJsonFile(auditPath, existing);
}