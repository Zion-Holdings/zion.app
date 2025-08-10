import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { getOpenAI } from '../utils/openai';

function run(cmd: string): string {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }).trim();
}

async function main() {
  const openai = getOpenAI();
  const since = process.env.CHANGELOG_SINCE || '1 week ago';
  const raw = run(`git log --since="${since}" --pretty=format:%h:::%an:::%ad:::%s --date=short`);
  const entries = raw.split('\n').filter(Boolean).map(l => {
    const [hash, author, date, subject] = l.split(':::');
    return { hash, author, date, subject };
  });

  const prompt = `Summarize these commits into a concise changelog with sections (Features, Fixes, Performance, Docs, Infra), and a short executive summary. Output JSON with keys: summary (string), sections (Record<section,string[]>), highlights (string[]). Commits: ${JSON.stringify(entries).slice(0, 120000)}`;

  const completion = await (openai as any).chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.2,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: 'You are a precise changelog assistant. Always output valid JSON.' },
      { role: 'user', content: prompt },
    ],
  });

  const jsonText = completion.choices?.[0]?.message?.content || '{}';
  const data = JSON.parse(jsonText);

  const publicDir = path.join(process.cwd(), 'public', 'changelog');
  fs.mkdirSync(publicDir, { recursive: true });
  const mdLines: string[] = [];
  mdLines.push(`# Weekly Changelog`);
  mdLines.push('');
  mdLines.push(data.summary || '');
  mdLines.push('');
  for (const [section, items] of Object.entries(data.sections || {})) {
    mdLines.push(`## ${section}`);
    for (const it of items as string[]) mdLines.push(`- ${it}`);
    mdLines.push('');
  }
  if (Array.isArray(data.highlights) && data.highlights.length) {
    mdLines.push('## Highlights');
    for (const h of data.highlights) mdLines.push(`- ${h}`);
    mdLines.push('');
  }
  fs.writeFileSync(path.join(publicDir, 'latest.md'), mdLines.join('\n'));

  const outDir = path.join(process.cwd(), 'data', 'reports', 'changelog');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(data, null, 2));
  console.log('Changelog updated');
}

main().catch((e) => { console.error(e); process.exit(1); });