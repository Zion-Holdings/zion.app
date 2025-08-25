

const TRUSTED_COMPANIES = [
  { name: 'TechCorp', logo: '/logos/techcorp.svg' },
  { name: 'InnovateLab', logo: '/logos/innovatelab.svg' },
  { name: 'FutureSystems', logo: '/logos/futuresystems.svg' },
  { name: 'DigitalFlow', logo: '/logos/digitalflow.svg' },
  { name: 'SmartSolutions', logo: '/logos/smartsolutions.svg' },
  { name: 'NextGen', logo: '/logos/nextgen.svg' },
];

export const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-500">
            Join hundreds of innovative companies already using our platform
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {TRUSTED_COMPANIES.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <div className="w-24 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                <div className="text-gray-400 font-semibold text-sm text-center">
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <span>★</span>
            <span>4.9/5 rating from 2,000+ customers</span>
            <span>★</span>
          </div>
        </div>
      </div>
    </section>
  );
};