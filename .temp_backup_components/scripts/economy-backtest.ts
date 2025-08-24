import fs from 'fs';
import path from 'path';
import { SimulatorInputs, simulateEconomy } from '../utils/data/tokenSimulator';

function ensureDir(dir: string) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
function ts() { return new Date().toISOString().replace(/[:]/g, '-').split('.')[0]; }

async function main() {
  const outDir = path.join(process.cwd(), 'data', 'reports', 'economy', 'backtests');
  ensureDir(outDir);

  const base: SimulatorInputs = {
    circulatingSupply: 1_000_000,
    dailyActiveWallets: 8_000,
    totalEscrowLocked: 120_000,
    rewardsPerMonth: 30_000,
    treasuryBalance: 500_000,
    burnTaxPercent: 2.5,
    emissionSchedule: 'flat',
    emissionMonthlyChangePct: 0,
    forecastMonths: 24,
  };

  const dauMultipliers = [0.6, 0.8, 1.0, 1.2, 1.5];
  const rewardLevels = [20000, 30000, 40000, 60000];

  const rows: any[] = [];
  for (const m of dauMultipliers) {
    for (const r of rewardLevels) {
      const inputs: SimulatorInputs = { ...base, dailyActiveWallets: Math.round(base.dailyActiveWallets * m), rewardsPerMonth: r };
      const series = simulateEconomy(inputs);
      rows.push({
        dauMultiplier: m,
        rewardsPerMonth: r,
        endingSupply: series.summary.endingSupply,
        endingTreasury: series.summary.endingTreasury,
        avgInflationPct: series.summary.avgInflationPct,
        minInflationPct: series.summary.minInflationPct,
        maxInflationPct: series.summary.maxInflationPct,
      });
    }
  }

  const runId = `backtest-${ts()}`;
  fs.writeFileSync(path.join(outDir, `${runId}.json`), JSON.stringify({ runId, createdAt: new Date().toISOString(), base, rows }, null, 2), 'utf8');
  const header = ['dauMultiplier','rewardsPerMonth','endingSupply','endingTreasury','avgInflationPct','minInflationPct','maxInflationPct'].join(',');
  const csv = [header, ...rows.map(r => [r.dauMultiplier, r.rewardsPerMonth, r.endingSupply, r.endingTreasury, r.avgInflationPct.toFixed(2), r.minInflationPct.toFixed(2), r.maxInflationPct.toFixed(2)].join(','))].join('\n');
  fs.writeFileSync(path.join(outDir, `${runId}.csv`), csv, 'utf8');
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify({ latest: runId }, null, 2), 'utf8');
  console.log('Backtest run complete:', runId);
}

main().catch(err => { console.error('Backtest failed', err); process.exit(1); });