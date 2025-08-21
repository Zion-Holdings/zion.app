import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Rocket, Shield, Globe, Cpu, 
  ArrowRight, ExternalLink, Check, Star,
  TrendingUp, Users, Clock, DollarSign, Phone, Mail, MapPin
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { innovativeITServices } from '../data/innovative-it-services';
import { innovativeMicroSaas } from '../data/innovative-micro-saas';

export default function InnovativeServicesShowcase() {
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/25"
    >
      {/* Service Header */}
      <div className={`p-6 bg-gradient-to-r ${service.color} bg-clip-text`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{service.icon}</span>
          {service.popular && (
            <span className="px-3 py-1 text-xs font-semibold text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/20">
              Popular
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-gray-300 text-sm">{service.tagline}</p>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <div className="text-right">
            <div className="flex items-center text-yellow-400 text-sm">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {service.rating}
            </div>
            <div className="text-gray-400 text-xs">{service.reviews} reviews</div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 5).map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center text-gray-300 text-sm">
                <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Market Data */}
        <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-400">Market Size:</span>
              <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
            </div>
            <div>
              <span className="text-gray-400">Growth Rate:</span>
              <div className="text-green-400 font-semibold">{service.growthRate}</div>
            </div>
          </div>
        </div>

        {/* ROI */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-3 mb-4 border border-green-500/20">
          <div className="text-center">
            <div className="text-green-400 font-semibold text-sm">Expected ROI</div>
            <div className="text-white font-bold">{service.roi}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 flex items-center justify-center group"
          >
            <Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Learn More
          </a>
          <a
            href="/contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );

  return (
    <UltraAdvancedFuturisticBackground intensity={1.5} variant="quantum-holographic-advanced">
      <div className="min-h-screen">
        <Head>
          <title>Innovative Services Showcase - Zion Tech Group</title>
          <meta name="description" content="Discover our cutting-edge AI, IT, and micro SaaS services. Transform your business with revolutionary technology solutions." />
          <meta name="keywords" content="AI services, IT services, micro SaaS, quantum computing, blockchain, cybersecurity, edge computing" />
          <meta property="og:title" content="Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge AI, IT, and micro SaaS services" />
          <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Innovative
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our revolutionary AI, IT, and micro SaaS services. 
                Each solution is designed to transform your business and drive unprecedented growth.
              </p>

              {/* Contact Info */}
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 max-w-2xl mx-auto mb-12">
                <h3 className="text-white font-semibold mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="text-gray-300 text-xs">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-4xl font-bold text-white">AI-Powered Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary AI solutions that leverage cutting-edge machine learning and neural networks 
                to solve complex business challenges and unlock new opportunities.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {innovativeAIServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-4xl font-bold text-white">Enterprise IT Solutions</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation IT infrastructure and security solutions designed for modern enterprises, 
                featuring quantum computing, blockchain, and zero-trust security architectures.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {innovativeITServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Micro SaaS Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-pink-400 mr-3" />
                <h2 className="text-4xl font-bold text-white">Micro SaaS Solutions</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized software solutions that address specific business needs with AI-powered automation, 
                smart contracts, and intelligent workflows designed for maximum efficiency and ROI.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {innovativeMicroSaas.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already transforming their operations with our innovative services. 
                Start your journey today and unlock unprecedented growth potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <Zap className="w-6 h-6 inline mr-2" />
                  Get Started Today
                </a>
                
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <DollarSign className="w-6 h-6 inline mr-2" />
                  View Pricing
                </a>
              </div>

              {/* Contact Details */}
              <div className="mt-12 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
                <h3 className="text-white font-semibold mb-4">Contact Our Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Globe className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.website}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}