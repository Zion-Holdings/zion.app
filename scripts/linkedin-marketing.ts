/*
 LinkedIn marketing automation (new)
 - No plaintext credentials; requires env vars: LINKEDIN_ACCESS_TOKEN and LINKEDIN_URN
 - Canonical URL: https://ziontechgroup.com
 - Modes: generate | run | cron
*/

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cron from 'node-cron';

type Service = {
  slug: string;
  name: string;
  description?: string;
  category?: string;
};

const CANONICAL_URL = 'https://ziontechgroup.com';

function readServices(): Service[] {
  try {
    const servicesPath = path.join(process.cwd(), 'data', 'services', 'services.json');
    if (!fs.existsSync(servicesPath)) return [];
    const raw = fs.readFileSync(servicesPath, 'utf8');
    const data = JSON.parse(raw) as Service[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function generateMarketingPostIdeas(count = 3): string[] {
  const services = readServices();
  const pool: string[] = [];

  if (services.length > 0) {
    for (const service of services) {
      const url = `${CANONICAL_URL}/services/${service.slug}`;
      const description = service.description ?? `Discover ${service.name} from Zion.`;
      pool.push(
        `Unlock growth with ${service.name}. ${description} Learn more: ${url}`
      );
    }
  } else {
    pool.push(
      `Build faster with Zion Tech Solutions. Explore our products and services: ${CANONICAL_URL}/services`,
      `From AI to automation, we ship production-grade solutions. See what's new: ${CANONICAL_URL}`,
      `Need a future-ready web stack? We deliver secure, performant Next.js apps. Start here: ${CANONICAL_URL}/products`
    );
  }

  // Ensure canonical link presence and dedupe
  const unique = Array.from(new Set(pool.map(p => p.trim()))).filter(p => p.includes(CANONICAL_URL));
  if (unique.length === 0) unique.push(`Explore what's new at Zion: ${CANONICAL_URL}`);

  // Shuffle for variety, then return the requested count
  for (let i = unique.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }
  return unique.slice(0, Math.max(1, count));
}

async function postToLinkedIn(text: string): Promise<{ ok: boolean; status?: number; message?: string }>{
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const urn = process.env.LINKEDIN_URN || process.env.LINKEDIN_ORGANIZATION_URN || process.env.LINKEDIN_MEMBER_URN;

  if (!token || !urn) {
    return { ok: true, message: 'Skipping post (missing env). Generated content only.' };
  }

  try {
    const resp = await axios.post(
      'https://api.linkedin.com/v2/ugcPosts',
      {
        author: urn,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: { text },
            shareMediaCategory: 'NONE',
          },
        },
        visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0',
          'LinkedIn-Version': '202403',
        },
        timeout: 15000,
      }
    );
    return { ok: resp.status >= 200 && resp.status < 300, status: resp.status };
  } catch (error: any) {
    const status = error?.response?.status;
    const message = error?.response?.data ? JSON.stringify(error.response.data) : String(error?.message || error);
    return { ok: false, status, message };
  }
}

export async function runOnce(): Promise<void> {
  const [text] = generateMarketingPostIdeas(1);
  console.log('Generated post:', text);
  const res = await postToLinkedIn(text);
  if (!res.ok) {
    console.error('LinkedIn post failed', res);
  } else {
    console.log('LinkedIn post result', res);
  }
}

export function startCron(): void {
  // Run every day at 15:00 UTC
  const schedule = process.env.LINKEDIN_CRON || '0 15 * * *';
  console.log(`Starting LinkedIn marketing cron with schedule: ${schedule}`);
  cron.schedule(schedule, async () => {
    try {
      await runOnce();
    } catch (err) {
      console.error('Cron run error', err);
    }
  });
}

export const linkedinMarketing = { generateMarketingPostIdeas, runOnce, startCron };

// CLI
if (require.main === module) {
  const mode = process.argv[2] || 'generate';
  if (mode === 'generate') {
    const ideas = generateMarketingPostIdeas(3);
    console.log(JSON.stringify({ count: ideas.length, ideas }, null, 2));
  } else if (mode === 'run') {
    runOnce().catch(err => {
      console.error(err);
      process.exitCode = 1;
    });
  } else if (mode === 'cron') {
    startCron();
  } else {
    console.log('Usage: ts-node scripts/linkedin-marketing.ts [generate|run|cron]');
  }
}

