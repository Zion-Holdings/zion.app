#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const TRENDS_DIR = path.join(process.cwd(), 'pages', 'trends');

function isoForSlug(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, '-').toLowerCase();
}

function escapeHtml(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function fetchHNTrends(limit = 10) {
  const now = Math.floor(Date.now() / 1000);
  const twentyFourHoursAgo = now - 24 * 60 * 60;
  const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${twentyFourHoursAgo}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const json = await res.json();
    const items = (json.hits || [])
      .filter(x => x.title && x.url)
      .sort((a, b) => (b.points || 0) - (a.points || 0))
      .slice(0, limit)
      .map(x => ({ title: escapeHtml(x.title), url: x.url, points: x.points || 0 }));
    return items;
  } catch {
    return [];
  }
}

function generateTrendsPage({ title, description, links }) {
  const list = links
    .map(l => `        <li><a className=\"text-blue-600 underline\" href=\"${l.url}\" target=\"_blank\" rel=\"noreferrer\">${l.title}</a> <span className=\"text-sm text-gray-500\">(${l.points} points)</span></li>`) 
    .join('\n');

  return `import type { NextPage } from 'next';
import Head from 'next/head';

const TrendsPage: NextPage = () => (
  <>
    <Head>
      <title>${title}</title>
      <meta name=\"description\" content=\"${description}\" />
    </Head>
    <div className=\"container mx-auto px-4 py-8\">
      <h1 className=\"text-2xl font-bold mb-4\">${title}</h1>
      <p className=\"mb-6\">${description}</p>
      ${links.length ? `<ul className=\"list-disc pl-6 space-y-2\">\n${list}\n      </ul>` : '<p>No trending items fetched.</p>'}
    </div>
  </>
);

export default TrendsPage;
`;
}

async function main() {
  if (!fs.existsSync(TRENDS_DIR)) {
    fs.mkdirSync(TRENDS_DIR, { recursive: true });
  }

  const now = new Date();
  const slug = `trends-${isoForSlug(now)}`;
  const filename = `${slug}.tsx`;
  const filePath = path.join(TRENDS_DIR, filename);

  const trends = await fetchHNTrends(12);
  const content = generateTrendsPage({
    title: `Tech Trends - ${now.toISOString().slice(0, 10)}`,
    description: 'Autonomously generated trending tech stories from the last 24 hours (HN Algolia).',
    links: trends,
  });

  fs.writeFileSync(filePath, content, 'utf8');

  // Maintain index.json
  const indexPath = path.join(TRENDS_DIR, 'index.json');
  let index = [];
  try {
    index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  } catch {}
  index.unshift({ slug, createdAt: now.toISOString(), items: trends.length });
  index = index.slice(0, 200);
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n');

  console.log(`Generated ${filePath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});