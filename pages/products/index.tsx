import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import EnhancedMarketplaceCard from '@/components/ui/EnhancedMarketplaceCard';
import InteractiveSearch, { CategoryOption, FilterState } from '@/components/ui/InteractiveSearch';
import equipment from '@/data/equipment.json';

const categoryOptions: CategoryOption[] = Array.from(
  new Set((equipment as any[]).map((e) => e.category))
)
  .sort()
  .map((c) => ({ label: c.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()), value: c }));

const EquipmentIndex: NextPage = () => {
  const [filters, setFilters] = useState<FilterState>({ keyword: '', category: '', minPrice: undefined, maxPrice: undefined, minRating: undefined });

  const filtered = useMemo(() => {
    return (equipment as any[]).filter((e) => {
      const text = `${e.name} ${e.description} ${e.category}`.toLowerCase();
      if (filters.keyword && !text.includes(filters.keyword.toLowerCase())) return false;
      if (filters.category && e.category !== filters.category) return false;
      const price = e.dailyRateUsd as number;
      if (typeof filters.minPrice === 'number' && price < filters.minPrice) return false;
      if (typeof filters.maxPrice === 'number' && price > filters.maxPrice) return false;
      if (typeof filters.minRating === 'number') {
        const rating = e.rating ?? 4.6;
        if (rating < filters.minRating) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <EnhancedLayout>
      <Head>
        <title>Equipment - Zion Tech Solutions</title>
        <meta name="description" content="Browse rentable equipment" />
      </Head>

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Equipment</h1>
      </div>

      <InteractiveSearch categories={categoryOptions} value={filters} onChange={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((e: any) => (
          <EnhancedMarketplaceCard
            key={e.slug}
            imageUrl={`https://picsum.photos/seed/${encodeURIComponent(e.slug)}/800/450`}
            title={e.name}
            description={e.description}
            tags={[e.category]}
            priceRangeLabel={`$${e.dailyRateUsd}/day`}
            rating={e.rating ?? 4.6}
            href={`/products/${e.slug}`}
            quoteHref={`/contact?subject=${encodeURIComponent('Equipment quote: ' + e.name)}`}
          />
        ))}
      </div>
    </EnhancedLayout>
  );
};

export default EquipmentIndex;