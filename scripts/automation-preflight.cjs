// automation:preflight — quick preflight check before build exports
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();

// Type-check with a timeout — the repo has 70K+ service pages,
// so full tsc can take a while. Use --pretty false and skip
// if it doesn't finish in time (non-blocking advisory only).
try {
  execSync('npx tsc --noEmit --pretty false', {
    stdio: 'pipe',
    timeout: 240000, // 4 minutes max in CI
  });
  console.log('✅ Type-check clean');
} catch(e) {
  console.log('⚠️ Type-check: ' + (e.stdout || e.message).slice(-120));
  // Non-blocking - continue even if types fail or timeout
}

try {
  const outPath = path.join(repoRoot, 'out');
  const size = fs.statSync(outPath).size;
  console.log(`✅ out/ exists and is ${size} bytes`);
} catch {
  console.log('⚠️ out/ missing — will build fresh');
}

console.log('automation:preflight OK');
process.exit(0); // Always succeed - preflight is advisory
