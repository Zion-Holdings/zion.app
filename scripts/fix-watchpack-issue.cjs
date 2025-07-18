#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Watchpack path issue...');

const setupDevBundlerPath = path.join(
  __dirname,
  '../node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.js'
);

if (!fs.existsSync(setupDevBundlerPath)) {
  console.log('❌ setup-dev-bundler.js not found');
  process.exit(1);
}

try {
  let content = fs.readFileSync(setupDevBundlerPath, 'utf8');
  
  // Check if already patched
  if (content.includes('// PATCHED: Watchpack path fix')) {
    console.log('✅ Already patched');
    return;
  }
  
  // Find the problematic line and add a safety check
  const problematicLine = 'const relativePath = path.relative(projectRoot, filePath);';
  const patchedLine = `// PATCHED: Watchpack path fix
        if (!filePath || typeof filePath !== 'string') {
          return;
        }
        const relativePath = path.relative(projectRoot, filePath);`;
  
  if (content.includes(problematicLine)) {
    content = content.replace(problematicLine, patchedLine);
    fs.writeFileSync(setupDevBundlerPath, content, 'utf8');
    console.log('✅ Successfully patched Watchpack issue');
  } else {
    console.log('⚠️ Could not find the exact line to patch');
  }
} catch (error) {
  console.error('❌ Error patching file:', error.message);
  process.exit(1);
} 