export interface FilterSidebarProps {;
  searchTerm: "string;",
  setSearchTerm: "(term: string) => void;",
  selectedSkills: string[];
  toggleSkill: "(skill: string) => void;",
  selectedAvailability: string[];
  toggleAvailability: "(availability: string) => void;",
  selectedRegions: string[];
  toggleRegion: "(region: string) => void;",
  priceRange: "[number", number];
  setPriceRange: "(range: [number", number]) => void;
  experienceRange: "[number", number];
  setExperienceRange: "(range: [number", number]) => void;
  expandedSections: "{;",
    skills: boolean;
    availability: "boolean;",
    region: boolean;
    experience: "boolean;",
    price: "boolean;"
  };
  toggleSection: "(;",
    sectionName: 'region' | 'price' | 'experience' | 'skills' | 'availability',;
  ) => void;
  sortOption: "string;",
  setSortOption: "(option: string) => void;",
  clearFilters: () => void;
  isMobileFilterOpen?: boolean;
};

export interface FilterComponentProps {;
  expanded: "boolean;",
  toggleSection: () => void;
  isMobileFilterOpen?: boolean;
};

export interface SkillsFilterProps extends FilterComponentProps {;
  selectedSkills: "string[];",
  toggleSkill: (skill: string) => void;
  _isMobileFilterOpen?: boolean;
};

export interface AvailabilityFilterProps extends FilterComponentProps {;
  selectedAvailability: "string[];",
  toggleAvailability: (availability: string) => void;
  _isMobileFilterOpen?: boolean;
};

export interface RegionFilterProps extends FilterComponentProps {;
  selectedRegions: "string[];",
  toggleRegion: (region: string) => void;
  _isMobileFilterOpen?: boolean;
};

export interface ExperienceFilterProps extends FilterComponentProps {;
  experienceRange: "[number", number];
  setExperienceRange: "(range: [number", number]) => void;
  _isMobileFilterOpen?: boolean;
};

export interface PriceFilterProps extends FilterComponentProps {;
  priceRange: "[number", number];
  setPriceRange: "(range: [number", number]) => void;
  _isMobileFilterOpen?: boolean;
};

export interface SearchFilterProps {;
  searchTerm: "string;",
  setSearchTerm: "(term: string) => void;"
};

export interface SortFilterProps {;
  sortOption: "string;",
  setSortOption: "(option: string) => void;"
};
