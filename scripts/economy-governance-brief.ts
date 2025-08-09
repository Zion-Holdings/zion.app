import fs from 'fs';
import path from 'path';

function readJson(p: string): any | null {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function main() {
  const reportsDir = path.join(process.cwd(), 'data', 'reports', 'economy');
  const optimizerDir = path.join(reportsDir, 'optimizer');
  const docsDir = path.join(process.cwd(), 'docs', 'governance');
  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

  const latestEconomy = readJson(path.join(reportsDir, 'latest.json'))?.latest;
  const latestOptimizer = readJson(path.join(optimizerDir, 'latest.json'))?.latest;
  const econ = latestEconomy ? readJson(path.join(reportsDir, `${latestEconomy}.json`)) : null;
  const opt = latestOptimizer ? readJson(path.join(optimizerDir, `${latestOptimizer}.json`)) : null;

  const econSummary = econ?.baseline?.summary;
  const topSuggestion = opt?.top?.[0];

  const lines: string[] = [];
  lines.push('# ZION$ Governance Brief');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  if (econ && econSummary) {
    lines.push('## Economy Baseline');
    lines.push(`- Run: ${econ.runId}`);
    lines.push(`- Ending supply: ${Math.round(econSummary.endingSupply).toLocaleString()}`);
    lines.push(`- Ending treasury: ${Math.round(econSummary.endingTreasury).toLocaleString()}`);
    lines.push(`- Avg inflation: ${econSummary.avgInflationPct.toFixed(2)}%`);
    lines.push('');
  } else {
    lines.push('No economy baseline available.');
    lines.push('');
  }
  if (topSuggestion) {
    lines.push('## Optimizer Recommendation (Top)');
    lines.push(`- Burn/Tax: ${topSuggestion.burnTaxPercent}%`);
    lines.push(`- Schedule: ${topSuggestion.emissionSchedule}`);
    lines.push(`- Monthly change: ${topSuggestion.emissionMonthlyChangePct}%`);
    lines.push(`- Expected avg inflation: ${Number(topSuggestion.avgInflationPct).toFixed(2)}%`);
    lines.push(`- Expected ending treasury: ${Math.round(topSuggestion.endingTreasury).toLocaleString()}`);
    lines.push('');
  } else {
    lines.push('No optimizer data available.');
  }

  const outPath = path.join(docsDir, 'latest-brief.md');
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log('Governance brief updated at', outPath);
}

main();