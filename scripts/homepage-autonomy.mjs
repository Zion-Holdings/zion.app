#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function ensureDir(dirPath) { if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true }); }

function generateContent() {
  const now = new Date().toISOString();
  const highlights = [
    { title: 'Deploy in one click', desc: 'Spin up Marketplace, DAO, Token, Academy and more from a single control panel.' },
    { title: 'Autonomous Cloud', desc: 'Roadmap, SEO, links, and market intelligence update themselves on schedules.' },
    { title: 'ZionGPT Everywhere', desc: 'Assistants, proposal writers and prompt router available across modules.' },
    { title: 'Governance Ready', desc: 'Admin, DAO, or Hybrid modes with treasury, proposals and voting.' },
  ];
  const benefits = [
    'Faster launches with automated docs & assets',
    'Continuous improvements via autonomous agents',
    'Transparent governance and tokenized incentives',
    'Public APIs and developer docs for partners',
  ];
  const ctas = [
    { label: 'Deploy Genesis', href: '/zion/init' },
    { label: 'See Automations', href: '/automation/cloud' },
    { label: 'Explore Roadmap', href: '/autonomy/ROADMAP.md' },
  ];
  return { generatedAt: now, headline: 'Build your sovereign digital nation with Zion OS', subhead: 'Deploy once, scale forever. Autonomous by design.', highlights, benefits, ctas };
}

function main() {
  const content = generateContent();
  ensureDir(path.join('public', 'autonomy'));
  ensureDir('data');
  fs.writeFileSync(path.join('public', 'autonomy', 'HOMEPAGE_CONTENT.json'), JSON.stringify(content, null, 2));
  fs.writeFileSync(path.join('data', 'home-content.json'), JSON.stringify(content, null, 2));
  console.log('Wrote public/autonomy/HOMEPAGE_CONTENT.json and data/home-content.json');
}

main();