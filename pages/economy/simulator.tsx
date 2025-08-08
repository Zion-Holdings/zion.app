import React, { useMemo, useRef, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import SimulatorForm from '../../components/economy/SimulatorForm';
import SimulatorCharts from '../../components/economy/SimulatorCharts';
import SimulatorExports from '../../components/economy/SimulatorExports';
import {
  SimulatorInputs,
  simulateEconomy,
  ScenarioKey,
  applyScenario,
} from '../../utils/data/tokenSimulator';

export default function EconomySimulatorPage() {
  const [inputs, setInputs] = useState<SimulatorInputs>({
    circulatingSupply: 1_000_000,
    dailyActiveWallets: 5_000,
    totalEscrowLocked: 150_000,
    rewardsPerMonth: 25_000,
    treasuryBalance: 400_000,
    burnTaxPercent: 3,
    emissionSchedule: 'flat',
    emissionMonthlyChangePct: 0,
    forecastMonths: 24,
  });

  const [operatorPrompt, setOperatorPrompt] = useState(
    'Analyze the impact of increasing ZION$ staking rewards by 2x over 6 months with 10K active users and weekly emission cap.'
  );
  const [analysis, setAnalysis] = useState<string>('');
  const [loadingAnalysis, setLoadingAnalysis] = useState<boolean>(false);

  const handleScenario = (scenario: ScenarioKey) => {
    setInputs((prev) => applyScenario(prev, scenario));
  };

  const series = useMemo(() => simulateEconomy(inputs), [inputs]);

  const containerId = 'zion-simulator-container';

  const onAnalyze = async () => {
    try {
      setLoadingAnalysis(true);
      setAnalysis('');
      const res = await fetch('/api/economy/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operatorPrompt, context: { inputs, summary: series.summary } }),
      });
      const json = await res.json();
      if ('analysis' in json) setAnalysis(json.analysis as string);
      else setAnalysis('Failed to analyze.');
    } catch (e) {
      setAnalysis('Failed to analyze.');
    } finally {
      setLoadingAnalysis(false);
    }
  };

  return (
    <EnhancedLayout>
      <div id={containerId} className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">ZION$ Economy Simulator</h1>
          <SimulatorExports points={series.points} containerId={containerId} />
        </div>

        <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
          <SimulatorForm values={inputs} onChange={setInputs} onScenario={handleScenario} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SimulatorCharts points={series.points} />
          </div>
          <div className="space-y-4">
            <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-2">Forecast Summary</h3>
              <ul className="text-sm space-y-1">
                <li>Ending supply: {Math.round(series.summary.endingSupply).toLocaleString()}</li>
                <li>Ending treasury: {Math.round(series.summary.endingTreasury).toLocaleString()}</li>
                <li>Avg inflation: {series.summary.avgInflationPct.toFixed(2)}%</li>
                <li>Min inflation: {series.summary.minInflationPct.toFixed(2)}%</li>
                <li>Max inflation: {series.summary.maxInflationPct.toFixed(2)}%</li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Operator Prompt</span>
                <textarea
                  className="w-full min-h-[120px] px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40"
                  value={operatorPrompt}
                  onChange={(e) => setOperatorPrompt(e.target.value)}
                />
              </label>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={onAnalyze}
                  disabled={loadingAnalysis}
                  className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  {loadingAnalysis ? 'Analyzing…' : 'Analyze with GPT'}
                </button>
              </div>
              {analysis && (
                <div className="mt-3 text-sm whitespace-pre-wrap border-t border-gray-200 dark:border-gray-800 pt-3">
                  {analysis}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}