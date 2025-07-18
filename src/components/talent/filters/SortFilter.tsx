import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
<<<<<<< HEAD
  SelectValue,;
} from '@/components/ui/select;'';
import type { SortFilterProps } from '@/types/filters;'
;
export function SortFilter(): unknown {): unknown {): unknown {): unknown {): unknown {{ sortOption, setSortOption }: SortFilterProps) {;''
  return (;;
    <div className="mb-6">;";";";";""
      <label className="text-sm font-medium text-zion-slate-light mb-2 block">;";""
        Sort by;";";""
      </label>;";";";""
      <Select value={sortOption} onValueChange={setSortOption}>;";";";";""
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;";";";";""
          <SelectValue placeholder="Sort by" />;";";";""
        </SelectTrigger>;";";";";""
        <SelectContent className="bg-zion-blue border-zion-blue-light text-white">;";";";";""
          <SelectItem value="relevance">Relevance</SelectItem>;";";";";""
          <SelectItem value="rating">Highest Rating</SelectItem>;";";";";""
          <SelectItem value="experience">Most Experienced</SelectItem>;";";";";""
          <SelectItem value="price-low">Price: Low to High</SelectItem>;";";";";""
          <SelectItem value="price-high">Price: High to Low</SelectItem>;"
        </SelectContent>;
      </Select>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
  SelectValue,
} from '@/components/ui/select'
import type { SortFilterProps } from '@/types/filters'

export function SortFilter(): unknown {): unknown {): unknown {): unknown {): unknown {{ sortOption, setSortOption }: SortFilterProps) {'
  return ('
    <div className="mb-6>"
      <label className="text-sm font-medium text-zion-slate-light mb-2 block">
        Sort by;
      </label>"
      <Select value={sortOption} onValueChange={setSortOption}>;"
        <SelectTrigger className=bg-zion-blue border-zion-blue-light text-white>"
          <SelectValue placeholder="Sort by />"
        </SelectTrigger>;"
        <SelectContent className="bg-zion-blue border-zion-blue-light text-white>"
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value=rating">Highest Rating</SelectItem>"
          <SelectItem value=experience>Most Experienced</SelectItem>"
          <SelectItem value="price-low>Price: Low to High</SelectItem>"
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>;""
  );

"
}"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
