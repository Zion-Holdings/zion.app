import fs from 'fs';
import path from 'path';
import { applyScenario, simulateEconomy, SimulatorInputs, ScenarioKey, toCsv } from '../utils/data/tokenSimulator';

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getTimestamp() {
  const now = new Date();
  const iso = now.toISOString().replace(/[:]/g, '-');
  return iso.split('.')[0];
}

async function main() {
  const reportsDir = path.join(process.cwd(), 'data', 'reports', 'economy');
  ensureDir(reportsDir);

  const baseInputs: SimulatorInputs = {
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

  const scenarios: ScenarioKey[] = [
    'growthOnly',
    'bearMarket',
    'daoOverIssuance',
    'airdropUnlock',
    'zkEmploymentRewards',
  ];

  const timestamp = getTimestamp();
  const runId = `economy-${timestamp}`;

  // Baseline
  const baselineSeries = simulateEconomy(baseInputs);

  // Scenario runs
  const scenarioResults = scenarios.map((s) => {
    const inputs = applyScenario(baseInputs, s);
    const series = simulateEconomy(inputs);
    return { scenario: s, inputs, summary: series.summary };
  });

  const report = {
    runId,
    createdAt: new Date().toISOString(),
    baseInputs,
    baseline: {
      summary: baselineSeries.summary,
      pointsCount: baselineSeries.points.length,
    },
    scenarios: scenarioResults,
  };

  const jsonPath = path.join(reportsDir, `${runId}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), 'utf8');

  const csvPath = path.join(reportsDir, `${runId}-baseline.csv`);
  fs.writeFileSync(csvPath, toCsv(baselineSeries.points), 'utf8');

  // Update latest pointer
  fs.writeFileSync(path.join(reportsDir, 'latest.json'), JSON.stringify({ latest: runId }, null, 2), 'utf8');

  // Also write a compact summary for quick display
  const compact = {
    runId,
    createdAt: report.createdAt,
    endingSupply: baselineSeries.summary.endingSupply,
    endingTreasury: baselineSeries.summary.endingTreasury,
    avgInflationPct: baselineSeries.summary.avgInflationPct,
  };
  fs.writeFileSync(path.join(reportsDir, `${runId}-summary.json`), JSON.stringify(compact, null, 2), 'utf8');

  console.log('Economy autopilot report generated:', runId);
}

main().catch((err) => {
  console.error('Economy autopilot failed:', err);
  process.exit(1);
});