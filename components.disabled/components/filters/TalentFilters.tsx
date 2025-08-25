import React, { useMemo, useState } from 'react';

export type TalentFilterState = {
  query: string;
  skills: string[];
  availability: Array<'available' | 'booked' | 'part-time' | 'full-time' | 'contract'>;
  minExperience?: number;
  maxExperience?: number;
  region?: 'Americas' | 'EMEA' | 'APAC' | '';
  minRate?: number;
  maxRate?: number;
  sortBy: 'newest' | 'top-rated' | 'most-booked';
};

export type TalentFiltersProps = {
  value: TalentFilterState;
  onChange: (next: TalentFilterState) => void;
  allSkills: string[];
};

export default function TalentFilters({ value, onChange, allSkills }: TalentFiltersProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((v) => !v);

  const handleChipAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      const text = target.value.trim();
      if (text && !value.skills.includes(text)) {
        onChange({ ...value, skills: [...value.skills, text] });
      }
      target.value = '';
    }
  };

  const handleChipRemove = (skill: string) => {
    onChange({ ...value, skills: value.skills.filter((s) => s !== skill) });
  };

  const availabilityOptions: Array<{ key: TalentFilterState['availability'][number]; label: string }> = [
    { key: 'available', label: 'Available' },
    { key: 'booked', label: 'Booked' },
    { key: 'part-time', label: 'Part-time' },
    { key: 'full-time', label: 'Full-time' },
    { key: 'contract', label: 'Contract' },
  ];

  return (
    <div className="sticky top-16 z-30 bg-white/70 dark:bg-black/50 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name or skills..."
                className="w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={value.query}
                onChange={(e) => onChange({ ...value, query: e.target.value })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 text-xs">{value.sortBy.replace('-', ' ')}</div>
            </div>
            <button
              className="shrink-0 inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-3 py-2 text-sm font-medium text-white"
              onClick={toggle}
            >
              {isOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          <div>
            <select
              className="rounded-lg bg-white/10 border border-white/15 px-2 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={value.sortBy}
              onChange={(e) => onChange({ ...value, sortBy: e.target.value as TalentFilterState['sortBy'] })}
            >
              <option value="newest">Newest</option>
              <option value="top-rated">Top Rated</option>
              <option value="most-booked">Most Booked</option>
            </select>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-2">
              <label className="block text-xs text-slate-300 mb-1">Skills</label>
              <div className="flex flex-wrap gap-2">
                {value.skills.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/15">
                    {s}
                    <button onClick={() => handleChipRemove(s)} className="text-slate-400 hover:text-white">×</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                onKeyDown={handleChipAdd}
                placeholder="Add skill and press Enter"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                list="all-skills"
              />
              <datalist id="all-skills">
                {allSkills.map((s) => (
                  <option key={s} value={s} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Availability</label>
              <div className="flex flex-wrap gap-2">
                {availabilityOptions.map((opt) => {
                  const checked = value.availability.includes(opt.key);
                  return (
                    <label key={opt.key} className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ring-1 cursor-pointer ${checked ? 'bg-cyan-500/20 text-cyan-200 ring-cyan-500/30' : 'bg-white/10 text-slate-200 ring-white/15'}`}>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checked}
                        onChange={() => {
                          const next = checked
                            ? value.availability.filter((a) => a !== opt.key)
                            : [...value.availability, opt.key];
                          onChange({ ...value, availability: next });
                        }}
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Experience (years)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  placeholder="Min"
                  className="w-20 rounded-lg bg-white/10 border border-white/15 px-2 py-1.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={value.minExperience ?? ''}
                  onChange={(e) => onChange({ ...value, minExperience: e.target.value ? Number(e.target.value) : undefined })}
                />
                <span className="text-slate-400">—</span>
                <input
                  type="number"
                  min={0}
                  placeholder="Max"
                  className="w-20 rounded-lg bg-white/10 border border-white/15 px-2 py-1.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={value.maxExperience ?? ''}
                  onChange={(e) => onChange({ ...value, maxExperience: e.target.value ? Number(e.target.value) : undefined })}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Region</label>
              <select
                className="w-full rounded-lg bg-white/10 border border-white/15 px-2 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={value.region ?? ''}
                onChange={(e) => onChange({ ...value, region: (e.target.value || undefined) as any })}
              >
                <option value="">Any</option>
                <option value="Americas">Americas</option>
                <option value="EMEA">EMEA</option>
                <option value="APAC">APAC</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Hourly rate (USD)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  placeholder="Min"
                  className="w-24 rounded-lg bg-white/10 border border-white/15 px-2 py-1.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={value.minRate ?? ''}
                  onChange={(e) => onChange({ ...value, minRate: e.target.value ? Number(e.target.value) : undefined })}
                />
                <span className="text-slate-400">—</span>
                <input
                  type="number"
                  min={0}
                  placeholder="Max"
                  className="w-24 rounded-lg bg-white/10 border border-white/15 px-2 py-1.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={value.maxRate ?? ''}
                  onChange={(e) => onChange({ ...value, maxRate: e.target.value ? Number(e.target.value) : undefined })}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}