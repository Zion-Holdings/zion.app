import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, Users, TrendingUp, Zap, Globe, Shield,
  Brain, Target, Heart, Building, Rocket, Atom, Palette,
  GraduationCap, Truck, Phone, Mail, MapPin, ArrowRight
} from 'lucide-react';

// Import our new advanced service data
import { advancedCybersecurityMicroSaasServices } from '../data/2025-advanced-cybersecurity-micro-saas';
import { advancedAIMLMicroSaasServices } from '../data/2025-advanced-ai-ml-micro-saas';
import { fintechBlockchainMicroSaasServices } from '../data/2025-fintech-blockchain-micro-saas';
import { healthcareBiotechMicroSaasServices } from '../data/2025-healthcare-biotech-micro-saas';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Service categories with icons and colors
const serviceCategories = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Threat Intelligence',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-orange-600',
    services: advancedCybersecurityMicroSaasServices
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-600',
    services: advancedAIMLMicroSaasServices
  },
  {
    id: 'fintech-blockchain',
    name: 'Fintech & Blockchain',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    services: fintechBlockchainMicroSaasServices
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-600',
    services: healthcareBiotechMicroSaasServices
  }
];

export default function AdvancedPricingShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const allServices = [
    ...advancedCybersecurityMicroSaasServices,
    ...advancedAIMLMicroSaasServices,
    ...fintechBlockchainMicroSaasServices,
    ...healthcareBiotechMicroSaasServices
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

  const getPrice = (service: any) => {
    if (billingCycle === 'yearly') {
      return service.price?.yearly || service.price?.monthly * 12;
    }
    return service.price?.monthly || 0;
  };

  const getSavings = (service: any) => {
    if (billingCycle === 'yearly' && service.price?.yearly && service.price?.monthly) {
      const monthlyTotal = service.price.monthly * 12;
      const yearlyPrice = service.price.yearly;
      return Math.round(((monthlyTotal - yearlyPrice) / monthlyTotal) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Advanced Micro SAAS Pricing | Zion Tech Group"
        description="Comprehensive pricing for our advanced micro SAAS services including cybersecurity, AI/ML, fintech, blockchain, healthcare, and biotech solutions. Transparent pricing with proven ROI."
        keywords={["micro SAAS pricing", "cybersecurity pricing", "AI services pricing", "blockchain pricing", "fintech pricing", "healthcare pricing", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2025 Advanced Micro SAAS Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transparent pricing for cutting-edge, real, and innovative micro SAAS solutions. 
              Choose the perfect plan for your business needs with proven ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">{allServices.length}+</div>
                <div className="text-sm">Advanced Services</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">200-1000%</div>
                <div className="text-sm">Typical ROI</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
              <a 
                href={contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Cycle Toggle */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Billing Cycle</h3>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Save up to 20%
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Services ({allServices.length})
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name} ({category.services.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Please select a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Service Header */}
                    <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        {service.popular && (
                          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-blue-100 text-sm">{service.tagline}</p>
                    </div>

                    {/* Pricing */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold text-gray-900">
                            ${getPrice(service).toLocaleString()}
                          </span>
                          <span className="text-gray-600">
                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && getSavings(service) > 0 && (
                          <div className="text-green-600 font-medium">
                            Save {getSavings(service)}% with yearly billing
                          </div>
                        )}
                        <div className="text-sm text-gray-500 mt-2">
                          {service.price?.trialDays} day free trial • {service.price?.setupTime} setup
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 5).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 5 && (
                            <div className="text-sm text-gray-500 text-center">
                              +{service.features.length - 5} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-semibold">{service.rating}</span>
                          </div>
                          <div className="text-xs text-gray-500">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="font-semibold">{service.customers.toLocaleString()}+</span>
                          </div>
                          <div className="text-xs text-gray-500">Customers</div>
                        </div>
                      </div>

                      {/* ROI */}
                      <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-blue-900 mb-1">Expected ROI</div>
                          <div className="text-lg font-bold text-blue-700">{service.roi}</div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Pricing Inquiry for ${service.name}`}
                          className="w-full bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Get Custom Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver real, innovative, and market-ready micro SAAS solutions that transform businesses and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Implementation</h3>
              <p className="text-gray-600">All services are production-ready with proven track records and real customer success stories</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">Our customers typically see 200-1000% ROI through improved efficiency and reduced costs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Support</h3>
              <p className="text-gray-600">24/7 expert support with dedicated specialists for each service category</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, ISO 27001, and industry-specific compliance for maximum security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts help you choose the perfect micro SAAS solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}?subject=Micro SAAS Pricing Inquiry`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-medium mb-2">Visit our headquarters:</p>
            <p className="text-sm">{contactInfo.address}</p>
            <a 
              href={contactInfo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white underline mt-2 inline-block"
            >
              {contactInfo.website}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}