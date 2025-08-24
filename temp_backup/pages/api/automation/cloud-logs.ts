import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

async function fetchFromGitHub(): Promise<any[]> {
  try {
    const repoUrl = require('../../../package.json').repository?.url || '';
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!owner || !repo) return [];
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/automation_logs`;
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' };
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    const resp = await fetch(apiUrl, { headers });
    if (!resp.ok) return [];
    const files = (await resp.json()) as Array<{ name: string; download_url: string; type: string }>;
    const jsonFiles = files.filter((f) => f.type === 'file' && f.name.endsWith('.json'));
    const results: any[] = [];
    for (const f of jsonFiles.slice(-50).reverse()) {
      try {
        const r = await fetch(f.download_url, { headers });
        if (!r.ok) continue;
        const j = await r.json();
        results.push({ id: j.id || f.name, file: f.name, generatedAt: j.generatedAt, insights: j.insights });
      } catch {
        // ignore
      }
    }
    return results;
  } catch {
    return [];
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'automation_logs');
  try {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse();
      if (files.length > 0) {
        const logs = files.slice(0, 50).map((f) => {
          try {
            const raw = fs.readFileSync(path.join(dir, f), 'utf8');
            const json = JSON.parse(raw);
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights };
          } catch {
            return { id: f, file: f };
          }
        });
        return res.status(200).json({ logs });
      }
    }
  } catch {
    // fall through to GitHub
  }

  const remote = await fetchFromGitHub();
  return res.status(200).json({ logs: remote });
}