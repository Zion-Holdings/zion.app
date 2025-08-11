#!/usr/bin/env node

const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

function main() {
  const mode = process.argv[2] || 'once';
  const commit = process.env.LINKS_COMMIT !== 'false';

  run('node automation/site-link-crawler.cjs');
  run('node automation/site-link-fixer.cjs');

  if (commit) {
    try {
      run('git config user.name "zion-bot" && git config user.email "bot@zion.app"');
      run('git add -A');
      run('git commit -m "chore(links): crawl + fix redirects [ci skip]" || true');
      run('git push origin main || true');
    } catch (e) {
      // ignore
    }
  }

  if (mode === 'watch') {
    console.log('Watching not implemented for site-link-orchestrator');
  }
}

main();