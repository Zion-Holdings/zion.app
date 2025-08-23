import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import UltraFuturisticServiceCard2026 from '../../components/ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025 } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';
import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { real2029Q2Additions } from '../../data/real-2029-q2-additions';
import { real2029Q3Additions } from '../../data/real-2029-q3-additions';
import { real2030Q1Additions } from '../../data/real-2030-q1-additions';
import { real2031MicroSaasAdditions } from '../../data/real-2031-micro-saas-additions';
import { real2031ITServicesAdditions } from '../../data/real-2031-it-services-additions';
import { real2031AIServicesAdditions } from '../../data/real-2031-ai-services-additions';
import { real2030Q2Additions } from '../../data/real-2030-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { professionalServices } from '../../data/professional-services';
import { real2032ServiceExpansions } from '../../data/real-2032-service-expansions';
import { real2035Q1Additions } from '../../data/real-2035-q1-additions';
import { real2035Q2AdditionsExtra } from '../../data/real-2035-q2-additions-extra';
import { real2025ExtraServices } from '../../data/real-2025-extra-services';
import { real2026Q4ExpansionsV2 } from '../../data/real-2026-q4-expansions-v2';
import { real2036ServiceExpansions } from '../../data/real-2036-service-expansions';
import { real2026Q4ExpansionsV3 } from '../../data/real-2026-q4-expansions-v3';
import { real2036MicroSaasAdditions } from '../../data/real-2036-micro-saas-additions';
import { real2036ITServicesAdditions } from '../../data/real-2036-it-services-additions';
import { real2036AIServicesAdditions } from '../../data/real-2036-ai-services-additions';
import { innovative2025MicroSaasBatch } from '../../data/innovative-2025-micro-saas-batch';
import { innovative2025ITEnterpriseBatch } from '../../data/innovative-2025-it-enterprise-batch';
import { innovativeMicroSaasServices } from '../../data/innovative-2025-micro-saas-expansions';
import { innovativeITServices } from '../../data/innovative-2025-it-services-expansions';
import { innovativeAIServices } from '../../data/innovative-2025-ai-services-expansions';
// Import our new 2025 advanced services
import { advanced2025MicroSaasExpansion } from '../../data/2025-advanced-micro-saas-expansion';
import { advanced2025ITSolutionsExpansion } from '../../data/2025-advanced-it-solutions-expansion';
import { advanced2025AIServicesExpansion } from '../../data/2025-advanced-ai-services-expansion';

// Import our new 2025 innovative services
import { innovativeMicroSaasExpansion2025 } from '../../data/2025-innovative-micro-saas-expansion';
import { innovative2025ITSolutionsExpansion } from '../../data/2025-innovative-it-solutions-expansion';
import { innovative2025AISolutionsExpansion } from '../../data/2025-innovative-ai-solutions-expansion';

