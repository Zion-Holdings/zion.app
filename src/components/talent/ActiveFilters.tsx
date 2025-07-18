import React from 'react''
import { X } from '@/components/ui/icons'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'
'
interface ActiveFiltersProps {'
  selectedSkills: "string[]
  toggleSkill: (skill: string) => void"
  selectedAvailability: "string[],
  toggleAvailability: "(status: string) => void"
  selectedRegions: string[],"
  toggleRegion: (region: string) => void
  priceRange: [number, number]"
  setPriceRange: (range: [number, number]) => void"
  experienceRange: "[number, number]
  setExperienceRange: (range: [number, number]) => void
  clearFilters: () => void""
}

export function ActiveFilters(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  selectedSkills,;
  toggleSkill,;
  selectedAvailability,;
  toggleAvailability,;
  selectedRegions,;
  toggleRegion,;
  priceRange,;
  setPriceRange,;
  experienceRange,;
  setExperienceRange,;
  clearFilters,;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters: unknown =;
    selectedSkills.length > 0 ||;
    selectedAvailability.length > 0 ||;
    selectedRegions.length > 0 ||;
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200
;"
  if (!hasActiveFilters) return null;"

  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className=text-zion-slate-light text-sm">Active filters:</span>"

      {selectedSkills.map((skill) => (;"
        <ClickableBadge"
          key={skill};
          className=bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleSkill(skill)}"
        >;
          {skill}
          <X className="h-3 w-3" />
        </ClickableBadge>;
      ))}
;""
      {selectedAvailability.map((status) => (;
        <ClickableBadge
          key={status};"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2
          onClick={() => toggleAvailability(status)}"
        >;"
          {status === 'full-time'
            ? 'Full-time'
            : status === 'part-time'
              ? 'Part-time'
              : 'Project-based'}'
          <X className="h-3 w-3 />
        </ClickableBadge>;"
      ))}"
;"
      {selectedRegions.map((region) => (;
        <ClickableBadge"
          key={region};"
          className=bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2
          onClick={() => toggleRegion(region)}"
        >;"
          {region}
          <X className=h-3 w-3" />"
        </ClickableBadge>
      ))};"
;"
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
        <ClickableBadge;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr"
          <X className="h-3 w-3 />"
        </ClickableBadge>"
      )};"

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && ("
        <ClickableBadge;"
          className=bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2
          onClick={() => setExperienceRange([0, 15])}"
        >;"
          {experienceRange[0]}-{experienceRange[1]} years
          <X className=h-3 w-3" />"
        </ClickableBadge>;
      )};"
"
      <Button;
        variant=ghost"
        size="sm
        onClick={clearFilters}"
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
      >;
        Clear All;
      </Button>
    </div>;""
  );
}
"
}"
}
}"
}"