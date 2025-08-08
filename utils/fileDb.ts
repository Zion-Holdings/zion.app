import fs from 'fs';
import path from 'path';

const root = process.cwd();

export async function readJson<T = any>(relativePath: string): Promise<T | null> {
  try {
    const full = path.join(root, relativePath);
    if (!fs.existsSync(full)) return null;
    const text = await fs.promises.readFile(full, 'utf8');
    return JSON.parse(text) as T;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('readJson error', e);
    return null;
  }
}

export async function writeJson(relativePath: string, data: any): Promise<void> {
  const full = path.join(root, relativePath);
  await fs.promises.mkdir(path.dirname(full), { recursive: true });
  const text = JSON.stringify(data, null, 2);
  await fs.promises.writeFile(full, text, 'utf8');
}