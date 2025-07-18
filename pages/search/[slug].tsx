import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';

import { SEO } from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { CategoryCard } from '@/components/CategoryCard';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { useDebounce } from '@/hooks/useDebounce';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface BaseSearchResult {
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  category?: string;
  date?: string;
}

interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;
  stock?: number;
}

interface TalentSearchResult extends BaseSearchResult {
  type: 'talent';
  rating?: number;
}

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
}

interface CategorySearchResult extends BaseSearchResult {
  type: 'category';
}

type SearchResult = ProductSearchResult | TalentSearchResult | BlogSearchResult | CategorySearchResult;

// Type guard functions
const _hasPrice = undefined; // Unused (result: SearchResult): result is ProductSearchResult => 
  result.type === 'product' || result.type === 'equipment';

const _hasRating = undefined; // Unused (result: SearchResult): result is ProductSearchResult | TalentSearchResult => 
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent';

interface SearchResultsPageProps {
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
}

interface OfflineFilters {
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
}

function offlineSearch(
  query: string,
  page = 1,
  limit = 12,
  filters: OfflineFilters = {}
): { results: SearchResult[]; totalCount: number } {
  const term = query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);

  const productResults = MARKETPLACE_LISTINGS.filter(
    (p) =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some((t) => match(t)),
  ).map((p) => {
    const result: ProductSearchResult = {
      id: p.id,
      title: p.title ?? '',
      description: p.description ?? '',
      type: 'product' as const,
      slug: p.id,
      tags: p.tags ?? [],
      category: p.category ?? '',
      date: p.createdAt ?? '',
    };
    if (typeof p.images?.[0] === 'string') result.image = p.images[0];
    if (typeof p.price === 'number') result.price = p.price;
    if (typeof p.rating === 'number') result.rating = p.rating;
    if (p.author) {
      result.author = { name: p.author.name };
      if (typeof p.author.avatarUrl === 'string') result.author.avatar = p.author.avatarUrl;
    }
    return result;
  });

  const talentResults: TalentSearchResult[] = TALENT_PROFILES.filter(
    (t) =>
      match(t.full_name) ||
      match(t.professional_title) ||
      match(t.location) ||
      match(t.bio) ||
      match(t.summary) ||
      (t.skills ?? []).some((s) => match(s)),
  ).map((t) => ({
    id: t.id,
    title: t.full_name,
    description: t.professional_title,
    type: 'talent' as const,
    slug: t.id,
    image: t.profile_picture_url ?? '',
    tags: t.skills ?? [],
    category: 'Talent',
    date: new Date().toISOString(),
    rating: typeof t.average_rating === 'number' ? t.average_rating : 0,
  }));

  const blogResults = BLOG_POSTS.filter(
    (b) =>
      match(b.title) ||
      match(b.excerpt) ||
      match(b.content) ||
      b.tags?.some((t) => match(t)),
  ).map((b) => ({
    id: b.slug,
    title: b.title,
    description: b.excerpt,
    type: 'blog' as const,
    slug: b.slug,
    image: b.featuredImage,
    tags: b.tags,
    category: 'Blog',
    date: b.publishedDate,
  }));

  let all = [...productResults, ...talentResults, ...blogResults];

  if (filters.category) {
    all = all.filter(r => r.category === filters.category);
  }
  if (typeof filters.minPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) >= filters.minPrice!;
      }
      return true;
    });
  }
  if (typeof filters.maxPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) <= filters.maxPrice!;
      }
      return true;
    });
  }
  if (typeof filters.minRating === 'number') {
    all = all.filter(r => {
      if (r.type === 'product' || r.type === 'talent') {
        return (r.rating ?? 0) >= filters.minRating!;
      }
      return true;
    });
  }

  if (filters.sortBy && filters.sortBy !== 'relevance') {
    switch (filters.sortBy) {
      case 'price_asc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return aPrice - bPrice;
        });
        break;
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return bPrice - aPrice;
        });
        break;
      case 'rating':
        all.sort((a, b) => {
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
          return bRating - aRating;
        });
        break;
      default:
        break;
    }
  } else {
    all.sort((a, b) => a.title.localeCompare(b.title));
  }
  const start = (page - 1) * limit;
  const paginated = all.slice(start, start + limit);
  return { results: paginated, totalCount: all.length };
}

