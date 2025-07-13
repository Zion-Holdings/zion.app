const fs = require('fs');
const path = require('path');

// Simple recursive file walker to avoid glob dependency
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updated = content;

  // Replace <Link to="..." with <Link href="..."
  updated = updated.replace(/<Link\s+to=/g, '<Link href=');

  // Only modify Link component props; do not alter imports

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.warn(`Fixed Link props in ${filePath}`);
    return true;
  }
  return false;
}

const files = walk(path.join(process.cwd(), 'src'));
let count = 0;
files.forEach(f => {
  if (fixFile(f)) count++;
});

console.warn(`\nProcessed ${files.length} files. Updated ${count} files.`);
