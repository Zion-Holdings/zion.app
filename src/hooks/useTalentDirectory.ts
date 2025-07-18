<<<<<<< HEAD
import { useAuthStatus } from './talent/useAuthStatus'
import { useTalentData } from './talent/useTalentData'
import { useFilterTalents } from './talent/useFilterTalents'
import type { TalentFilterOptions } from './talent/useFilterTalents'
import { useUIState } from './talent/useUIState'
;
export function useTalentDirectory(): unknown {): unknown {): unknown {): unknown {): unknown {;
  page = 1,'
  limit = 12,;
  initialFilters: "TalentFilterOptions = {"},;
=======
import { useAuthStatus } from './talent/useAuthStatus;'';
import { useTalentData } from './talent/useTalentData;'';
import { useFilterTalents } from './talent/useFilterTalents;'';
import type { TalentFilterOptions } from './talent/useFilterTalents;'';
import { useUIState } from './talent/useUIState;''
;
export function useTalentDirectory(): unknown {): unknown {): unknown {): unknown {): unknown {;
  page = 1,;''
  limit = 12,;;
  initialFilters: "TalentFilterOptions = {"},;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
) {;
  // Fetch auth status and saved talents;
  const { isAuthenticated, userDetails, savedTalents, handleToggleSave } = ;
    useAuthStatus();
  // Fetch talent data;
  const { talents, total, isLoading, error } = useTalentData(page, limit);
  // Apply filters and sorting;
  const { ;
    filteredTalents,;
    searchTerm,;
    setSearchTerm,;
    selectedSkills,;
    selectedAvailability,;
    selectedRegions,;
    priceRange,;
    setPriceRange,;
    experienceRange,;
    setExperienceRange,;
    sortOption,;
    setSortOption,;
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;
    clearFilters,; } = useFilterTalents(talents, initialFilters);
  // Manage UI state;
  const { ;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    toggleSection,; } = useUIState();
  return {;
    // Talents and loading state;
    talents,;
    filteredTalents,;
    total,;
    isLoading,;
    error,;
    // Search and filter state;
    searchTerm,;
    setSearchTerm,;
    selectedSkills,;
    selectedAvailability,;
    selectedRegions,;
    priceRange,;
    setPriceRange,;
    experienceRange,;
    setExperienceRange,;
    sortOption,;
    setSortOption,;
    // UI state;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    // Auth and user state;
    isAuthenticated,;
    userDetails,;
    savedTalents,;
    // Actions;
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;
    clearFilters,;
<<<<<<< HEAD
    toggleSection,;"
    handleToggleSave,;";"
  };"
};"
"
}"
}";"
}"
}"
=======
    toggleSection,;""
    handleToggleSave,;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
