
import { Header } from "@/components/Header";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { GradientHeading } from "@/components/GradientHeading";

export default function Featured() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover our handpicked selection of premium AI products and services. 
              These featured listings represent the best that the Zion Marketplace has to offer.
            </p>
          </div>
          
          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection showTitle={false} />
        </div>
      </div>
    </>
  );
}
