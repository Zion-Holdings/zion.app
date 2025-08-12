
import { useState } from 'react';
import { TalentProfile } from '@/types/talent';

export function useUIState() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null);
  const [expandedSections, setExpandedSections] = useState({
    skills: true,
    availability: true,
    region: true,
    experience: true,
    price: true,
  });
  
  // Toggle expanded sections in the sidebar
  const toggleSection = (sectionName: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };
  
  // Handler for closing mobile filter sidebar
  const closeMobileFilter = () => {
    setIsMobileFilterOpen(false);
  };
  
  // Effect to listen for the custom event to close mobile filter
  // This would typically be in a useEffect hook, but we'll handle it via the button's onClick
  
  return {
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    toggleSection,
    closeMobileFilter,
  };
}
