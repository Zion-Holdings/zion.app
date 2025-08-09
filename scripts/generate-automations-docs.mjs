import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const WORKFLOWS = path.join(ROOT, '.github', 'workflows');
const OUTPUT = path.join(ROOT, 'docs', 'AUTOMATIONS.md');

function parseSchedule(yamlContent) {
  const cronMatch = yamlContent.match(/cron:\s*"([^"]+)"/);
  return cronMatch ? `cron: ${cronMatch[1]}` : 'event-driven or manual';
}

function toTitle(file) {
  return file
    .replace(/[-_]/g, ' ')
    .replace(/\.ya?ml$/, '')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function describe(file) {
  if (file.includes('frontend') || file.includes('ui')) return 'Frontend sync and UI evolution automation.';
  if (file.includes('seo') || file.includes('marketing')) return 'SEO and marketing content automation.';
  if (file.includes('lint') || file.includes('syntax') || file.includes('ci')) return 'Code quality and self-healing automation.';
  if (file.includes('netlify')) return 'Deployment health monitor for Netlify.';
  if (file.includes('monetization')) return 'Monetization and revenue-growth agents.';
  if (file.includes('diverse') || file.includes('matrix')) return 'Diverse agent matrix experiments.';
  return 'Autonomous workflow that improves the project over time.';
}

function main() {
  const files = fs.readdirSync(WORKFLOWS).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  const rows = files.map((file) => {
    const content = fs.readFileSync(path.join(WORKFLOWS, file), 'utf8');
    return { file, title: toTitle(file), schedule: parseSchedule(content), description: describe(file) };
  }).sort((a, b) => a.title.localeCompare(b.title));

  const md = [
    '# Automations Catalog',
    '',
    'This document is generated automatically. It summarizes the autonomous, cloud-native GitHub Actions that run without human intervention.',
    '',
    '| Automation | Schedule | Summary |',
    '|---|---|---|',
    ...rows.map(r => `| ${r.title} | ${r.schedule} | ${r.description} |`),
    '',
    `Generated at: ${new Date().toISOString()}`,
  ].join('\n');

  fs.writeFileSync(OUTPUT, md, 'utf8');
  console.log('Wrote', OUTPUT);
}

main();