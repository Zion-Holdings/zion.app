
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, Brain, Star, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllServices, expandedServiceCategories } from "@/data/expandedServices";

// Convert expanded services to ProductListing format
const convertServiceToProductListing = (service: any): ProductListing => ({
  id: service.id,
  title: service.title,
  description: service.description,
  category: service.category,
  price: service.pricing.amount,
  currency: service.pricing.currency,
  tags: service.tags,
  author: {
    name: service.author.name,
    id: service.author.id,
    avatarUrl: service.author.avatarUrl,
  },
  images: service.images,
  createdAt: new Date().toISOString(),
  aiScore: service.aiScore,
  rating: service.rating,
  reviewCount: service.reviewCount,
  featured: service.featured,
});

// Get all services and convert them
const SERVICE_LISTINGS: ProductListing[] = getAllServices().map(convertServiceToProductListing);

// Real services from expanded services data

// Filter options based on expanded service categories
const SERVICE_FILTERS = expandedServiceCategories.map(category => ({
  label: category.name,
  value: category.name.toLowerCase().replace(/\s+/g, '-')
}));

export default function ServicesPage() {
  const [listings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  return (
    <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />
      <TrustedBySection />
    </>
  );
}
