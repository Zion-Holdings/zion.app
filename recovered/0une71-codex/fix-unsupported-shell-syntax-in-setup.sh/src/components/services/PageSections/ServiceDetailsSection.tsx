
import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";

interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void;
}

export function ServiceDetailsSection({ selectedCountry, setSelectedCountry }: ServiceDetailsSectionProps) {
  return (
    <div id="service-details" className="mt-12">
      {selectedCountry ? (
        <CountryServiceSelector 
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Select a Country for Details</h2>
          <p className="text-zion-slate-light mb-6">
            Choose a country from the options above to see service details and pricing
          </p>
        </div>
      )}
    </div>
  );
}