export default linkedinMarketing;

/*
 LinkedIn marketing automation (new)
 - No plaintext credentials; requires env vars: LINKEDIN_ACCESS_TOKEN and LINKEDIN_URN
 - Canonical URL: https://ziontechgroup.com
 - Modes: generate | run | cron
*/

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cron from 'node-cron';

type Service = {
  slug: string;
  name: string;
  description?: string;
  category?: string;
};

const CANONICAL_URL = 'https://ziontechgroup.com';

function readServices(): Service[] {
  try {
    const servicesPath = path.join(process.cwd(), 'data', 'services', 'services.json');
    if (!fs.existsSync(servicesPath)) return [];
    const raw = fs.readFileSync(servicesPath, 'utf8');
    const data = JSON.parse(raw) as Service[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function generateMarketingPostIdeas(count = 3): string[] {
  const services = readServices();
  const pool: string[] = [];

  if (services.length > 0) {
    for (const service of services) {
      const url = `${CANONICAL_URL}/services/${service.slug}`;
      const description = service.description ?? `Discover ${service.name} from Zion.`;
      pool.push(
        `Unlock growth with ${service.name}. ${description} Learn more: ${url}`
      );
    }
  } else {
    pool.push(
      `Build faster with Zion Tech Solutions. Explore our products and services: ${CANONICAL_URL}/services`,
      `From AI to automation, we ship production-grade solutions. See what's new: ${CANONICAL_URL}`,
      `Need a future-ready web stack? We deliver secure, performant Next.js apps. Start here: ${CANONICAL_URL}/products`
    );
  }

  // Ensure canonical link presence and dedupe
  const unique = Array.from(new Set(pool.map(p => p.trim()))).filter(p => p.includes(CANONICAL_URL));
  if (unique.length === 0) unique.push(`Explore what's new at Zion: ${CANONICAL_URL}`);

  // Shuffle for variety, then return the requested count
  for (let i = unique.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }
  return unique.slice(0, Math.max(1, count));
}

async function postToLinkedIn(text: string): Promise<{ ok: boolean; status?: number; message?: string }>{
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const urn = process.env.LINKEDIN_URN || process.env.LINKEDIN_ORGANIZATION_URN || process.env.LINKEDIN_MEMBER_URN;

  if (!token || !urn) {
    return { ok: true, message: 'Skipping post (missing env). Generated content only.' };
  }

  try {
    const resp = await axios.post(
      'https://api.linkedin.com/v2/ugcPosts',
      {
        author: urn,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: { text },
            shareMediaCategory: 'NONE',
          },
        },
        visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0',
          'LinkedIn-Version': '202403',
        },
        timeout: 15000,
      }
    );
    return { ok: resp.status >= 200 && resp.status < 300, status: resp.status };
  } catch (error: any) {
    const status = error?.response?.status;
    const message = error?.response?.data ? JSON.stringify(error.response.data) : String(error?.message || error);
    return { ok: false, status, message };
  }
}

export async function runOnce(): Promise<void> {
  const [text] = generateMarketingPostIdeas(1);
  console.log('Generated post:', text);
  const res = await postToLinkedIn(text);
  if (!res.ok) {
    console.error('LinkedIn post failed', res);
  } else {
    console.log('LinkedIn post result', res);
  }
}

export function startCron(): void {
  // Run every day at 15:00 UTC
  const schedule = process.env.LINKEDIN_CRON || '0 15 * * *';
  console.log(`Starting LinkedIn marketing cron with schedule: ${schedule}`);
  cron.schedule(schedule, async () => {
    try {
      await runOnce();
    } catch (err) {
      console.error('Cron run error', err);
    }
  });
}

export const linkedinMarketing = { generateMarketingPostIdeas, runOnce, startCron };

// CLI
if (require.main === module) {
  const mode = process.argv[2] || 'generate';
  if (mode === 'generate') {
    const ideas = generateMarketingPostIdeas(3);
    console.log(JSON.stringify({ count: ideas.length, ideas }, null, 2));
  } else if (mode === 'run') {
    runOnce().catch(err => {
      console.error(err);
      process.exitCode = 1;
    });
  } else if (mode === 'cron') {
    startCron();
  } else {
    console.log('Usage: ts-node scripts/linkedin-marketing.ts [generate|run|cron]');
  }
}

export default linkedinMarketing;


