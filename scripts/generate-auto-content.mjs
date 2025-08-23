#!/usr/bin/env node

// Generates a new timestamped page under pages/auto/ with curated links
// Uses native fetch (Node >= 18) to pull headlines from Hacker News frontpage RSS

import fs from 'fs';
import path from 'path';

const AUTO_DIR = path.join(process.cwd(), 'pages', 'auto');

function isoForSlug(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, '-').toLowerCase();
}

function stripCdata(input) {
  return input.replace(/<!\[CDATA\[/g, '').replace(/]]>/g, '');
}

function escapeHtml(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function fetchHeadlines(limit = 5) {
  try {
    const res = await fetch('https://hnrss.org/frontpage');
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<\/item>/g)];
    const headlines = items.slice(0, limit).map(m => {
      const rawTitle = stripCdata(m[1].trim());
      return { title: escapeHtml(rawTitle), url: m[2].trim() };
    });
    return headlines;
  } catch (e) {
    return [];
  }
}

function generatePageContent({ title, description, links }) {
  const list = links
    .map(l => `        <li><a className=\"text-blue-600 underline\" href=\"${l.url}\" target=\"_blank\" rel=\"noreferrer\">${l.title}</a></li>`) 
    .join('\n');

  return `import type { NextPage } from 'next';
import Head from 'next/head';

const AutoUpdatePage: NextPage = () => (
  <>
    <Head>
      <title>${escapeHtml(title)}</title>
      <meta name=\"description\" content=\"${escapeHtml(description)}\" />
    </Head>
    <div className=\"container mx-auto px-4 py-8\">
      <h1 className=\"text-2xl font-bold mb-4\">${escapeHtml(title)}</h1>
      <p className=\"mb-6\">${escapeHtml(description)}</p>
      ${links.length ? `<ul className=\"list-disc pl-6 space-y-2\">\n${list}\n      </ul>` : '<p>No curated links available right now.</p>'}
    </div>
  </>
);

export default AutoUpdatePage;
`;
}

async function main() {
  if (!fs.existsSync(AUTO_DIR)) {
    fs.mkdirSync(AUTO_DIR, { recursive: true });
  }

  const now = new Date();
  const slug = `auto-update-${isoForSlug(now)}`;
  const filename = `${slug}.tsx`;
  const filePath = path.join(AUTO_DIR, filename);

  const headlines = await fetchHeadlines(7);
  const content = generatePageContent({
    title: `Automated Tech Brief - ${now.toISOString().slice(0, 10)}`,
    description: 'Autonomously curated technology headlines and links, updated by our cloud automation.',
    links: headlines,
  });

  fs.writeFileSync(filePath, content, 'utf8');

  // Maintain a lightweight index JSON for quick listing
  const indexPath = path.join(AUTO_DIR, 'index.json');
  let index = [];
  try {
    index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  } catch {}
  index.unshift({ slug, createdAt: now.toISOString(), items: headlines.length });
  index = index.slice(0, 200);
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n');

  console.log(`Generated ${filePath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});