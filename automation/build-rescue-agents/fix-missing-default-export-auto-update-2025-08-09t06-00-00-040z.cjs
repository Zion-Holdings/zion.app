#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const target = path.join(process.cwd(), "pages/auto/auto-update-2025-08-09t06-00-00-040z");
if (!fs.existsSync(target)) {
  console.log('Skipping: page not found', target);
  process.exit(0);
}
const content = fs.readFileSync(target, 'utf8');
const hasDefaultExport = /export\s+default\s+/m.test(content);
if (hasDefaultExport) {
  console.log('Already has default export:', target);
  process.exit(0);
}
fs.writeFileSync(target, content + "\n" + "\nimport type React from 'react';\nexport default function PagePlaceholder(): React.ReactElement | null {\n  return null;\n}\n");
console.log('Inserted placeholder default export into', target);

