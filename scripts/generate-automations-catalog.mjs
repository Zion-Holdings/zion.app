import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const WORKFLOWS = path.join(ROOT, '.github', 'workflows');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUTPUT = path.join(PUBLIC_DIR, 'automation-catalog.json');

function parseSchedule(yamlContent) {
  // naive parse for `cron:` lines
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

async function main() {
  if (!fs.existsSync(WORKFLOWS)) {
    console.error('Workflows dir not found:', WORKFLOWS);
    process.exit(1);
  }
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR);

  const files = fs.readdirSync(WORKFLOWS).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  const items = files.map((file) => {
    const full = path.join(WORKFLOWS, file);
    const content = fs.readFileSync(full, 'utf8');
    return {
      id: file,
      title: toTitle(file),
      description: describe(file),
      schedule: parseSchedule(content),
      link: '/automation'
    };
  });

  const payload = { generatedAt: new Date().toISOString(), items };
  fs.writeFileSync(OUTPUT, JSON.stringify(payload, null, 2));
  console.log('Wrote catalog to', OUTPUT, `(${items.length} items)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});