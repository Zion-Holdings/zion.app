import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { generateAIProducts, getMarketStats, getRecommendedProducts } from '@/utils/autoFeedAlgorithm';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import ProductCard from '@/components/ProductCard';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProductListing } from '@/types/listings';

// Market insights component
const MarketInsights: React.FC<{ stats: any; onCategoryFilter: (category: string) => void }> = ({ 
  stats, 
  onCategoryFilter 
}) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice)}</div>
          <div className="text-sm text-gray-400">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-gray-400">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>
          <div className="text-sm text-gray-400">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.categoriesCount}</div>
          <div className="text-sm text-gray-400">Categories</div>
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
  showRecommended: boolean;
  setShowRecommended: (show: boolean) => void;
}> = ({ 
  sortBy, 
  setSortBy, 
  filterCategory, 
  setFilterCategory, 
  categories, 
  showRecommended, 
  setShowRecommended 
}) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-gray-400" />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
    
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-gray-400" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
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

// Loading skeleton for the grid
const LoadingGrid: React.FC<{ count?: number }> = ({ count = 8 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Main infinite marketplace component
export default function InfiniteMarketplace() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(0);

  // Fetch function for infinite scroll
  const fetchProducts = useCallback(async (page: number, limit: number) => {
    // Simulate API delay for realistic loading
    await new Promise(resolve => setTimeout(resolve, 300));

    let allProducts: ProductListing[] = [];
    
    // Start with existing listings
    if (page === 1) {
      allProducts = [...MARKETPLACE_LISTINGS];
    }
    
    // Generate new AI products for infinite feed
    const startId = MARKETPLACE_LISTINGS.length + (page - 1) * limit + totalGenerated;
    const newProducts = generateAIProducts(limit, startId);
    setTotalGenerated(prev => prev + newProducts.length);
    
    allProducts = [...allProducts, ...newProducts];
    
    // Apply filters
    let filteredProducts = allProducts;
    
    if (filterCategory) {
      filteredProducts = filteredProducts.filter(p => p.category === filterCategory);
    }
    
    if (showRecommended) {
      filteredProducts = getRecommendedProducts(filteredProducts, {
        rating: 4.5,
        categories: filterCategory ? [filterCategory] : undefined
      });
    }
    
    // Apply sorting
    filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'rating':
          return (b.rating ?? 0) - (a.rating ?? 0);
        case 'popular':
          return (b.reviewCount ?? 0) - (a.reviewCount ?? 0);
        case 'ai-score':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'newest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
    
    // Paginate results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredProducts.slice(startIndex, endIndex);
    
    return {
      items,
      hasMore: endIndex < filteredProducts.length || page < 10, // Allow up to 10 pages
      total: filteredProducts.length
    };
  }, [sortBy, filterCategory, showRecommended, totalGenerated]);

  // Infinite scroll hook
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
  } = useInfiniteScrollPagination(fetchProducts, 20);

  // Refresh when filters change
  useEffect(() => {
    refresh();
    setTotalGenerated(0);
  }, [sortBy, filterCategory, showRecommended]);

  // Calculate market stats
  const marketStats = useMemo(() => {
    if (products.length === 0) return null;
    return getMarketStats(products);
  }, [products]);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set([...MARKETPLACE_LISTINGS, ...products].map(p => p.category)));
  }, [products]);

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading && products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Marketplace
            </h1>
            <p className="text-gray-400">Discover cutting-edge AI and IT solutions</p>
          </div>
          <LoadingGrid />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <Button onClick={refresh}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            AI Marketplace
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover cutting-edge AI and IT solutions powered by intelligent algorithms
          </motion.p>
        </div>

        {/* Market Insights */}
        {marketStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <MarketInsights 
              stats={marketStats} 
              onCategoryFilter={setFilterCategory}
            />
          </motion.div>
        )}

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FilterControls
            sortBy={sortBy}
            setSortBy={setSortBy}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            categories={categories}
            showRecommended={showRecommended}
            setShowRecommended={setShowRecommended}
          />
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                ref={index === products.length - 1 ? lastElementRef : null}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
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
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10">
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

        {/* Loading Indicator */}
        {(isFetching || loading) && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <LoadingGrid count={4} />
          </motion.div>
        )}

        {/* End of Results */}
        {!hasMore && products.length > 0 && (
          <motion.div
            className="text-center mt-12 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 text-lg">
              🎉 You've reached the end! 
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Showing {products.length} {total && `of ${total}`} products
            </div>
          </motion.div>
        )}

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg z-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 