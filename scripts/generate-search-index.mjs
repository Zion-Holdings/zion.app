import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUTPUT = path.join(ROOT, 'public', 'search-index.json');

function isPageFile(filePath) {
  if (!filePath.endsWith('.tsx')) return false;
  if (filePath.includes(`${path.sep}api${path.sep}`)) return false;
  const base = path.basename(filePath);
  if (base.startsWith('_')) return false; // _app, _document
  return true;
}

function routeFrom(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\.tsx$/, '');
  let route = '/' + rel.split(path.sep).join('/');
  if (route.endsWith('/index')) route = route.slice(0, -('/index'.length)) || '/';
  return route;
}

function titleFromRoute(route) {
  if (route === '/') return 'Home';
  return route
    .split('/')
    .filter(Boolean)
    .map((seg) => seg.replace(/\[|\]/g, ''))
    .map((seg) => seg.replace(/[-_]/g, ' '))
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1))
    .join(' / ');
}

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, results);
    } else if (isPageFile(full)) {
      const route = routeFrom(full);
      results.push({ route, title: titleFromRoute(route) });
    }
  }
  return results;
}

function main() {
  const items = walk(PAGES_DIR).sort((a, b) => a.route.localeCompare(b.route));
  const data = { generatedAt: new Date().toISOString(), items };
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2));
  console.log('Search index written to', OUTPUT, `(${items.length} items)`);
}

main();