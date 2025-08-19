
import React from "react";
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { X } from "lucide-react";

interface ActiveFiltersBarProps {
  selectedProductTypes: string[];
  selectedLocations: string[];
  selectedAvailability: string[];
  selectedRating: number | null;
  searchQuery: string;
  onRemoveFilter: (filterType: string, value: string) => void;
  onRemoveRating: () => void;
  onClearSearch: () => void;
}

export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  searchQuery,
  onRemoveFilter,
  onRemoveRating,
  onClearSearch
}: ActiveFiltersBarProps) {
  const hasActiveFilters = 
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null ||
    !!searchQuery;
    
  if (!hasActiveFilters) return null;
  
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      <span className="text-sm text-zion-slate-light">Active filters:</span>
      
      {searchQuery && (
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onClearSearch}
        >
          Search: {searchQuery}
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      
      {selectedProductTypes.map(type => (
        <ClickableBadge 
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('productTypes', type)}
        >
          {type}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {selectedLocations.map(location => (
        <ClickableBadge 
          key={`location-${location}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('locations', location)}
        >
          {location}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {selectedAvailability.map(availability => (
        <ClickableBadge 
          key={`availability-${availability}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('availability', availability)}
        >
          {availability}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {selectedRating !== null && (
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onRemoveRating}
        >
          {selectedRating}+ Stars
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
    </div>
  );
}
