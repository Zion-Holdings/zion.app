import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Phone, Mail, MapPin, Rocket, Shield, Zap, Brain, Cpu } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { innovative2026Services } from '../data/innovative-2026-services';
import { revolutionaryAIServices2026 } from '../data/revolutionary-ai-services-2026';
import { enterpriseITSolutions2026 } from '../data/enterprise-it-solutions-2026';
import { cybersecuritySolutions2026 } from '../data/cybersecurity-solutions-2026';

export default function ComprehensivePricing2026Page() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026Services,
    ...revolutionaryAIServices2026,
    ...enterpriseITSolutions2026,
    ...cybersecuritySolutions2026
  ];

  // Group services by price range
  const priceRanges = [
    {
      range: 'Entry Level',
      services: all2026Services.filter(s => parseInt(s.price.replace('$', '').replace(',', '')) < 2000),
      color: 'from-green-500 to-emerald-600',
      description: 'Perfect for startups and small businesses'
    },
    {
      range: 'Professional',
      services: all2026Services.filter(s => {
        const price = parseInt(s.price.replace('$', '').replace(',', ''));
        return price >= 2000 && price < 4000;
      }),
      color: 'from-blue-500 to-indigo-600',
      description: 'Ideal for growing companies and enterprises'
    },
    {
      range: 'Enterprise',
      services: all2026Services.filter(s => parseInt(s.price.replace('$', '').replace(',', '')) >= 4000),
      color: 'from-purple-500 to-pink-600',
      description: 'For large enterprises and government agencies'
    }
  ];

  // Service categories for comparison
  const serviceCategories = [
    {
      title: 'AI & Consciousness Services',
      services: innovative2026Services.filter(s => s.category.includes('AI')),
      icon: Brain,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Quantum & Neural Interface',
      services: innovative2026Services.filter(s => s.category.includes('Quantum')),
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Revolutionary AI Services',
      services: revolutionaryAIServices2026,
      icon: Zap,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Enterprise IT Solutions',
      services: enterpriseITSolutions2026,
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cybersecurity Solutions',
      services: cybersecuritySolutions2026,
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={500}
      animationSpeed={2.0}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>Comprehensive Pricing 2026 - Zion Tech Group | Revolutionary AI, Quantum & IT Solutions</title>
          <meta name="description" content="Comprehensive pricing for Zion Tech Group's 2026 innovative services. AI consciousness simulation, quantum neural interfaces, and revolutionary cybersecurity solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 pricing, AI services pricing, quantum computing pricing, cybersecurity pricing, enterprise IT pricing, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Comprehensive Pricing 2026 - Zion Tech Group" />
          <meta property="og:description" content="Complete pricing for revolutionary AI, quantum computing, and cybersecurity solutions" />
          <meta property="og:url" content="https://ziontechgroup.com/comprehensive-pricing-2026" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-2026" />
        </Head>

        {/* Navigation */}
        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2026 Comprehensive Pricing
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
                Transparent pricing for our revolutionary AI, quantum computing, and cybersecurity solutions. No hidden fees, no enterprise sales calls.
              </p>
              
              {/* Pricing Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{all2026Services.length}</div>
                  <div className="text-gray-400">Total Services</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">$1,499</div>
                  <div className="text-gray-400">Starting Price</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-pink-400 mb-2">$5,999</div>
                  <div className="text-gray-400">Premium Price</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">500%+</div>
                  <div className="text-gray-400">Average ROI</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Price Range Overview */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Choose Your <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Investment Level</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our services are designed to scale with your business growth and requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {priceRanges.map((range, index) => (
                <motion.div
                  key={range.range}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {range.range}
                    </h3>
                    <p className="text-gray-300 text-lg mb-8">
                      {range.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Services in this range:</h4>
                      <div className="space-y-3">
                        {range.services.slice(0, 5).map((service, serviceIndex) => (
                          <div key={service.id} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </div>
                        ))}
                        {range.services.length > 5 && (
                          <div className="text-sm text-gray-400">
                            +{range.services.length - 5} more services
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl text-gray-300 mb-2">
                        Starting from
                      </div>
                      <div className="text-4xl font-bold text-cyan-400 mb-4">
                        ${Math.min(...range.services.map(s => parseInt(s.price.replace('$', '').replace(',', ''))))}
                      </div>
                      <div className="text-gray-400">/month</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Pricing by Category */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mb-6 shadow-2xl`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Revolutionary solutions with transparent pricing and proven ROI
                  </p>
                </motion.div>

                {/* Pricing Table */}
                <div className="overflow-x-auto">
                  <table className="w-full bg-gray-800/40 rounded-2xl border border-gray-700/50">
                    <thead>
                      <tr className="border-b border-gray-700/50">
                        <th className="text-left p-6 text-white font-semibold text-lg">Service</th>
                        <th className="text-center p-6 text-white font-semibold text-lg">Price</th>
                        <th className="text-center p-6 text-white font-semibold text-lg">Rating</th>
                        <th className="text-center p-6 text-white font-semibold text-lg">ROI</th>
                        <th className="text-center p-6 text-white font-semibold text-lg">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.services.map((service, serviceIndex) => (
                        <motion.tr
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors"
                        >
                          <td className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="text-3xl">{service.icon}</div>
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                  {service.name}
                                </h3>
                                <p className="text-gray-300 text-sm max-w-xs">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">
                              {service.price}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {service.period}
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <div className="flex items-center justify-center space-x-1 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(service.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="text-gray-300 text-sm">
                              {service.rating}/5 ({service.reviews})
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <div className="text-green-400 font-semibold text-lg">
                              {service.roi.split('ROI')[0].trim()}
                            </div>
                            <div className="text-gray-400 text-sm">
                              Average ROI
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <Button 
                              href={service.link} 
                              variant="primary"
                              size="sm"
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                            >
                              Learn More
                            </Button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Contact our team to discuss your requirements and get personalized pricing for our 2026 innovative services
              </p>
            </motion.div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-cyan-400 font-medium mb-1">Phone</div>
                  <div className="text-lg text-white font-semibold">{contactInfo.mobile}</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-purple-400 font-medium mb-1">Email</div>
                  <div className="text-lg text-white font-semibold">{contactInfo.email}</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-green-400 font-medium mb-1">Address</div>
                  <div className="text-lg text-white font-semibold">{contactInfo.address}</div>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button 
                href="/contact" 
                variant="primary"
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/30 border-0"
              >
                <span className="flex items-center">
                  <Rocket className="mr-3 w-7 h-7" />
                  Get Personalized Pricing
                </span>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}