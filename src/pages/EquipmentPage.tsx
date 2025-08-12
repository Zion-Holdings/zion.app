import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, MapPin, Package, AlertTriangle, RefreshCw } from 'lucide-react';











import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { generateDatacenterEquipment, getEquipmentMarketStats, getRecommendedEquipment } from '@/utils/equipmentAutoFeedAlgorithm';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { EquipmentErrorBoundary } from '@/components/EquipmentErrorBoundary';
import { useCurrency } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';


// Enhanced initial equipment with more variety
const INITIAL_EQUIPMENT: ProductListing[] = [
  {
    id: "nvidia-a100-server",
    title: "NVIDIA A100 GPU Training Server",
    description: "High-performance AI training server with 8x A100 GPUs, designed for demanding machine learning workloads.",
    category: "AI Hardware",
    price: 85000,
    currency: "$",
    brand: "NVIDIA",
    specifications: ["8x A100 GPUs", "2TB HBM2e", "NVLink"],
    tags: ["AI", "Machine Learning", "GPU"],
    author: { name: "NVIDIA", id: "nvidia" },
    images: ["https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:30:00.000Z",
    rating: 4.9,
    reviewCount: 27,
    location: "Santa Clara, CA",
    availability: "In Stock"
  },
  {
    id: "dell-poweredge-r750",
    title: "Dell PowerEdge R750 Server",
    description: "2U rack server with dual Intel Xeon processors, enterprise-grade performance for virtualization workloads.",
    category: "Servers & Compute",
    price: 12500,
    currency: "$",
    brand: "Dell",
    specifications: ["2U Rack", "Dual Xeon", "128GB RAM", "2TB SSD"],
    tags: ["Server", "Enterprise", "Virtualization"],
    author: { name: "Dell", id: "dell" },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 34,
    location: "Austin, TX",
    availability: "In Stock"
  },
  {
    id: "cisco-nexus-9k",
    title: "Cisco Nexus 9000 Switch",
    description: "High-performance datacenter switch with 100GbE ports for modern cloud infrastructure.",
    category: "Networking",
    price: 18500,
    currency: "$",
    brand: "Cisco",
    specifications: ["48x 100GbE", "QSFP28", "Line Rate"],
    tags: ["Switch", "100GbE", "Datacenter"],
    author: { name: "Cisco", id: "cisco" },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 19,
    location: "San Jose, CA",
    availability: "In Stock"
  },
  {
    id: "hpe-proliant-dl380",
    title: "HPE ProLiant DL380 Gen10",
    description: "Versatile 2U server optimized for compute-intensive workloads.",
    category: "Servers & Compute",
    price: 14500,
    currency: "$",
    brand: "HPE",
    specifications: ["2U Rack", "Dual Xeon", "256GB RAM", "4TB SSD"],
    tags: ["Server", "Enterprise", "Compute"],
    author: { name: "HPE", id: "hpe" },
    images: ["https://images.unsplash.com/photo-1555617981-dac388a08846?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:00:00.000Z",
    rating: 4.6,
    reviewCount: 21,
    location: "Houston, TX",
    availability: "In Stock"
  },
  {
    id: "netapp-aff-a250",
    title: "NetApp AFF A250 All-Flash Array",
    description: "Enterprise all-flash storage system for demanding workloads.",
    category: "Storage Systems",
    price: 42000,
    currency: "$",
    brand: "NetApp",
    specifications: ["24TB Flash", "NVMe", "Active-Active"],
    tags: ["Storage", "Flash", "NVMe"],
    author: { name: "NetApp", id: "netapp" },
    images: ["https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T09:45:00.000Z",
    rating: 4.7,
    reviewCount: 18,
    location: "Chicago, IL",
    availability: "2-3 Weeks"
  },
  {
    id: "arista-7050x",
    title: "Arista 7050X Series Switch",
    description: "High-density 10/40GbE switch for modern datacenter networks.",
    category: "Networking",
    price: 23000,
    currency: "$",
    brand: "Arista",
    specifications: ["48x10GbE", "6x40GbE", "Wire Speed"],
    tags: ["Switch", "10GbE", "Datacenter"],
    author: { name: "Arista", id: "arista" },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T12:10:00.000Z",
    rating: 4.5,
    reviewCount: 16,
    location: "Sunnyvale, CA",
    availability: "In Stock"
  }
];

// Market insights component
const EquipmentMarketInsights = ({ stats }: { stats: any }) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Equipment Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalEquipment}</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.inStockCount}</div>
          <div className="text-sm text-muted-foreground">In Stock</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const EquipmentFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
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
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {showRecommended ? "All Equipment" : "Recommended"}
    </Button>
  </div>
);

