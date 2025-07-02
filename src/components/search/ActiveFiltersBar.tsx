import React from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;
}

interface ActiveFiltersBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClearAll: () => void;
  className?: string;
}

export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({
  filters,
  onFiltersChange,
  onClearAll,
  className = ''
}) => {
  const activeFilters: Array<{ key: string; label: string; value: string }> = [];

  // Add type filters
  filters.types.forEach(type => {
    const labels: Record<string, string> = {
      product: 'Products',
      talent: 'Talent',
      service: 'Services',
      blog: 'Blog Posts',
      doc: 'Documentation'
    };
    activeFilters.push({
      key: `type-${type}`,
      label: 'Type',
      value: labels[type] || type
    });
  });

  // Add category filter
  if (filters.category) {
    activeFilters.push({
      key: 'category',
      label: 'Category',
      value: filters.category
    });
  }

  // Add price filter
  if (filters.minPrice > 0 || filters.maxPrice < 10000) {
    activeFilters.push({
      key: 'price',
      label: 'Price',
      value: `$${filters.minPrice} - $${filters.maxPrice}`
    });
  }

  // Add rating filter
  if (filters.minRating > 0) {
    activeFilters.push({
      key: 'rating',
      label: 'Rating',
      value: `${filters.minRating}+ stars`
    });
  }

  // Add sort filter (only if not default)
  if (filters.sort !== 'relevance') {
    const sortLabels: Record<string, string> = {
      price_asc: 'Price: Low to High',
      price_desc: 'Price: High to Low',
      rating: 'Highest Rated'
    };
    activeFilters.push({
      key: 'sort',
      label: 'Sort',
      value: sortLabels[filters.sort] || filters.sort
    });
  }

  const removeFilter = (filterKey: string) => {
    if (filterKey.startsWith('type-')) {
      const typeToRemove = filterKey.replace('type-', '');
      const newTypes = filters.types.filter(t => t !== typeToRemove);
      onFiltersChange({ ...filters, types: newTypes });
    } else if (filterKey === 'category') {
      onFiltersChange({ ...filters, category: '' });
    } else if (filterKey === 'price') {
      onFiltersChange({ ...filters, minPrice: 0, maxPrice: 10000 });
    } else if (filterKey === 'rating') {
      onFiltersChange({ ...filters, minRating: 0 });
    } else if (filterKey === 'sort') {
      onFiltersChange({ ...filters, sort: 'relevance' });
    }
  };

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
      
      {activeFilters.map(filter => (
        <Badge 
          key={filter.key} 
          variant="secondary" 
          className="flex items-center gap-1 pl-2 pr-1"
        >
          <span className="text-xs">
            {filter.label}: {filter.value}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent"
            onClick={() => removeFilter(filter.key)}
            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="text-xs h-6 px-2"
      >
        Clear all
      </Button>
    </div>
  );
};

export default ActiveFiltersBar;
