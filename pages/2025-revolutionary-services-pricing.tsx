import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Star, Globe, Lock, Cloud, Database,
  DollarSign, Users, Crown, Sparkles
} from 'lucide-react';

// Import all our revolutionary services
import { advancedAIAutonomousEcosystemServices2025 } from '../data/2025-advanced-ai-autonomous-ecosystem-services';
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations';
import { revolutionaryMicroSaasInnovations2025 } from '../data/2025-revolutionary-micro-saas-innovations';
import { emergingTechnologyBreakthroughs2025 } from '../data/2025-emerging-technology-breakthroughs';
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions';

// Combine all services
const allRevolutionaryServices = [
  ...advancedAIAutonomousEcosystemServices2025,
  ...cuttingEdgeITInfrastructureInnovations2025,
  ...revolutionaryMicroSaasInnovations2025,
  ...emergingTechnologyBreakthroughs2025,
  ...specializedEnterpriseSolutions2025
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    features: [
      'Basic service access',
      'Standard support',
      'Core features',
      'Community forum access',
      'Basic analytics',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500',
    features: [
      'All Starter features',
      'Advanced features',
      'Priority support',
      'Team collaboration',
      'Advanced analytics',
      'Phone & email support',
      'Custom integrations',
      'Training sessions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    icon: <Crown className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    features: [
      'All Professional features',
      'Custom development',
      'Dedicated support manager',
      'SLA guarantees',
      'Custom integrations',
      'On-site training',
      'White-label options',
      'Custom AI model training',
      '24/7 priority support'
    ],
    popular: false
  },
  {
    name: 'Custom',
    description: 'Tailored solutions for unique requirements',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Everything in Enterprise',
      'Custom architecture',
      'Dedicated development team',
      'Custom AI models',
      'Exclusive features',
      'Source code access',
      'Custom deployment',
      'Strategic partnership'
    ],
    popular: false
  }
];

const ServicePricingCard = ({ service, tier }: { service: any; tier: string }) => {
  const getPricing = (tier: string) => {
    switch (tier) {
      case 'Starter':
        return service.pricing.starter;
      case 'Professional':
        return service.pricing.professional || service.pricing.starter;
      case 'Enterprise':
        return service.pricing.enterprise || service.pricing.professional || service.pricing.starter;
      case 'Custom':
        return service.pricing.custom || 'Contact for pricing';
      default:
        return service.pricing.starter;
    }
  };

  const getFeatures = (tier: string) => {
    const baseFeatures = service.features.slice(0, 4);
    const advancedFeatures = service.features.slice(4, 8);
    const enterpriseFeatures = service.features.slice(8, 12);

    switch (tier) {
      case 'Starter':
        return baseFeatures;
      case 'Professional':
        return [...baseFeatures, ...advancedFeatures];
      case 'Enterprise':
        return [...baseFeatures, ...advancedFeatures, ...enterpriseFeatures];
      case 'Custom':
        return service.features;
      default:
        return baseFeatures;
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
        
        <div className="text-3xl font-bold text-cyan-400 mb-2">
          {getPricing(tier)}
        </div>
        <div className="text-sm text-gray-400">per month</div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
        <ul className="space-y-2">
          {getFeatures(tier).map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-xs text-gray-300">
              <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-3 bg-white/5 rounded-lg">
        <div className="text-xs text-gray-400 mb-1">Market Size</div>
        <div className="text-sm font-semibold text-green-400">{service.marketSize}</div>
      </div>

      <button
        onClick={() => window.location.href = service.slug}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

const PricingTierCard = ({ tier, isSelected, onSelect }: { tier: any; isSelected: boolean; onSelect: () => void }) => {
  return (
    <motion.div
      className={`relative cursor-pointer transition-all duration-300 ${
        isSelected ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={onSelect}
      whileHover={{ y: -4 }}
    >
      <div
        className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
          isSelected
            ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
            : 'border-white/10 bg-gradient-to-br from-white/5 to-white/10'
        }`}
      >
        {tier.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}

        <div className="text-center mb-4">
          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tier.color} rounded-xl mb-3`}>
            {tier.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-gray-300 text-sm">{tier.description}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {tier.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <Check className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className={`text-center p-3 rounded-lg transition-all duration-300 ${
          isSelected ? 'bg-cyan-500/20' : 'bg-white/5'
        }`}>
          <div className="text-xs text-gray-400 mb-1">Select Tier</div>
          <div className="text-sm font-semibold text-cyan-400">
            {isSelected ? 'Selected' : 'Click to Select'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function RevolutionaryServicesPricing() {
  const [selectedTier, setSelectedTier] = useState('Professional');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', count: allRevolutionaryServices.length },
    { id: 'ai-autonomous-ecosystem', name: 'AI Autonomous Ecosystem', count: advancedAIAutonomousEcosystemServices2025.length },
    { id: 'it-infrastructure-innovations', name: 'IT Infrastructure', count: cuttingEdgeITInfrastructureInnovations2025.length },
    { id: 'revolutionary-micro-saas', name: 'Micro SAAS', count: revolutionaryMicroSaasInnovations2025.length },
    { id: 'emerging-technology', name: 'Emerging Tech', count: emergingTechnologyBreakthroughs2025.length },
    { id: 'specialized-enterprise', name: 'Enterprise', count: specializedEnterpriseSolutions2025.length }
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    
    switch (selectedCategory) {
      case 'ai-autonomous-ecosystem':
        return advancedAIAutonomousEcosystemServices2025;
      case 'it-infrastructure-innovations':
        return cuttingEdgeITInfrastructureInnovations2025;
      case 'revolutionary-micro-saas':
        return revolutionaryMicroSaasInnovations2025;
      case 'emerging-technology':
        return emergingTechnologyBreakthroughs2025;
      case 'specialized-enterprise':
        return specializedEnterpriseSolutions2025;
      default:
        return allRevolutionaryServices;
    }
  };

  const filteredServices = getFilteredServices();

  return (
    <>
      <SEO
        title="2025 Revolutionary Services Pricing | Zion Tech Group"
        description="Comprehensive pricing for our revolutionary micro SAAS services, AI autonomous ecosystem, quantum computing solutions, and cutting-edge IT infrastructure innovations."
        keywords={["revolutionary services pricing", "AI autonomous ecosystem pricing", "quantum computing pricing", "micro SAAS pricing", "IT infrastructure pricing", "Zion Tech Group"]}
        ogImage="/og-revolutionary-pricing.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
                <br />
                <span className="text-white">Pricing & Plans</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All our revolutionary services 
                come with flexible pricing tiers designed to scale with your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the pricing tier that best fits your business requirements and scale up as you grow
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pricingTiers.map((tier, index) => (
                <PricingTierCard
                  key={tier.name}
                  tier={tier}
                  isSelected={selectedTier === tier.name}
                  onSelect={() => setSelectedTier(tier.name)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Filter by Category</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name} Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed pricing for {selectedTier} tier across all {filteredServices.length} services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <ServicePricingCard key={service.id} service={service} tier={selectedTier} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our sales team to discuss custom pricing and implementation options
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Sales Team
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>

              <div className="mt-8 text-center">
                <div className="text-gray-400 mb-2">Contact Information</div>
                <div className="text-cyan-400 font-semibold">kleber@ziontechgroup.com</div>
                <div className="text-cyan-400 font-semibold">+1 302 464 0950</div>
                <div className="text-gray-300 text-sm">364 E Main St STE 1008 Middletown DE 19709</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}