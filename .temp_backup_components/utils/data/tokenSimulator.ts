export type EmissionSchedule = 'flat' | 'growth' | 'decay';

export type SimulatorInputs = {
  circulatingSupply: number; // current circulating ZION$
  dailyActiveWallets: number; // current DAU
  totalEscrowLocked: number; // current locked amount (not circulating)
  rewardsPerMonth: number; // ecosystem rewards per month
  treasuryBalance: number; // current treasury balance
  burnTaxPercent: number; // combined proposed burn/tax percentage (0-100)
  emissionSchedule: EmissionSchedule; // schedule shape
  emissionMonthlyChangePct: number; // for growth/decay schedules, -20 to +20 (% per month)
  forecastMonths: number; // 12-36
};

export type ScenarioKey =
  | 'growthOnly'
  | 'bearMarket'
  | 'daoOverIssuance'
  | 'airdropUnlock'
  | 'zkEmploymentRewards';

export type SimulationPoint = {
  monthIndex: number; // 0-based
  circulatingSupply: number;
  netInflationRatePct: number; // monthly inflation/deflation relative to prior month circulating
  treasuryBalance: number;
  dailyActiveWallets: number;
  estimatedTokenVelocity: number; // dimensionless velocity proxy
  ecosystemGrowthIndex: number; // a synthetic index (relative to start = 1)
  netEmissions: number; // emissions after burns
  grossEmissions: number; // before burns
  burnsAndTaxes: number; // total burned+taxed
};

