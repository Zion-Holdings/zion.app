import React, { useState, useEffect, useMemo } from 'react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Search, Filter, GridIcon, List, Loader2, SortAsc } from 'lucide-react';






import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { DOCS_SEARCH_ITEMS } from '@/data/docsSearchData';
import type { ProductListing } from '@/types/listings';
import type { TalentProfile } from '@/types/talent';
import type { BlogPost } from '@/types/blog';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'talent' | 'blog' | 'service' | 'doc';
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];
  date?: string;
}

interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;
}

interface SearchPageProps {
  products: ProductListing[];
  talent: TalentProfile[];
  posts: BlogPost[];
  docs: typeof DOCS_SEARCH_ITEMS;
  q: string;
}

// Highlight search terms in text
const HighlightText: React.FC<{ text: string; searchTerm: string; className?: string }> = ({ 
  text, 
  searchTerm, 
  className = '' 
}) => {
  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  
  return (
    <span className={className}>
      {parts.map((part, index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-black px-1 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

// Search Result Card Component
const SearchResultCard: React.FC<{ 
  result: SearchResult; 
  searchTerm: string; 
  viewMode: 'grid' | 'list' 
}> = ({ result, searchTerm, viewMode }) => {
  const router = useRouter();

  const handleClick = () => {
    if (result.url) {
      router.push(result.url);
    }
  };

  const cardClass = viewMode === 'grid' 
    ? "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
    : "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4";

  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (
        <div className={viewMode === 'grid' ? "mb-3" : "flex-shrink-0"}>
          <img 
            src={result.image} 
            alt={result.title}
            className={viewMode === 'grid' ? "w-full h-48 object-cover rounded" : "w-20 h-20 object-cover rounded"}
          />
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              <HighlightText text={result.title} searchTerm={searchTerm} />
            </h3>
            <Badge variant="secondary" className="text-xs">
              {result.type}
            </Badge>
          </div>
          {result.price && (
            <div className="text-right">
              <span className="font-bold text-primary">
                {result.currency === 'USD' ? '$' : ''}{result.price}
              </span>
              {result.type === 'talent' && <span className="text-sm text-muted-foreground">/hr</span>}
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-3 line-clamp-2">
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {result.category && (
              <Badge variant="outline" className="text-xs">
                {result.category}
              </Badge>
            )}
            {result.tags?.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
            ))}
          </div>
          
          {result.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{result.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Filter Sidebar Component
const FilterSidebar: React.FC<{
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  availableCategories: string[];
}> = ({ filters, onFiltersChange, availableCategories }) => {
  const typeOptions = [
    { id: 'product', label: 'Products' },
    { id: 'talent', label: 'Talent' },
    { id: 'service', label: 'Services' },
    { id: 'blog', label: 'Blog Posts' },
    { id: 'doc', label: 'Documentation' }
  ];

  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.types, typeId]
      : filters.types.filter(t => t !== typeId);
    
    onFiltersChange({ ...filters, types: newTypes });
  };

  const handlePriceChange = (values: number[]) => {
    onFiltersChange({ 
      ...filters, 
      minPrice: values[0] ?? 0, 
      maxPrice: values[1] ?? 10000 
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Content Type</h3>
        <div className="space-y-2">
          {typeOptions.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={filters.types.includes(option.id)}
                onCheckedChange={(checked) => handleTypeChange(option.id, !!checked)}
              />
              <label htmlFor={option.id} className="text-sm">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <Select value={filters.category} onValueChange={(value) => 
          onFiltersChange({ ...filters, category: value === 'all' ? '' : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
        }>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any Rating</SelectItem>
            <SelectItem value="1">1+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

// No Results Component
const NoResultsState: React.FC<{ searchTerm: string; onNewSearch: (term: string) => void }> = ({ 
  searchTerm, 
  onNewSearch 
}) => {
  const suggestions = [
    "AI & Machine Learning",
    "Web Development", 
    "Mobile App Development",
    "Data Analysis",
    "UI/UX Design",
    "Blockchain Development"
  ];

  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div>
          <h3 className="font-semibold mb-3">Search Suggestions:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => onNewSearch(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Tips for better results:</p>
          <ul className="mt-2 space-y-1">
            <li>• Try different keywords</li>
            <li>• Check your spelling</li>
            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({ query }: { query: { q?: string } }) => {
  const term = String(query.q ?? '').toLowerCase();
  logInfo('🔍 Search page getServerSideProps called with query:', { q: query.q, term });
  
  const match = (text?: string) => text?.toLowerCase().includes(term);

  const [products, talent, posts, docs] = await Promise.all([
    Promise.resolve(MARKETPLACE_LISTINGS.filter(p => match(p.title) || match(p.description))),
    Promise.resolve(TALENT_PROFILES.filter(t => match(t.full_name) || match(t.professional_title) || match(t.bio))),
    Promise.resolve(BLOG_POSTS.filter(p => match(p.title) || match(p.excerpt) || match(p.content))),
    Promise.resolve(DOCS_SEARCH_ITEMS.filter(d => match(d.text)))
  ]);

  logInfo('🔍 Search results:', { 
    term, 
    products: products.length, 
    talent: talent.length, 
    posts: posts.length, 
    docs: docs.length 
  });

  return { props: { products, talent, posts, docs, q: term } };
};

const SearchPage = ({ products, talent, posts, docs, q }: SearchPageProps) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(q);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: 'relevance'
  });

  const suggestions = generateSearchSuggestions();

  // Convert props to SearchResult format
  const allResults: SearchResult[] = useMemo(() => {
    const results: SearchResult[] = [];
    
    // Add products
    products.forEach(item => {
      results.push({
        id: item.id,
        title: item.title,
        description: item.description,
        type: 'product',
        category: item.category,
        url: `/marketplace/products/${item.id}`,
        image: item.images?.[0],
        price: item.price ?? undefined,
        currency: item.currency || 'USD',
        rating: item.rating,
        tags: item.tags,
        date: item.createdAt
      });
    });

    // Add talent
    talent.forEach(profile => {
      results.push({
        id: profile.id,
        title: profile.full_name,
        description: `${profile.professional_title} - ${profile.bio || ''}`,
        type: 'talent',
        category: 'Talent',
        url: `/marketplace/talent/${profile.id}`,
        image: profile.profile_picture_url,
        price: profile.hourly_rate,
        currency: 'USD',
        rating: profile.average_rating,
        tags: profile.skills,
      });
    });

    // Add blog posts
    posts.forEach(post => {
      results.push({
        id: post.slug,
        title: post.title,
        description: post.excerpt,
        type: 'blog',
        category: 'Blog',
        url: `/blog/${post.slug}`,
        image: post.featuredImage,
        tags: post.tags,
        date: post.publishedDate
      });
    });

    // Add docs
    docs.forEach(doc => {
      results.push({
        id: doc.id || `doc-${doc.text.slice(0, 10)}`,
        title: doc.text,
        description: doc.text,
        type: 'doc',
        category: 'Documentation',
        url: '#',
        tags: []
      });
    });

    return results;
  }, [products, talent, posts, docs]);

  // Filter and sort results
  const filteredResults = useMemo(() => {
    let results = [...allResults];

    // Filter by type
    if (filters.types.length > 0) {
      results = results.filter(r => filters.types.includes(r.type));
    }

    // Filter by category
    if (filters.category) {
      results = results.filter(r => r.category?.toLowerCase() === filters.category.toLowerCase());
    }

    // Filter by price
    if (filters.minPrice > 0 || filters.maxPrice < 10000) {
      results = results.filter(r => {
        const price = r.price ?? 0;
        return price >= filters.minPrice && price <= filters.maxPrice;
      });
    }

    // Filter by rating
    if (filters.minRating > 0) {
      results = results.filter(r => (r.rating ?? 0) >= filters.minRating);
    }

    // Sort results
    switch (filters.sort) {
      case 'price_asc':
        results.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case 'price_desc':
        results.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case 'rating':
        results.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      default: // relevance
        results.sort((a, b) => {
          const aExact = a.title.toLowerCase() === searchTerm.toLowerCase() ? 1 : 0;
          const bExact = b.title.toLowerCase() === searchTerm.toLowerCase() ? 1 : 0;
          if (aExact !== bExact) return bExact - aExact;

          const aStarts = a.title.toLowerCase().startsWith(searchTerm.toLowerCase()) ? 1 : 0;
          const bStarts = b.title.toLowerCase().startsWith(searchTerm.toLowerCase()) ? 1 : 0;
          if (aStarts !== bStarts) return bStarts - aStarts;

          return a.title.localeCompare(b.title);
        });
    }

    return results;
  }, [allResults, filters, searchTerm]);

  // Extract available categories for filter
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    allResults.forEach(result => {
      if (result.category) categories.add(result.category);
    });
    return Array.from(categories).sort();
  }, [allResults]);

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    router.push(`/search?q=${encodeURIComponent(term)}`, undefined, { shallow: true });
  };

  // Active filters count
  const activeFiltersCount = filters.types.length + 
    (filters.category ? 1 : 0) + 
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0);

  logInfo('🔍 SearchPage component rendered with:', { 
    q: searchTerm, 
    totalResults: filteredResults.length,
    filters: activeFiltersCount
  });

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <EnhancedSearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={(suggestion) => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}
              placeholder="Search products, talent, services, and more..."
            />
          </div>
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Search Results</h1>
            <p className="text-muted-foreground">
              {filteredResults.length} results for "{searchTerm}"
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Sort Options */}
            <Select value={filters.sort} onValueChange={(value) => 
              setFilters({ ...filters, sort: value })
            }>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <GridIcon className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Filter Toggle */}
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Search Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar
                    filters={filters}
                    onFiltersChange={setFilters}
                    availableCategories={availableCategories}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Desktop Filters Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-card border rounded-lg p-4 sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Filters</h2>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFilters({
                    types: [],
                    category: '',
                    minPrice: 0,
                    maxPrice: 10000,
                    minRating: 0,
                    sort: 'relevance'
                  })}
                >
                  Clear All
                </Button>
              )}
            </div>
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              availableCategories={availableCategories}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {filteredResults.length === 0 ? (
            <NoResultsState 
              searchTerm={searchTerm} 
              onNewSearch={handleSearch}
            />
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
              : "space-y-4"
            }>
              {filteredResults.map((result) => (
                <SearchResultCard
                  key={`${result.type}-${result.id}`}
                  result={result}
                  searchTerm={searchTerm}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
