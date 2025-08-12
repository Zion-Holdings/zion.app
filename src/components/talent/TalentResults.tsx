
import React from "react";
import { TalentProfile } from "@/types/talent";
import { ActiveFilters } from "@/components/talent/ActiveFilters";
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";

interface TalentResultsProps {
  talents: TalentProfile[];
  totalCount: number;
  isLoading: boolean;
  viewProfile: (id: string) => void;
  handleRequestHire: (talent: TalentProfile) => void;
  isAuthenticated: boolean;
  activeFiltersProps: {
    selectedSkills: string[];
    toggleSkill: (skill: string) => void;
    selectedAvailability: string[];
    toggleAvailability: (availability: string) => void;
    selectedRegions: string[];
    toggleRegion: (region: string) => void;
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number];
    setExperienceRange: (range: [number, number]) => void;
    clearFilters: () => void;
  }
}

export function TalentResults({
  talents,
  totalCount,
  isLoading,
  viewProfile,
  handleRequestHire,
  isAuthenticated,
  activeFiltersProps
}: TalentResultsProps) {
  return (
    <div className="flex-1">
      {/* Active filters */}
      <ActiveFilters {...activeFiltersProps} />
      
      {/* Results count */}
      <ResultsHeader 
        isLoading={isLoading}
        resultCount={totalCount}
      />
      
      {/* Talents grid */}
      <TalentGrid 
        talents={talents}
        isLoading={isLoading}
        onTalentClick={viewProfile}
        viewProfile={viewProfile}
        handleRequestHire={handleRequestHire}
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}
      />
    </div>
  );
}
