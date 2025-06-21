import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react';
import { SkeletonCard } from '@/components/ui/skeleton';
import { ErrorState } from '@/components/jobs/applications/ErrorState';
import { ProductsEmptyState } from '@/components/marketplace/EmptyState';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProductListing } from '@/types/listings';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { useToast } from '@/hooks/use-toast';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { MAX_PRICE, MIN_PRICE } from '@/data/marketplaceData';

/**
 * Marketplace component props
 */
export interface MarketplaceProps {
  /**
   * Products to display in the marketplace (kept for fallback but not used now)
   * @deprecated
   * @remarks This prop is deprecated and should not be used.
   */
  products?: ProductListing[];
}

// Market insights component
const MarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice)}</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.categoriesCount}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter and sort controls
const FilterControls: React.FC<{
  sortBy: string;
  setSortBy: (sort: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  categories: string[];
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minAiScore: number;
  setMinAiScore: (score: number) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  filterAvailability: string;
  setFilterAvailability: (value: string) => void;
  availabilityOptions: string[];
  filterLocation: string;
  setFilterLocation: (value: string) => void;
  locations: string[];
  showRecommended: boolean;
  setShowRecommended: (show: boolean) => void;
}> = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  priceRange,
  setPriceRange,
  minAiScore,
  setMinAiScore,
  minRating,
  setMinRating,
  filterAvailability,
  setFilterAvailability,
  availabilityOptions,
  filterLocation,
  setFilterLocation,
  locations,
  showRecommended,
  setShowRecommended
}) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
    
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">$</span>
      <input
        type="number"
        value={priceRange[0]}
        min={MIN_PRICE}
        max={priceRange[1]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
      <span>-</span>
      <input
        type="number"
        value={priceRange[1]}
        min={priceRange[0]}
        max={MAX_PRICE}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">AI ≥</span>
      <input
        type="number"
        value={minAiScore}
        min={0}
        max={100}
        onChange={(e) => setMinAiScore(Number(e.target.value))}
        className="w-16 bg-background border border-border px-2 py-1 rounded"
      />
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">Rating ≥</span>
      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        className="bg-background border border-border px-2 py-1 rounded"
      >
        <option value={0}>Any</option>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
    </div>

    <div className="flex items-center gap-2">
      <select
        value={filterAvailability}
        onChange={(e) => setFilterAvailability(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">Any Availability</option>
        {availabilityOptions.map(opt => (
          <option key={opt} value={opt as string}>{opt}</option>
        ))}
      </select>
    </div>

    <div className="flex items-center gap-2">
      <select
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>
        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>

    <Button
      variant={showRecommended ? "default" : "outline"}
      size="sm"
      onClick={() => setShowRecommended(!showRecommended)}
      className="flex items-center gap-2"
    >
      <Sparkles className="h-4 w-4" />
      {showRecommended ? "All Products" : "Recommended"}
    </Button>
  </div>
);

/**
 * Enhanced Marketplace component with infinite scroll and AI product generation
 * Uses the auto-feed algorithm to continuously generate IT and AI products
 * Includes intelligent filtering, sorting, and recommendation features
 */
export default function Marketplace({ products: _initialProducts = [] }: MarketplaceProps) {
  const router = useRouter();
  const { toast } = useToast();
  const firstRenderRef = useRef(true);
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const [minAiScore, setMinAiScore] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [filterAvailability, setFilterAvailability] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const { handleApiError, retryQuery } = useApiErrorHandling();

  // Fetch function for infinite scroll with AI product generation
  const fetchProducts = useCallback(async (page: number, limit: number) => {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const params = new URLSearchParams({ page: String(page), limit: String(limit) });
    if (filterCategory) params.append('category', filterCategory);

    try {
      const res = await fetch(`/api/products?${params.toString()}`);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }

      let items: ProductListing[] = await res.json();

      if (showRecommended) {
        items = items.filter((p) => p.rating != null && p.rating >= 4.3);
      }

      items = items.filter((p) => {
        const price = p.price || 0;
        const ai = p.aiScore || 0;
        const rating = p.rating || 0;
        const location = (p.location || '').toLowerCase();
        const availability = (p.availability || '').toLowerCase();
        return (
          price >= priceRange[0] &&
          price <= priceRange[1] &&
          ai >= minAiScore &&
          rating >= minRating &&
          (!filterLocation || location.includes(filterLocation.toLowerCase())) &&
          (!filterAvailability || availability === filterAvailability.toLowerCase())
        );
      });

      items.sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0);
          case 'price-high':
            return (b.price || 0) - (a.price || 0);
          case 'rating':
            return (b.rating || 0) - (a.rating || 0);
          case 'popular':
            return (b.reviewCount || 0) - (a.reviewCount || 0);
          case 'ai-score':
            return (b.aiScore || 0) - (a.aiScore || 0);
          case 'newest':
          default:
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
      });

      return {
        items,
        hasMore: items.length === limit,
        total: undefined
      };
    } catch (err: any) {
      handleApiError(err);
      throw err;
    }
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError]);

  // Use infinite scroll hook
  const {
    items: products,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop
  } = useInfiniteScrollPagination(fetchProducts, 16);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    refresh();
    scrollToTop();
    toast({ title: 'Filters updated' });
  }, [showRecommended, filterCategory, sortBy, priceRange, minAiScore, minRating, filterAvailability, filterLocation, refresh, scrollToTop, toast]);

  // Calculate market stats
  const marketStats = useMemo(() => {
    if (products.length === 0) return null;
    return {
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,
      totalProducts: products.length,
      categoriesCount: Array.from(new Set(products.map(p => p.category))).length
    };
  }, [products]);

  // Get unique categories and other filter values
  const categories = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.category)));
  }, []);
  const locations = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.location).filter(Boolean)));
  }, []).filter(Boolean) as string[];
  const availabilityOptions = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.availability).filter(Boolean)));
  }, []).filter(Boolean) as string[];

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state with skeleton
  if (loading && products.length === 0) {
    return (
      <div className="container py-8" data-testid="marketplace-loading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Marketplace
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover cutting-edge AI and IT solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  // Error state with retry
  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <ErrorState error={error} />
          <Button onClick={refresh}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Empty state (should rarely happen with AI generation)
  if (!products || products.length === 0) {
    return (
      <div className="container py-8" data-testid="marketplace-empty">
        <ProductsEmptyState
          onAddProduct={() => router.push('/admin/products')}
          onRetry={refresh}
        />
      </div>
    );
  }

  // Main marketplace render
  return (
    <div className="container py-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Marketplace
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover cutting-edge AI and IT solutions powered by intelligent algorithms
        </p>
      </motion.div>

      {/* Market Insights */}
      {marketStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <MarketInsights stats={marketStats} />
        </motion.div>
      )}

      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minAiScore={minAiScore}
          setMinAiScore={setMinAiScore}
          minRating={minRating}
          setMinRating={setMinRating}
          filterAvailability={filterAvailability}
          setFilterAvailability={setFilterAvailability}
          availabilityOptions={availabilityOptions.filter(Boolean)}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
          locations={locations}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
        />
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode="popLayout">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              ref={index === products.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <ProductCard
                product={{
                  ...product,
                  price: product.price || 0,
                  description: product.description || ''
                }}
                onBuy={() => router.push(`/checkout/${product.id}`)}
                buyDisabled={false}
              />
              
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI {product.aiScore}
                </Badge>
              )}
              
              {/* Featured Badge */}
              {product.featured && (
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Loading More Indicator */}
      {(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={`loading-${i}`} />
            ))}
          </div>
        </motion.div>
      )}

      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available products!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {products.length} {total && `of ${total}`} AI-powered solutions
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
