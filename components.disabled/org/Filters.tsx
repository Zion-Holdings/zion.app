import React from 'react';
import type { OrgFilters, DisplayMode, RoleType } from '../../types/org';

export type FiltersProps = {
  filters: OrgFilters;
  onChange: (next: OrgFilters) => void;
  displayMode: DisplayMode;
  onDisplayModeChange: (mode: DisplayMode) => void;
  showPhotos: boolean;
  onTogglePhotos: (show: boolean) => void;
};

const ROLE_OPTIONS: RoleType[] = ['Admin', 'Lead', 'Builder', 'Delegate'];

export default function Filters({ filters, onChange, displayMode, onDisplayModeChange, showPhotos, onTogglePhotos }: FiltersProps) {
  return (
    <div className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex flex-wrap gap-3 items-center">
        <label className="font-medium">View:</label>
        <select
          className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          value={filters.view || 'all'}
          onChange={(e) => onChange({ ...filters, view: e.target.value as OrgFilters['view'] })}
        >
          <option value="all">All</option>
          <option value="dao">DAO only</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            id="teamOnly"
            type="checkbox"
            className="h-4 w-4"
            checked={!!filters.teamOnly}
            onChange={(e) => onChange({ ...filters, teamOnly: e.target.checked })}
          />
          <label htmlFor="teamOnly">Core Team only</label>
        </div>

        <label className="font-medium ml-2">Roles:</label>
        <select
          multiple
          className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          value={filters.roleTypes || []}
          onChange={(e) => {
            const selected = Array.from(e.target.selectedOptions).map((o) => o.value as RoleType);
            onChange({ ...filters, roleTypes: selected });
          }}
        >
          {ROLE_OPTIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex-1 min-w-[200px]"
          placeholder="Search name, title, region..."
          value={filters.search || ''}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
        />
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <label className="font-medium">Zone:</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          placeholder="e.g., Africa, Europe, Global"
          onBlur={(e) => {
            const val = e.target.value.trim();
            onChange({ ...filters, zones: val ? [val] : [] });
          }}
        />

        <label className="font-medium">Region:</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          placeholder="e.g., Zion Africa"
          onBlur={(e) => {
            const val = e.target.value.trim();
            onChange({ ...filters, regions: val ? [val] : [] });
          }}
        />

        <label className="font-medium">Country:</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          placeholder="e.g., US, KE"
          onBlur={(e) => {
            const val = e.target.value.trim();
            onChange({ ...filters, countries: val ? [val] : [] });
          }}
        />

        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-2 rounded-lg border ${displayMode === 'tree' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'} border-gray-300 dark:border-gray-700`}
              onClick={() => onDisplayModeChange('tree')}
            >
              Tree
            </button>
            <button
              className={`px-3 py-2 rounded-lg border ${displayMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'} border-gray-300 dark:border-gray-700`}
              onClick={() => onDisplayModeChange('grid')}
            >
              Grid
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="photos"
              type="checkbox"
              className="h-4 w-4"
              checked={showPhotos}
              onChange={(e) => onTogglePhotos(e.target.checked)}
            />
            <label htmlFor="photos">Photos</label>
          </div>
        </div>
      </div>
    </div>
  );
}