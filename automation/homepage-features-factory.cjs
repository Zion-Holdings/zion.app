#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(process.cwd(), 'data', 'home');
const OUT_FILE = path.join(OUT_DIR, 'auto-features.json');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readJsonSafe(fp) {
  try { return JSON.parse(fs.readFileSync(fp, 'utf8')); } catch { return null; }
}

function collectSignals() {
  const signals = [];
  const reportsBase = path.join(process.cwd(), 'data', 'reports');
  const categories = ['revenue-ideas', 'ui-evolution', 'spec-dev', 'frontend-sync', 'monetization', 'venture'];
  for (const cat of categories) {
    const dir = path.join(reportsBase, cat);
    if (fs.existsSync(dir)) {
      signals.push({ type: 'report', cat, dir });
    }
  }
  const automDir = path.join(process.cwd(), 'automation');
  if (fs.existsSync(automDir)) {
    const files = fs.readdirSync(automDir).filter(f => /orchestrator|factory|launcher/i.test(f));
    signals.push({ type: 'automation', count: files.length });
  }
  return signals;
}

function synthesizeFeatures(signals) {
  const features = [];
  if (signals.some(s => s.type === 'automation')) {
    features.push({
      title: 'Self-Improving Website',
      description: 'Autonomous workflows run every few minutes to ideate, improve UI, and fix issues automatically.',
      cta: { label: 'See the workflows', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/.github/workflows' },
      tags: ['Autonomous', 'CI', 'Cloud'],
    });
  }
  if (signals.some(s => s.cat === 'ui-evolution')) {
    features.push({
      title: 'Evolving Frontend',
      description: 'UI refinement agents keep the experience modern, accessible, and performant.',
      cta: { label: 'View UI evolution', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/automation/ui-evolution-agents' },
      tags: ['Design', 'Performance', 'A11y'],
    });
  }
  if (signals.some(s => s.cat === 'revenue-ideas')) {
    features.push({
      title: 'Revenue Experimentation',
      description: 'New monetization ideas are generated, validated, and applied where valuable.',
      cta: { label: 'See revenue ideas', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/automation/revenue-ideas-agents' },
      tags: ['Growth', 'Experiments'],
    });
  }
  if (features.length === 0) {
    features.push({
      title: 'Autonomous Cloud Automation',
      description: 'This site continuously updates itself using cloud-based agents and CI orchestration.',
      cta: { label: 'Explore automations', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/automation' },
      tags: ['CI', 'Agents'],
    });
  }
  return features.slice(0, 9);
}

function main() {
  ensureDir(OUT_DIR);
  const signals = collectSignals();
  const features = synthesizeFeatures(signals);
  const payload = { updatedAt: new Date().toISOString(), features };
  fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2));
  console.log(`Homepage features generated: ${OUT_FILE}`);
}

main();