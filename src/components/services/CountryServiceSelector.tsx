<<<<<<< HEAD
import type { CountryPricing } from '@/data/onsiteServicePricing;'';
import { CountrySelector } from './CountrySelector;'';
import { PaymentSection } from './PaymentSection;'';
import { ServiceDetails } from './ServiceDetails;'
;
interface CountryServiceSelectorProps {;
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;''
};
;
export function CountryServiceSelector(): unknown {): unknown {): unknown {): unknown {): unknown {{;''
  onCountryChange,;;
  selectedCountry: "initialCountry",;";";""
}: CountryServiceSelectorProps) {;";";";""
  return (;";";";";""
    <div className="space-y-6">;";";";";""
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;"
=======
import type { CountryPricing } from '@/data/onsiteServicePricing'
import { CountrySelector } from './CountrySelector'
import { PaymentSection } from './PaymentSection'
import { ServiceDetails } from './ServiceDetails'

interface CountryServiceSelectorProps {;
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null'
}'

export function CountryServiceSelector(): unknown {): unknown {): unknown {): unknown {): unknown {{'
  onCountryChange,'
  selectedCountry: "initialCountry,
}: CountryServiceSelectorProps) {;"
  return ("
    <div className=space-y-6>"
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        <CountrySelector;
          onCountryChange={onCountryChange || (() => {})};
          selectedCountry={initialCountry || null};
        />;

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />};
<<<<<<< HEAD
      </div>;
;
      {initialCountry && <ServiceDetails country={initialCountry.country} />};""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </div>;"
      {initialCountry && <ServiceDetails country={initialCountry.country} />}"
    </div>;"
  );
}"
"

}"
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
