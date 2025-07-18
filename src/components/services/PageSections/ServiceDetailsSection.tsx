<<<<<<< HEAD
import type { CountryPricing } from '@/data/onsiteServicePricing;'';
import { CountryServiceSelector } from '../CountryServiceSelector;'
;''
interface ServiceDetailsSectionProps {;;
  selectedCountry: "CountryPricing | null;",;";";";";""
  setSelectedCountry: "(country: CountryPricing | null) => void;";"
};
;
export function ServiceDetailsSection(): unknown {): unknown {): unknown {): unknown {): unknown {{;""
  selectedCountry,;";""
  setSelectedCountry,;";";""
}: ServiceDetailsSectionProps) {;";";";""
  return (;";";";";""
    <div id="service-details" className="mt-12">;"
      {selectedCountry ? (;
        <CountryServiceSelector;""
          selectedCountry={selectedCountry};";""
          onCountryChange={setSelectedCountry};";";""
        />;";";";""
      ) : (;";";";";""
        <div className="text-center">;";";";";""
          <h2 className="text-2xl font-bold text-white mb-4">;";";""
            Select a Country for Details;";";";""
          </h2>;";";";";""
          <p className="text-zion-slate-light mb-6">;"
            Choose a country from the options above to see service details and;
            pricing;
          </p>;
        </div>;
      )};""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import type { CountryPricing } from '@/data/onsiteServicePricing'
import { CountryServiceSelector } from '../CountryServiceSelector'
'
interface ServiceDetailsSectionProps {'
  selectedCountry: "CountryPricing | null
  setSelectedCountry: (country: CountryPricing | null) => void""

export function ServiceDetailsSection(): unknown {): unknown {): unknown {): unknown {): unknown {{
  selectedCountry,;"
  setSelectedCountry,;"
}: ServiceDetailsSectionProps) {
  return (;
    <div id="service-details" className=mt-12>"
      {selectedCountry ? (;
        <CountryServiceSelector"
          selectedCountry={selectedCountry};
          onCountryChange={setSelectedCountry};"
        />"
      ) : (;
        <div className=text-center">"
          <h2 className=text-2xl font-bold text-white mb-4>"
            Select a Country for Details;"
          </h2>
          <p className=text-zion-slate-light mb-6">"
            Choose a country from the options above to see service details and;
            pricing;
          </p>;
        </div>)}
    </div>;"
  );"

}"
}"

}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