export type SimulationSeries = {
  points: SimulationPoint[];
  summary: {
    endingSupply: number;
    endingTreasury: number;
    avgInflationPct: number;
    minInflationPct: number;
    maxInflationPct: number;
  };
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function scheduleMultiplier(
  schedule: EmissionSchedule,
  monthlyChangePct: number,
  monthIndex: number
): number {
  // Converts a monthly percentage change into a multiplier over time
  const change = monthlyChangePct / 100;
  if (schedule === 'flat') return 1;
  if (schedule === 'growth') return Math.pow(1 + Math.abs(change), monthIndex);
  // decay
  return Math.pow(1 - Math.abs(change), monthIndex);
}

export function applyScenario(base: SimulatorInputs, scenario: ScenarioKey): SimulatorInputs {
  // Provide reasonable default adjustments without mutating base
  const b = { ...base };
  switch (scenario) {
    case 'growthOnly':
      return {
        ...b,
        dailyActiveWallets: Math.round(b.dailyActiveWallets * 1.25),
        emissionSchedule: 'growth',
        emissionMonthlyChangePct: Math.max(b.emissionMonthlyChangePct, 3),
        rewardsPerMonth: b.rewardsPerMonth * 1.15,
        burnTaxPercent: clamp(b.burnTaxPercent - 1, 0, 100),
      };
    case 'bearMarket':
      return {
        ...b,
        dailyActiveWallets: Math.round(b.dailyActiveWallets * 0.7),
        emissionSchedule: 'decay',
        emissionMonthlyChangePct: Math.max(b.emissionMonthlyChangePct, 5),
        rewardsPerMonth: b.rewardsPerMonth * 0.8,
        burnTaxPercent: clamp(b.burnTaxPercent + 2, 0, 100),
      };
    case 'daoOverIssuance':
      return {
        ...b,
        emissionSchedule: 'growth',
        emissionMonthlyChangePct: Math.max(b.emissionMonthlyChangePct, 10),
        rewardsPerMonth: b.rewardsPerMonth * 1.5,
        burnTaxPercent: clamp(b.burnTaxPercent - 1, 0, 100),
      };
    case 'airdropUnlock':
      return {
        ...b,
        circulatingSupply: b.circulatingSupply * 1.1, // 10% unlock
        rewardsPerMonth: b.rewardsPerMonth * 1.05,
      };
    case 'zkEmploymentRewards':
      return {
        ...b,
        rewardsPerMonth: b.rewardsPerMonth * 1.3,
        dailyActiveWallets: Math.round(b.dailyActiveWallets * 1.4),
      };
    default:
      return b;
  }
}

export function simulateEconomy(inputs: SimulatorInputs): SimulationSeries {
  const {
    circulatingSupply: startingSupply,
    dailyActiveWallets: startingDau,
    totalEscrowLocked,
    rewardsPerMonth,
    treasuryBalance: startingTreasury,
    burnTaxPercent,
    emissionSchedule,
    emissionMonthlyChangePct,
    forecastMonths,
  } = inputs;

  // Assumptions for velocity proxy
  const averageTransactionsPerUserPerDay = 2.0;
  const averageTokensPerTransaction = 0.2; // adjust to scale velocity
  const daysPerMonth = 30;

  const points: SimulationPoint[] = [];

  let circulatingSupply = Math.max(0, startingSupply - Math.max(0, totalEscrowLocked));
  let treasuryBalance = startingTreasury;
  let dailyActiveWallets = startingDau;

  const burnTaxRate = clamp(burnTaxPercent, 0, 100) / 100;

  let ecosystemGrowthIndex = 1; // base = 1

  for (let m = 0; m < forecastMonths; m++) {
    const scheduleMult = scheduleMultiplier(emissionSchedule, emissionMonthlyChangePct, m);
    const grossEmissions = rewardsPerMonth * scheduleMult;

    const burnsAndTaxes = grossEmissions * burnTaxRate;
    const netEmissions = grossEmissions - burnsAndTaxes;

    const previousSupply = circulatingSupply;
    circulatingSupply = Math.max(0, circulatingSupply + netEmissions);

    // Treasury accrues the taxed portion (assume tax share is 60% of burnsAndTaxes)
    const treasuryInflow = burnsAndTaxes * 0.6;
    treasuryBalance += treasuryInflow;

    // Simple DAU evolution: assume DAU grows with emissions stimulus and decays otherwise
    const dauGrowthFactor = 1 + clamp((netEmissions / Math.max(1, previousSupply)) * 5, -0.1, 0.1);
    dailyActiveWallets = Math.max(0, Math.round(dailyActiveWallets * dauGrowthFactor));

    // Velocity proxy: monthly transaction volume divided by average circulating supply
    const monthlyTxVolume =
      dailyActiveWallets * averageTransactionsPerUserPerDay * averageTokensPerTransaction * daysPerMonth;
    const averageSupplyThisMonth = (previousSupply + circulatingSupply) / 2 || 1;
    const estimatedTokenVelocity = monthlyTxVolume / averageSupplyThisMonth;

    // Growth index updates with DAU change
    ecosystemGrowthIndex *= dauGrowthFactor;

    const netInflationRatePct = ((circulatingSupply - previousSupply) / Math.max(1, previousSupply)) * 100;

    points.push({
      monthIndex: m,
      circulatingSupply,
      netInflationRatePct,
      treasuryBalance,
      dailyActiveWallets,
      estimatedTokenVelocity,
      ecosystemGrowthIndex,
      netEmissions,
      grossEmissions,
      burnsAndTaxes,
    });
  }

  const inflationRates = points.map((p) => p.netInflationRatePct);
  const summary = {
    endingSupply: points[points.length - 1]?.circulatingSupply ?? startingSupply,
    endingTreasury: points[points.length - 1]?.treasuryBalance ?? startingTreasury,
    avgInflationPct:
      inflationRates.reduce((a, b) => a + b, 0) / Math.max(1, inflationRates.length),
    minInflationPct: Math.min(...inflationRates),
    maxInflationPct: Math.max(...inflationRates),
  };

  return { points, summary };
}

export function toCsv(points: SimulationPoint[]): string {
  const headers = [
    'monthIndex',
    'circulatingSupply',
    'netInflationRatePct',
    'treasuryBalance',
    'dailyActiveWallets',
    'estimatedTokenVelocity',
    'ecosystemGrowthIndex',
    'netEmissions',
    'grossEmissions',
    'burnsAndTaxes',
  ];
  const rows = points.map((p) =>
    [
      p.monthIndex,
      p.circulatingSupply,
      p.netInflationRatePct,
      p.treasuryBalance,
      p.dailyActiveWallets,
      p.estimatedTokenVelocity,
      p.ecosystemGrowthIndex,
      p.netEmissions,
      p.grossEmissions,
      p.burnsAndTaxes,
    ].join(',')
  );
  return [headers.join(','), ...rows].join('\n');
}