const fs = require('fs');
const path = require('path');
const dir = 'app/industries';
if (!fs.existsSync(dir)) {
  console.log('missing', dir);
  process.exit(0);
}
const entries = fs.readdirSync(dir);
const files = entries.filter((f) => fs.existsSync(path.join(dir, f, 'page.tsx')));
console.log('files', files);
for (const f of files) {
  const p = path.join(dir, f, 'page.tsx');
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes('export const metadata')) {
    c = c.replace(/export const metadata[\s\S]*?\};\n\n/, '');
    fs.writeFileSync(p, c);
    console.log('patched', p);
  }
}
