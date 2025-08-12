
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable";
import { GlobalServiceSection } from "@/components/GlobalServiceSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
import { OnsiteQuoteModal } from "@/components/services/OnsiteQuoteModal";
import { slugify } from "@/lib/slugify";
import { PageHero } from "@/components/services/PageSections/PageHero";
import { CountryTabs } from "@/components/services/PageSections/CountryTabs";
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection";
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps";
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";

export default function ITOnsiteServicesPage() {
  const router = useRouter();
  const { country: countrySlug, success } = router.query as { country?: string; success?: string };
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteCountry, setQuoteCountry] = useState<CountryPricing | null>(null);

  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === "true") {
      toast({
        title: "Payment Successful",
        description: "Your IT onsite service request has been received. Our team will contact you shortly.",
      });
    }
  }, [success]);

  // Set selected country from URL
  useEffect(() => {
    if (countrySlug) {
      const match = onsiteServicePricing.find(c => slugify(c.country) === countrySlug);
      setSelectedCountry(match || null);
      if (match) {
        setTimeout(() => {
          document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      setSelectedCountry(null);
    }
  }, [countrySlug]);
  
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
    router.push(`/it-onsite-services/${slugify(country.country)}?service=standard`);
  };

  const handleQuote = (country: CountryPricing) => {
    setQuoteCountry(country);
    setQuoteOpen(true);
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
              onQuote={handleQuote}
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
      <OnsiteQuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        country={quoteCountry?.country}
      />
    </>
  );
}
