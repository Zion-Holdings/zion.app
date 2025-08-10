// Netlify Scheduled Function: Weekly Newsletter Digest
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/newsletter_digest"

export const config = {
  path: "/.netlify/functions/newsletter_digest",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';

function nowStamp() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth()+1)}-${p(d.getUTCDate())}`;
}

async function fetchRSS() {
  const res = await fetch(`${BASE}/feed.xml`, { headers: { 'User-Agent': 'zion-app-newsletter' } });
  if (!res.ok) return '';
  return res.text();
}

function parseItems(xml: string): Array<{ title: string; link: string; date?: string }> {
  const items: Array<{ title: string; link: string; date?: string }> = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) {
    const block = m[1];
    const tt = /<title>([\s\S]*?)<\/title>/i.exec(block)?.[1]?.trim() || '';
    const ll = /<link>([\s\S]*?)<\/link>/i.exec(block)?.[1]?.trim() || '';
    const dd = /<pubDate>([\s\S]*?)<\/pubDate>/i.exec(block)?.[1]?.trim();
    if (tt && ll) items.push({ title: tt, link: ll, date: dd });
  }
  return items.slice(0, 10);
}

export const handler: Handler = async () => {
  try {
    const xml = await fetchRSS();
    const items = parseItems(xml);
    const md = [
      `# Weekly Digest - ${nowStamp()}`,
      '',
      'Stay up-to-date with our latest insights:',
      '',
      ...items.map((i) => `- [${i.title}](${i.link})${i.date ? ` — ${i.date}` : ''}`),
      '',
      '> This is an automated draft. Edit before publishing.',
      '',
    ].join('\n');
    const path = `data/reports/newsletter/drafts/digest-${nowStamp()}.md`;
    const commit = await commitToRepo({ path, content: md, message: 'chore(newsletter): weekly digest draft', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit, items: items.length }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};