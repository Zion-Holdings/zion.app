import React from 'react';

export type SuggestionBoxProps = {
  type: 'client' | 'talent';
  rangeText: string; // e.g., "$30–$60/hour" or "$2,400–$3,600"
  confidence: 'Low' | 'Medium' | 'High';
  rationale: string;
  onApply: () => void; // parent handles applying; we do NOT auto-submit
  disabled?: boolean;
};

export function PricingSuggestionBox(props: SuggestionBoxProps) {
  const { type, rangeText, confidence, rationale, onApply, disabled } = props;
  const badgeColor = confidence === 'High' ? 'bg-green-100 text-green-800' : confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';

  return (
    <div className="w-full rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-sm text-gray-500">AI Suggestion ({type === 'client' ? 'Budget' : 'Rate'})</div>
          <div className="text-xl font-semibold mt-1">{rangeText}</div>
        </div>
        <span className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ${badgeColor}`}>AI confidence: {confidence}</span>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <span className="font-medium">Why?</span> <span title={rationale} className="underline decoration-dotted cursor-help">Explanation</span>
        <div className="sr-only">{rationale}</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">Based on market data & trends</span>
        <button
          type="button"
          onClick={onApply}
          disabled={disabled}
          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Apply Suggestion
        </button>
      </div>
    </div>
  );
}

export default PricingSuggestionBox;