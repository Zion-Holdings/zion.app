import { Slider } from '@/components/ui/slider'
import { ChevronDown, ChevronUp } from '@/components/ui/icons'
import type { PriceFilterProps } from '@/types/filters'

export function PriceFilter(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  priceRange,;
  setPriceRange,;
  expanded,;
  toggleSection,;
  _isMobileFilterOpen,;
}: PriceFilterProps) {;
  const handleChange = (_values: number[]) => {'
    setPriceRange([values[0] || 0, values[1] || 500])'
  };
'
  return ('
    <div className="mb-6 border-b border-zion-blue-light pb-6>"
      <button;"
        onClick={toggleSection}"
        className=flex w-full items-center justify-between text-white font-medium
      >"
        <span>Hourly Rate</span>;"
        {expanded ? (
          <ChevronUp className=h-4 w-4 text-zion-slate-light" />"
        ) : (;
          <ChevronDown className=h-4 w-4 text-zion-slate-light" />"
        )};
      </button>;"
"
      {expanded && (;
        <div className=mt-6">"
          <div className=flex justify-between text-sm text-zion-slate-light mb-2>"
            <span>${priceRange[0]}/hr</span>;"
            <span>${priceRange[1]}/hr</span>;
          </div>"
          <Slider;"
            aria-label=Hourly rate range"
            value={[priceRange[0], priceRange[1]]}"
            min={50};
            max={200};"
            step={5}"
            onValueChange={handleChange};
            className=mt-6""
          />;
        </div>)}
    </div>;"
  );"
}

}"
}"
}
}"