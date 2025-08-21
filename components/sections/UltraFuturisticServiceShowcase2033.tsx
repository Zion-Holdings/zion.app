import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Cpu, Rocket, Target, Microscope,
  ArrowRight, Star, Zap, Shield, Crown, Gem,
  Infinity, TrendingUp, Users, Award, CheckCircle,
  Phone, Mail, MapPin, Globe, ExternalLink
} from 'lucide-react';
import { cuttingEdge2033Services } from '../../data/2033-cutting-edge-innovations';
import { innovativeITServices2033 } from '../../data/2033-innovative-it-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-consciousness',
    title: '🧠 Revolutionary AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and emotional intelligence platforms',
    services: cuttingEdge2033Services.filter(s => s.category === 'AI & Consciousness'),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing, DNA computing, and beyond',
    services: cuttingEdge2033Services.filter(s => s.category === 'Quantum & Biotech'),
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous operations and zero-trust security',
    services: innovativeITServices2033.filter(s => s.category === 'Edge Computing' || s.category === 'IT Operations'),
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'space-metaverse',
    title: '🌌 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space mining, metaverse development, and more',
    services: cuttingEdge2033Services.filter(s => s.category === 'Space Technology' || s.category === 'Metaverse & AI'),
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'micro-saas',
    title: '🎯 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge solutions for every business need',
    services: cuttingEdge2033Services.filter(s => s.category === 'Micro SAAS' || s.category === 'Customer Success'),
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough technologies and innovations',
    services: innovativeITServices2033.filter(s => s.category === 'Neuromorphic Computing' || s.category === 'Photonic Computing'),
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

export default function UltraFuturisticServiceShowcase2033() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Create a mapping of service IDs to their category icons
  const serviceIconMap = new Map();
  serviceCategories.forEach(category => {
    category.services.forEach(service => {
      serviceIconMap.set(service.id, category.icon);
    });
  });

  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({ ...service, category: category.id }))
  );

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              <span>2033 Revolutionary Services</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Future Technology
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover revolutionary AI consciousness, quantum DNA computing, space mining automation, and cutting-edge solutions that define the future of technology.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/30'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/30'
              }`}
            >
              {category.title.split(' ')[0]}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative bg-gray-900/50 border border-purple-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      {(() => {
                        const IconComponent = serviceIconMap.get(service.id) || Target;
                        return <IconComponent className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                      <div className="text-xs text-gray-400">Starting Price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Details */}
                <div className="space-y-4 mb-6">
                  {/* Market Size */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Market Size</span>
                    <span className="text-sm font-medium text-green-400">{service.marketSize}</span>
                  </div>

                  {/* ROI */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Expected ROI</span>
                    <span className="text-sm font-medium text-yellow-400">{service.roi}</span>
                  </div>

                  {/* Implementation Time */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Implementation</span>
                    <span className="text-sm font-medium text-blue-400">{service.implementationTime}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-purple-400 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Competitive Advantage */}
                <div className="mb-6 p-3 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-lg border border-purple-500/20">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Competitive Edge</h4>
                  <p className="text-xs text-gray-300">{service.competitiveAdvantage}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 text-center group-hover:shadow-lg group-hover:shadow-purple-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </a>
                  
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="px-4 py-2 bg-gray-800/50 border border-purple-500/30 text-purple-300 text-sm font-medium rounded-lg hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                {/* Hover Overlay */}
                {hoveredService === service.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl border-2 border-purple-400/50 pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary AI, quantum computing, and cutting-edge solutions. 
              Get in touch with our experts to discuss your transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-3 bg-gray-800/50 border border-purple-500/30 text-purple-300 font-medium rounded-lg hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call Now
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}