
import { ProductListingCard } from "@/components/ProductListingCard";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeaturedListingsSectionProps {
  showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function FeaturedListingsSection({
  showTitle = true,
  className,
  style,
}: FeaturedListingsSectionProps) {
  // Remove hardcoded featuredListings. Fetch from real API/data source or show empty state if unavailable.

  return (
    <section
      id="featured"
      className={cn("py-12 px-4 bg-background", className)}
      style={style}
    >
      <div className="container mx-auto">
        {showTitle && (
          <div className="text-center mb-12">
            <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Discover our handpicked selection of top AI products and services
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* The featuredListings array is now empty, so this loop will not render any cards. */}
          {/* If you want to display a placeholder or message, you would add it here. */}
          {/* For now, it will just show an empty grid. */}
          {/* <ProductListingCard
              key={listing.id}
              listing={listing}
              view="grid"
              onRequestQuote={() => {}}
            /> */}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-6"
            asChild
          >
            <Link href="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

