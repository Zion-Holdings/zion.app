#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(PROJECT_ROOT, 'pages');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'app-pages.json');

function toTitleCase(slug) {
  return slug
    .replace(/[-_/]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function extractTitleFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const headTitleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (headTitleMatch && headTitleMatch[1]) {
      return headTitleMatch[1].trim();
    }
  } catch (_) {}
  const rel = filePath.replace(PAGES_DIR, '').replace(/\.[jt]sx?$/, '');
  const slug = rel === '/index' ? 'Home' : rel.replace(/^\//, '');
  return toTitleCase(slug);
}

function shouldInclude(file) {
  if (/\/api\//.test(file)) return false;
  const base = path.basename(file);
  const exclude = new Set(['_app.tsx', '_document.tsx', '404.tsx', 'index.tsx']);
  if (exclude.has(base)) return false;
  // Exclude Next auth and similar internal helper directories
  if (/\/(auth|auto|automation)\//.test(file)) return false;
  return true;
}

function routeFromFile(file) {
  const rel = file.replace(PAGES_DIR, '').replace(/\.[jt]sx?$/, '');
  return rel === '/index' ? '/' : rel;
}

function categoryFromFile(file) {
  const rel = file.replace(PAGES_DIR, '').replace(/\.[jt]sx?$/, '');
  const parts = rel.split('/').filter(Boolean);
  if (parts.length === 0) return 'general';
  return parts[0];
}

function main() {
  const files = glob.sync('**/*.{ts,tsx,js,jsx}', { cwd: PAGES_DIR, absolute: true });
  const included = files.filter(shouldInclude);
  const pages = included.map((file) => {
    const route = routeFromFile(file);
    const title = extractTitleFromFile(file);
    const category = categoryFromFile(file);
    return { route, title, category };
  });

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), pages }, null, 2));
  console.log(`✅ Wrote ${pages.length} routes to ${path.relative(PROJECT_ROOT, OUTPUT_FILE)}`);
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('❌ Failed to generate app pages index:', err.message);
    process.exit(1);
  }
}