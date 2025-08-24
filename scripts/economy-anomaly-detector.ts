import fs from 'fs';
import path from 'path';

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function listRuns(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith('economy-') && f.endsWith('.json'))
    .sort();
}

function readJson(p: string): any | null {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function main() {
  const baseDir = path.join(process.cwd(), 'data', 'reports', 'economy');
  const anomaliesDir = path.join(baseDir, 'anomalies');
  ensureDir(anomaliesDir);

  const runs = listRuns(baseDir);
  if (runs.length < 2) {
    console.log('Not enough runs to detect anomalies');
    return;
  }

  const last = readJson(path.join(baseDir, runs[runs.length - 1]));
  const prev = readJson(path.join(baseDir, runs[runs.length - 2]));
  if (!last || !prev) return;

  const a = last.baseline?.summary || {};
  const b = prev.baseline?.summary || {};

  const deltaSupply = (a.endingSupply - b.endingSupply) / Math.max(1, b.endingSupply);
  const deltaTreasury = (a.endingTreasury - b.endingTreasury) / Math.max(1, b.endingTreasury);
  const deltaInfl = a.avgInflationPct - b.avgInflationPct;

  const triggers: string[] = [];
  if (Math.abs(deltaSupply) > 0.05) triggers.push(`Circulating supply changed by ${(deltaSupply * 100).toFixed(2)}%`);
  if (Math.abs(deltaTreasury) > 0.1) triggers.push(`Treasury changed by ${(deltaTreasury * 100).toFixed(2)}%`);
  if (Math.abs(deltaInfl) > 1.5) triggers.push(`Avg inflation changed by ${deltaInfl.toFixed(2)} pp`);

  if (!triggers.length) {
    console.log('No anomalies detected');
    return;
  }

  const ts = new Date().toISOString().replace(/[:]/g, '-').split('.')[0];
  const name = `anomaly-${ts}.md`;
  const md = `# Economy Anomaly Alert\n\n- Current run: ${last.runId}\n- Previous run: ${prev.runId}\n- Created: ${new Date().toISOString()}\n\n## Triggers\n${triggers.map((t) => `- ${t}`).join('\n')}\n\n## Details\n- Ending supply: ${Math.round(a.endingSupply)} (prev ${Math.round(b.endingSupply)})\n- Ending treasury: ${Math.round(a.endingTreasury)} (prev ${Math.round(b.endingTreasury)})\n- Avg inflation: ${a.avgInflationPct.toFixed(2)}% (prev ${b.avgInflationPct.toFixed(2)}%)\n`;
  fs.writeFileSync(path.join(anomaliesDir, name), md, 'utf8');
  fs.writeFileSync(path.join(anomaliesDir, 'latest.json'), JSON.stringify({ latest: name }, null, 2), 'utf8');
  console.log('Anomaly written:', name);
}

main();