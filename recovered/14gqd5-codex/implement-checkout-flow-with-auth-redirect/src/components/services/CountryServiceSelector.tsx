
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing";
import { CountrySelector } from "./CountrySelector";
import { PaymentSection } from "./PaymentSection";
import { ServiceDetails } from "./ServiceDetails";

interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;
}

export function CountryServiceSelector({ onCountryChange, selectedCountry: initialCountry }: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector 
          onCountryChange={onCountryChange || (() => {})} 
          selectedCountry={initialCountry || null} 
        />
        
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>
      
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
