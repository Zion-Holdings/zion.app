'use client';

import { useState, useMemo, useCallback, useRef } from 'react';

// Types
interface FilterState {
  industry: string;
  category: string;
  useCase: string;
}

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  industry: string;
  useCase?: string;
  href: string;
  pricing?: {
    basic: string;
    pro: string;
  };
}

// Extract unique filter options from services
const extractFilterOptions = (services: ServiceCard[]) => {
  const industries = new Set<string>();
  const categories = new Set<string>();
  const useCases = new Set<string>();

  services.forEach(service => {
    industries.add(service.industry);
    categories.add(service.category);
    if (service.useCase) useCases.add(service.useCase);
  });

  return {
    industries: Array.from(industries).sort(),
    categories: Array.from(categories).sort(),
    useCases: Array.from(useCases).sort(),
  };
};

// Filter Panel Component
const FilterPanel = ({
  filters,
  onFilterChange,
  available,
  activeFilters,
  onClearAll,
}: {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  available: { industries: string[]; categories: string[]; useCases: string[] };
  activeFilters: string[];
  onClearAll: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveFilters = activeFilters.length > 0;

  return (
    <div className="bg-slate-900/60 border border-slate-800/50 rounded-xl overflow-hidden">
      {/* Header - Always Visible */}
      <div className="p-4 border-b border-slate-800/50">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-200">Filter Results</h3>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-purple-400 transition"
              >
                Clear All
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-8 h-8 rounded-lg bg-slate-800/50 hover:bg-slate-700/60 flex items-center justify-center transition"
              aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
            >
              <svg
                className={`w-4 h-4 text-slate-300 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Active Filter Chips - Always Visible */}
        {hasActiveFilters && (
          <div className="mt-3 flex flex-wrap gap-2">
            {activeFilters.map(f => (
              <span
                key={f}
                className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Expandable Filter Options */}
      {isExpanded && (
        <div className="p-4 pt-0 space-y-4 max-h-96 overflow-y-auto">
          {/* Industry Filter */}
          <FilterSection
            title="Industry"
            options={available.industries}
            value={filters.industry}
            onChange={val => onFilterChange({ ...filters, industry: val })}
          />

          {/* Category Filter */}
          <FilterSection
            title="Category"
            options={available.categories}
            value={filters.category}
            onChange={val => onFilterChange({ ...filters, category: val })}
          />

          {/* Use Case Filter */}
          <FilterSection
            title="Use Case"
            options={available.useCases}
            value={filters.useCase}
            onChange={val => onFilterChange({ ...filters, useCase: val })}
          />
        </div>
      )}
    </div>
  );
};

// Filter Section (Dropdown/Checkbox Style)
const FilterSection = ({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-sm text-slate-300 hover:text-white transition"
      >
        <span className="font-medium">{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-2 ml-4 space-y-1">
          <button
            onClick={() => onChange('')}
            className={`block text-xs w-full text-left px-2 py-1 rounded transition ${
              value === '' 
                ? 'bg-purple-500/20 text-purple-300' 
                : 'text-slate-500 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            All {title}
          </button>
          {options.map(option => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`block text-xs w-full text-left px-2 py-1 rounded transition ${
                value === option 
                  ? 'bg-purple-500/20 text-purple-300' 
                  : 'text-slate-500 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Service Card Component
const ServiceCardComponent = ({ service }: { service: ServiceCard }) => (
  <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-4 hover:border-purple-500/30 transition-all group">
    <div className="flex items-start gap-3">
      <span className="text-2xl shrink-0">{service.icon}</span>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-purple-300 transition">
          {service.title}
        </h4>
        <p className="text-xs text-slate-400 line-clamp-2 mb-2">{service.description}</p>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded-full bg-slate-800/50 text-slate-400">
            {service.category}
          </span>
          {service.industry && (
            <span className="px-2 py-0.5 rounded-full bg-slate-800/50 text-slate-400">
              {service.industry}
            </span>
          )}
        </div>
      </div>
    </div>
    {service.pricing && (
      <div className="mt-3 pt-3 border-t border-slate-800/30">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>From</span>
          <span className="font-mono text-purple-400">${service.pricing.basic}</span>
          <span className="hidden sm:inline">/mo</span>
        </div>
      </div>
    )}
  </div>
);

// Main Faceted Search Component
export function FacetedSearch() {
  // Load services (in real app, this would come from API or global state)
  const services: ServiceCard[] = useMemo(() => {
    // This would be imported from servicesData.json
    // For demo, returning empty array - will be populated from actual data
    return [];
  }, []);

  const [filters, setFilters] = useState<FilterState>({
    industry: '',
    category: '',
    useCase: '',
  });

  // Extract available filter options
  const availableFilters = useMemo(() => extractFilterOptions(services), [services]);

  // Apply filters
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesIndustry = filters.industry === '' || service.industry === filters.industry;
      const matchesCategory = filters.category === '' || service.category === filters.category;
      const matchesUseCase = filters.useCase === '' || service.useCase === filters.useCase;
      return matchesIndustry && matchesCategory && matchesUseCase;
    });
  }, [services, filters]);

  // Get active filter names for display
  const activeFilters = useMemo(() => {
    const active: string[] = [];
    if (filters.industry) active.push(filters.industry);
    if (filters.category) active.push(filters.category);
    if (filters.useCase) active.push(filters.useCase);
    return active;
  }, [filters]);

  const handleFilterChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  const handleClearAll = useCallback(() => {
    setFilters({ industry: '', category: '', useCase: '' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services Marketplace
            </span>
          </h1>
          <p className="text-slate-400">
            {filteredServices.length.toLocaleString()} services available
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              available={availableFilters}
              activeFilters={activeFilters}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            {filteredServices.length === 0 ? (
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 text-center">
                <p className="text-slate-400 mb-4">No services match your filters</p>
                <button
                  onClick={handleClearAll}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto">
                {filteredServices.map(service => (
                  <ServiceCardComponent key={service.id} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Dark/Light Mode Toggle Component
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real app, this would update CSS variables or use a theme provider
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/60 flex items-center justify-center transition"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm5.657 2.343a1 1 0 010 1.414l1.414 1.414a1 1 0 11-1.414 1.414L17.657 6.757a1 1 0 010-1.414zM20 11a1 1 0 11-2 0 1 1 0 012 0zm-2.343 6.657a1 1 0 01-1.414 0L12.243 16.93a1 1 0 111.414-1.414l1.414 1.414a1 1 0 010 1.414zM13 20a1 1 0 11-2 0 1 1 0 012 0zm-6.657-2.343a1 1 0 010-1.414L6.343 13.757a1 1 0 111.414-1.414L9.09 12.343a1 1 0 010 1.414zM4 11a1 1 0 11-2 0 1 1 0 012 0zm1.515-5.657a1 1 0 011.414 0L5.343 6.757a1 1 0 01-1.414 1.414L3.93 6.343a1 1 0 010-1.414zM12 7a5 5 0 100 10A5 5 0 0012 7z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3.754a1 1 0 00-1.013-.75H5.017a1 1 0 00-1.013.75 1 1 0 00.083 1.03l6.75 6.75a1 1 0 001.414 0l6.75-6.75a1 1 0 00.083-1.03zM19 11.254a1 1 0 00-1.013-.75H5.017a1 1 0 00-1.013.75 1 1 0 00.083 1.03l6.75 6.75a1 1 0 001.414 0l6.75-6.75a1 1 0 00.083-1.03zM12 19.754a1 1 0 00-1.013-.75H5.017a1 1 0 00-1.013.75 1 1 0 00.083 1.03l6.75 6.75a1 1 0 001.414 0l6.75-6.75a1 1 0 00.083-1.03z" />
        </svg>
      )}
    </button>
  );
}

// Export as default for easy import
export default FacetedSearch;