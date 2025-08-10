// Netlify Scheduled Function: Robots.txt Enforcer
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/robots_enforcer"

export const config = {
  path: "/.netlify/functions/robots_enforcer",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';

function generateRobots() {
  const lines = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${BASE}/sitemap.xml`,
    '',
  ];
  return lines.join('\n') + '\n';
}

export const handler: Handler = async () => {
  try {
    const desired = generateRobots();
    const commit = await commitToRepo({ path: 'public/robots.txt', content: desired, message: 'chore(seo): enforce robots.txt', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: commit.committed }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};