import { describe, it, expect } from 'vitest';
import { performSearch } from '@/pages/api/search';

describe('performSearch', () => {
  it('filters by category and sorts by price desc', () => {
    const { results } = performSearch('AI', 1, 50, {
      category: 'AI Models & APIs',
      sort: 'price_desc'
    });
    expect(results.length).toBeGreaterThan(0);
    for (const r of results) {
      expect(r.category).toBe('AI Models & APIs');
    }
    for (let i = 1; i < results.length; i++) {
      expect((results[i - 1].price ?? 0)).toBeGreaterThanOrEqual(results[i].price ?? 0);
    }
  });

  it('applies minimum rating filter', () => {
    const { results } = performSearch('AI', 1, 50, {
      minRating: 4.8,
      sort: 'rating'
    });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every(r => (r.rating ?? 0) >= 4.8)).toBe(true);
  });
});
