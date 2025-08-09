import fs from 'fs';
import path from 'path';

function readJson(p: string): any | null {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function ensureDir(dir: string) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function main() {
  const reportsDir = path.join(process.cwd(), 'data', 'reports', 'economy');
  const optimizerDir = path.join(reportsDir, 'optimizer');
  const policyDir = path.join(process.cwd(), 'data', 'policy', 'recommendations');
  const proposalsDir = path.join(process.cwd(), 'docs', 'governance', 'proposals');
  ensureDir(policyDir);
  ensureDir(proposalsDir);

  const latestEconomy = readJson(path.join(reportsDir, 'latest.json'))?.latest;
  const latestOptimizer = readJson(path.join(optimizerDir, 'latest.json'))?.latest;
  const econ = latestEconomy ? readJson(path.join(reportsDir, `${latestEconomy}.json`)) : null;
  const opt = latestOptimizer ? readJson(path.join(optimizerDir, `${latestOptimizer}.json`)) : null;
  const top = opt?.top?.[0];

  if (!top) {
    console.log('No optimizer data to propose policy');
    return;
  }

  const recommendation = {
    createdAt: new Date().toISOString(),
    basis: {
      economyRunId: econ?.runId || null,
      optimizerRunId: latestOptimizer || null,
    },
    parameters: {
      burnTaxPercent: top.burnTaxPercent,
      emissionSchedule: top.emissionSchedule,
      emissionMonthlyChangePct: top.emissionMonthlyChangePct,
    },
    expected: {
      avgInflationPct: Number(top.avgInflationPct),
      endingTreasury: Number(top.endingTreasury),
      endingSupply: Number(top.endingSupply),
    },
  };

  const ts = new Date().toISOString().replace(/[:]/g, '-').split('.')[0];
  const jsonPath = path.join(policyDir, `recommendation-${ts}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(recommendation, null, 2), 'utf8');
  fs.writeFileSync(path.join(policyDir, 'latest.json'), JSON.stringify({ latest: `recommendation-${ts}` }, null, 2), 'utf8');

  const mdLines = [
    '# ZION$ Policy Recommendation',
    '',
    `Generated: ${recommendation.createdAt}`,
    '',
    '## Proposed Parameters',
    `- Burn/Tax: ${top.burnTaxPercent}%`,
    `- Emission schedule: ${top.emissionSchedule}`,
    `- Monthly change: ${top.emissionMonthlyChangePct}%`,
    '',
    '## Expected Outcomes',
    `- Avg inflation: ${Number(top.avgInflationPct).toFixed(2)}%`,
    `- Ending treasury: ${Math.round(Number(top.endingTreasury)).toLocaleString()}`,
    `- Ending supply: ${Math.round(Number(top.endingSupply)).toLocaleString()}`,
    '',
    '## Basis',
    `- Optimizer run: ${latestOptimizer}`,
    econ?.runId ? `- Baseline run: ${econ.runId}` : '- Baseline run: n/a',
  ];
  const mdPath = path.join(proposalsDir, `proposal-${ts}.md`);
  fs.writeFileSync(mdPath, mdLines.join('\n'), 'utf8');
  console.log('Policy recommendation created:', path.basename(jsonPath), 'and', path.basename(mdPath));
}

main();