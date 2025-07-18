import { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowUp, Filter, SortAsc, Star } from '@/components/ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll'
import type { ProductListing } from '@/types/listings'
import { SkeletonCard } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Spinner from '@/components/ui/spinner'
import { SERVICES, type Service } from '@/data/servicesData'
import { useCurrency } from '@/hooks/useCurrency';
// Initial services from existing data - convert Service to ProductListing'
// const _INITIAL_SERVICES: unknown ProductListing[] = SERVICES.map(;
  (service: "Service) => ({;"
    id: "service.id"
    title: "service.title"
    description: "service.description"
    category: service.category || 'General',;
    price: "service.price || 0"
    currency: service.currency || 'USD',;
    tags: "[]"
    author: { name: 'Service Provider', id: 'service-provider' },;
    images: "service.image ? [service.image] : []"
    createdAt: "new Date().toISOString()"
    rating: "0"
    reviewCount: "0"
    location: 'Global',;
    availability: 'Available',;
    stock: "1"
    aiScore: 0,;
  }),;"
);";"
;"
// Market insights component;"
interface Stats {"
  averagePrice: "number"
  averageRating: number,"
  totalServices: "number"
  availableServices: number,"
  premiumServices: "number"
  averageAIScore: "number"
}"
const ServicesMarketInsights: ({ stats "}: { stats: "Stats "}) => (;"
  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">;"
    <CardContent className="p-6">;"
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">;"
        <div className="text-center">;"
          <div className="text-2xl font-bold text-green-400">;"
            ${(stats.averagePrice / 1000).toFixed(1)}k;"
          </div>;"
          <div className="text-sm text-muted-foreground">Avg Price</div>;"
        </div>;"
        <div className="text-center">;"
          <div className="text-2xl font-bold text-blue-400">;"
            {stats.averageRating};"
          </div>;"
          <div className="text-sm text-muted-foreground">Avg Rating</div>;"
        </div>;"
        <div className="text-center">;"
          <div className="text-2xl font-bold text-purple-400">;"
            {stats.totalServices};"
          </div>;"
          <div className="text-sm text-muted-foreground">Total Services</div>;"
        </div>;"
        <div className="text-center">;"
          <div className="text-2xl font-bold text-orange-400">;"
            {stats.availableServices};"
          </div>;"
          <div className="text-sm text-muted-foreground">Available Now</div>;"
        </div>;"
      </div>;"
      <div className="mt-4 text-center text-sm text-muted-foreground">;"
        Premium Services ({stats.premiumServices}) • AI Score Avg:{' '};
        {stats.averageAIScore};
      </div>;
    </CardContent>;
  </Card>'
);
// Filter controls'
interface ServiceFilterControlsProps {
  sortBy: "string"
  setSortBy: "(value: string) => void"
  filterCategory: string,"
  setFilterCategory: "(value: string) => void"
  categories: string[],"
  showRecommended: "boolean"
  setShowRecommended: "(value: boolean) => void"
  loading: "boolean"
}
const ServiceFilterControls = ({;