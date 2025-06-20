import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/ProductCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchEmptyState } from '@/components/marketplace/EmptyState';

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  type: 'product' | 'talent' | 'category' | 'equipment';
  slug: string;
  image?: string;
  price?: number;
  rating?: number;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  category?: string;
}

interface SearchResultsPageProps {
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
}

export default function SearchResultsPage({ 
  initialResults, 
  query, 
  slug, 
  totalCount 
}: SearchResultsPageProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [results, setResults] = useState<SearchResult[]>(initialResults);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('relevance');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');

  // Fetch search results
  const fetchResults = async (searchTerm: string, page = 1) => {
    try {
      setLoading(true);
      console.log(`Fetching search results for: ${searchTerm}, page: ${page}`);
      
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(searchTerm)}&page=${page}&limit=12&sort=${sortBy}`
      );
      
      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Search results received:', data);
      
      if (page === 1) {
        setResults(data.results || []);
      } else {
        setResults(prev => [...prev, ...(data.results || [])]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    if (newQuery.trim()) {
      // Update URL and fetch new results
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, { shallow: true });
      setCurrentPage(1);
      fetchResults(newQuery, 1);
    }
  };

  // Load more results
  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
  };

  const categories = Array.from(
    new Set(results.map(r => r.category).filter(Boolean))
  );

  const filteredResults = results.filter((r) => {
    if (categoryFilter !== 'all' && categoryFilter && r.category !== categoryFilter) {
      return false;
    }
    if (minPrice && (r.price ?? 0) < Number(minPrice)) {
      return false;
    }
    if (maxPrice && (r.price ?? 0) > Number(maxPrice)) {
      return false;
    }
    if (minRating && (r.rating ?? 0) < Number(minRating)) {
      return false;
    }
    return true;
  });

  // Group results by type for better display
  const groupedResults = filteredResults.reduce((acc, result) => {
    if (!acc[result.type]) acc[result.type] = [];
    acc[result.type].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':
        return (
          <div key={result.id} data-testid="result-card">
            <ProductCard
              product={{
                id: result.id,
                title: result.title,
                description: result.description || '',
                price: result.price || 0,
                images: result.image ? [result.image] : [],
                rating: result.rating,
                author: result.author ? { 
                  name: result.author.name, 
                  id: result.id, 
                  avatarUrl: result.author.avatar 
                } : { name: '', id: '' },
                tags: result.tags || [],
                category: result.category || '',
                currency: '$',
                createdAt: new Date().toISOString()
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
                profile_picture_url: result.image,
                average_rating: result.rating,
                skills: result.tags || [],
                location: result.category,
                bio: result.description,
                summary: result.description,
                is_verified: false,
                availability_type: 'available'
              }}
              onViewProfile={(id: string) => {
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
          <div key={result.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow" data-testid="result-card">
            <h3 className="font-semibold">{result.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{result.description}</p>
          </div>
        );
    }
  };

  return (
    <>
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com/search/${slug}`}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8" data-testid="search-results">
          {/* Search Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Search Results
                </h1>
                <p className="text-gray-600 dark:text-gray-400" data-testid="results-count">
                  {filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for "${query}"`
                    : `No results found for "${query}"`}
                </p>
              </div>

              {/* Search Input */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max $"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                </div>

                <select
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">All Ratings</option>
                  <option value="4">4★ & up</option>
                  <option value="3">3★ & up</option>
                  <option value="2">2★ & up</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  data-testid="view-mode-grid"
                  className={viewMode === 'grid' ? 'active' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  data-testid="view-mode-list"
                  className={viewMode === 'list' ? 'active' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && results.length === 0 && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}

          {/* Results */}
          {filteredResults.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                    {type}s ({typeResults.length})
                  </h2>
                  
                  <div className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                      : 'space-y-4'
                  }>
                    {typeResults.map(renderResultCard)}
                  </div>
                </div>
              ))}

              {/* Load More Button */}
              {results.length < totalCount && (
                <div className="flex justify-center py-8">
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Loading...
                      </>
                    ) : (
                      'Load More Results'
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<SearchResultsPageProps> = async (context: any) => {
  const params = context.params;
  const slug = params?.slug as string;
  
  // Convert slug back to query term
  const query = slug ? slug.replace(/-/g, ' ') : '';
  
  try {
    // In production, replace with your actual API base URL
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    
    console.log(`Fetching search results for slug: ${slug}, query: ${query}`);
    
    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`
    );
    
    let results = [];
    let totalCount = 0;
    
    if (response.ok) {
      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      console.log(`Server-side fetch successful: ${results.length} results`);
    } else {
      console.error(`Search API error: ${response.status} ${response.statusText}`);
    }

    return {
      props: {
        initialResults: results,
        query,
        slug,
        totalCount,
      },
    };
  } catch (error) {
    console.error('Error fetching search results:', error);
    
    return {
      props: {
        initialResults: [],
        query,
        slug,
        totalCount: 0,
      },
    };
  }
}; 