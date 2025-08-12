


import { Checkbox } from "@/components/ui/checkbox";
import { AvailabilityFilterProps } from "@/types/filters";
import { ChevronDown, ChevronUp } from 'lucide-react';

const AVAILABILITY_OPTIONS = [
  { id: "full_time", label: "Full-time" },
  { id: "part_time", label: "Part-time" },
  { id: "project", label: "Project-based" }
];

export function AvailabilityFilter({ selectedAvailability, toggleAvailability, expanded, toggleSection, isMobileFilterOpen }: AvailabilityFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Availability</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      
      {expanded && (
        <div className="mt-4 space-y-2">
          {AVAILABILITY_OPTIONS.map(option => (
            <div key={option.id} className="flex items-center">
              <Checkbox
                id={`availability-${option.id}`}
                checked={selectedAvailability.includes(option.id)}
                onCheckedChange={() => toggleAvailability(option.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`availability-${option.id}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