// Import our new 2025 advanced services V2
// Note: These files don't exist yet, commenting out for now
// import { advancedMicroSaasExpansion2025V2 } from '../../data/2025-advanced-micro-saas-expansion-v2';
// import { advancedITInfrastructureExpansion2025V2 } from '../../data/2025-advanced-it-infrastructure-expansion-v2';
// import { advancedAIServicesExpansion2025V2 } from '../../data/2025-advanced-ai-services-expansion-v2';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
  'Quantum Computing',
  'Space Technology',
  'Metaverse',
  'Cybersecurity',
  'Supply Chain',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Education',
  'Government',
  'Energy',
  'Transportation'
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      realMarketServicesExtended as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realQ4Services2025 as unknown[],
      real2025Q4Additions as unknown[],
      real2026Q1Additions as unknown[],
      added2026Q2Services as unknown[],
      real2026Q3Additions as unknown[],
      real2026Q4Additions as unknown[],
      real2026Q4NewServices as unknown[],
      real2027Q1Additions as unknown[],
      real2027Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      real2028ServiceExpansions as unknown[],
      innovativeMicroSaasServices as unknown[],
      innovativeITServices as unknown[],
      innovativeAIServices as unknown[],
      real2029Q1Additions as unknown[],
      real2029Q2Additions as unknown[],
      real2029Q3Additions as unknown[],
      real2030Q1Additions as unknown[],
      real2031MicroSaasAdditions as unknown[],
      real2031ITServicesAdditions as unknown[],
      real2031AIServicesAdditions as unknown[],
      real2030Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      professionalServices as unknown[],
      real2032ServiceExpansions as unknown[],
      real2035Q1Additions as unknown[],
      real2035Q2AdditionsExtra as unknown[],
      real2025ExtraServices as unknown[],
      real2026Q4ExpansionsV2 as unknown[],
      real2026Q4ExpansionsV3 as unknown[],
      real2036ServiceExpansions as unknown[],
      real2036MicroSaasAdditions as unknown[],
      real2036ITServicesAdditions as unknown[],
      real2036AIServicesAdditions as unknown[]
    )
    .concat(innovative2025MicroSaasBatch as unknown[])
    .concat(innovative2025ITEnterpriseBatch as unknown[])
    .concat(innovativeMicroSaasServices as unknown[])
    .concat(innovativeITServices as unknown[])
    .concat(innovativeAIServices as unknown[])
    // Our new 2025 advanced services
    .concat(advanced2025MicroSaasExpansion as unknown[])
    .concat(advanced2025ITSolutionsExpansion as unknown[])
    .concat(advanced2025AIServicesExpansion as unknown[])
    // Our new 2025 innovative services
    .concat(innovativeMicroSaasExpansion2025 as unknown[])
    .concat(innovative2025ITSolutionsExpansion as unknown[])
    .concat(innovative2025AISolutionsExpansion as unknown[])
    // Our new 2025 advanced services V2
    // .concat(advancedMicroSaasExpansion2025V2 as unknown[])
    // .concat(advancedITInfrastructureExpansion2025V2 as unknown[])
    // .concat(advancedAIServicesExpansion2025V2 as unknown[])
    ;

  // Filter out services without required properties
  const validServices = all.filter(service => 
    service && 
    typeof service === 'object' && 
    'name' in service && 
    'description' in service &&
    'price' in service
  );

  // Group services by category
  const servicesByCategory = categories.reduce((acc, category) => {
    acc[category] = validServices.filter((service: any) => 
      service.category && service.category.toLowerCase().includes(category.toLowerCase().replace(/\s+/g, ''))
    );
    return acc;
  }, {} as Record<string, any[]>);

  // Get featured services (marked as popular)
  const featuredServices = validServices.filter((service: any) => service.popular).slice(0, 6);

  // Get latest services (assuming they have a launchDate)
  const latestServices = validServices
    .filter((service: any) => service.launchDate)
    .sort((a: any, b: any) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Services - Zion Tech Group"
        description="Discover our comprehensive suite of cutting-edge technology solutions including AI, Quantum Computing, Space Technology, and more."
        keywords={["AI services", "quantum computing", "space technology", "metaverse", "cybersecurity", "IT services", "micro SAAS"]}
      />
      
      <UltraFuturisticBackground>
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business and drive innovation
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  {validServices.length}+ Services
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  {categories.length} Categories
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300">
                  Latest 2036 Tech
                </span>
              </div>
            </div>

            {/* Featured Services */}
            {featuredServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service: any, index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant="quantum"
                      theme="quantum"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Latest Services */}
            {latestServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Services (2026)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {latestServices.map((service: any, index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant="ai"
                      theme="neon"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Services by Category */}
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Services by Category
              </h2>
              <div className="space-y-12">
                {categories.map((category) => {
                  const categoryServices = servicesByCategory[category];
                  if (!categoryServices || categoryServices.length === 0) return null;

                  return (
                    <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-3xl">
                          {category === 'AI & Data' && '🧠'}
                          {category === 'Developer Tools' && '⚙️'}
                          {category === 'Cloud & FinOps' && '☁️'}
                          {category === 'Observability' && '📊'}
                          {category === 'Quality & Monitoring' && '🔍'}
                          {category === 'Quantum Computing' && '⚛️'}
                          {category === 'Space Technology' && '🚀'}
                          {category === 'Metaverse' && '🌐'}
                          {category === 'Cybersecurity' && '🛡️'}
                          {category === 'Supply Chain' && '📦'}
                          {category === 'Financial Services' && '💰'}
                          {category === 'Healthcare' && '🏥'}
                          {category === 'Manufacturing' && '🏭'}
                          {category === 'Retail' && '🛍️'}
                          {category === 'Education' && '📚'}
                          {category === 'Government' && '🏛️'}
                          {category === 'Energy' && '⚡'}
                          {category === 'Transportation' && '🚗'}
                        </span>
                        {category}
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm text-gray-300">
                          {categoryServices.length} services
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryServices.slice(0, 6).map((service: any, index: number) => (
                          <UltraFuturisticServiceCard2026
                            key={`${service.id || service.name}-${index}`}
                            service={service}
                            variant="default"
                            theme="cyber"
                          />
                        ))}
                      </div>
                      {categoryServices.length > 6 && (
                        <div className="mt-6 text-center">
                          <Link
                            href={`/services/category/${toSlug(category)}`}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            View All {category} Services
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Our team of experts can help you build custom solutions tailored to your specific needs. 
                  Let's discuss how we can transform your business with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </UltraFuturisticBackground>

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business and drive innovation
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                {validServices.length}+ Services
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                {categories.length} Categories
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300">
                Latest 2036 Tech
              </span>
            </div>
          </div>

          {/* Featured Services */}
          {featuredServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service: any, index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant="quantum"
                    theme="quantum"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Latest Services */}
          {latestServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Services (2026)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestServices.map((service: any, index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant="ai"
                    theme="neon"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Services by Category */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Services by Category
            </h2>
            <div className="space-y-12">
              {categories.map((category) => {
                const categoryServices = servicesByCategory[category];
                if (!categoryServices || categoryServices.length === 0) return null;

                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">
                        {category === 'AI & Data' && '🧠'}
                        {category === 'Developer Tools' && '⚙️'}
                        {category === 'Cloud & FinOps' && '☁️'}
                        {category === 'Observability' && '📊'}
                        {category === 'Quality & Monitoring' && '🔍'}
                        {category === 'Quantum Computing' && '⚛️'}
                        {category === 'Space Technology' && '🚀'}
                        {category === 'Metaverse' && '🌐'}
                        {category === 'Cybersecurity' && '🛡️'}
                        {category === 'Supply Chain' && '📦'}
                        {category === 'Financial Services' && '💰'}
                        {category === 'Healthcare' && '🏥'}
                        {category === 'Manufacturing' && '🏭'}
                        {category === 'Retail' && '🛍️'}
                        {category === 'Education' && '🎓'}
                        {category === 'Government' && '🏛️'}
                        {category === 'Energy' && '⚡'}
                        {category === 'Transportation' && '🚗'}
                      </span>
                      {category}
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {categoryServices.length} services
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.slice(0, 6).map((service: any, index: number) => (
                        <UltraFuturisticServiceCard2026
                          key={`${service.id || service.name}-${index}`}
                          service={service}
                          variant="default"
                          theme="cyber"
                        />
                      ))}
                    </div>
                    {categoryServices.length > 6 && (
                      <div className="text-center mt-6">
                        <Link
                          href={`/services/category/${toSlug(category)}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                        >
                          View All {category} Services ({categoryServices.length})
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find exactly what you're looking for? Our team can create custom solutions tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-started"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}