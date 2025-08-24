/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

const HOST = process.env.SELF_HOST || 'http://localhost:3000';

async function post(url: string, body: any) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  return await res.json();
}

async function main() {
  const seedsPath = path.join(process.cwd(), 'data', 'page-metadata', 'seo-seeds.json');
  if (!fs.existsSync(seedsPath)) {
    console.log('No seeds file found at', seedsPath);
    process.exit(0);
  }
  const seeds = JSON.parse(fs.readFileSync(seedsPath, 'utf8')) as Array<{ prompt: string; region?: string; service?: string }>;
  const outDir = path.join(process.cwd(), 'data', 'page-metadata', 'seo');
  fs.mkdirSync(outDir, { recursive: true });
  for (const s of seeds) {
    const gen = await post(`${HOST}/api/seo/generate`, s);
    if (gen?.slug && gen?.payload) {
      fs.writeFileSync(path.join(outDir, `${gen.slug}.json`), JSON.stringify(gen.payload, null, 2));
      console.log('Generated', gen.slug);
    }
  }
}

main().catch((e) => { console.error(e); process.exit(1); });