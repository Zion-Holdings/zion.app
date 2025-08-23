import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, Star, Zap, Shield, Brain, Cpu, Building,
  ArrowRight, DollarSign, TrendingUp, Users, Globe
} from 'lucide-react';

// Import our new innovative services
import { innovativeMicroSaasServices2025V3 } from '../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITInfrastructureServices2025V3 } from '../data/2025-innovative-it-infrastructure-expansion-v3';
import { innovativeAIServices2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';

const ComprehensivePricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasServices2025V3,
    ...innovativeITInfrastructureServices2025V3,
    ...innovativeAIServices2025V3
  ];

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allInnovativeServices;
    return allInnovativeServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allInnovativeServices.length },
    { id: 'micro saas', name: 'Micro SAAS', icon: Building, count: innovativeMicroSaasServices2025V3.length },
    { id: 'it infrastructure', name: 'IT Infrastructure', icon: Cpu, count: innovativeITInfrastructureServices2025V3.length },
    { id: 'ai services', name: 'AI Services', icon: Brain, count: innovativeAIServices2025V3.length },
    { id: 'quantum', name: 'Quantum Technology', icon: Star, count: allInnovativeServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: allInnovativeServices.filter(s => s.category.includes('Security') || s.category.includes('Compliance')).length }
  ];

  const stats = [
    { number: `${allInnovativeServices.length}+`, label: "Innovative Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI-Powered Support", icon: Brain },
    { number: "$50B+", label: "Market Opportunity", icon: DollarSign }
  ];

  const PricingCard = ({ service }: { service: any }) => {
    const getAnnualDiscount = (monthlyPrice: string) => {
      const price = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
      const annualPrice = price * 12 * 0.8; // 20% discount
      return `$${Math.round(annualPrice)}/year`;
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
      >
        <div className="p-6">
          {/* Service Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              {service.type === 'Micro SAAS' ? <Building className="w-8 h-8 text-white" /> :
               service.type === 'IT Infrastructure' ? <Cpu className="w-8 h-8 text-white" /> :
               <Brain className="w-8 h-8 text-white" />}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.tagline}</p>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${
              service.type === 'Micro SAAS' ? 'bg-blue-100 text-blue-800' :
              service.type === 'IT Infrastructure' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {service.type}
            </span>
          </div>

          {/* Pricing Tiers */}
          <div className="space-y-4 mb-6">
            {/* Starter Plan */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Starter</h4>
                <span className="text-sm text-gray-500">Perfect for small teams</span>
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-blue-600">
                  {billingCycle === 'monthly' ? service.pricing.starter : getAnnualDiscount(service.pricing.starter)}
                </span>
                {billingCycle === 'annual' && (
                  <span className="ml-2 text-sm text-green-600 font-medium">Save 20%</span>
                )}
              </div>
              <div className="text-sm text-gray-600 mb-3">
                {service.features.slice(0, 3).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Plan */}
            <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Professional</h4>
                <span className="text-sm text-blue-600 font-medium">Most Popular</span>
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-blue-600">
                  {billingCycle === 'monthly' ? service.pricing.professional : getAnnualDiscount(service.pricing.professional)}
                </span>
                {billingCycle === 'annual' && (
                  <span className="ml-2 text-sm text-green-600 font-medium">Save 20%</span>
                )}
              </div>
              <div className="text-sm text-gray-600 mb-3">
                {service.features.slice(0, 5).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Enterprise</h4>
                <span className="text-sm text-gray-500">For large organizations</span>
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-blue-600">
                  {billingCycle === 'monthly' ? service.pricing.enterprise : getAnnualDiscount(service.pricing.enterprise)}
                </span>
                {billingCycle === 'annual' && (
                  <span className="ml-2 text-sm text-green-600 font-medium">Save 20%</span>
                )}
              </div>
              <div className="text-sm text-gray-600 mb-3">
                {service.features.slice(0, 7).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
            <div className="grid grid-cols-1 gap-2">
              {service.benefits.slice(0, 4).map((benefit: string, index: number) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Market Info */}
          <div className="mb-6 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Market Size:</span>
              <span className="font-semibold text-gray-900">{service.marketSize}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-600">Target Audience:</span>
              <span className="font-semibold text-gray-900 text-right">{service.targetAudience.split(',')[0]}...</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={service.slug}
              className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">Contact:</p>
              <p className="text-sm font-medium text-gray-900">{service.contact}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEO
        title="2025 Comprehensive Pricing Showcase | Zion Tech Group"
        description="Explore our comprehensive pricing for innovative micro SAAS, IT infrastructure, and AI services. Transparent pricing with flexible plans for every business size."
        keywords={["pricing", "micro SAAS pricing", "IT infrastructure pricing", "AI services pricing", "2025", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2025 Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Pricing Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary micro SAAS, IT infrastructure, and AI services. 
              Choose the plan that fits your business needs and budget.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-blue-200'}`}>
                Annual <span className="text-sm text-green-300">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transparent Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our innovative services are priced competitively to provide maximum value. 
                Choose from flexible plans that scale with your business growth.
              </p>
            </motion.div>
          </div>

          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                  <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredServices().map((service, index) => (
                  <PricingCard key={service.id} service={service} />
                ))}
              </div>
            </AnimatePresence>
          </div>

          {/* Pricing Benefits */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Pricing?</h3>
                <p className="text-xl text-gray-600">Transparent, competitive, and designed for your success</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Fees</h4>
                  <p className="text-gray-600">Transparent pricing with no surprise charges or hidden costs.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scaling</h4>
                  <p className="text-gray-600">Start small and scale up as your business grows with flexible plans.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Value</h4>
                  <p className="text-gray-600">Get enterprise-grade features at competitive prices with maximum ROI.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our team is ready to help you choose the perfect plan and get you started with our innovative services. 
                Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-blue-100">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingShowcase;