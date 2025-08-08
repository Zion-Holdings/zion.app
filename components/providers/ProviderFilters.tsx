import { ChangeEvent } from 'react';
import { PROVIDER_CATEGORIES } from '../../data/providers/providers';

export type ProviderFiltersState = {
  search: string;
  category: string; // 'all' or a specific category
  minRating: number; // 0-5
  minAiMatch: number; // 0-100
  sortBy: 'relevance' | 'ai' | 'rating';
};

export type ProviderFiltersProps = {
  state: ProviderFiltersState;
  onChange: (next: ProviderFiltersState) => void;
};

export default function ProviderFilters({ state, onChange }: ProviderFiltersProps) {
  const onText = (e: ChangeEvent<HTMLInputElement>) => onChange({ ...state, search: e.target.value });
  const onCategory = (e: ChangeEvent<HTMLSelectElement>) => onChange({ ...state, category: e.target.value });
  const onMinRating = (e: ChangeEvent<HTMLSelectElement>) => onChange({ ...state, minRating: Number(e.target.value) });
  const onMinAi = (e: ChangeEvent<HTMLInputElement>) => onChange({ ...state, minAiMatch: Number(e.target.value) });
  const onSort = (e: ChangeEvent<HTMLSelectElement>) => onChange({ ...state, sortBy: e.target.value as ProviderFiltersState['sortBy'] });

  return (
    <div className="enhanced-card border border-gray-100 dark:border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <input
          type="text"
          value={state.search}
          onChange={onText}
          placeholder="Search providers…"
          className="col-span-2 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm"
        />

        <select value={state.category} onChange={onCategory} className="rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm">
          {PROVIDER_CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>

        <select value={state.minRating} onChange={onMinRating} className="rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm">
          {[0, 3, 3.5, 4, 4.5].map((r) => (
            <option key={r} value={r}>{`Min rating ${r === 0 ? '(any)' : r.toFixed(1)}`}</option>
          ))}
        </select>

        <div className="flex items-center gap-3">
          <label className="text-xs opacity-70">Min AI match</label>
          <input type="range" min={0} max={100} step={5} value={state.minAiMatch} onChange={onMinAi} className="flex-1" />
          <span className="text-xs tabular-nums w-10 text-right">{state.minAiMatch}%</span>
        </div>

        <select value={state.sortBy} onChange={onSort} className="rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 text-sm md:col-span-1">
          <option value="relevance">Sort: Relevance</option>
          <option value="ai">Sort: AI match</option>
          <option value="rating">Sort: Rating</option>
        </select>
      </div>
    </div>
  );
}