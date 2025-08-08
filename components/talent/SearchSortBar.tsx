import React from 'react';

export type SearchSortBarProps = {
  search: string;
  onSearch: (value: string) => void;
  sortBy: string;
  onSortBy: (value: string) => void;
};

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'mostBooked', label: 'Most Booked' },
  { value: 'topRated', label: 'Top Rated' },
  { value: 'priceAsc', label: 'Price Low → High' },
  { value: 'priceDesc', label: 'Price High → Low' },
];

export default function SearchSortBar({ search, onSearch, sortBy, onSortBy }: SearchSortBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <div className="flex-1 relative">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by name, title, or skills…"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 pl-10"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </span>
      </div>
      <div>
        <select value={sortBy} onChange={(e) => onSortBy(e.target.value)} className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2">
          {SORT_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}