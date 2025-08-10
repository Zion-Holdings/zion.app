#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';

const FEEDS = [
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml' },
  { name: 'Hacker News', url: 'https://hnrss.org/frontpage' },
];

async function fetchRssItems(feedUrl) {
  try {
    const { data } = await axios.get(feedUrl, { timeout: 15000 });
    const $ = cheerio.load(data, { xmlMode: true });
    const items = [];
    $('item').each((_, el) => {
      const title = $(el).find('title').first().text().trim();
      const link = $(el).find('link').first().text().trim();
      const pubDate = $(el).find('pubDate').first().text().trim();
      const description = $(el).find('description').first().text().trim();
      if (title && link) {
        items.push({ title, link, pubDate, description });
      }
    });
    return items;
  } catch (err) {
    return [];
  }
}

async function curate() {
  const results = [];
  for (const feed of FEEDS) {
    const items = await fetchRssItems(feed.url);
    results.push({
      source: feed.name,
      fetchedAt: new Date().toISOString(),
      items: items.slice(0, 10),
    });
  }
  const outDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, 'trends.json'),
    JSON.stringify({ updatedAt: new Date().toISOString(), feeds: results }, null, 2),
    'utf8'
  );
  console.log(`✅ Curated trends written to public/trends.json`);
}

curate();