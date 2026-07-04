const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const worktreeDir = path.join(repoRoot, '.pageploy');
const preferredWorktree = path.resolve('C:/tmp/zion-publish-ghpages');
const usedWorktree = fs.existsSync(preferredWorktree) ? preferredWorktree : worktreeDir;
const branch = process.argv[2] || 'gh-pages';
const message = process.argv[3] || `deploy: static export ${new Date().toISOString().replace(/:/g,'-')}`;

function run(cmd, opts = {}) {
  try {
    return execSync(cmd, { cwd: repoRoot, encoding: 'utf8', stdio: 'pipe', ...opts }).trim();
  } catch (e) {
    const out = (e.stdout && e.stdout.toString()) || '';
    throw new Error(`${cmd} failed: ${e.message}\n${out}`);
  }
}

(async () => {
  if (!fs.existsSync(usedWorktree)) {
    run(`git worktree add -f "${usedWorktree}" gh-pages`);
  }
  const outDir = path.join(repoRoot, 'out');
  const entries = fs.readdirSync(outDir, { withFileTypes: true });
  const errors=[];
  for (const e of entries) {
    const src = path.join(outDir, e.name);
    const dst = path.join(usedWorktree, e.name);
    if (!fs.existsSync(dst)) {
      if (e.isDirectory()) fs.mkdirSync(dst, { recursive: true });
      else fs.copyFileSync(src, dst);
    } else if (e.isDirectory()) {
      const walk = (s, d) => {
        for (const c of fs.readdirSync(s, { withFileTypes: true })) {
          const sp = path.join(s, c.name);
          const dp = path.join(d, c.name);
          if (c.isDirectory()) { fs.mkdirSync(dp, { recursive: true }); walk(sp, dp); }
          else fs.copyFileSync(sp, dp);
        }
      };
      walk(src, dst);
    } else {
      fs.copyFileSync(src, dst);
    }
  }
  run(`git -C "${usedWorktree}" add -A`);
  run(`git -C "${usedWorktree}" commit -m "${message}"`);
  const pushOut = run(`git -C "${usedWorktree}" push origin ${branch}`);
  console.log(`deployed: branch=${branch} message=${message}`);
  console.log(pushOut);
})().catch(err => {
  console.error('deploy failed:', err.message);
  process.exit(1);
});
