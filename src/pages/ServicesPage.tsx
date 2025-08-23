import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, Clock, Award } from 'lucide-react';









import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { generateITServices, getServicesMarketStats, getRecommendedServices } from '@/utils/servicesAutoFeedAlgorithm';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { SERVICES } from '@/data/servicesData';
import { useCurrency } from '@/hooks/useCurrency';

// Initial services from existing data
const INITIAL_SERVICES: ProductListing[] = SERVICES;

// Market insights component
const ServicesMarketInsights = ({ stats }: { stats: any }) => (
  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">
    <CardContent className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">${(stats.averagePrice / 1000).toFixed(1)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.averageRating}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalServices}</div>
          <div className="text-sm text-muted-foreground">Total Services</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.availableServices}</div>
          <div className="text-sm text-muted-foreground">Available Now</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Premium Services ({stats.premiumServices}) • AI Score Avg: {stats.averageAIScore}
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const ServiceFilterControls = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  showRecommended,
  setShowRecommended,
  loading
}: any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="">All Categories</option>
        {categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {showRecommended ? "All Services" : "Recommended"}
    </Button>
  </div>
);

// Service card
const ServiceCard = ({ service, onViewDetails }: { service: ProductListing; onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency();
  return (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{service.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-muted-foreground">({service.reviewCount})</span>
            </div>
            {service.aiScore && service.aiScore > 85 && (
              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                AI Score: {service.aiScore}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">{service.author.name}</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-green-600">{formatPrice(service.price ?? 0)}</div>
          <Badge variant={service.availability === "Available" ? "default" : "outline"} className="text-xs">
            {service.availability}
          </Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{service.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{service.category}</span>
        <Button size="sm" onClick={onViewDetails}>
          <ShoppingCart className="h-4 w-4 mr-1" />
          Contact
        </Button>
      </div>
    </CardHeader>
  </Card>
);
};

// Loading grid
const ServicesLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);

// Main component
export default function ServicesPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(0);

  const fetchServices = useCallback(async (page: number, limit: number) => {
    await new Promise(resolve => setTimeout(resolve, 400));

    let allServices: ProductListing[] = [];
    
    if (page === 1) {
      allServices = [...INITIAL_SERVICES];
    }
    
    const startId = INITIAL_SERVICES.length + (page - 1) * limit + totalGenerated;
    const newServices = generateITServices(limit, startId);
    setTotalGenerated(prev => prev + newServices.length);
    allServices = [...allServices, ...newServices];
    
    let filteredServices = allServices;
    
    if (filterCategory) {
      filteredServices = filteredServices.filter(s => s.category === filterCategory);
    }
    
    if (showRecommended) {
      filteredServices = getRecommendedServices(filteredServices);
    }
    
    filteredServices.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'ai-score':
          return (b.aiScore || 0) - (a.aiScore || 0);
        default:
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      }
    });
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredServices.slice(startIndex, endIndex);
    
    return {
      items,
      hasMore: endIndex < filteredServices.length || page < 10,
      total: filteredServices.length
    };
  }, [sortBy, filterCategory, showRecommended, totalGenerated]);

  const {
    items: services,
    loading,
    error,
    hasMore,
    isFetching,
    lastElementRef,
    scrollToTop,
    refresh,
    total
  } = useInfiniteScrollPagination(fetchServices, 12);

  useEffect(() => {
    refresh();
    setTotalGenerated(0);
  }, [sortBy, filterCategory, showRecommended]);

  const marketStats = useMemo(() => {
    if (services.length === 0) return null;
    return getServicesMarketStats(services);
  }, [services]);

  const categories = useMemo(() => {
    return Array.from(new Set(services.map(s => s.category).filter(Boolean)));
  }, [services]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading && services.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            IT & AI Services
          </h1>
          <p className="text-muted-foreground text-lg">Professional services for modern businesses and enterprises</p>
        </motion.div>
        <ServicesLoadingGrid />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2>
        <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p>
        <Button onClick={refresh}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          IT & AI Services
        </h1>
        <p className="text-muted-foreground text-lg">Professional services for digital transformation and technology innovation</p>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <ServicesMarketInsights stats={marketStats} />
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <ServiceFilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {services.map((item, index) => (
            <motion.div
              key={item.id} ref={index === services.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} whileHover={{ scale: 1.02 }}
            >
              <ServiceCard service={item} onViewDetails={() => router.push(`/services/${item.id}`)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ServicesLoadingGrid count={4} />
        </motion.div>
      )}

      {!hasMore && services.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div>
          <div className="text-sm text-muted-foreground">Showing {services.length} IT & AI services</div>
        </motion.div>
      )}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
