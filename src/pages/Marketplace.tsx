import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthModal } from '@/components/auth/AuthModal';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react';

import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { FilterSidebar } from "@/components/search/FilterSidebar";
import { ActiveFiltersBar } from "@/components/search/ActiveFiltersBar";
import { ProductListingCard } from "@/components/ProductListingCard";
import { ProductListing } from "@/types/listings";
import { MARKETPLACE_LISTINGS, generateSearchSuggestions, generateFilterOptions } from "@/data/marketplaceData";
import { generateRandomListing } from "@/utils/generateRandomListing";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { SearchSuggestion } from "@/types/search";
import styles from './Marketplace.module.css';
import { useViewMode } from '@/context/ViewModeContext';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface ProductContainerProps {
  listings: ProductListing[];
  onRequestQuote: (id: string) => void;
}
const MarketInsights: React.FC<{ stats: MarketStats }> = ({ stats }) => (
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
  loading: boolean;
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
  setShowRecommended,
  loading
}) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
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
export default function Marketplace() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [isLoading, setIsLoading] = useState(false);
  const { viewMode, setViewMode } = useViewMode();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Automatically append a new listing every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomListing()]);
    }, 120000); // 2 minutes
    return () => clearInterval(interval);
  }, []);
  
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions();
  const filterOptions = useMemo(() => generateFilterOptions(listings), [listings]);

  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const [minAiScore, setMinAiScore] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [filterAvailability, setFilterAvailability] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const { handleApiError, retryQuery: _retryQuery } = useApiErrorHandling();

  // Handle Add Product button with authentication check
  const _handleAddProduct = useCallback(() => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true); // Use the new auth modal
      return;
    }

    // Check if user has permission to add products (simplified to admin check)
    if (user && user.userType !== 'admin') {
      toast({
        title: "Admin Access Required",
        description: "Only administrators can add products to the marketplace. Please contact an administrator.",
        variant: "destructive",
      });
      return;
    }

    // Navigate to admin products page
    router.push('/admin/products');
  }, [isAuthenticated, user, router, toast]);

  // Fetch function for infinite scroll with AI product generation
  const fetchProducts = useCallback(async (page: number, limit: number) => {
    try {
      const params = {
        page,
        limit,
        ...(filterCategory && { category: filterCategory }),
        sort: sortBy
      };
      logInfo('Marketplace.tsx: Fetching products from API with params:', { data:  { data: params } });
      const response = await apiClient.get('/products', { params });
      let items: ProductListing[] = response.data?.items || [];
      const total = response.data?.total ?? items.length;
      const hasMore = (page * limit) < total;
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
      return { items, hasMore, total };
    } catch (error) {
      logErrorToProduction('Marketplace.tsx: Error fetching products from API', { data: error });
      return { items: [], hasMore: false, total: 0 };
    }
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterLocation, filterAvailability]);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{t('marketplace.title')}</h1>
          <p className="text-zion-slate-light">
            {t('marketplace.description')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    );
  }

  // Error state with retry
  if (error && products.length === 0) {
    return (
      <main className="container py-8">
        <div className="text-center space-y-4">
          <ErrorState error={error} />
          <Button onClick={refresh}>
            Try Again
          </Button>
        </div>
        
        {/* Search and filter bar */}
        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <EnhancedSearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                onSelectSuggestion={setSearchQuery}
                placeholder={t('marketplace.search_placeholder')}
                searchSuggestions={searchSuggestions}
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
            Showing {products.length} AI-powered solutions
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
    </main>
  );
}
