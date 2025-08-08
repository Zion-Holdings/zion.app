// Netlify Scheduled Function: Auto Marketing LinkedIn Poster
// Schedule via netlify.toml -> [[scheduled]] path = "/.netlify/functions/auto_marketing"

export const config = {
  path: "/.netlify/functions/auto_marketing",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const CANONICAL = process.env.CANONICAL_BASE || 'https://ziontechgroup.com';

async function fetchLatestFromFeed(): Promise<{ title: string; link: string } | null> {
  const res = await fetch(`${CANONICAL}/feed.xml`, { headers: { 'User-Agent': 'zion-app-automation' } });
  if (!res.ok) return null;
  const xml = await res.text();
  // naive parse of first <item>
  const itemMatch = xml.match(/<item>[\s\S]*?<\/item>/i);
  if (!itemMatch) return null;
  const titleMatch = itemMatch[0].match(/<title>([\s\S]*?)<\/title>/i);
  const linkMatch = itemMatch[0].match(/<link>([\s\S]*?)<\/link>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'New blog post';
  const link = linkMatch ? linkMatch[1].trim() : `${CANONICAL}/blog`;
  return { title, link };
}

async function postToLinkedIn(update: { title: string; link: string }): Promise<{ ok: boolean; status: number; body: any }> {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const authorUrn = process.env.LINKEDIN_URN; // e.g., "urn:li:organization:XXXX"
  if (!accessToken || !authorUrn) return { ok: false, status: 0, body: 'Missing LinkedIn credentials' };

  const message = `${update.title}\n\nRead more: ${update.link}\n\n#AI #Cloud #ZionTech #Innovation`;

  const body = {
    author: authorUrn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text: message },
        shareMediaCategory: 'NONE',
      },
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
  };

  const resp = await fetch('https://api.linkedin.com/v2/ugcPosts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify(body),
  });
  let json: any = null;
  try { json = await resp.json(); } catch {}
  return { ok: resp.ok, status: resp.status, body: json };
}

function nowTs() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const latest = await fetchLatestFromFeed();
    if (!latest) return { statusCode: 200, body: 'No feed or no items found' };

    const li = await postToLinkedIn(latest);

    const logEntry = {
      timestamp: new Date().toISOString(),
      action: 'linkedin_post',
      ok: li.ok,
      status: li.status,
      latest,
      response: li.body || null,
    };

    const path = `data/reports/marketing/linkedin/auto-post-${nowTs()}.json`;
    const commit = await commitToRepo({
      path,
      content: JSON.stringify(logEntry, null, 2) + '\n',
      message: `chore(marketing): auto-post to LinkedIn ${latest.link}`,
      branch: 'main',
    });

    const body = { feed: latest, linkedin: { ok: li.ok, status: li.status }, commit };
    return { statusCode: 200, body: JSON.stringify(body) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};