
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable";
import { GlobalServiceSection } from "@/components/GlobalServiceSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
import { PageHero } from "@/components/services/PageSections/PageHero";
import { CountryTabs } from "@/components/services/PageSections/CountryTabs";
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection";
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps";
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";

export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Check for success parameter in URL
  const success = searchParams.get("success");
  
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === "true") {
      toast({
        title: "Payment Successful",
        description: "Your IT onsite service request has been received. Our team will contact you shortly.",
      });
    }
  }, [success]);
  
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
  
  // Filter countries based on search query
  const filteredCountries = onsiteServicePricing
    .filter(country => 
      country.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      // First, sort by popular status
      const aIsPopular = popularCountries.includes(a.country);
      const bIsPopular = popularCountries.includes(b.country);
      
      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;
      
      // Then sort alphabetically
      return a.country.localeCompare(b.country);
    });
  
  const handleCountrySelect = (country: CountryPricing) => {
    setSelectedCountry(country);
    
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <>
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Features */}
          <PageHero />
          
          {/* Country Selection Tabs */}
          <div className="mb-12">
            <CountryTabs 
              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          
          {/* Service Details Section */}
          <ServiceDetailsSection 
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          
          {/* How It Works Section */}
          <ServiceProcessSteps />
          
          {/* What's Included Section */}
          <ServiceIncludes />
          
          {/* Complete Pricing Table */}
          <div id="pricing-table" className="my-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2>
              <p className="text-zion-slate-light mb-6">
                Our per-incident prices include transportation costs and the first hour of onsite service.
                Additional hours are billed separately at standard rates.
              </p>
            </div>
            
            <ITServicePricingTable />
          </div>
          
          <EnterpriseCallToAction />
        </div>
      </section>
      
      <GlobalServiceSection />
      <TrustedBySection />
      <QuoteFormSection />
    </>
  );
}
