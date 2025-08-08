import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { products as allProducts, Product } from '../../data/it-equipment';

type SortKey = 'name-asc' | 'price-asc' | 'price-desc';

const SORT_LABELS: Record<SortKey, string> = {
  'name-asc': 'Name A→Z',
  'price-asc': 'Price (Buy) Low→High',
  'price-desc': 'Price (Buy) High→Low',
};

const CATEGORIES: Product['category'][] = [
  'Laptop',
  'Monitor',
  'Router',
  'Server',
  'Switch',
  'Printer',
  'UPS',
];

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [availabilityBuy, setAvailabilityBuy] = useState<boolean>(false);
  const [availabilityRent, setAvailabilityRent] = useState<boolean>(false);
  const [sortKey, setSortKey] = useState<SortKey>('name-asc');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const filteredAndSorted = useMemo(() => {
    let filtered = allProducts.filter((p) => {
      const matchesQuery = query
        ? p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.specs.join(' ').toLowerCase().includes(query.toLowerCase())
        : true;

      const matchesCategory = selectedCategories.size
        ? selectedCategories.has(p.category)
        : true;

      const matchesAvailability = (
        (availabilityBuy ? p.availability.buy : true) &&
        (availabilityRent ? p.availability.rent : true)
      );

      const matchesPrice = typeof maxPrice === 'number' && p.priceBuyUsd
        ? p.priceBuyUsd <= maxPrice
        : true;

      return matchesQuery && matchesCategory && matchesAvailability && matchesPrice;
    });

    const byPrice = (p: Product) => p.priceBuyUsd ?? Number.POSITIVE_INFINITY;

    filtered.sort((a, b) => {
      if (sortKey === 'name-asc') return a.name.localeCompare(b.name);
      if (sortKey === 'price-asc') return byPrice(a) - byPrice(b);
      return byPrice(b) - byPrice(a);
    });

    return filtered;
  }, [query, selectedCategories, availabilityBuy, availabilityRent, sortKey, maxPrice]);

  const toggleCategory = (cat: string) => {
    const next = new Set(selectedCategories);
    if (next.has(cat)) next.delete(cat); else next.add(cat);
    setSelectedCategories(next);
  };

  return (
    <>
      <Head>
        <title>IT Equipment Products</title>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-xl border p-4">
            <h2 className="font-semibold mb-3">Search</h2>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or spec..."
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-white rounded-xl border p-4">
            <h2 className="font-semibold mb-3">Categories</h2>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedCategories.has(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border p-4">
            <h2 className="font-semibold mb-3">Availability</h2>
            <label className="flex items-center gap-2 text-sm mb-2">
              <input type="checkbox" checked={availabilityBuy} onChange={(e) => setAvailabilityBuy(e.target.checked)} />
              <span>Buy</span>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={availabilityRent} onChange={(e) => setAvailabilityRent(e.target.checked)} />
              <span>Rent</span>
            </label>
          </div>

          <div className="bg-white rounded-xl border p-4">
            <h2 className="font-semibold mb-3">Max Buy Price (USD)</h2>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="e.g. 1500"
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-white rounded-xl border p-4">
            <h2 className="font-semibold mb-3">Sort by</h2>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(SORT_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </aside>

        <section className="lg:col-span-9">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Products</h1>
            <div className="text-sm text-gray-600">{filteredAndSorted.length} items</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAndSorted.map((p) => (
              <article key={p.id} className="bg-white rounded-xl border overflow-hidden flex flex-col">
                <div className="bg-gray-50 aspect-[4/3] flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain p-6" />
                </div>
                <div className="p-4 flex-1 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold leading-snug">{p.name}</h3>
                    <span className="text-xs rounded-full bg-gray-100 border px-2 py-1">{p.category}</span>
                  </div>

                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    {p.specs.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-sm">
                      {p.priceBuyUsd != null ? (
                        <div>
                          <span className="font-medium">Buy:</span> ${p.priceBuyUsd.toLocaleString()}
                        </div>
                      ) : (
                        <div className="text-gray-500">Buy: N/A</div>
                      )}
                      {p.priceRentUsdPerMonth != null ? (
                        <div>
                          <span className="font-medium">Rent:</span> ${p.priceRentUsdPerMonth}/mo
                        </div>
                      ) : (
                        <div className="text-gray-500">Rent: N/A</div>
                      )}
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        disabled={!p.availability.buy}
                        onClick={() => window.location.href = `/contact?intent=buy&product=${encodeURIComponent(p.id)}`}
                        className={`px-3 py-2 rounded-md text-sm font-medium border ${p.availability.buy ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                      >
                        Buy
                      </button>
                      <button
                        disabled={!p.availability.rent}
                        onClick={() => window.location.href = `/contact?intent=rent&product=${encodeURIComponent(p.id)}`}
                        className={`px-3 py-2 rounded-md text-sm font-medium border ${p.availability.rent ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                      >
                        Rent
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}