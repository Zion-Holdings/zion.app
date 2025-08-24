import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'out');
const METRICS_DIR = path.join(ROOT, 'public', 'metrics');
const REPORTS_DIR = path.join(ROOT, 'automation_logs');

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', shell: true, ...opts });
    p.on('exit', (code) => (code === 0 ? resolve(null) : reject(new Error(`${cmd} ${args.join(' ')} exited ${code}`))));
  });
}

async function main() {
  if (!fs.existsSync(METRICS_DIR)) fs.mkdirSync(METRICS_DIR, { recursive: true });
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });

  // Export static site
  await run('npm', ['run', 'export']);

  // Start a static server
  const port = process.env.PORT || '3000';
  const server = spawn('npx', ['http-server', OUT_DIR, '-p', port, '-s'], { shell: true });
  await new Promise((r) => setTimeout(r, 2000));

  // Run lighthouse
  const url = `http://localhost:${port}`;
  const lhJson = path.join(REPORTS_DIR, `lighthouse-${Date.now()}.json`);
  await run('npx', ['lighthouse', url, '--quiet', '--chrome-flags="--headless"', `--output=json`, `--output-path=${lhJson}`]);

  // Summarize
  const data = JSON.parse(fs.readFileSync(lhJson, 'utf8'));
  const cats = data.categories || {};
  const summary = {
    generatedAt: new Date().toISOString(),
    url,
    performance: cats.performance?.score ?? null,
    accessibility: cats.accessibility?.score ?? null,
    bestPractices: cats['best-practices']?.score ?? cats.bestPractices?.score ?? null,
    seo: cats.seo?.score ?? null
  };
  fs.writeFileSync(path.join(METRICS_DIR, 'performance.json'), JSON.stringify(summary, null, 2));

  // Stop server
  server.kill('SIGINT');
}

main().catch((e) => { console.error(e); process.exit(1); });