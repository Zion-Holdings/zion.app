import { useState } from 'react''
import  type { TalentProfile }  from '@/types/talent'
export function useUIState(): ;
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)'
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>('
    null,)'
  const [expandedSections, setExpandedSections] = useState({'
    skills: "true
    availability: true"
    region: "true
    experience: true"
    price: true,"