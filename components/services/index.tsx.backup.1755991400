import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import EnhancedMarketplaceCard from '@/components/ui/EnhancedMarketplaceCard';
import InteractiveSearch, { CategoryOption, FilterState } from '@/components/ui/InteractiveSearch';
import services from '@/data/services/services.json';

const categoryOptions: CategoryOption[] = Array.from(
  new Set((services as any[]).map((s) => s.category))
)
  .sort()
  .map((c) => ({ label: c.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()), value: c }));

const ServicesIndex: NextPage = () => {
  const [filters, setFilters] = useState<FilterState>({ keyword: '', category: '', minPrice: undefined, maxPrice: undefined, minRating: undefined });

  const filtered = useMemo(() => {
    return (services as any[]).filter((s) => {
      const text = `${s.name} ${s.description} ${s.category}`.toLowerCase();
      if (filters.keyword && !text.includes(filters.keyword.toLowerCase())) return false;
      if (filters.category && s.category !== filters.category) return false;
      const [min, max] = s.priceRangeUSD as [number, number];
      if (typeof filters.minPrice === 'number' && max < filters.minPrice) return false;
      if (typeof filters.maxPrice === 'number' && min > filters.maxPrice) return false;
      if (typeof filters.minRating === 'number') {
        const rating = s.rating ?? 4.6; // default if missing
        if (rating < filters.minRating) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <EnhancedLayout>
      <Head>
        <title>Services - Zion Tech Solutions</title>
        <meta name="description" content="Browse our services" />
      </Head>
      
      <main>
        <h1>Index</h1>
        <p>Service details coming soon...</p>
        <a href="/services">Back to Services</a>
      </main>
    </div>
  );
};

export default ServicesIndex;
