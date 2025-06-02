import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Star } from "lucide-react"; // Removed X as it's handled by ActiveFiltersBar
import { FilterOptions } from "@/types/search";
import { ActiveFiltersBar } from "./ActiveFiltersBar"; // Import ActiveFiltersBar
import Slider from '@mui/material/Slider';

interface FilterSidebarProps {
  filters: {
    selectedProductTypes: string[];
    selectedLocations: string[];
    selectedAvailability: string[];
    selectedRating: number | null;
  };
  filterOptions: FilterOptions;
  onFilterChange: (filterType: string, value: string) => void;
  onRatingChange: (rating: number | null) => void;
  onClearFilters: () => void;
  selectedMinPrice: number | null;
  selectedMaxPrice: number | null;
  handlePriceChange: (minPrice: number, maxPrice: number) => void;
  overallMinPrice: number;
  overallMaxPrice: number;
  /**
   * When false, show an empty state instead of the filter list
   */
  hasResults?: boolean;
}

export function FilterSidebar({
  filters,
  filterOptions,
  onFilterChange,
  onRatingChange,
  onClearFilters,
  selectedMinPrice,
  selectedMaxPrice,
  handlePriceChange,
  overallMinPrice,
  overallMaxPrice,
  hasResults = true
}: FilterSidebarProps) {

  const formatCurrencyLabel = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Initialize internal states for sliders to overall min/max if current selections are null
  // const currentMin = selectedMinPrice ?? overallMinPrice; // Will be replaced by actualMin
  // const currentMax = selectedMaxPrice ?? overallMaxPrice; // Will be replaced by actualMax

  const [actualMin, setActualMin] = useState(selectedMinPrice ?? overallMinPrice);
  const [actualMax, setActualMax] = useState(selectedMaxPrice ?? overallMaxPrice);

  // Effect to update local slider state if props change from parent (e.g. clearing filters)
  useEffect(() => {
    setActualMin(selectedMinPrice ?? overallMinPrice);
    setActualMax(selectedMaxPrice ?? overallMaxPrice);
  }, [selectedMinPrice, selectedMaxPrice, overallMinPrice, overallMaxPrice]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    const [newMin, newMax] = newValue as number[];
    setActualMin(newMin);
    setActualMax(newMax);
  };

  const handleSliderChangeCommitted = (_event: React.SyntheticEvent | Event, newValue: number | number[]) => {
    const [newMin, newMax] = newValue as number[];
    handlePriceChange(newMin, newMax);
  };

  const isAnyFilterActive =
    filters.selectedProductTypes.length > 0 ||
    filters.selectedLocations.length > 0 ||
    filters.selectedAvailability.length > 0 ||
    filters.selectedRating !== null ||
    selectedMinPrice !== overallMinPrice ||
    selectedMaxPrice !== overallMaxPrice;

  if (!hasResults) {
    return (
      <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6 text-center">
        <img src="/placeholder.svg" alt="No results" className="mx-auto mb-4 w-40 h-40" />
        <p className="text-zion-slate-light mb-4">No listings match your filters.</p>
        <Button onClick={onClearFilters} className="bg-zion-purple hover:bg-zion-purple-dark">
          Clear Filters
        </Button>
      </div>
    );
  }
  return (
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-white flex items-center">
          <Filter className="mr-2 h-5 w-5" /> Filters
        </h2>
        <Button 
          variant="outline" 
          size="sm"
          className={`border-zion-purple text-zion-purple hover:bg-zion-purple/10 ${!isAnyFilterActive ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={onClearFilters}
          disabled={!isAnyFilterActive}
        >
          Clear All
        </Button>
      </div>

      <ActiveFiltersBar
        selectedProductTypes={filters.selectedProductTypes}
        selectedLocations={filters.selectedLocations}
        selectedAvailability={filters.selectedAvailability}
        selectedRating={filters.selectedRating}
        searchQuery="" // Not available in FilterSidebar
        onRemoveFilter={onFilterChange}
        onRemoveRating={() => onRatingChange(null)}
        onClearSearch={() => {}} // No-op, not available in FilterSidebar
        selectedMinPrice={selectedMinPrice}
        selectedMaxPrice={selectedMaxPrice}
        onRemovePriceFilter={() => handlePriceChange(overallMinPrice, overallMaxPrice)}
      />
      
      {/* Product Type Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Product Type
        </label>
        <div className="space-y-2">
          {filterOptions.productTypes.map((type) => (
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox 
                id={`type-${type.value}`} 
                checked={filters.selectedProductTypes.includes(type.value)}
                onCheckedChange={() => onFilterChange('productTypes', type.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                aria-label={type.label}
              />
              <label 
                htmlFor={`type-${type.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Location Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Location
        </label>
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
          {filterOptions.locations.map((location) => (
            <div key={location.value} className="flex items-center space-x-2">
              <Checkbox 
                id={`location-${location.value}`} 
                checked={filters.selectedLocations.includes(location.value)}
                onCheckedChange={() => onFilterChange('locations', location.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                aria-label={location.label}
              />
              <label 
                htmlFor={`location-${location.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {location.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Availability Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Availability
        </label>
        <div className="space-y-2">
          {filterOptions.availabilityOptions.map((availability) => (
            <div key={availability.value} className="flex items-center space-x-2">
              <Checkbox 
                id={`availability-${availability.value}`} 
                checked={filters.selectedAvailability.includes(availability.value)}
                onCheckedChange={() => onFilterChange('availability', availability.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
                aria-label={availability.label}
              />
              <label 
                htmlFor={`availability-${availability.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {availability.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Rating Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Minimum Rating
        </label>
        <div className="flex flex-wrap gap-2">
          {[null, ...filterOptions.ratingOptions].map((rating) => (
            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
              onClick={() => onRatingChange(rating)}
              className={`${
                filters.selectedRating === rating 
                  ? "bg-zion-purple/20 border-zion-purple text-zion-purple" 
                  : "border-zion-blue-light text-zion-slate-light"
              }`}
              aria-label={rating === null ? "Filter by any rating" : `Filter by ${rating} stars and up`}
            >
              {rating === null ? (
                "Any"
              ) : (
                <div className="flex items-center">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />
                  ))}
                  <span className="ml-1">& Up</span>
                </div>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Price Range
        </label>
        <div className="space-y-3 px-2"> {/* Added some padding for the slider */}
          <Slider
            getAriaLabel={() => 'Price range'}
            value={[actualMin, actualMax]}
            onChange={handleSliderChange}
            onChangeCommitted={handleSliderChangeCommitted}
            min={overallMinPrice}
            max={overallMaxPrice}
            valueLabelDisplay="on"
            valueLabelFormat={formatCurrencyLabel}
            getAriaValueText={formatCurrencyLabel}
            sx={{ // Basic styling to match the theme, can be further customized
              color: 'var(--zion-purple)',
              '& .MuiSlider-thumb': {
                backgroundColor: 'var(--zion-purple)',
              },
              '& .MuiSlider-valueLabel': {
                backgroundColor: 'var(--zion-purple-dark)',
                color: 'white',
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'var(--zion-blue-light)',
              },
              '& .MuiSlider-track': {
                backgroundColor: 'var(--zion-purple)',
              }
            }}
          />
          <div className="flex justify-between text-xs text-zion-slate-light mt-1">
            <span>{formatCurrencyLabel(actualMin)}</span>
            <span>{formatCurrencyLabel(actualMax)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
