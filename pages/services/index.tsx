import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import SmartSidebar from '../../components/SmartSidebar';
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
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
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
import { advancedAIServicesExpansion2025 } from '../../data/2025-advanced-ai-services-expansion';

export default function ServicesPage() {
  const { navigation, isLoading, error } = useNavigation();

// Import our new 2025 innovative services V3
import { innovativeMicroSaasExpansionV32025 } from '../../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITServicesExpansion2025V3 } from '../../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../../data/2025-innovative-ai-services-expansion-v3';

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Error Loading Services</h1>
          <p className="text-white/70">{error}</p>
        </div>
      </div>
    );
  }

  if (!navigation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">No Services Available</h1>
          <p className="text-white/70">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="flex">
        <SmartSidebar pageType="services" className="w-64" />
        
        <div className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">AI Services</h1>
            <p className="text-xl text-white/70 mb-6">
              Discover cutting-edge AI services and solutions powered by autonomous AI agents
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{navigation.services.length}</div>
                <div className="text-white/60 text-sm">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{navigation.categories.length}</div>
                <div className="text-white/60 text-sm">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {navigation.services.filter(s => s.status === 'active').length}
                </div>
                <div className="text-white/60 text-sm">Active Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {navigation.services.filter(s => s.status === 'beta').length}
                </div>
                <div className="text-white/60 text-sm">Beta Services</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            {navigation.categories.map(category => {
              const categoryServices = navigation.services.filter(s => s.category === category.name);
              
              return (
                <div key={category.id} className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                      <span>{category.icon}</span>
                      {category.name}
                    </h2>
                    <p className="text-white/70 text-lg">{category.description}</p>
                    <div className="mt-2 text-white/50 text-sm">
                      {categoryServices.length} service{categoryServices.length !== 1 ? 's' : ''} available
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map(service => (
                      <div 
                        key={service.id} 
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{service.label}</h3>
                            <p className="text-white/70 text-sm mb-3">{service.description}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                            service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Technology Stack:</div>
                          <div className="flex flex-wrap gap-2">
                            {service.technologyStack?.map(tech => (
                              <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Key Features:</div>
                          <ul className="text-white/80 text-sm space-y-1">
                            <li className="flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              {service.description?.split(' ').slice(0, 4).join(' ')}...
                            </li>
                            <li className="flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              Advanced AI capabilities
                            </li>
                            <li className="flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              Enterprise ready
                            </li>
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Pricing:</div>
                          <div className="text-white font-medium">{service.pricing}</div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-white/60 text-sm mb-2">Performance:</div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center">
                              <div className="text-white font-medium">{service.performance?.uptime}</div>
                              <div className="text-white/60">Uptime</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-medium">{service.performance?.response}</div>
                              <div className="text-white/60">Response</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-medium">{service.performance?.users}</div>
                              <div className="text-white/60">Users</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Link 
                            href={service.href}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                          >
                            🚀 Demo
                          </Link>
                          <Link 
                            href={service.href.replace('/demo/', '/docs/')}
                            className="flex-1 bg-white/20 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                          >
                            📚 Docs
                          </Link>
                          <a 
                            href={`https://github.com/ai-factory/${service.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white/20 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                          >
                            💻 Code
                          </a>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/20 text-center">
                          <div className="text-white/50 text-xs">
                            Last updated: {service.lastUpdated}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
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

// Transform services data to match the expected Service interface
const transformServiceData = (service: any): Service => {
  // Extract features from description or create default features
  const features = service.features || [
    service.description?.split('.')[0] || 'Advanced Technology',
    'Enterprise Ready',
    '24/7 Support'
  ].slice(0, 3);

  // Generate icon based on category
  const getIcon = (category: string): string => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('ai') || categoryLower.includes('machine learning')) return '🧠';
    if (categoryLower.includes('quantum')) return '⚛️';
    if (categoryLower.includes('space')) return '🚀';
    if (categoryLower.includes('cyber') || categoryLower.includes('security')) return '🛡️';
    if (categoryLower.includes('cloud')) return '☁️';
    if (categoryLower.includes('blockchain')) return '🔗';
    if (categoryLower.includes('metaverse')) return '🌐';
    if (categoryLower.includes('supply chain')) return '📦';
    if (categoryLower.includes('financial') || categoryLower.includes('trading')) return '💰';
    if (categoryLower.includes('healthcare')) return '🏥';
    if (categoryLower.includes('manufacturing')) return '🏭';
    if (categoryLower.includes('retail')) return '🛍️';
    if (categoryLower.includes('education')) return '📚';
    if (categoryLower.includes('government')) return '🏛️';
    if (categoryLower.includes('energy')) return '⚡';
    if (categoryLower.includes('transportation')) return '🚗';
    return '⚙️';
  };

  // Create tagline from description
  const tagline = service.tagline || service.description?.split('.')[0] || 'Advanced Technology Solution';

  return {
    id: service.id || service.name?.toLowerCase().replace(/\s+/g, '-') || 'service',
    name: service.name || 'Unnamed Service',
    tagline,
    description: service.description || 'Advanced technology solution',
    price: service.price || '$999',
    period: service.period || 'month',
    features,
    popular: service.popular || false,
    category: service.category || 'Technology',
    icon: service.icon || getIcon(service.category || 'Technology'),
    launchDate: service.launchDate
  };
};

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      innovative2025AIServices as unknown[],
      innovative2025ITInfrastructureServices as unknown[],
      innovative2025MicroSaasBatch2 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realQ4Services2025 as unknown[],
      real2025Q4Additions as unknown[],
      real2025Q4AugmentedBatch as unknown[],
      real2026Q1Additions as unknown[],
      added2026Q2Services as unknown[],
      real2026Q3Additions as unknown[],
      real2026Q4Additions as unknown[],
      real2026Q4NewServices as unknown[],
      real2027Q1Additions as unknown[],
      real2027Q2Additions as unknown[],
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
    // Our new 2025 innovative services V3
    .concat(innovativeMicroSaasExpansionV32025 as unknown[])
    .concat(innovativeITServicesExpansion2025V3 as unknown[])
    .concat(innovativeAIServicesExpansion2025V3 as unknown[])
    ;

  const anchorMap: Record<string, string> = {
    'AI & Data': 'ai',
    'Developer Tools': 'developer-tools',
    'Cloud & FinOps': 'cloud',
    'Observability': 'observability',
    'Quality & Monitoring': 'quality',
  };

  const [shownCounts, setShownCounts] = React.useState<Record<string, number>>(() => Object.fromEntries(categories.map(c => [c, 12])));
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter out services without required properties and normalize pricing
  const validServices = all.filter(service => 
    service && 
    typeof service === 'object' && 
    'name' in service && 
    'description' in service &&
    ('price' in service || 'pricing' in service)
  ).map((service: ServiceItem) => {
    // Normalize pricing structure
    if (service.pricing && typeof service.pricing === 'object') {
      // If pricing is an object, use the starter price or first available price
      if (service.pricing.starter && service.pricing.starter.price) {
        return {
          ...service,
          price: `$${service.pricing.starter.price}`,
          period: service.pricing.starter.period || 'month'
        };
      } else if (service.pricing.monthly) {
        return {
          ...service,
          price: `$${service.pricing.monthly}`,
          period: 'month'
        };
      } else {
        // Fallback to first available pricing tier
        const firstTier = Object.values(service.pricing)[0] as { price: string; period?: string };
        if (firstTier && firstTier.price) {
          return {
            ...service,
            price: `$${firstTier.price}`,
            period: firstTier.period || 'month'
          };
        }
      }
    }
    return service;
  }).filter((service: ServiceItem) => service.price && typeof service.price === 'string');

  // Group services by category
  const servicesByCategory = categories.reduce((acc, category) => {
    acc[category] = validServices.filter((service: ServiceItem) => 
      service.category && service.category.toLowerCase().includes(category.toLowerCase().replace(/\s+/g, ''))
    );
    return acc;
  }, {} as Record<string, ServiceItem[]>);

  // Get featured services (marked as popular)
  const featuredServices = validServices.filter((service: ServiceItem) => service.popular).slice(0, 6);

  // Get latest services (assuming they have a launchDate)
  const latestServices = validServices
    .filter((service: ServiceItem) => service.launchDate)
    .sort((a: ServiceItem, b: ServiceItem) => new Date(b.launchDate as string).getTime() - new Date(a.launchDate as string).getTime())
    .slice(0, 6);

  return (
    <>
      <Head><title>services/index - Zion App</title><meta name="description" content="services/index page" /></Head><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">services/index</h1><p className="text-lg mb-4">This page is under construction.</p><div className="mt-4"><a href="/" className="text-blue-600 hover:underline">;
            ← Back to Home</a></div></div></>;
  );
