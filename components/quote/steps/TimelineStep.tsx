import React from 'react';
import type { QuoteFormData } from '../../../pages/request-quote';

export type TimelineStepProps = {
  value: QuoteFormData;
  onChange: (updater: QuoteFormData | ((prev: QuoteFormData) => QuoteFormData)) => void;
  onBack: () => void;
  onNext: () => void;
};

export default function TimelineStep({ value, onChange, onBack, onNext }: TimelineStepProps) {
  const canContinue = !!value.startDate && !!value.timelineFlexibility;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canContinue) onNext();
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Timeline</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">Start date</label>
          <input
            type="date"
            value={value.startDate || ''}
            onChange={(e) => onChange({ ...value, startDate: e.target.value })}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">End date (optional)</label>
          <input
            type="date"
            value={value.endDate || ''}
            onChange={(e) => onChange({ ...value, endDate: e.target.value })}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Flexibility</label>
          <select
            value={value.timelineFlexibility}
            onChange={(e) => onChange({ ...value, timelineFlexibility: e.target.value as any })}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2"
          >
            <option value="">Select...</option>
            <option value="flexible">Flexible</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>
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