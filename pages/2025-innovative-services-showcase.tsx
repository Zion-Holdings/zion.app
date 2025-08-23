import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Server, 
  Star, Users, TrendingUp, Check, Zap, Award,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new innovative services
import { innovativeAIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';
import { quantumEmergingTechServices } from '../data/2025-quantum-emerging-tech-services';
import { spaceMetaverseServices } from '../data/2025-space-metaverse-services';
import { advancedITInfrastructureServices } from '../data/2025-advanced-it-infrastructure-services';

const InnovativeServicesShowcase2025 = () => {
  const allServices = [
    ...innovativeAIAutonomousServices,
    ...quantumEmergingTechServices,
    ...spaceMetaverseServices,
    ...advancedITInfrastructureServices
  ];

  const serviceCategories = [
    {
      id: 'ai-autonomous',
      name: 'AI Autonomous Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      description: 'Self-learning autonomous AI systems that revolutionize business operations',
      services: innovativeAIAutonomousServices
    },
    {
      id: 'quantum-tech',
      name: 'Quantum & Emerging Tech',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      description: 'Quantum computing and breakthrough technologies for the future',
      services: quantumEmergingTechServices
    },
    {
      id: 'space-metaverse',
      name: 'Space & Metaverse',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      description: 'Space exploration technology and metaverse development platforms',
      services: spaceMetaverseServices
    },
    {
      id: 'it-infrastructure',
      name: 'Advanced IT Infrastructure',
      icon: <Server className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      description: 'Cutting-edge IT infrastructure and DevOps solutions',
      services: advancedITInfrastructureServices
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Innovative Services Showcase - Zion Tech Group"
        description="Discover our revolutionary AI autonomous services, quantum computing solutions, space technology platforms, and advanced IT infrastructure services. Transform your business with cutting-edge innovation."
        keywords={["AI autonomous services", "quantum computing", "space technology", "metaverse development", "IT infrastructure", "innovative solutions 2025"]}
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2025 Innovative
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary AI autonomous systems, 
              quantum computing platforms, space technology solutions, and advanced IT infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>500+ Innovative Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>99.9% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="font-semibold">+1 302 464 0950</span>
              <span className="text-sm text-blue-100">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
              <span className="text-sm text-blue-100">Expert Consultation</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">364 E Main St STE 1008</span>
              <span className="text-sm text-blue-100">Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge service categories designed to transform your business 
              and propel you into the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.services.slice(0, 3).map((service) => (
                    <div key={service.id} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{service.name}</span>
                    </div>
                  ))}
                  {category.services.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{category.services.length - 3} more services
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Starting from ${Math.min(...category.services.map(s => s.pricing.starter))}/month
                  </span>
                  <a
                    href={`/services?category=${category.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Explore Services
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and game-changing services that are transforming 
              industries and creating new possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.filter(service => service.popular).slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  {service.popular && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{service.rating}/5</span>
                    <span className="text-gray-500">({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">{service.customers.toLocaleString()}+ customers</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-white">
                    ${service.pricing.starter}/month
                  </span>
                  <span className="text-sm text-gray-400">
                    {service.pricing.trialDays} days free
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 line-clamp-2">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={service.link}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  Get Started
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're your innovation partner, 
              committed to transforming your business with cutting-edge solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Cutting-Edge Innovation',
                description: 'Access to the latest AI, quantum computing, and space technology innovations'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Proven Excellence',
                description: '10,000+ satisfied customers and 99.9% success rate across all services'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 dedicated support from industry experts and technology specialists'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'ROI Guaranteed',
                description: 'Average 300-500% ROI within 6-12 months for our enterprise customers'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of forward-thinking companies already leveraging our innovative services. 
              Start your transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                <Mail className="w-5 h-5" />
                Get Expert Consultation
              </a>
            </div>

            <div className="mt-8 text-blue-100">
              <p className="text-sm">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-sm mt-2">
                <strong>Website:</strong> <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;