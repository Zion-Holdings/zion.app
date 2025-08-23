#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const {
  BACKLINK_API_URL: apiUrl,
  BACKLINK_API_KEY: apiKey
} = process.env;

if (!apiUrl || !apiKey) {
  console.error('Missing BACKLINK_API_URL or BACKLINK_API_KEY');
  process.exit(1);
}

const DATA_DIR = path.join(process.cwd(), 'seo');
const DATA_FILE = path.join(DATA_DIR, 'backlinks.json');
const REPORT_FILE = path.join(DATA_DIR, 'backlink-report.json');

async function fetchBacklinks() {
  const res = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json'
    }
  });
  if (!res.ok) throw new Error(`Backlink API error: ${res.status} ${res.statusText}`);
  return res.json();
}

function loadBacklinks(file) {
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }
  return [];
}

function saveBacklinks(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function diffBacklinks(oldLinks, newLinks) {
  const oldMap = new Map(oldLinks.map(l => [l.url, l]));
  const newMap = new Map(newLinks.map(l => [l.url, l]));

  const added = [];
  const lost = [];
  for (const [url, link] of newMap) {
    if (!oldMap.has(url)) added.push(link);
  }
  for (const [url, link] of oldMap) {
    if (!newMap.has(url)) lost.push(link);
  }
  return { added, lost };
}

function findToxicLinks(links) {
  return links.filter(l => typeof l.spamScore === 'number' && l.spamScore >= 50);
}

async function main() {
  const latest = await fetchBacklinks();
  const previous = loadBacklinks(DATA_FILE);

  const { added, lost } = diffBacklinks(previous, latest);
  const toxic = findToxicLinks(latest);

  saveBacklinks(DATA_FILE, latest);
  saveBacklinks(REPORT_FILE, { added, lost, toxic });

  console.log(`New backlinks: ${added.length}`);
  console.log(`Lost backlinks: ${lost.length}`);
  console.log(`Toxic backlinks: ${toxic.length}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
