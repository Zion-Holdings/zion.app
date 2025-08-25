import React from 'react';
import { EmissionSchedule, ScenarioKey, SimulatorInputs } from '../../utils/data/tokenSimulator';

export type SimulatorFormProps = {
  values: SimulatorInputs;
  onChange: (next: SimulatorInputs) => void;
  onScenario: (scenario: ScenarioKey) => void;
};

const numberInput = (
  label: string,
  value: number,
  onChange: (v: number) => void,
  step = 1
) => (
  <label className="flex flex-col gap-1">
    <span className="text-sm text-gray-600 dark:text-gray-300">{label}</span>
    <input
      type="number"
      className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40"
      value={Number.isFinite(value) ? value : 0}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </label>
);

export default function SimulatorForm({ values, onChange, onScenario }: SimulatorFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        {numberInput('Circulating ZION$', values.circulatingSupply, (v) => onChange({ ...values, circulatingSupply: v }), 100)}
        {numberInput('Daily active wallets', values.dailyActiveWallets, (v) => onChange({ ...values, dailyActiveWallets: v }), 100)}
        {numberInput('Total escrow locked', values.totalEscrowLocked, (v) => onChange({ ...values, totalEscrowLocked: v }), 100)}
        {numberInput('Rewards issued / month', values.rewardsPerMonth, (v) => onChange({ ...values, rewardsPerMonth: v }), 10)}
        {numberInput('Treasury balance', values.treasuryBalance, (v) => onChange({ ...values, treasuryBalance: v }), 10)}
      </div>

      <div className="space-y-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-600 dark:text-gray-300">Proposed burn/tax %</span>
          <input
            type="range"
            min={0}
            max={30}
            step={0.5}
            value={values.burnTaxPercent}
            onChange={(e) => onChange({ ...values, burnTaxPercent: Number(e.target.value) })}
          />
          <span className="text-xs">{values.burnTaxPercent.toFixed(1)}%</span>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-600 dark:text-gray-300">DAO emissions schedule</span>
          <select
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40"
            value={values.emissionSchedule}
            onChange={(e) => onChange({ ...values, emissionSchedule: e.target.value as EmissionSchedule })}
          >
            <option value="flat">Flat</option>
            <option value="growth">Growth</option>
            <option value="decay">Decay</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-600 dark:text-gray-300">Emission monthly change %</span>
          <input
            type="range"
            min={-20}
            max={20}
            step={1}
            value={values.emissionMonthlyChangePct}
            onChange={(e) => onChange({ ...values, emissionMonthlyChangePct: Number(e.target.value) })}
          />
          <span className="text-xs">{values.emissionMonthlyChangePct}%</span>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-600 dark:text-gray-300">Forecast horizon (months)</span>
          <input
            type="range"
            min={12}
            max={36}
            step={1}
            value={values.forecastMonths}
            onChange={(e) => onChange({ ...values, forecastMonths: Number(e.target.value) })}
          />
          <span className="text-xs">{values.forecastMonths} months</span>
        </label>
      </div>

      <div className="md:col-span-2">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ['Growth-only', 'growthOnly'],
              ['Bear market', 'bearMarket'],
              ['DAO over-issuance', 'daoOverIssuance'],
              ['Airdrop unlock', 'airdropUnlock'],
              ['ZK employment rewards', 'zkEmploymentRewards'],
            ] as [string, ScenarioKey][]
          ).map(([label, key]) => (
            <button
              key={key}
              onClick={() => onScenario(key)}
              className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}