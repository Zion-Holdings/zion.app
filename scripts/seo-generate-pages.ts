/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import https from 'https';

const HOST = process.env.SELF_HOST || 'http://localhost:3000';

const prompts: Array<{ prompt: string; region?: string; service?: string }> = [
  { prompt: 'AI Devs in Brazil', region: 'Brazil', service: 'AI' },
  { prompt: 'Rent Servers in Kabul', region: 'Kabul', service: 'servers' },
  { prompt: 'LLM Engineers in Toronto', region: 'Toronto', service: 'LLM' },
  { prompt: 'Cybersecurity Experts in Berlin', region: 'Berlin', service: 'security' },
];

async function postJson(url: string, body: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = JSON.stringify(body);
    const opts: any = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) },
    };
    const lib = u.protocol === 'https:' ? https : require('http');
    const req = lib.request(url, opts, (res: any) => {
      let buf = '';
      res.on('data', (d: any) => (buf += d));
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); } catch { resolve({}); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  const outDir = path.join(process.cwd(), 'data', 'page-metadata', 'seo');
  fs.mkdirSync(outDir, { recursive: true });

  for (const p of prompts) {
    const res = await postJson(`${HOST}/api/seo/generate`, p);
    if (!res || !res.slug || !res.payload) {
      console.warn('Generate failed for', p.prompt);
      continue;
    }
    const file = path.join(outDir, `${res.slug}.json`);
    fs.writeFileSync(file, JSON.stringify(res.payload, null, 2));
    console.log('Wrote', file);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});