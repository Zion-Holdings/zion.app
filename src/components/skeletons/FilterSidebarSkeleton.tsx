import Skeleton from "@/components/ui/skeleton"; // Assuming 'Skeleton' is the default export
import { cn } from "@/lib/utils";

export interface FilterSidebarSkeletonProps {
  className?: string;
}

export const FilterSidebarSkeleton: React.FC<FilterSidebarSkeletonProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4",
        className,
      )}
    >
      {/* Filters Title */}
      <div className="flex items-center mb-6">
        {" "}
        {/* Increased mb from 4 to 6 for more spacing like title */}
        <Skeleton className="h-5 w-5 mr-2" /> {/* Icon placeholder */}
        <Skeleton className="h-6 w-1/3" /> {/* "Filters" text placeholder */}
      </div>
      {/* Category Filter Section */}
      <div className="mb-6">
        <Skeleton className="h-4 w-1/2 mb-2" />{" "}
        {/* "Category" label placeholder */}
        <Skeleton className="h-10 w-full" /> {/* Select dropdown placeholder */}
      </div>
      {/* Brand Filter Section */}
      <div className="mb-6">
        <Skeleton className="h-4 w-1/3 mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>
      {/* Specification Search Section */}
      <div className="mb-6">
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>
      {/* Availability Filter Section */}
      <div className="mb-6">
        <Skeleton className="h-4 w-1/3 mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>
      {/* Price Range Filter Section */}
      <div className="mb-6">
        <Skeleton className="h-4 w-2/3 mb-3" />{" "}
        {/* "Price Range" label placeholder, mb-3 for spacing before slider */}
        <Skeleton className="h-2 w-full mb-2 mt-4" />{" "}
        {/* Slider placeholder, mt-4 to mimic original spacing */}
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" /> {/* Min price placeholder */}
          <Skeleton className="h-4 w-1/4" /> {/* Max price placeholder */}
        </div>
      </div>
      {/* Minimum Rating Filter Section */}
      <div className="mb-6">
        <Skeleton className="h-4 w-3/5 mb-3" />{" "}
        {/* "Minimum Rating" label placeholder */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-1/4" /> {/* Rating button placeholder */}
          <Skeleton className="h-8 w-1/3" /> {/* Rating button placeholder */}
          <Skeleton className="h-8 w-1/5" /> {/* Rating button placeholder */}
          <Skeleton className="h-8 w-1/4" /> {/* Rating button placeholder */}
        </div>
      </div>
      {/* Reset Filters Button Placeholder */}
      <Skeleton className="h-10 w-full mt-2" />{" "}
      {/* mt-2 for a bit of space from last section */}
    </div>
  );
};

export default FilterSidebarSkeleton;
