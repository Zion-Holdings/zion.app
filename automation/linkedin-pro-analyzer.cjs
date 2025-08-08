#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'marketing', 'linkedin');
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const CANONICAL_URL = 'https://ziontechgroup.com';

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function extractSections(src) {
  const title = src.match(/<title>([\s\S]*?)<\/title>/i);
  const meta = src.match(/name="description"[^>]*content="([^"]+)"/i);
  return {
    title: title ? title[1].trim() : null,
    description: meta ? meta[1].trim() : null,
  };
}

function collectSellingPoints() {
  const indexSrc = readFileSafe(path.join(PAGES_DIR, 'index.tsx'));
  const servicesSrc = readFileSafe(path.join(PAGES_DIR, 'services', 'index.tsx'));
  const enhancedSrc = readFileSafe(path.join(PAGES_DIR, 'enhanced-home.tsx'));

  const points = new Set();
  const addIf = (re, text) => { if (re.test(indexSrc) || re.test(servicesSrc) || re.test(enhancedSrc)) points.add(text); };

  addIf(/AI Development/i, 'AI Development & custom model engineering');
  addIf(/Cloud Architecture/i, 'Cloud Architecture for scale and security');
  addIf(/API Development/i, 'API-first development and integrations');
  addIf(/Automation/i, 'Intelligent automation and agents');
  addIf(/Data|Analytics/i, 'Data platforms, analytics and dashboards');
  addIf(/Security|Cyber/i, 'Security and compliance by design');

  if (points.size === 0) {
    points.add('Full-stack AI, Cloud, and Automation services');
  }

  return Array.from(points).slice(0, 6);
}

function craftProfessionalPosts(points) {
  const now = new Date().toISOString();
  const base = CANONICAL_URL;
  const posts = [];

  for (const p of points) {
    posts.push({
      timestamp: now,
      text: `Zion Tech Group — ${p}. See how we deliver measurable outcomes. ${base} #AI #Cloud #Automation`,
      url: base
    });
  }

  // Add a capabilities overview post
  posts.unshift({
    timestamp: now,
    text: `Build smarter, ship faster. AI, Cloud, Automation — end-to-end. Explore engagements at ${base} #ProductEngineering #MLOps #DevOps`,
    url: base
  });

  return posts.slice(0, 8);
}

function main() {
  ensureDir(REPORT_DIR);
  const points = collectSellingPoints();
  const posts = craftProfessionalPosts(points);
  const out = path.join(REPORT_DIR, 'linkedin-pro-posts.json');
  fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), posts }, null, 2));
  console.log(`LinkedIn Pro analyzer: prepared ${posts.length} post(s)`);
}

main();


