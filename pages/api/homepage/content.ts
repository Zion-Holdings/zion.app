import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

async function fetchFromGitHub(): Promise<any | null> {
  try {
    const pkg = require('../../../package.json');
    const repoUrl: string = pkg.repository?.url || '';
    const match = repoUrl.match(/github.com\/(.+?)\/(.+?)\.git$/i);
    const owner = process.env.GITHUB_OWNER || (match ? match[1] : '');
    const repo = process.env.GITHUB_REPO || (match ? match[2] : '');
    if (!owner || !repo) return null;
    const pathFile = 'public/autonomy/HOMEPAGE_CONTENT.json';
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${pathFile}`;
    const headers: Record<string, string> = { 'User-Agent': 'zion-autonomy' };
    if (process.env.GITHUB_TOKEN) headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    const resp = await fetch(rawUrl, { headers });
    if (!resp.ok) return null;
    return await resp.json();
  } catch {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=600');
  try {
    const localPath = path.join(process.cwd(), 'public', 'autonomy', 'HOMEPAGE_CONTENT.json');
    if (fs.existsSync(localPath)) {
      try {
        const json = JSON.parse(fs.readFileSync(localPath, 'utf8'));
        return res.status(200).json(json);
      } catch {
        // fall back to remote
      }
    }
    const remote = await fetchFromGitHub();
    if (remote) return res.status(200).json(remote);
    return res.status(200).json(null);
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' });
  }
}