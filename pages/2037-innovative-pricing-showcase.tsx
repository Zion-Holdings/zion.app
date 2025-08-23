import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Check, ArrowRight,
  Brain, Shield, Rocket, Globe, BarChart3, Target, Zap,
  TrendingUp, Users, Award, Clock, DollarSign, Zap as Lightning
} from 'lucide-react';

// Import our new 2037 service data
import { real2037Q1InnovativeAdditions } from '../data/real-2037-q1-innovative-additions';
import { real2037Q1ITInnovations } from '../data/real-2037-q1-it-innovations';
import { real2037Q1MicroSaasInnovations } from '../data/real-2037-q1-micro-saas-innovations';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const all2037Services = [
  ...real2037Q1InnovativeAdditions,
  ...real2037Q1ITInnovations,
  ...real2037Q1MicroSaasInnovations
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$59',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: ['Basic features', 'Email support', 'Standard integrations', 'Community forum'],
    color: 'from-blue-500 to-cyan-600',
    popular: false
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: ['Advanced features', 'Priority support', 'Custom integrations', 'Advanced analytics', 'API access'],
    color: 'from-purple-500 to-pink-600',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$599',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: ['All features', '24/7 dedicated support', 'Custom development', 'White-label options', 'SLA guarantee'],
    color: 'from-emerald-500 to-teal-600',
    popular: false
  }
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-5 h-5" />,
    color: 'from-gray-500 to-slate-500',
    count: all2037Services.length
  },
  {
    id: 'AI Governance & Compliance',
    name: 'AI Governance',
    icon: <Brain className="w-5 h-5" />,
    color: 'from-emerald-500 to-green-600',
    count: all2037Services.filter(s => s.category === 'AI Governance & Compliance').length
  },
  {
    id: 'Cybersecurity & Cryptography',
    name: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    color: 'from-red-500 to-orange-600',
    count: all2037Services.filter(s => s.category === 'Cybersecurity & Cryptography').length
  },
  {
    id: 'DevOps & Automation',
    name: 'DevOps',
    icon: <Rocket className="w-5 h-5" />,
    color: 'from-orange-500 to-red-600',
    count: all2037Services.filter(s => s.category === 'DevOps & Automation').length
  },
  {
    id: 'Edge Computing & IoT',
    name: 'Edge & IoT',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-600',
    count: all2037Services.filter(s => s.category === 'Edge Computing & IoT').length
  },
  {
    id: 'Content & Localization',
    name: 'Content',
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'from-teal-500 to-cyan-600',
    count: all2037Services.filter(s => s.category === 'Content & Localization').length
  },
  {
    id: 'E-commerce & Retail',
    name: 'E-commerce',
    icon: <Target className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-600',
    count: all2037Services.filter(s => s.category === 'E-commerce & Retail').length
  },
  {
    id: 'Marketing & Automation',
    name: 'Marketing',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-purple-500 to-violet-600',
    count: all2037Services.filter(s => s.category.includes('Marketing') || s.category.includes('Social Media')).length
  }
];

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
  >
    {/* Service Header */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-20`}>
          {service.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-400 text-sm">{service.category}</p>
        </div>
      </div>
      {service.popular && (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
          POPULAR
        </div>
      )}
    </div>

    {/* Tagline */}
    <p className="text-gray-300 mb-4 leading-relaxed">{service.tagline}</p>

    {/* Pricing */}
    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4 mb-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-1">
          {service.price}
          <span className="text-lg text-gray-400 font-normal">{service.period}</span>
        </div>
        <div className="text-sm text-gray-400">
          {service.trialDays} days free trial • Setup: {service.setupTime}
        </div>
      </div>
    </div>

    {/* Key Features */}
    <div className="space-y-2 mb-4">
      <div className="text-sm font-medium text-gray-300 mb-2">Key Features:</div>
      {service.features.slice(0, 4).map((feature: string, idx: number) => (
        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span>{feature}</span>
        </div>
      ))}
    </div>

    {/* Market Info */}
    <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div>
          <div className="text-gray-500">Market Size</div>
          <div className="text-white font-medium">{service.marketSize}</div>
        </div>
        <div>
          <div className="text-gray-500">Growth Rate</div>
          <div className="text-white font-medium">{service.growthRate}</div>
        </div>
      </div>
    </div>

    {/* ROI & Benefits */}
    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
      <div className="text-sm text-green-400 font-medium mb-1">Key Benefits</div>
      <div className="text-xs text-gray-300">{service.roi}</div>
    </div>

    {/* CTA */}
    <div className="flex space-x-2">
      <a
        href={service.link}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm"
      >
        Learn More
      </a>
      <a
        href={`mailto:${contact.email}?subject=Pricing Inquiry for ${service.name}`}
        className="bg-gray-700 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm"
      >
        Get Quote
      </a>
    </div>
  </motion.div>
);

const PricingTierCard: React.FC<{ tier: any; index: number }> = ({ tier, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 ${
      tier.popular 
        ? 'border-purple-500/50 shadow-purple-500/20' 
        : 'border-gray-700/50 hover:border-gray-600/50'
    }`}
  >
    {tier.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
      </div>
    )}

    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
      <p className="text-gray-400">{tier.description}</p>
    </div>

    <div className="text-center mb-8">
      <div className="text-4xl font-bold text-white mb-2">
        {tier.price}
        <span className="text-xl text-gray-400 font-normal">{tier.period}</span>
      </div>
    </div>

    <div className="space-y-4 mb-8">
      {tier.features.map((feature: string, idx: number) => (
        <div key={idx} className="flex items-center space-x-3">
          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
          <span className="text-gray-300">{feature}</span>
        </div>
      ))}
    </div>

    <a
      href={`mailto:${contact.email}?subject=${tier.name} Plan Inquiry`}
      className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
        tier.popular
          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
          : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
      }`}
    >
      Get Started
    </a>
  </motion.div>
);

const ContactSection: React.FC = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Contact us today to discuss your specific needs and get a customized quote for our innovative 2037 services.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
          <p className="text-gray-400">Most services can be deployed in 1-7 days with our expert assistance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
          <p className="text-gray-400">24/7 technical support and ongoing optimization services</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
          <p className="text-gray-400">Track record of delivering measurable business impact and ROI</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <a
          href={`mailto:${contact.email}?subject=2037 Services Pricing Consultation`}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
        >
          <span>Get Your Custom Quote</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

const PricingShowcase2037: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = all2037Services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="2037 Innovative Services Pricing | Zion Tech Group"
        description="Explore competitive pricing for our cutting-edge 2037 services including AI governance, quantum security, edge computing, and innovative micro SAAS solutions. Get transparent pricing and value-driven solutions."
        keywords={["2037 services pricing", "AI governance pricing", "quantum security pricing", "edge computing pricing", "micro SAAS pricing", "Zion Tech Group pricing"]}
        canonical="https://ziontechgroup.com/2037-innovative-pricing-showcase"
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Competitive Pricing 2037</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2037 Pricing Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transparent, competitive pricing for our comprehensive portfolio of innovative AI, IT, and micro SAAS solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#pricing">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  <span className="flex items-center gap-2">
                    View Pricing
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </a>
              <a href={`mailto:${contact.email}?subject=2037 Services Pricing Consultation`}>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Get Custom Quote
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="py-20 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingTierCard key={tier.name} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for each of our {all2037Services.length} innovative 2037 services with transparent feature breakdowns
            </p>
          </motion.div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center">
              <div className="bg-gray-800/50 rounded-lg p-1 border border-gray-700">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'md:grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};

export default PricingShowcase2037;