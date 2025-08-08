#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function titleFromSlug(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .replace(/ Chat$/i, '');
}

function listTsx(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({ file: f, href: `/${path.basename(dir)}/${f.replace(/\.tsx$/, '')}` }))
    .sort((a, b) => a.href.localeCompare(b.href));
}

function main() {
  const root = process.cwd();
  const servicesDir = path.join(root, 'pages', 'services');
  const categoriesDir = path.join(root, 'pages', 'category');
  const outDir = path.join(root, 'data', 'navigation');
  fs.mkdirSync(outDir, { recursive: true });

  const services = listTsx(servicesDir).map(({ file, href }) => ({
    title: titleFromSlug(file.replace(/\.tsx$/, '')),
    href,
  }));

  const categories = listTsx(categoriesDir).map(({ file, href }) => ({
    title: titleFromSlug(file.replace(/\.tsx$/, '')),
    href,
  }));

  const nav = { generatedAtIso: new Date().toISOString(), services, categories };
  fs.writeFileSync(path.join(outDir, 'navigation.json'), JSON.stringify(nav, null, 2));
  console.log(`Navigation data written to ${path.join('data', 'navigation', 'navigation.json')}`);
}

if (require.main === module) {
  main();
}