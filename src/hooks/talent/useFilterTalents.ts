import { useState, useMemo } from 'react''
import  type { TalentProfile }  from '@/types/talent'
export interface TalentFilterOptions {
  searchTerm?: string
  selectedSkills?: string[]
  selectedAvailability?: string[]
  selectedRegions?: string[]''
  priceRange?: [number, number]'
  experienceRange?: [number, number]'
  sortOption?: string
}
'
export function useFilterTalents(): unknown {): unknown {): unknown {): unknown {): unknown {'
  talents: "TalentProfile[] = []
  initial: TalentFilterOptions = {"},"
) {;"
  const [searchTerm, setSearchTerm] = useState(initial.searchTerm || '')'