import fs from 'fs';
import path from 'path';
import { simulateEconomy, SimulatorInputs, EmissionSchedule } from '../utils/data/tokenSimulator';

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getTimestamp() {
  const now = new Date();
  const iso = now.toISOString().replace(/[:]/g, '-');
  return iso.split('.')[0];
}

type Suggestion = {
  burnTaxPercent: number;
  emissionSchedule: EmissionSchedule;
  emissionMonthlyChangePct: number;
  score: number;
  endingTreasury: number;
  avgInflationPct: number;
  endingSupply: number;
  ecosystemGrowthIndex: number;
};

function scoreSuggestion(s: Suggestion): number {
  // Penalize high inflation, reward treasury and growth, gentle preference for lower supply
  const inflationPenalty = Math.max(0, Math.abs(s.avgInflationPct) - 2); // allow +/-2% band
  const treasuryScore = Math.log10(1 + Math.max(0, s.endingTreasury));
  const growthScore = Math.log10(1 + Math.max(0, s.ecosystemGrowthIndex * 1000));
  const supplyPenalty = Math.log10(1 + Math.max(0, s.endingSupply)) * 0.1;
  return treasuryScore + growthScore - inflationPenalty - supplyPenalty;
}

async function main() {
  const outDir = path.join(process.cwd(), 'data', 'reports', 'economy', 'optimizer');
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

  const burnOptions = Array.from({ length: 21 }, (_, i) => i * 0.5); // 0..10 step 0.5
  const schedules: EmissionSchedule[] = ['flat', 'growth', 'decay'];
  const changeOptions = Array.from({ length: 11 }, (_, i) => (i - 5) * 2); // -10..10 step 2

  const suggestions: Suggestion[] = [];

  for (const burn of burnOptions) {
    for (const schedule of schedules) {
      for (const change of changeOptions) {
        const inputs: SimulatorInputs = { ...base, burnTaxPercent: burn, emissionSchedule: schedule, emissionMonthlyChangePct: change };
        const series = simulateEconomy(inputs);
        const last = series.points[series.points.length - 1];
        const s: Suggestion = {
          burnTaxPercent: burn,
          emissionSchedule: schedule,
          emissionMonthlyChangePct: change,
          endingTreasury: series.summary.endingTreasury,
          endingSupply: series.summary.endingSupply,
          avgInflationPct: series.summary.avgInflationPct,
          ecosystemGrowthIndex: last?.ecosystemGrowthIndex ?? 1,
          score: 0,
        };
        s.score = scoreSuggestion(s);
        // Hard constraint: keep average inflation between -5% and +6%
        if (s.avgInflationPct < -5 || s.avgInflationPct > 6) continue;
        suggestions.push(s);
      }
    }
  }

  suggestions.sort((a, b) => b.score - a.score);
  const top = suggestions.slice(0, 20);

  const ts = getTimestamp();
  const runId = `optimizer-${ts}`;
  const jsonPath = path.join(outDir, `${runId}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify({ runId, createdAt: new Date().toISOString(), base, top }, null, 2), 'utf8');

  const csvPath = path.join(outDir, `${runId}-top.csv`);
  const header = ['burnTaxPercent','emissionSchedule','emissionMonthlyChangePct','score','endingTreasury','avgInflationPct','endingSupply','ecosystemGrowthIndex'].join(',');
  const rows = top.map(s => [s.burnTaxPercent, s.emissionSchedule, s.emissionMonthlyChangePct, s.score.toFixed(4), s.endingTreasury, s.avgInflationPct.toFixed(2), s.endingSupply, s.ecosystemGrowthIndex.toFixed(4)].join(','));
  fs.writeFileSync(csvPath, [header, ...rows].join('\n'), 'utf8');

  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify({ latest: runId }, null, 2), 'utf8');
  console.log('Optimizer run complete:', runId);
}

main().catch(err => {
  console.error('Optimizer failed', err);
  process.exit(1);
});