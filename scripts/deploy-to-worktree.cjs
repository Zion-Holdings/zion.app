const { execSync, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const worktreeDir = 'C:/tmp/zion-publish-ghpages';
const branch = process.argv[2] || 'main';
const message = process.argv[3] || `deploy: static export ${new Date().toISOString().replace(/:/g,'-')}`;

const outDir = path.join(repoRoot, 'out');

// Copy out/* into worktree
function syncDir(src, dst) {
  fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      syncDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  });
}

if (!fs.existsSync(outDir)) {
  console.error('missing out dir:', outDir);
  process.exit(1);
}

fs.mkdirSync(worktreeDir, { recursive: true });
console.log('syncing out ->', worktreeDir);
syncDir(outDir, worktreeDir);

console.log('git add');
execFileSync('git', ['-C', worktreeDir, 'add', '-A'], { stdio: 'inherit' });

console.log('git commit:', message);
try {
  execFileSync('git', ['-C', worktreeDir, 'commit', '-m', message], { stdio: 'inherit' });
} catch (e) {
  console.log('nothing to commit, continuing');
}

console.log('git push:', branch);
const push = execFileSync('git', ['-C', worktreeDir, 'push', 'origin', branch], { encoding: 'utf8' });
console.log('deployed:', push.trim());
