<<<<<<< HEAD
import React from 'react';;
import { Drawer } from '@/components/ui/drawer;;
import { FilterSidebar } from '@/components/talent/FilterSidebar;;
import type { FilterSidebarProps } from '@/types/filters;'
;''
interface MobileFilterDrawerProps {;;
  isMobileFilterOpen: "boolean;",;";";";";""
  setIsMobileFilterOpen: "(isOpen: boolean) => void;",;";";";";""
  filterProps: "FilterSidebarProps;";"
};

export function MobileFilterDrawer(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  isMobileFilterOpen,;
  setIsMobileFilterOpen,;""
  filterProps,;";""
}: MobileFilterDrawerProps) {;";";""
  return (;";";";""
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>;";";";";""
      <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto">;"
=======
import React from 'react'
import { Drawer } from '@/components/ui/drawer'
import { FilterSidebar } from '@/components/talent/FilterSidebar'
import type { FilterSidebarProps } from '@/types/filters'
'
interface MobileFilterDrawerProps {'
  isMobileFilterOpen: "boolean
  setIsMobileFilterOpen: (isOpen: boolean) => void"
  filterProps: "FilterSidebarProps

export function MobileFilterDrawer(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  isMobileFilterOpen,;
  setIsMobileFilterOpen,"
  filterProps,;"
}: MobileFilterDrawerProps) {;
  return ("
    <Drawer open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>;"
      <div className=p-4 bg-zion-blue-dark border-t border-zion-blue-light h-[85vh] overflow-auto>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        <FilterSidebar;
          {...filterProps};
          isMobileFilterOpen={isMobileFilterOpen};
        />;
<<<<<<< HEAD
      </div>;""
    </Drawer>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </div>"
    </Drawer>;
  );"
}"

}""
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