// Equipment card
const EquipmentCard = ({ equipment, onViewDetails }: { equipment: ProductListing; onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency();
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">{equipment.title}</h3>
            <p className="text-sm text-muted-foreground">{equipment.category}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">{equipment.brand}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600">{formatPrice(equipment.price ?? 0)}</div>
            <Badge variant={equipment.availability === "In Stock" ? "default" : "outline"} className="text-xs">
              {equipment.availability}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{equipment.rating?.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({equipment.reviewCount} reviews)</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{equipment.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{equipment.category}</span>
          <Button size="sm" onClick={onViewDetails}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Loading grid
const EquipmentLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);

// Error fallback component
function EquipmentErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="container py-8">
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-8 text-center">
          <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
          <p className="text-red-700 mb-4">
            We're having trouble loading the equipment listings. This might be a temporary issue.
          </p>
          <div className="flex gap-2 justify-center">
            <Button onClick={resetErrorBoundary} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()} variant="default">
              Refresh Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Main component
function EquipmentPageContent() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);

  // Generate a consistent seed based on current filters for deterministic data
  const dataSeed = useMemo(() => {
    return `equipment-${filterCategory}-${showRecommended}`;
  }, [filterCategory, showRecommended]);

  const fetchEquipment = useCallback(async (page: number, limit: number) => {
    // Simulate realistic API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      // Generate consistent virtual dataset using the seed
      const VIRTUAL_DATASET_SIZE = 150;
      const baseVirtualEquipment = generateDatacenterEquipment(
        VIRTUAL_DATASET_SIZE,
        INITIAL_EQUIPMENT.length,
        dataSeed
      );
      let fullVirtualDataset: ProductListing[] = [
        ...INITIAL_EQUIPMENT,
        ...baseVirtualEquipment
      ];

      // Deduplicate by ID in case of overlaps
      const dedupMap = new Map<string, ProductListing>();
      for (const item of fullVirtualDataset) {
        if (!dedupMap.has(item.id)) {
          dedupMap.set(item.id, item);
        }
      }
      fullVirtualDataset = Array.from(dedupMap.values());

      // Apply category filtering
      let processedDataset = fullVirtualDataset;
      if (filterCategory) {
        processedDataset = processedDataset.filter(e => e.category === filterCategory);
      }

      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = getRecommendedEquipment(processedDataset);
      }

      // Sort the processed dataset
      processedDataset.sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0);
          case 'price-high':
            return (b.price || 0) - (a.price || 0);
          case 'rating':
            return (b.rating || 0) - (a.rating || 0);
          default: // 'newest'
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        }
      });

      // Slice for pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const items = processedDataset.slice(startIndex, endIndex);

      return {
        items,
        hasMore: endIndex < processedDataset.length,
        total: processedDataset.length
      };
    } catch (error) {
      logErrorToProduction('Error in fetchEquipment:', { data: error });
      throw new Error('Failed to load equipment data. Please try again.');
    }
  }, [sortBy, filterCategory, showRecommended, dataSeed]);

  const {
    items: equipment,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop,
    loadMore
  } = useInfiniteScrollPagination(fetchEquipment, 12);

  // Refresh when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refresh();
    }, 100); // Small delay to prevent rapid successive refreshes

    return () => clearTimeout(timeoutId);
  }, [sortBy, filterCategory, showRecommended, refresh]);

  const marketStats = useMemo(() => {
    if (equipment.length === 0) return null;
    return getEquipmentMarketStats(equipment);
  }, [equipment]);

  const categories = useMemo(() => {
    // Use all possible categories, not just from current items
    return ["AI Hardware", "Servers & Compute", "Networking", "Storage Systems", "Power & Cooling"];
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state
  if (loading && equipment.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datacenter Equipment
          </h1>
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>
        </motion.div>
        <EquipmentLoadingGrid />
      </div>
    );
  }

  // Error state
  if (error && equipment.length === 0) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load equipment</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
          <div className="flex gap-2 justify-center">
            <Button onClick={refresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Datacenter Equipment
        </h1>
        <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure and AI workloads</p>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <EquipmentMarketInsights stats={marketStats} />
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <EquipmentFilterControls
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
          {equipment.map((item, index) => (
            <motion.div
              key={item.id} 
              ref={index === equipment.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} 
              whileHover={{ scale: 1.02 }}
            >
              <EquipmentCard
                equipment={item}
                onViewDetails={() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage.setItem(`equipment:${item.id}`, JSON.stringify(item));
                    } catch {
                      // ignore storage errors
                    }
                  }
                  router.push(`/equipment/${item.id}`);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && equipment.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <EquipmentLoadingGrid count={4} />
        </motion.div>
      )}

      {hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Equipment
            </Button>
          )}
          {total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {equipment.length} of {total} items
            </p>
          )}
        </div>
      )}

      {!hasMore && equipment.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-muted-foreground text-lg mb-2">🏭 You've explored all available equipment!</div>
          <div className="text-sm text-muted-foreground">Showing {equipment.length} datacenter equipment items</div>
        </motion.div>
      )}

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

// Main export with error boundary
export default function EquipmentPage() {
  return (
    <EquipmentErrorBoundary>
      <EquipmentPageContent />
    </EquipmentErrorBoundary>
  );
}
