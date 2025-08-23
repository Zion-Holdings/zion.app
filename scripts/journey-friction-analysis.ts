import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { getOpenAI } from '../utils/openai';

function fetchText(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const openai = getOpenAI();
  const base = process.env.SELF_BASE_URL || 'http://localhost:3000';
  const urls = [
    `${base}/`,
    `${base}/investors`,
    `${base}/franchise-portal`,
  ];

  const pages: Array<{ url: string; html: string }> = [];
  for (const url of urls) {
    try { pages.push({ url, html: await fetchText(url) }); } catch { pages.push({ url, html: '' }); }
  }

  const prompt = `You are a senior UX analyst. Given these page HTML snapshots with URLs, analyze user journey friction for signposting, clarity, performance, accessibility, conversion, and trust. Output JSON with keys: topInsights (string[]), prioritizedBacklog (Array<{title:string, description:string, priority:'P0'|'P1'|'P2', area:string}>), and pageNotes (Record<url,string[]>). Be specific, actionable, and non-duplicative. Pages: ${JSON.stringify(pages.map(p => ({ url: p.url, html: p.html.slice(0, 40000) })))} `;

  const completion = await (openai as any).chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.2,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: 'You are a precise UX analytics assistant. Always output valid JSON.' },
      { role: 'user', content: prompt },
    ],
  });

  const outDir = path.join(process.cwd(), 'data', 'reports', 'journey');
  fs.mkdirSync(outDir, { recursive: true });
  const jsonText = completion.choices?.[0]?.message?.content || '{}';
  fs.writeFileSync(path.join(outDir, 'latest.json'), jsonText);
  console.log('Journey friction report written');
}

main().catch((e) => { console.error(e); process.exit(1); });