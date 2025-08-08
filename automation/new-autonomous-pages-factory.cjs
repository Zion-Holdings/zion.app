#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const glob = require('glob');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(PROJECT_ROOT, 'pages');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');
const REPORTS_DIR = path.join(DATA_DIR, 'reports', 'autonomous-pages');
const LOGS_DIR = path.join(__dirname, 'logs');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function randomId() {
  return crypto.randomBytes(6).toString('hex');
}

function pageTemplate({ title, description }: { title: string; description: string }) {
  return `import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white">
      <Head>
        <title>${title} - Zion App</title>
        <meta name="description" content="${description}" />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">${title}</h1>
        <p className="text-white/80 mb-8 max-w-3xl">${description}</p>
        <Link href="/">
          <a className="text-cyan-300 hover:text-cyan-200 underline">Back to Home</a>
        </Link>
      </main>
    </div>
  );
};

export default Page;`;
}

function discoverExistingRoutes() {
  const files = glob.sync('**/*.{tsx,ts,jsx,js}', { cwd: PAGES_DIR, absolute: true });
  const routes = new Set(
    files
      .filter((f) => !/\/api\//.test(f))
      .map((f) => f.replace(PAGES_DIR, '').replace(/\.[jt]sx?$/, ''))
  );
  return routes;
}

function generatePage({ category, title, description }) {
  const routes = discoverExistingRoutes();
  const slug = slugify(title);
  const dir = path.join(PAGES_DIR, category);
  ensureDir(dir);
  let route = `/${category}/${slug}`;
  let filePath = path.join(dir, `${slug}.tsx`);
  let counter = 1;
  while (routes.has(route)) {
    route = `/${category}/${slug}-${counter}`;
    filePath = path.join(dir, `${slug}-${counter}.tsx`);
    counter += 1;
  }

  const contents = pageTemplate({ title, description });
  fs.writeFileSync(filePath, contents);
  return { route, filePath };
}

function pickNewIdeas() {
  const ideaBank = [
    { category: 'products', title: 'AI-Driven Recommendation Engine', description: 'Personalized product and content recommendations powered by real-time ML.' },
    { category: 'services', title: 'Autonomous Code Refactoring', description: 'Continuous, safe, and explainable code refactoring by autonomous agents.' },
    { category: 'talent', title: 'Elite AI Talent Marketplace', description: 'Match with vetted AI researchers, engineers, and architects.' },
    { category: 'services', title: 'Cloud Cost Optimizer', description: 'Automatically monitor, predict, and reduce cloud costs across providers.' },
    { category: 'products', title: 'Privacy-Preserving Analytics Suite', description: 'Federated analytics and synthetic data for safe insights.' },
  ];
  // Pick 2-4 items per run
  const shuffled = ideaBank.sort(() => Math.random() - 0.5);
  const count = 2 + Math.floor(Math.random() * 3);
  return shuffled.slice(0, count);
}

function writeReport(entries) {
  ensureDir(REPORTS_DIR);
  const file = path.join(REPORTS_DIR, `run-${Date.now()}-${randomId()}.json`);
  fs.writeFileSync(file, JSON.stringify({ timestamp: new Date().toISOString(), entries }, null, 2));
  return file;
}

function main() {
  ensureDir(LOGS_DIR);
  const ideas = pickNewIdeas();
  const created = [];
  for (const idea of ideas) {
    const res = generatePage(idea);
    created.push({ ...idea, ...res });
  }
  const report = writeReport(created);
  console.log(`✅ Created ${created.length} new pages`);
  created.forEach((e) => console.log(` - ${e.route} -> ${path.relative(PROJECT_ROOT, e.filePath)}`));
  console.log(`📝 Report: ${path.relative(PROJECT_ROOT, report)}`);
  // Refresh app-pages.json for front page
  try {
    require('./site-map-generator.cjs');
  } catch (_) {}
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('❌ new-autonomous-pages-factory failed:', err.message);
    process.exit(1);
  }
}