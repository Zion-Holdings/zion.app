#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function ensureLines(content, requiredLines) {
  const lines = content.split(/\r?\n/);
  const set = new Set(lines);
  let changed = false;
  for (const l of requiredLines) {
    if (!set.has(l)) {
      lines.push(l);
      set.add(l);
      changed = true;
    }
  }
  // trim trailing empties and ensure newline at end
  const cleaned = lines.join('\n').replace(/\n+$/, '\n');
  return { out: cleaned, changed };
}

(function main() {
  const workspace = path.resolve(__dirname, '..');
  const redirectsPath = path.join(workspace, '_redirects');
  let content = '';
  try { content = fs.readFileSync(redirectsPath, 'utf8'); } catch { content = ''; }
  if (!content) content = '# Auto-managed redirects for Zion app\n';

  // Compute required redirects based on current routes
  const required = [
    '/front /main/front 301!'
  ];
  // If "/main/front" exists, also add a convenience redirect from /main
  const frontIndex = path.join(workspace, 'pages', 'main', 'front', 'index.tsx');
  try {
    fs.accessSync(frontIndex, fs.constants.F_OK);
    required.push('/main /main/front 301!');
  } catch {}

  const { out, changed } = ensureLines(content, required);
  if (changed) {
    fs.writeFileSync(redirectsPath, out, 'utf8');
    console.log(`[redirects-synthesizer] updated ${path.relative(workspace, redirectsPath)}`);
  } else {
    console.log('[redirects-synthesizer] no changes');
  }
})();