const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages');

function walk(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else if (entry.isFile() && (full.endsWith('.tsx') || full.endsWith('.ts'))) results.push(full);
  }
  return results;
}

function fixFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let next = original;

  // Replace <Link href="/path">Text</Link> with <a href="/path">Text</a>
  // Handles simple single-line cases used in this repo
  next = next.replace(/<Link\s+href=("[^"]+"|'[^']+')>([^<]+)<\/Link>/g, '<a href=$1>$2</a>');

  if (next !== original) {
    fs.writeFileSync(filePath, next, 'utf8');
    console.log('Fixed Link usage in', filePath);
  }
}

function main() {
  const files = walk(PAGES_DIR);
  files.forEach(fixFile);
  console.log('Link fix complete');
}

main();