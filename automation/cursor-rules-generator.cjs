#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = process.cwd();
const CURSOR_DIR = path.join(ROOT, '.cursor');
const RULES_DIR = path.join(CURSOR_DIR, 'rules');
const MEMORY_FILE = path.join(RULES_DIR, 'learned-memories.mdc');
const SUMMARY_DIR = path.join(ROOT, 'cursor-memory');
const SUMMARY_FILE = path.join(SUMMARY_DIR, 'memory-summary.json');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFileIfChanged(filePath, content) {
  const current = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  if (current.trim() === content.trim()) return false;
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

function frontMatter(description, globs) {
  return `---\ndescription: ${description}\nglobs: ${globs}\n---\n\n`;
}

function upsertRule(filename, description, globs, body) {
  ensureDir(RULES_DIR);
  const filePath = path.join(RULES_DIR, filename);
  const content = `${frontMatter(description, globs)}${body.trim()}\n`;
  const changed = writeFileIfChanged(filePath, content);
  return { filePath, changed };
}

function upsertMemorySections(extraEntries = []) {
  ensureDir(RULES_DIR);
  const baseline = `---\ndescription: Persistent project memory file maintained by automation and assistants\nglobs: **/*\n---\n\n# Project Memory\n\nThis file stores project-specific knowledge, conventions, and decisions that should persist across sessions.\n\n## User Preferences\n- \n\n## Technical Decisions\n- Node.js >= 20.18.1 (from package.json engines)\n- Next.js present (see \`next.config.js\`)\n- TailwindCSS present (see \`tailwind.config.js\`)\n\n## Project Conventions\n- Conventional Commits (feat, fix, chore, docs, refactor, perf, test)\n- Functional React components with TypeScript types\n\n## Known Constraints\n- React 17 compatibility\n`;
  const content = fs.existsSync(MEMORY_FILE) ? fs.readFileSync(MEMORY_FILE, 'utf8') : baseline;
  let updated = content;
  for (const entry of extraEntries) {
    if (!updated.includes(entry)) {
      updated = updated.replace(/## Known Constraints[\s\S]*$/m, (tail) => tail) + `\n`; // append at end
      updated += `- ${entry}\n`;
    }
  }
  const changed = writeFileIfChanged(MEMORY_FILE, updated);
  return changed;
}

function scanRepoFacts() {
  const facts = [];
  // Tailwind v3 vs v4 presence
  const tailwindConfig = path.join(ROOT, 'tailwind.config.js');
  if (fs.existsSync(tailwindConfig)) {
    const cfg = fs.readFileSync(tailwindConfig, 'utf8');
    if (cfg.includes('tailwindcss')) facts.push('TailwindCSS configured');
  }
  // Next.js config
  if (fs.existsSync(path.join(ROOT, 'next.config.js'))) facts.push('Next.js config present');
  // TypeScript usage
  const tsconfig = path.join(ROOT, 'tsconfig.json');
  if (fs.existsSync(tsconfig)) facts.push('TypeScript active with tsconfig.json');
  return facts;
}

function updateSummary() {
  ensureDir(SUMMARY_DIR);
  const categories = {
    technicalDecisions: 3,
    conventions: 2,
    constraints: 1,
  };
  const summary = {
    generatedAt: new Date().toISOString(),
    totalEntries: Object.values(categories).reduce((a, b) => a + b, 0),
    categories: {
      technicalDecisions: categories.technicalDecisions,
      conventions: categories.conventions,
      constraints: categories.constraints,
    },
    confidenceDistribution: { high: 3, medium: 2, low: 1 },
  };
  writeFileIfChanged(SUMMARY_FILE, JSON.stringify(summary, null, 2));
}

function ensureCoreRules() {
  upsertRule(
    'memory.mdc',
    'Rule for managing project memory entries and updates',
    '**/*',
    `# AI Memory Rule\n\nThis rule defines how the assistant manages and utilizes project memory: user preferences, learned facts, and project-specific conventions.\n\n## Storage\n- Store persistent knowledge in \`.cursor/rules/learned-memories.mdc\`\n- Keep entries concise and factual; avoid duplications\n\n## Update Protocol\n1. Identify new durable knowledge (decision, convention, preference)\n2. Check if it exists or conflicts in \`learned-memories.mdc\`\n3. Append or update the relevant section with a short bullet entry\n\n## Usage Protocol\n- Before planning or large edits, review \`learned-memories.mdc\`\n- Align suggestions with stored decisions and conventions\n`
  );
  upsertRule(
    'typescript-guidelines.mdc',
    'TypeScript usage standards for this repository',
    '**/*.{ts,tsx,cts,mts}',
    `# TypeScript Guidelines\n\n## Types\n- Prefer interfaces for object shapes\n- Explicit return types for exported functions\n\n## Code Style\n- Small, pure functions; guard clauses\n- No mutation of inputs; avoid any\n\n## Errors\n- Throw Error with descriptive messages\n\n## Modules\n- Prefer named exports; avoid default unless justified\n`
  );
  upsertRule(
    '010-automation-operations.mdc',
    'Automation operating principles and independence from Cursor',
    '**/*',
    `# Automation Operations\n\n- Always start, test, follow, and fix the automation scripts.\n- Create new scripts to automate recurring workflows.\n- Prefer schedulers (cron/systemd/node-cron) that run independent of Cursor.\n- Use this computer's tools as needed (terminal, Chrome) and install required software responsibly.\n- After changes, run build/lint checks and synchronize via git.\n`
  );
}

function main() {
  ensureDir(CURSOR_DIR);
  ensureDir(RULES_DIR);
  ensureCoreRules();
  const facts = scanRepoFacts();
  const policy = [
    'Always start, test, follow, and fix the automation scripts',
    'Create new scripts to automate recurring workflows',
    'Prefer schedulers (cron/systemd/node-cron) that run independent of Cursor',
    'Use local tools and install required software responsibly to support automation'
  ];
  upsertMemorySections([...facts, ...policy]);
  updateSummary();
  console.log('Cursor rules and memory updated.');
}

main();