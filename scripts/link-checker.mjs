import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('data/reports/links');

function run(cmd, args, options = {}) {
  const res = spawnSync(cmd, args, { encoding: 'utf8', ...options });
  return { code: res.status, stdout: res.stdout || '', stderr: res.stderr || '' };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const ts = Date.now();
  // Use simplecrawler via npx to check links
  const startServer = spawnSync('bash', ['-lc', 'npx --yes http-server out -p 8081 & echo $!'], { encoding: 'utf8' });
  const pid = (startServer.stdout || '').trim();
  await new Promise(r => setTimeout(r, 1500));
  const crawl = run('bash', ['-lc', `npx --yes broken-link-checker -ro http://localhost:8081 || true`]);
  fs.writeFileSync(path.join(OUT_DIR, `link-check-${ts}.txt`), crawl.stdout + '\n' + crawl.stderr);
  // kill server
  spawnSync('bash', ['-lc', `kill ${pid}`], { encoding: 'utf8' });
}

main();