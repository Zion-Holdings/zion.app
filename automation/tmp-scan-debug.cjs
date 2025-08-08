#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function scanPackageScripts() {
  const pkgPath = path.join(__dirname, '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const scripts = pkg.scripts || {};
  const referencedPaths = [];
  for (const [name, cmd] of Object.entries(scripts)) {
    const mNode = cmd.match(/node\s+([^\s&;]+)/);
    const mBash = cmd.match(/bash\s+([^\s&;]+)/);
    const target = (mNode && mNode[1]) || (mBash && mBash[1]);
    if (target && (target.startsWith('automation/') || target.startsWith('./automation/'))) {
      const abs = path.resolve(path.join(__dirname, '..'), target);
      referencedPaths.push({ scriptName: name, cmd, target, abs, exists: fs.existsSync(abs) });
    }
  }
  const missing = referencedPaths.filter((r) => !r.exists);
  return { pkgPath, referencedPaths, missing };
}

const result = scanPackageScripts();
console.log(JSON.stringify(result, null, 2));