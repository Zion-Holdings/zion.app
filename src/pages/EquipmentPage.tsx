import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import apiClient from '@/services/apiClient';

const API_BASE = '/api';

// Sample datacenter equipment listings
const EQUIPMENT_LISTINGS: ProductListing[] = [
  {
    id: "2u-rack-mount-server",
    title: "2U Rack Mount Server",
    description:
      "High‑density server optimized for virtualization and private cloud deployments.",
    category: "Servers",
    price: 4200,
    currency: "$",
    tags: ["Xeon", "64GB RAM", "Dual PSU"],
    author: {
      name: "DataCore",
      id: "datacore",
      avatarUrl:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1585079548264-ef0c62f1db1f?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: "10gbe-switch",
    title: "48‑Port 10GbE Switch",
    description:
      "Enterprise switch delivering ultra‑low latency for mission critical applications.",
    category: "Networking",
    price: 6800,
    currency: "$",
    tags: ["Layer 3", "SFP+", "Managed"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1587202372775-67d85b1cce31?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-05T12:30:00.000Z",
    rating: 4.7,
    reviewCount: 15,
  },
  {
    id: "intelligent-pdu",
    title: "Intelligent Rack PDU",
    description:
      "Remotely monitor power consumption with per‑outlet switching and metering.",
    category: "Power",
    price: 950,
    currency: "$",
    tags: ["Remote", "Metered", "24 Outlets"],
    author: {
      name: "PowerHub",
      id: "powerhub",
    },
    images: [
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-18T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 32,
  },
  {
    id: "modular-ups",
    title: "Modular Online UPS",
    description:
      "Scalable uninterrupted power supply with hot‑swappable battery modules.",
    category: "Power",
    price: 8200,
    currency: "$",
    tags: ["Hot Swap", "Scalable", "LCD"],
    author: {
      name: "VoltSecure",
      id: "voltsecure",
      avatarUrl:
        "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-22T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 12,
  },
  {
    id: "fiber-patch-panel",
    title: "24‑Port Fiber Patch Panel",
    description:
      "Rack mount patch panel with LC connectors for organized fiber management.",
    category: "Networking",
    price: 480,
    currency: "$",
    tags: ["LC", "1U", "Cable Management"],
    author: {
      name: "FiberLink",
      id: "fiberlink",
    },
    images: [
      "https://images.unsplash.com/photo-1552508744-1696a1be6c54?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-02T14:20:00.000Z",
    rating: 4.5,
    reviewCount: 9,
  },
  {
    id: "precision-cooling",
    title: "Precision Airflow Cooling Unit",
    description:
      "Efficient cooling system designed to maintain optimal rack temperature.",
    category: "Cooling",
    price: 5400,
    currency: "$",
    tags: ["Rack Mount", "Variable Speed", "Energy Efficient"],
    author: {
      name: "CoolWorks",
      id: "coolworks",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1581093588401-1cfe5f157568?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-10T08:10:00.000Z",
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "blade-server-chassis",
    title: "Blade Server Chassis",
    description:
      "High‑density chassis supporting up to 8 hot-swappable blades for scalable compute.",
    category: "Servers",
    price: 9200,
    currency: "$",
    tags: ["8 Blades", "Hot Swap", "Redundant PSU"],
    author: {
      name: "ComputeMax",
      id: "computemax",
    },
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-12T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 11,
  },
  {
    id: "40gbe-core-switch",
    title: "40GbE Core Switch",
    description:
      "High-performance core switch for enterprise datacenters with advanced routing features.",
    category: "Networking",
    price: 12800,
    currency: "$",
    tags: ["Layer 3", "QSFP+", "Redundant Fans"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1581091870625-55858aad7cf0?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-07T09:20:00.000Z",
    rating: 4.8,
    reviewCount: 16,
  },
  {
    id: "firewall-appliance",
    title: "Enterprise Firewall Appliance",
    description:
      "Next‑generation firewall providing deep packet inspection and intrusion prevention.",
    category: "Security",
    price: 6200,
    currency: "$",
    tags: ["NGFW", "VPN", "Gigabit"],
    author: {
      name: "SecureSys",
      id: "securesys",
    },
    images: [
      "https://images.unsplash.com/photo-1585861291871-e6c46a28d5c7?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-27T15:30:00.000Z",
    rating: 4.6,
    reviewCount: 14,
  },
  {
    id: "kvm-ip-switch",
    title: "KVM over IP Switch",
    description:
      "Remote management of multiple servers with virtual media support.",
    category: "Management",
    price: 3100,
    currency: "$",
    tags: ["8 Ports", "Virtual Media", "Remote Access"],
    author: {
      name: "ManageIT",
      id: "manageit",
    },
    images: [
      "https://images.unsplash.com/photo-1603791440384-9465026a9b69?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-12T08:55:00.000Z",
    rating: 4.4,
    reviewCount: 10,
  },
  {
    id: "flash-storage-array",
    title: "All‑Flash Storage Array",
    description:
      "Ultra‑fast storage platform delivering millions of IOPS for database workloads.",
    category: "Storage",
    price: 15000,
    currency: "$",
    tags: ["NVMe", "SSD", "Redundant Controller"],
    author: {
      name: "DataCore",
      id: "datacore",
    },
    images: [
      "https://images.unsplash.com/photo-1581091870625-4c31b89f9518?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-04T11:10:00.000Z",
    rating: 4.9,
    reviewCount: 20,
  },
  {
    id: "tape-backup-library",
    title: "Automated Tape Backup Library",
    description: "Scalable tape library for reliable long‑term data archiving.",
    category: "Storage",
    price: 7600,
    currency: "$",
    tags: ["LTO-9", "Redundant Power", "24 Slots"],
    author: {
      name: "ArchiveTech",
      id: "archivetech",
    },
    images: [
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-30T16:40:00.000Z",
    rating: 4.5,
    reviewCount: 7,
  },
  {
    id: "server-rack-42u",
    title: "42U Server Rack Cabinet",
    description:
      "Standard rack cabinet with adjustable rails and locking doors.",
    category: "Infrastructure",
    price: 1200,
    currency: "$",
    tags: ["Adjustable Rails", "Lockable", "Ventilated"],
    author: {
      name: "RackMaster",
      id: "rackmaster",
    },
    images: [
      "https://images.unsplash.com/photo-1581091012184-e5857b5b3a4b?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-20T13:05:00.000Z",
    rating: 4.8,
    reviewCount: 25,
  },
  {
    id: "dc-monitoring",
    title: "Data Center Monitoring System",
    description:
      "Comprehensive environment and power monitoring with alerting.",
    category: "Management",
    price: 4700,
    currency: "$",
    tags: ["Sensors", "Alerts", "Analytics"],
    author: {
      name: "DCVision",
      id: "dcvision",
    },
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-08T18:00:00.000Z",
    rating: 4.7,
    reviewCount: 13,
  },
  {
    id: "high-capacity-router",
    title: "High‑Capacity Edge Router",
    description:
      "Carrier-grade router providing advanced QoS and BGP routing capabilities.",
    category: "Networking",
    price: 13400,
    currency: "$",
    tags: ["BGP", "10GbE", "Redundant PSU"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1604079625023-792d09e87a4d?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-09T08:45:00.000Z",
    rating: 4.6,
    reviewCount: 17,
  },
  {
    id: "cable-management-arm",
    title: "Cable Management Arm",
    description:
      "Keeps server rack cabling organized and reduces strain on connections.",
    category: "Infrastructure",
    price: 160,
    currency: "$",
    tags: ["Adjustable", "Tool-Less", "1U"],
    author: {
      name: "RackMaster",
      id: "rackmaster",
    },
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-03T06:25:00.000Z",
    rating: 4.4,
    reviewCount: 5,
  },
];



  useEffect(() => {
    async function fetchEquipment() {
      try {
        const res = await fetch(`${API_BASE}/equipment`);
        if (!res.ok) throw new Error('Equipment fetch failed');
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error(err);
        setListings(EQUIPMENT_LISTINGS);
      }
    }
    fetchEquipment();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings((prev) => [...prev, generateRandomEquipment()]);
    }, 120000); // add new equipment every 2 minutes
    return () => clearInterval(interval);
  }, []);







import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import type { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { EquipmentErrorBoundary } from '@/components/EquipmentErrorBoundary';
import { useCurrency } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';


// Enhanced initial equipment with more variety
// Remove all INITIAL_EQUIPMENT and any other hardcoded/sample/mock equipment data. Fetch equipment from real API/data source or show empty/error state if unavailable.

interface EquipmentStats {
  averagePrice: number;
  averageRating: number;
  totalProducts: number;
  availableCount: number;
}

interface EquipmentFilterControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
  categories: string[];
  showRecommended: boolean;
  setShowRecommended: (value: boolean) => void;
  loading: boolean;
}

// Market insights component
const EquipmentMarketInsights = ({ stats }: { stats: EquipmentStats }) => (
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
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.availableCount}</div>
          <div className="text-sm text-muted-foreground">In Stock</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const EquipmentFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
}: EquipmentFilterControlsProps) => (
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
    <Card data-testid="equipment-item" className="h-full hover:shadow-lg transition-shadow">
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
  <div data-testid="loading-state-equipment" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);

// Error fallback component
function _EquipmentErrorFallback({ error: _error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <main className="container py-8">
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
    </main>
  );
}

// Main component
function EquipmentPageContent() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);

  // Remove dataSeed and artificial API delay
  // const dataSeed = useMemo(() => {
  //   return `equipment-${filterCategory}-${showRecommended}`;
  // }, [filterCategory, showRecommended]);

  const fetchEquipment = useCallback(async (page: number, limit: number) => {
    // Only fetch real data from the API
    try {
      const res = await apiClient.get('/equipment');
      if (Array.isArray(res?.data)) {
        return {
          items: res.data,
          hasMore: false,
          total: res.data.length,
        };
      }
    } catch (apiErr: unknown) {
      if (apiErr instanceof Error) {
        logErrorToProduction('Error in fetchEquipment:', { data: apiErr.message });
      } else {
        logErrorToProduction('Error in fetchEquipment:', { data: String(apiErr) });
      }
      throw apiErr;
    }
    // If no data, return empty
    return {
      items: [],
      hasMore: false,
      total: 0,
    };
  }, [sortBy, filterCategory, showRecommended]);

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

  const stats: EquipmentStats = useMemo(() => ({
    averagePrice: Math.round(
      (equipment.reduce((sum, e) => sum + (e.price || 0), 0) / (equipment.length || 1))
    ),
    averageRating: equipment.length ? (
      equipment.reduce((sum, e) => sum + (e.rating || 0), 0) / equipment.length
    ) : 0,
    totalProducts: equipment.length,
    availableCount: equipment.filter(e => e.availability === 'In Stock').length,
  }), [equipment]);

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
      <main className="container py-8" data-testid="loading-state-equipment-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datacenter Equipment
          </h1>
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>
        </motion.div>
        <EquipmentLoadingGrid />
      </main>
    );
  }

  // Error state
  if (error && equipment.length === 0) {
    let errorMessage: string;
    if (typeof error === 'string') {
      errorMessage = error;
    } else if (typeof error === 'object' && error && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      errorMessage = (error as { message: string }).message;
    } else {
      errorMessage = String(error);
    }
    // Notify toast once for visibility (supports unit tests expectations)
    toast({ title: errorMessage, variant: 'destructive' });
    return (
      <main className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Failed to load equipment: {errorMessage}</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Please try again later.</p>
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
      </main>
    );
  }

  // Empty state when no equipment after load
  if (!loading && !error && equipment.length === 0) {
    return (
      <main className="container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Equipment Catalog Currently Empty</h2>
        <p className="text-muted-foreground mb-6">Check back later for new listings.</p>
      </main>
    );
  }

  return (
    <main className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Datacenter Equipment
        </h1>
        <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure and AI workloads</p>
      </motion.div>

      {stats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <EquipmentMarketInsights stats={stats} />
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
          loading={loading}
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
    </main>
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
