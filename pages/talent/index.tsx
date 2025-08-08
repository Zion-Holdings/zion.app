import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import EnhancedMarketplaceCard from '@/components/ui/EnhancedMarketplaceCard';
import InteractiveSearch, { CategoryOption, FilterState } from '@/components/ui/InteractiveSearch';
import { TALENT_PROFILES } from '@/data/talent';

const availabilityCategories: CategoryOption[] = [
  { label: 'All', value: '' },
  { label: 'Full-time', value: 'full-time' },
  { label: 'Part-time', value: 'part-time' },
  { label: 'Contract', value: 'contract' },
];

const TalentsIndex: NextPage = () => {
  const [filters, setFilters] = useState<FilterState>({ keyword: '', category: '', minPrice: undefined, maxPrice: undefined, minRating: undefined });

  const filtered = useMemo(() => {
    return TALENT_PROFILES.filter((t) => {
      const text = `${t.name} ${t.title} ${t.location} ${t.skills.join(' ')}`.toLowerCase();
      if (filters.keyword && !text.includes(filters.keyword.toLowerCase())) return false;
      if (filters.category && t.availability !== filters.category) return false;
      if (typeof filters.minPrice === 'number' && t.hourlyRateUsd < filters.minPrice) return false;
      if (typeof filters.maxPrice === 'number' && t.hourlyRateUsd > filters.maxPrice) return false;
      if (typeof filters.minRating === 'number') {
        const rating = 4.8; // demo placeholder
        if (rating < filters.minRating) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <EnhancedLayout>
      <Head>
        <title>Talents - Zion Tech Solutions</title>
        <meta name="description" content="Browse available talents" />
      </Head>

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Talents</h1>
      </div>

      <InteractiveSearch
        categories={availabilityCategories}
        value={filters}
        onChange={setFilters}
        priceEnabled
        ratingEnabled
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t) => (
          <EnhancedMarketplaceCard
            key={t.slug}
            imageUrl={`https://picsum.photos/seed/${encodeURIComponent(t.slug)}/800/450`}
            title={`${t.name} • ${t.title}`}
            description={`${t.bio} • ${t.location}`}
            tags={[t.availability, ...t.skills.slice(0, 3)]}
            priceRangeLabel={`$${t.hourlyRateUsd}/hr`}
            rating={4.8}
            href={`/talent/${t.slug}`}
            quoteHref={`/contact?subject=${encodeURIComponent('Talent request: ' + t.name)}`}
          />
        ))}
      </div>
    </EnhancedLayout>
  );
};

export default TalentsIndex;