import React, { useMemo } from 'react';

export type Filters = {
  skills: string[];
  availability: string | '';
  experienceMin?: number;
  experienceMax?: number;
  region: string | '';
  rateMin?: number;
  rateMax?: number;
};

export type FilterSidebarProps = {
  allSkills: string[];
  filters: Filters;
  onChange: (next: Filters) => void;
  onClear: () => void;
};

export default function FilterSidebar({ allSkills, filters, onChange, onClear }: FilterSidebarProps) {
  const skillSet = useMemo(() => Array.from(new Set(allSkills)).sort(), [allSkills]);
  const regions = ['Americas', 'EMEA', 'APAC'];
  const availabilities = ['full-time', 'part-time', 'contract'];

  function toggleSkill(skill: string) {
    const exists = filters.skills.includes(skill);
    const skills = exists ? filters.skills.filter((s) => s !== skill) : [...filters.skills, skill];
    onChange({ ...filters, skills });
  }

  return (
    <aside className="w-full sm:w-72 shrink-0">
      <div className="sticky top-20 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold">Filters</h4>
          <button onClick={onClear} className="text-xs text-blue-600 hover:underline">Clear</button>
        </div>

        <div className="space-y-5">
          <div>
            <div className="text-xs font-medium text-gray-500 mb-2">Skills</div>
            <div className="flex flex-wrap gap-2">
              {skillSet.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-2.5 py-1 rounded-full border text-xs ${
                    filters.skills.includes(skill)
                      ? 'bg-blue-600 text-white border-blue-700'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Availability</div>
              <select
                value={filters.availability}
                onChange={(e) => onChange({ ...filters, availability: e.target.value })}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1.5 text-sm"
              >
                <option value="">Any</option>
                {availabilities.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Region</div>
              <select
                value={filters.region}
                onChange={(e) => onChange({ ...filters, region: e.target.value })}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1.5 text-sm"
              >
                <option value="">Any</option>
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Experience Min</div>
              <input type="number" min={0} value={filters.experienceMin ?? ''} onChange={(e) => onChange({ ...filters, experienceMin: e.target.value ? Number(e.target.value) : undefined })} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1.5 text-sm" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Experience Max</div>
              <input type="number" min={0} value={filters.experienceMax ?? ''} onChange={(e) => onChange({ ...filters, experienceMax: e.target.value ? Number(e.target.value) : undefined })} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1.5 text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Rate Min ($/hr)</div>
              <input type="number" min={0} value={filters.rateMin ?? ''} onChange={(e) => onChange({ ...filters, rateMin: e.target.value ? Number(e.target.value) : undefined })} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1.5 text-sm" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Rate Max ($/hr)</div>
              <input type="number" min={0} value={filters.rateMax ?? ''} onChange={(e) => onChange({ ...filters, rateMax: e.target.value ? Number(e.target.value) : undefined })} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1.5 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}