
import { useState, useMemo } from 'react';
import { TalentProfile } from '@/types/talent';

export interface TalentFilterOptions {
  searchTerm?: string;
  selectedSkills?: string[];
  selectedAvailability?: string[];
  selectedRegions?: string[];
  priceRange?: [number, number];
  experienceRange?: [number, number];
  sortOption?: string;
}

export function useFilterTalents(
  talents: TalentProfile[] = [],
  initial: TalentFilterOptions = {}
) {
  const [searchTerm, setSearchTerm] = useState(initial.searchTerm || '');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    initial.selectedSkills || []
  );
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    initial.selectedAvailability || []
  );
  const [selectedRegions, setSelectedRegions] = useState<string[]>(
    initial.selectedRegions || []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>(
    initial.priceRange || [50, 200]
  );
  const [experienceRange, setExperienceRange] = useState<[number, number]>(
    initial.experienceRange || [0, 15]
  );
  const [sortOption, setSortOption] = useState<string>(
    initial.sortOption || 'relevance'
  );
  
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };
  
  const toggleAvailability = (availability: string) => {
    setSelectedAvailability(prev => 
      prev.includes(availability) 
        ? prev.filter(a => a !== availability)
        : [...prev, availability]
    );
  };
  
  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
    setSelectedAvailability([]);
    setSelectedRegions([]);
    setPriceRange([50, 200]);
    setExperienceRange([0, 15]);
    setSortOption('relevance');
  };
  
  // Filter and sort talents
  const filteredTalents = useMemo(() => {
    let result = [...talents];
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(talent => 
        talent.full_name.toLowerCase().includes(lowerSearch) ||
        talent.professional_title.toLowerCase().includes(lowerSearch) ||
        talent.bio?.toLowerCase().includes(lowerSearch) ||
        talent.skills?.some(skill => skill.toLowerCase().includes(lowerSearch))
      );
    }
    
    // Filter by selected skills
    if (selectedSkills.length > 0) {
      result = result.filter(talent => 
        selectedSkills.every(skill => 
          talent.skills?.some(talentSkill => 
            talentSkill.toLowerCase().includes(skill.toLowerCase())
          )
        )
      );
    }
    
    // Filter by availability
    if (selectedAvailability.length > 0) {
      result = result.filter(talent => 
        selectedAvailability.includes(talent.availability_type || '')
      );
    }
    
    // Filter by location/region
    if (selectedRegions.length > 0) {
      result = result.filter(talent => 
        selectedRegions.some(region => 
          talent.location?.includes(region)
        )
      );
    }
    
    // Filter by price range
    result = result.filter(talent => {
      const hourlyRate = talent.hourly_rate || 0;
      return hourlyRate >= priceRange[0] && hourlyRate <= priceRange[1];
    });
    
    // Filter by experience range
    result = result.filter(talent => {
      const years = talent.years_experience || 0;
      return years >= experienceRange[0] && years <= experienceRange[1];
    });
    
    // Sort talents
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => (a.hourly_rate || 0) - (b.hourly_rate || 0));
        break;
      case 'price-high':
        result.sort((a, b) => (b.hourly_rate || 0) - (a.hourly_rate || 0));
        break;
      case 'rating':
        result.sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0));
        break;
      case 'experience':
        result.sort((a, b) => (b.years_experience || 0) - (a.years_experience || 0));
        break;
      default:
        // Default sorting by relevance (no specific order)
        break;
    }
    
    return result;
  }, [talents, searchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, experienceRange, sortOption]);
  
  return {
    filteredTalents,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
  };
}
