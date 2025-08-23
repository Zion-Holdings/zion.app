import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu,
  ArrowRight, Check, Star, TrendingUp, Users, Zap,
  Phone, Mail, MapPin, ExternalLink, ChevronDown, ChevronUp
} from 'lucide-react';

// Import our new innovative services
import { innovative2037Services } from '../data/innovative-2037-services';
import { advanced2038Services } from '../data/advanced-2038-services';
import { revolutionary2039Services } from '../data/revolutionary-2039-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function ComprehensivePricing2037() {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    ...innovative2037Services,
    ...advanced2038Services,
    ...revolutionary2039Services
  ];

  const categories = [
    { id: 'all', name: 'All Services', color: 'from-gray-500 to-slate-500' },
    { id: 'ai-emotional', name: 'AI & Emotional Intelligence', color: 'from-pink-500 to-purple-600' },
    { id: 'quantum-security', name: 'Quantum Security', color: 'from-indigo-600 to-purple-700' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', color: 'from-green-600 to-teal-700' },
    { id: 'metaverse-business', name: 'Metaverse Business', color: 'from-blue-500 to-cyan-600' },
    { id: 'neural-quantum', name: 'Neural & Quantum', color: 'from-purple-600 to-pink-700' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        switch (selectedCategory) {
          case 'ai-emotional':
            return service.category.includes('AI') && (service.category.includes('Personal Development') || service.category.includes('Consciousness'));
          case 'quantum-security':
            return service.category.includes('Quantum') && (service.category.includes('Security') || service.category.includes('Communications'));
          case 'autonomous-systems':
            return service.category.includes('AI') && (service.category.includes('Operations') || service.category.includes('Strategy'));
          case 'metaverse-business':
            return service.category.includes('Metaverse') || service.category.includes('Digital Reality');
          case 'neural-quantum':
            return service.category.includes('Neural') || (service.category.includes('Quantum') && service.category.includes('AI'));
          default:
            return true;
        }
      });

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Personal Development':
      case 'AI & Consciousness':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity & Quantum':
      case 'Quantum & Communications':
        return <Shield className="w-6 h-6" />;
      case 'AI & Operations':
      case 'AI & Strategy':
        return <Cpu className="w-6 h-6" />;
      case 'Metaverse & Digital Reality':
        return <Globe className="w-6 h-6" />;
      case 'AI & Legal Tech':
        return <Target className="w-6 h-6" />;
      case 'Quantum & Finance':
        return <TrendingUp className="w-6 h-6" />;
      case 'AI & Transportation':
        return <Rocket className="w-6 h-6" />;
      case 'Quantum & IoT':
        return <Atom className="w-6 h-6" />;
      case 'AI & Creative':
      case 'AI & Content':
        return <Brain className="w-6 h-6" />;
      case 'Quantum & Space Tech':
      case 'Quantum & Space':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing 2037 - Zion Tech Group"
        description="Explore our complete 2037 services pricing with AI consciousness, quantum computing, autonomous systems, and cutting-edge innovations. Transparent pricing for revolutionary technology."
        keywords={[
          "pricing", "AI services", "quantum computing", "autonomous systems", 
          "metaverse", "consciousness", "2037", "Zion Tech Group"
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Pricing
              </span>
              <br />
              <span className="text-white">2037 Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary portfolio of AI consciousness, 
              quantum computing, autonomous systems, and cutting-edge innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Download Price List
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                      <p className="text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-gray-300 mb-6 text-lg">{service.tagline}</p>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 rounded-xl mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-300 text-xl">{service.period}</span>
                  </div>
                  <p className="text-purple-200 text-sm">
                    {service.trialDays}-day free trial • Setup in {service.setupTime}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Information */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-400 text-sm">Market Size</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{service.marketSize}</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400 text-sm">Customers</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{service.customers}+</p>
                  </div>
                </div>

                {/* ROI Impact */}
                <div className="bg-gradient-to-r from-green-900 to-emerald-900 p-4 rounded-lg mb-6">
                  <h4 className="text-white font-semibold mb-2">ROI Impact</h4>
                  <p className="text-green-300">{service.roi}</p>
                </div>

                {/* Expandable Details */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleServiceExpansion(service.id)}
                    className="w-full flex items-center justify-between p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-white font-semibold">View Full Details</span>
                    {expandedServices.has(service.id) ? (
                      <ChevronUp className="w-5 h-5 text-purple-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-400" />
                    )}
                  </button>
                  
                  {expandedServices.has(service.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-slate-800 rounded-lg"
                    >
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-white font-semibold mb-2">Technology Stack</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.technology.map((tech, idx) => (
                              <span key={idx} className="bg-purple-900 text-purple-200 px-2 py-1 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-2">Integrations</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.integrations.map((integration, idx) => (
                              <span key={idx} className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs">
                                {integration}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-2">Use Cases</h5>
                          <ul className="space-y-1">
                            {service.useCases.map((useCase, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-2">Competitors</h5>
                          <p className="text-gray-300 text-sm">{service.competitors.join(', ')}</p>
                        </div>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-2">Implementation Details</h5>
                          <p className="text-gray-300 text-sm">{service.implementationDetails}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-600 transition-all duration-300"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pricing Summary
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Our comprehensive 2037 services portfolio offers competitive pricing across all categories, 
              with transparent costs and clear value propositions for every business need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Entry Level</h3>
                <p className="text-gray-300 mb-4">Perfect for startups and small businesses</p>
                <p className="text-3xl font-bold text-white">$89 - $199</p>
                <p className="text-gray-400 text-sm">per month</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <p className="text-gray-300 mb-4">Ideal for growing companies and teams</p>
                <p className="text-3xl font-bold text-white">$249 - $499</p>
                <p className="text-gray-400 text-sm">per month</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <p className="text-gray-300 mb-4">For large organizations and enterprises</p>
                <p className="text-3xl font-bold text-white">$599 - $999</p>
                <p className="text-gray-400 text-sm">per month</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team to discuss your specific needs and get a customized quote 
              for our revolutionary 2037 services portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Sales Users
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading the future of technology with innovative AI, quantum computing, 
                and autonomous systems solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{contactInfo.mobile}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>AI & Consciousness</p>
                <p>Quantum Computing</p>
                <p>Autonomous Systems</p>
                <p>Metaverse Solutions</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}