#!/usr/bin/env node
const ts = require('typescript');
const fs = require('fs');
const path = require('path');

// Pick 5 random service pages to type-check
const servicesDir = 'app/services';
const entries = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .slice(0, 20);

let errors = 0;
let checked = 0;

for (const entry of entries) {
  const pagePath = path.join(servicesDir, entry.name, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    checked++;
    const src = fs.readFileSync(pagePath, 'utf8');
    const result = ts.transpileModule(src, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
      fileName: pagePath,
    });
    if (result.diagnostics && result.diagnostics.length > 0) {
      errors++;
      console.log(`ERROR: ${pagePath}: ${result.diagnostics.map(d => d.messageText).join(', ')}`);
    }
  }
}

console.log(`Checked ${checked} pages, ${errors} with errors`);
