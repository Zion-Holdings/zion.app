import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import UltraFuturisticNavigation2046 from '../components/layout/UltraFuturisticNavigation2046';
import UltraFuturisticFooter2046 from '../components/layout/UltraFuturisticFooter2046';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Lock, Users, BarChart3,
  TrendingUp, Award, Star, Clock, DollarSign, Phone, Mail, MapPin, Tag,
  Lightbulb
} from 'lucide-react';

// Import all our innovative services
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';
import { innovativeITInfrastructureBreakthroughs2025 } from '../data/2025-innovative-it-infrastructure-breakthroughs';
import { innovativeAIBreakthroughs2025 } from '../data/2025-innovative-ai-breakthroughs';
import { industrySpecializedSolutions2025 } from '../data/2025-industry-specialized-solutions';

const ComprehensiveMarketingShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasBreakthroughs2025,
    ...innovativeITInfrastructureBreakthroughs2025,
    ...innovativeAIBreakthroughs2025,
    ...industrySpecializedSolutions2025
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services based on category
  const filteredServices = allServices.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Marketing Showcase | Zion Tech Group - Revolutionary AI & IT Solutions"
        description="Discover Zion Tech Group's revolutionary 2025 services: AI breakthroughs, quantum infrastructure, micro SAAS solutions, and industry transformations. Transform your business today."
        keywords={["Zion Tech Group", "AI services", "IT infrastructure", "micro SAAS", "2025 technology", "quantum computing", "business transformation", "innovative solutions"]}
        canonical="https://ziontechgroup.com/2025-comprehensive-marketing-showcase"
      />
      
      <UltraFuturisticNavigation2046 />

      {/* Hero Section with Compelling Marketing */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-white">
                2025 Revolutionary Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, quantum infrastructure, and micro SAAS solutions. 
              Join the future of technology and gain unprecedented competitive advantage.
            </p>
            
            {/* Key Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "10x Performance",
                  description: "Revolutionary AI solutions that deliver 10x improvement in efficiency and results"
                },
                {
                  icon: Shield,
                  title: "Quantum Security",
                  description: "Future-proof quantum-resistant infrastructure protecting your business"
                },
                {
                  icon: TrendingUp,
                  title: "Market Leadership",
                  description: "First-to-market solutions giving you competitive advantage"
                }
              ].map((proposition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <proposition.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{proposition.title}</h3>
                  <p className="text-gray-300 text-sm">{proposition.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:kleber@ziontechgroup.com?subject=Inquiry about 2025 Revolutionary Solutions"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Your Transformation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+13024640950"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm py-8 px-4 border-y border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">+1 302 464 0950</span>
              <span className="text-gray-300 text-sm">Available 24/7</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              <span className="text-gray-300 text-sm">Quick Response</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-pink-400" />
              <span className="text-white font-semibold">364 E Main St STE 1008</span>
              <span className="text-gray-300 text-sm">Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-blue-400">$200+ Billion</span> Market Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our innovative solutions address the fastest-growing technology markets, 
              positioning your business for exponential growth and market leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Services",
                market: "$31.2B",
                growth: "35% CAGR",
                description: "Autonomous AI, emotional intelligence, quantum AI computing"
              },
              {
                icon: Cpu,
                title: "IT Infrastructure",
                market: "$14.2B",
                growth: "28% CAGR",
                description: "Quantum-secure cloud, edge computing, hyperconverged infrastructure"
              },
              {
                icon: Rocket,
                title: "Micro SAAS",
                market: "$7.2B",
                growth: "42% CAGR",
                description: "Legal automation, healthcare analytics, supply chain optimization"
              },
              {
                icon: Building,
                title: "Industry Solutions",
                market: "$45.2B",
                growth: "31% CAGR",
                description: "Manufacturing AI, retail analytics, smart agriculture"
              }
            ].map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <market.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{market.title}</h3>
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold text-blue-400">{market.market}</div>
                  <div className="text-sm text-green-400">{market.growth}</div>
                </div>
                <p className="text-gray-300 text-sm text-center">{market.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="text-blue-400">2025 Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge services designed to transform your business
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-md transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services Grid/List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {viewMode === 'list' && (
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                      {service.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Tag className="w-4 h-4" />
                      <span>{service.category}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>Starting at {service.pricing.starter}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <BarChart3 className="w-4 h-4" />
                      <span>Market: {service.marketSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="text-blue-400">Zion Tech Group</span> Leads the Market
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our unique combination of cutting-edge technology, proven expertise, and market-first solutions 
              gives you unprecedented competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "First-to-Market Solutions",
                description: "Be the first in your industry to deploy revolutionary AI and quantum technologies",
                benefit: "Gain 12-18 month competitive advantage"
              },
              {
                icon: Zap,
                title: "Proven Technology Stack",
                description: "Battle-tested solutions with real-world performance validation",
                benefit: "Reduce implementation risk by 80%"
              },
              {
                icon: Users,
                title: "Expert Implementation",
                description: "World-class engineers and scientists ensure successful deployment",
                benefit: "Achieve ROI in 3-6 months"
              },
              {
                icon: Globe,
                title: "Global Scale",
                description: "Solutions that scale from startup to enterprise worldwide",
                benefit: "Support unlimited growth and expansion"
              },
              {
                icon: Shield,
                title: "Future-Proof Security",
                description: "Quantum-resistant infrastructure protecting against tomorrow's threats",
                benefit: "Eliminate security obsolescence risk"
              },
              {
                icon: TrendingUp,
                title: "Continuous Innovation",
                description: "Ongoing R&D ensures your solutions stay ahead of the curve",
                benefit: "Maintain technology leadership position"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 mb-4">{advantage.description}</p>
                <div className="text-sm text-blue-400 font-semibold">{advantage.benefit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI and Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven <span className="text-green-400">Results & ROI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver measurable business impact with rapid return on investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "10x", label: "Performance Improvement", color: "text-blue-400" },
              { metric: "80%", label: "Cost Reduction", color: "text-green-400" },
              { metric: "3-6", label: "Months to ROI", color: "text-purple-400" },
              { metric: "95%", label: "Customer Satisfaction", color: "text-pink-400" }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-5xl font-bold ${result.color} mb-2`}>{result.metric}</div>
                <div className="text-gray-300">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the elite group of businesses transforming their industries with Zion Tech Group's 
              revolutionary 2025 solutions. Your competitive advantage starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:kleber@ziontechgroup.com?subject=Ready to Lead the Future - 2025 Solutions"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Your Leadership Journey
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+13024640950"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </motion.a>
            </div>
            
            <div className="text-gray-400 space-y-2">
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline">ziontechgroup.com</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2046 />
    </div>
  );
};

export default ComprehensiveMarketingShowcase2025;