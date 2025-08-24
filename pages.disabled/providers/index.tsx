import Head from 'next/head';
import { useMemo, useState } from 'react';
import ProviderCard from '../../components/providers/ProviderCard';
import ProviderFilters, { ProviderFiltersState } from '../../components/providers/ProviderFilters';
import { PROVIDERS, ServiceProvider } from '../../data/providers/providers';

export default function ProvidersPage() {
  const [filters, setFilters] = useState<ProviderFiltersState>({
    search: '',
    category: 'all',
    minRating: 0,
    minAiMatch: 0,
    sortBy: 'relevance',
  });

  const filtered = useMemo(() => {
    let list: ServiceProvider[] = [...PROVIDERS];

    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      list = list.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (filters.category !== 'all') {
      list = list.filter((p) => p.category === filters.category);
    }

    list = list.filter((p) => p.rating >= filters.minRating && p.aiMatchScore >= filters.minAiMatch);

    switch (filters.sortBy) {
      case 'ai':
        list.sort((a, b) => b.aiMatchScore - a.aiMatchScore);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
        break;
      default:
        // Relevance: simple blend of AI score and rating
        list.sort((a, b) => (b.aiMatchScore * 0.6 + b.rating * 8) - (a.aiMatchScore * 0.6 + a.rating * 8));
    }

    return list;
  }, [filters]);

  return (
    <div>
      <Head>
        <title>IT Service Providers</title>
        <meta name="description" content="Discover and filter IT service providers. Compare AI-matched scores, ratings, and request quotes." />
      </Head>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">IT Service Providers</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Browse vetted providers. Filter by category, rating, and AI match. Click Request Quote to get started.</p>
      </div>

      <div className="mb-6">
        <ProviderFilters state={filters} onChange={setFilters} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProviderCard key={p.id} provider={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-sm opacity-70">No providers match your filters. Try broadening your search.</div>
      )}
    </div>
  );
}