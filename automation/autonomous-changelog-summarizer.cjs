#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function recentCommits(n = 20) {
  try {
    const out = execSync(`git log -n ${n} --pretty=format:%H|%ct|%s`, { encoding: 'utf8' });
    return out.split('\n').filter(Boolean).map((l) => {
      const [hash, ts, msg] = l.split('|');
      return { hash, ts: Number(ts) * 1000, msg };
    });
  } catch { return []; }
}

async function main() {
  const root = process.cwd();
  const commits = recentCommits(30);
  const changes = commits.map((c) => ({ when: new Date(c.ts).toISOString(), message: c.msg, hash: c.hash.slice(0,7) }));
  const report = { generatedAt: new Date().toISOString(), count: changes.length, changes };

  const dir = path.join(root, 'data', 'reports');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'changelog.json'), JSON.stringify(report, null, 2));

  const page = `import data from '../../data/reports/changelog.json';
export default function Changelog(){
  const d = data as any;
  return (
    <div className="py-10 space-y-3">
      <h1 className="text-2xl font-semibold">Recent Changes</h1>
      <div className="text-sm text-gray-500">Updated: {new Date(d.generatedAt).toLocaleString()}</div>
      <ul className="text-sm">
        {d.changes?.map((x:any,i:number)=> (
          <li key={i}><code className="text-xs">{x.hash}</code> — {x.message} <span className="text-xs text-gray-500">({new Date(x.when).toLocaleString()})</span></li>
        ))}
      </ul>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(root, 'pages', 'admin', 'changelog.tsx'), page);
  console.log('Changelog summary updated.');
}

main().catch((e)=>{ console.error(e); process.exitCode = 1; });