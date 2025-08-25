import React from 'react';
import type { QuoteFormData } from '../../../pages/request-quote';

export type BudgetStepProps = {
  value: QuoteFormData;
  onChange: (updater: QuoteFormData | ((prev: QuoteFormData) => QuoteFormData)) => void;
  onBack: () => void;
  onNext: () => void;
};

const BUDGET_OPTIONS = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Unsure / Need guidance',
];

export default function BudgetStep({ value, onChange, onBack, onNext }: BudgetStepProps) {
  const canContinue = value.budgetRange.trim().length > 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canContinue) onNext();
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Budget</h2>

      <div>
        <label className="block text-sm mb-1">Estimated budget</label>
        <select
          value={value.budgetRange}
          onChange={(e) => onChange({ ...value, budgetRange: e.target.value })}
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
        >
          <option value="">Select...</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onBack} className="px-4 py-2 rounded-md border">
          Back
        </button>
        <button
          type="submit"
          disabled={!canContinue}
          className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </form>
  );
}