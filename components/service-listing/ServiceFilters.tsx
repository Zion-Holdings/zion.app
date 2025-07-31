import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Star, DollarSign, Clock, X } from 'lucide-react';
import type { ServiceFilters } from '../../utils/types/service';
import { DELIVERY_TIMES } from '../../utils/types/service';
import { serviceCategories } from '../../utils/data/services';

interface ServiceFiltersProps {
  filters: ServiceFilters;
  onFilterChange: (filters: ServiceFilters) => void;
  onClearFilters: () => void;
  isMobile: boolean;
  onToggleMobile: () => void;
}

const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  isMobile,
  onToggleMobile
}) => {
  const handleFilterChange = (key: keyof ServiceFilters, value: any) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const hasActiveFilters = () => {
    return (
      filters.category !== 'All Categories' ||
      filters.priceRange[0] !== 0 ||
      filters.priceRange[1] !== 100000 ||
      filters.rating > 0 ||
      filters.deliveryTime !== 'Any time' ||
      filters.searchTerm !== ''
    );
  };

  const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      {children}
    </div>
  );

  const filterContent = (
    <div className="space-y-6">
      {/* Categories */}
      <FilterSection title="Categories">
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="All Categories"
              checked={filters.category === 'All Categories'}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="mr-2 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">All Categories</span>
          </label>
          {serviceCategories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.name}
                checked={filters.category === category.name}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 flex items-center">
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0].toLocaleString()}</span>
            <span>${filters.priceRange[1].toLocaleString()}</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={filters.priceRange[0]}
              onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider absolute top-0"
            />
          </div>
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Minimum Rating">
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0, 2.5, 2.0].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={(e) => handleFilterChange('rating', parseFloat(e.target.value))}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-700">{rating}+</span>
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Delivery Time */}
      <FilterSection title="Delivery Time">
        <div className="space-y-2">
          {DELIVERY_TIMES.map((time) => (
            <label key={time} className="flex items-center">
              <input
                type="radio"
                name="deliveryTime"
                value={time}
                checked={filters.deliveryTime === time}
                onChange={(e) => handleFilterChange('deliveryTime', e.target.value)}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{time}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Clear Filters */}
      {hasActiveFilters() && (
        <button
          onClick={onClearFilters}
          className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center justify-center"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filter Toggle */}
      {isMobile && (
        <div className="lg:hidden mb-4">
          <button
            onClick={onToggleMobile}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between hover:bg-gray-50"
          >
            <span className="flex items-center text-gray-700">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </span>
            <span className="text-sm text-gray-500">
              {hasActiveFilters() ? 'Active' : 'All'}
            </span>
          </button>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className={`${isMobile ? 'hidden' : 'block'} lg:block`}>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </h2>
            {hasActiveFilters() && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Active
              </span>
            )}
          </div>
          {filterContent}
        </div>
      </div>

      {/* Mobile Filter Panel */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl border-r border-gray-200 overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button
                onClick={onToggleMobile}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {filterContent}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ServiceFilters; 