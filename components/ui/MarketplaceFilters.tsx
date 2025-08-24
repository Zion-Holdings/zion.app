import React from 'react';

export type Filters = {
  categories: string[];
  priceMin?: number;
  priceMax?: number;
  ratingMin?: number;
  deliveryDays?: number; // max days
};

type Props = {
  availableCategories: string[];
  value: Filters;
  onChange: (next: Filters) => void;
};

export default function MarketplaceFilters({ availableCategories, value, onChange }: Props) {
  const toggleCategory = (cat: string) => {
    const set = new Set(value.categories);
    if (set.has(cat)) set.delete(cat); else set.add(cat);
    onChange({ ...value, categories: Array.from(set) });
  };

  return (
    <aside className="w-full sm:w-72 shrink-0">
      <div className="sticky top-20 rounded-2xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white">Filters</h4>
        <div className="mt-4 space-y-5 text-sm">
          <div>
            <div className="text-white/80 mb-2">Category</div>
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((cat) => {
                const active = value.categories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={
                      'px-2 py-1 rounded-full border text-xs ' +
                      (active
                        ? 'border-cyan-300/50 text-cyan-200 bg-cyan-500/10'
                        : 'border-white/15 text-white/70 hover:bg-white/10')
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-white/80 mb-2">Price range ($)</div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min"
                value={value.priceMin ?? ''}
                onChange={(e) => onChange({ ...value, priceMin: e.target.value ? Number(e.target.value) : undefined })}
                className="rounded-lg bg-white/10 text-white border border-white/20 px-2 py-1"
              />
              <input
                type="number"
                placeholder="Max"
                value={value.priceMax ?? ''}
                onChange={(e) => onChange({ ...value, priceMax: e.target.value ? Number(e.target.value) : undefined })}
                className="rounded-lg bg-white/10 text-white border border-white/20 px-2 py-1"
              />
            </div>
          </div>

          <div>
            <div className="text-white/80 mb-2">Minimum rating</div>
            <select
              value={value.ratingMin ?? 0}
              onChange={(e) => onChange({ ...value, ratingMin: Number(e.target.value) })}
              className="w-full rounded-lg bg-white/10 text-white border border-white/20 px-2 py-1"
            >
              {[0, 3, 4, 4.5, 5].map((r) => (
                <option key={r} value={r}>{r === 0 ? 'Any' : `${r}+`}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="text-white/80 mb-2">Delivery time</div>
            <select
              value={value.deliveryDays ?? 0}
              onChange={(e) => onChange({ ...value, deliveryDays: Number(e.target.value) || undefined })}
              className="w-full rounded-lg bg-white/10 text-white border border-white/20 px-2 py-1"
            >
              <option value={0}>Any</option>
              <option value={7}>Within 1 week</option>
              <option value={14}>Within 2 weeks</option>
              <option value={30}>Within 1 month</option>
            </select>
          </div>

          <button
            onClick={() => onChange({ categories: [], priceMin: undefined, priceMax: undefined, ratingMin: undefined, deliveryDays: undefined })}
            className="w-full mt-2 rounded-lg border border-white/15 text-white/80 py-1.5 hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
}