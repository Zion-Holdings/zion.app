const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updated = content;

  // Replace <Link to="..." with <Link href="..."
  updated = updated.replace(/<Link\s+to=/g, '<Link href=');

  // Replace react-router-dom Link import with next/link
  updated = updated.replace(/from ['"]react-router-dom['"]/g, "from 'next/link'");

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Fixed Link props in ${filePath}`);
    return true;
  }
  return false;
}

const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');
let count = 0;
files.forEach(f => {
  if (fixFile(f)) count++;
});

console.log(`\nProcessed ${files.length} files. Updated ${count} files.`);
