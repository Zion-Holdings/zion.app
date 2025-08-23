#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

function listFiles(patterns) {
  const files = new Set();
  for (const pattern of patterns) {
    for (const f of glob.sync(pattern, { nodir: true })) {
      files.add(f);
    }
  }
  return Array.from(files).sort();
}

const pages = listFiles(['pages/**/*.{ts,tsx,md,mdx}']);
const components = listFiles(['components/**/*.{ts,tsx}']);
const automations = listFiles(['automation/**/*.{cjs,js,mjs}']);
const docs = listFiles(['docs/**/*.{md,mdx}']);

const pack = {
  generatedAt: new Date().toISOString(),
  counts: {
    pages: pages.length,
    components: components.length,
    automations: automations.length,
    docs: docs.length,
  },
  samples: {
    pages: pages.slice(0, 25),
    components: components.slice(0, 25),
    automations: automations.slice(0, 25),
    docs: docs.slice(0, 25),
  },
};

writeFile(path.resolve(process.cwd(), 'data/knowledge-pack.json'), JSON.stringify(pack, null, 2));

const md = [
  '# Knowledge Pack',
  '',
  `Generated: ${pack.generatedAt}`,
  '',
  `- Pages: ${pack.counts.pages}`,
  `- Components: ${pack.counts.components}`,
  `- Automations: ${pack.counts.automations}`,
  `- Docs: ${pack.counts.docs}`,
  '',
  'Samples:',
  '',
  ...pack.samples.pages.map(p => `- page: ${p}`),
  ...pack.samples.components.map(p => `- component: ${p}`),
].join('\n');

writeFile(path.resolve(process.cwd(), 'docs/knowledge-pack.md'), md);
console.log('Knowledge pack written to data/knowledge-pack.json and docs/knowledge-pack.md');