#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function gitChangedAt(file) {
  try {
    const ts = execSync(`git log -1 --format=%ct -- ${file}`, { encoding: 'utf8' }).trim();
    return ts ? Number(ts) * 1000 : null;
  } catch {
    return null;
  }
}

function listTracked(dir) {
  try {
    const out = execSync(`git ls-files '${dir}/**'`, { encoding: 'utf8' });
    return out.split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

async function main() {
  const root = process.cwd();
  const targets = ['pages', 'data'];
  const files = targets.flatMap((t) => listTracked(t));
  const now = Date.now();
  const entries = files.map((f) => {
    const changedAt = gitChangedAt(f);
    const ageDays = changedAt ? (now - changedAt) / (1000 * 60 * 60 * 24) : null;
    return { file: f, changedAt, ageDays };
  }).filter((e) => e.changedAt);

  entries.sort((a, b) => (b.ageDays || 0) - (a.ageDays || 0));

  const report = {
    generatedAt: new Date().toISOString(),
    staleThresholdDays: 30,
    mostStale: entries.slice(0, 100),
    stale: entries.filter((e) => (e.ageDays || 0) > 30).slice(0, 1000)
  };

  const reportsDir = path.join(root, 'data', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(path.join(reportsDir, 'content-freshness.json'), JSON.stringify(report, null, 2));

  const page = `import data from '../../data/reports/content-freshness.json';
export default function ContentFreshness(){
  const d = data as any;
  return (
    <div className="py-10 space-y-4">
      <h1 className="text-2xl font-semibold">Content Freshness</h1>
      <div className="text-sm text-gray-500">Updated: {new Date(d.generatedAt).toLocaleString()} · Threshold: {d.staleThresholdDays} days</div>
      <section>
        <h2 className="text-lg font-medium mb-2">Top 20 Most Stale</h2>
        <ul className="text-sm space-y-1">
          {d.mostStale?.slice(0,20).map((x:any,i:number)=> (
            <li key={i} className={x.ageDays> d.staleThresholdDays ? 'text-red-600':'text-yellow-600'}>
              {x.file} — {x.ageDays?.toFixed(1)} days
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
`;
  const adminDir = path.join(root, 'pages', 'admin');
  if (!fs.existsSync(adminDir)) fs.mkdirSync(adminDir, { recursive: true });
  fs.writeFileSync(path.join(adminDir, 'content-freshness.tsx'), page);
  console.log('Content freshness report updated.');
}

main().catch((e)=>{ console.error(e); process.exitCode = 1; });