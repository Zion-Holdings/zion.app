import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');

function isZeroLengthTsx(filePath) {
  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return false;
    if (!filePath.endsWith('.tsx')) return false;
    if (stat.size > 0) return false;
    return true;
  } catch {
    return false;
  }
}

function titleCase(str) {
  return str.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
}

function detectTitle(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\.tsx$/, '');
  if (rel === 'index') return 'Home';
  if (rel === '404') return 'Not Found';
  const parts = rel.split(path.sep).map(p => p.replace(/[\[\]]/g, ''));
  return titleCase(parts.join(' / '));
}

function template(filePath) {
  const name = detectTitle(filePath);
  if (path.basename(filePath) === '404.tsx') {
    return `export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 opacity-80">This page is under construction.</p>
    </div>
  );
}
`;
  }
  return `export default function Page() {
  return (
    <div className="py-12">
      <h1 className="text-2xl font-semibold">${name}</h1>
      <p className="mt-2 opacity-80">This page is being built by autonomous agents.</p>
    </div>
  );
}
`;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (isZeroLengthTsx(full)) {
      const content = template(full);
      fs.writeFileSync(full, content);
      console.log('Filled empty page:', path.relative(PAGES_DIR, full));
    }
  }
}

walk(PAGES_DIR);
console.log('Completed filling empty pages.');