export default function SearchResultsPage({
  initialResults,
  query,
  slug: _slug,
  totalCount,
}: SearchResultsPageProps) {
  const router = useRouter();
  const { _isAuthenticated } = useAuth();
  const [results, setResults] = useState<SearchResult[]>(initialResults);
  const [_loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const debouncedQuery = useDebounce(searchQuery, 300);
  const [_viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, _setSortBy] = useState('relevance');
  const [categoryFilter, _setCategoryFilter] = useState('all');
  const [minPrice, _setMinPrice] = useState('');
  const [maxPrice, _setMaxPrice] = useState('');
  const [minRating, _setMinRating] = useState('');
  const [_totalResults, setTotalResults] = useState(totalCount);

  // Fetch search results
  const fetchResults = useCallback(async (searchTerm: string, page = 1) => {
    try {
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);

      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
        sort: sortBy,
      });
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);

      const response = await fetch(`/api/search?${params.toString()}`);

      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`);
      }

      const data = await response.json();
      logInfo('Search results received:', { data:  { data: data } });

      setTotalResults(data.totalCount || data.results?.length || 0);

      if (page === 1) {
        setResults(data.results || []);
      } else {
        setResults((prev) => [...prev, ...(data.results || [])]);
      }
    } catch {
      logErrorToProduction('Error fetching search results:', { data: error });
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy,
        ...(categoryFilter !== 'all' && categoryFilter ? { category: categoryFilter } : {}),
        ...(minPrice ? { minPrice: Number(minPrice) } : {}),
        ...(maxPrice ? { maxPrice: Number(maxPrice) } : {}),
        ...(minRating ? { minRating: Number(minRating) } : {}),
      });
      setTotalResults(offline.totalCount);
      if (page === 1) {
        setResults(offline.results);
      } else {
        setResults((prev) => [...prev, ...offline.results]);
      }
    } finally {
      setLoading(false);
    }
  }, [sortBy, categoryFilter, minPrice, maxPrice, minRating]);

  // Handle search input change
  const _handleSearch = undefined; // Unused (_newQuery: string) => {
    setSearchQuery(newQuery);
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
        shallow: true,
      });
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetchResults(debouncedQuery, 1);
    } else {
      setResults([]);
      setTotalResults(0);
    }
  }, [debouncedQuery, fetchResults]);

  // Load more results
  const _loadMore = undefined; // Unused () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
  };

  const _categories = undefined; // Unused Array.from(
    new Set(results.map((r) => r.category).filter(Boolean)),
  );

  const filteredResults = results.filter((r) => {
    if (
      categoryFilter !== 'all' &&
      categoryFilter &&
      r.category !== categoryFilter
    ) {
      return false;
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false;
      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
        return false;
      }
    }
    if (minRating && (r.type === 'product' || r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
        return false;
      }
    }
    return true;
  });

  // Group results by type for better display
  const _groupedResults = undefined; // Unused filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
      return acc;
    },
    {} as Record<string, SearchResult[]>,
  );

  const _renderResultCard = undefined; // Unused (_result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':
        return (
          <div key={result.id} data-testid="result-card">
            <ProductCard
              product={{
                id: result.id,
                name: result.title,
                title: result.title,
                description: result.description || '',
                price: result.price || 0,
                images: result.image ? [result.image] : [],
                rating: result.rating || 0,
                reviewCount: 0,
                tags: result.tags || [],
                category: result.category || '',
                currency: '$',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                stock: (result as ProductSearchResult).stock ?? 0,
                in_stock: ((result as ProductSearchResult).stock ?? 0) > 0
              }}
            />
          </div>
        );
      case 'talent':
        return (
          <div key={result.id} data-testid="result-card">
            <TalentCard
              talent={{
                id: result.id,
                user_id: result.id,
                full_name: result.title,
                professional_title: result.description || '',
                profile_picture_url: result.image ?? '',
                average_rating: result.rating ?? 0,
                skills: result.tags || [],
                location: result.category || '',
                bio: result.description || '',
                summary: result.description || '',
                is_verified: false,
                availability_type: 'available',
              }}
              onViewProfile={(_id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={(talent) => {
                router.push(`/talent/${talent.id}?action=hire`);
              }}
              isAuthenticated={isAuthenticated}
            />
          </div>
        );
      case 'category':
        return (
          <div key={result.id} data-testid="result-card">
            <CategoryCard
              title={result.title}
              description={result.description || ''}
              icon={result.image || '📁'}
            />
          </div>
        );
      default:
        return (
          <div
            key={result.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            data-testid="result-card"
          >
            <h3 className="font-semibold">{result.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">
              {result.description}
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
      />
      {/* ...rest of the component rendering... */}
    </>
  );
}