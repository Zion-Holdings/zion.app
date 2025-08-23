import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Globe, Satellite, Target, Users, Brain, Atom, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, Cloud, Database
} from 'lucide-react';

const SpaceTechnologyServices: React.FC = () => {
  const services = [
    {
      title: 'Space Resource Intelligence 2045',
      description: 'Advanced space resource discovery and mining intelligence systems',
      href: '/space-resource-intelligence-2045',
      icon: Rocket,
      features: ['Resource Discovery', 'Mining Intelligence', 'Satellite Monitoring', 'Data Analysis']
    },
    {
      title: 'Space Resource Intelligence Platform 2045',
      description: 'Comprehensive platform for space resource management and optimization',
      href: '/space-resource-intelligence-platform',
      icon: Globe,
      features: ['Platform Management', 'Resource Optimization', 'Real-time Monitoring', 'Predictive Analytics']
    },
    {
      title: 'Space Technology AI Platform 2045',
      description: 'AI-powered space technology solutions and automation',
      href: '/space-technology-ai-platform',
      icon: Brain,
      features: ['AI Automation', 'Space Operations', 'Intelligent Systems', 'Predictive Maintenance']
    },
    {
      title: 'Space Resource Mining Platform 2045',
      description: 'Revolutionary platform for automated space resource extraction',
      href: '/space-resource-mining-platform',
      icon: Target,
      features: ['Automated Mining', 'Resource Extraction', 'Safety Systems', 'Efficiency Optimization']
    },
    {
      title: 'Space Resource Intelligence 2044',
      description: 'Next-generation space intelligence and resource management',
      href: '/space-resource-intelligence-2044',
      icon: Satellite,
      features: ['Advanced Intelligence', 'Resource Mapping', 'Risk Assessment', 'Strategic Planning']
    },
    {
      title: 'Space Resource Intelligence 2040',
      description: 'Pioneering space resource intelligence and exploration systems',
      href: '/space-resource-intelligence-2040',
      icon: Rocket,
      features: ['Exploration Systems', 'Resource Intelligence', 'Mission Planning', 'Data Collection']
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Space Technology Services 2045 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary space technology solutions including resource intelligence, mining platforms, and AI-powered space operations. Explore the future with Zion Tech Group." />
        <meta name="keywords" content="space technology, space resources, space mining, space intelligence, satellite technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/space-technology" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-400 font-medium">Space Technology Services 2045</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Beyond Earth's Boundaries
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneer the future of space technology with our revolutionary solutions. From resource intelligence 
                to AI-powered space operations, we're expanding humanity's reach into the cosmos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
                >
                  <span>Launch Your Mission</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center space-x-2 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Our Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of space technology solutions designed to revolutionize space exploration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href} className="block">
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8 h-full hover:border-indigo-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-indigo-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Explore the Cosmos?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our space technology solutions can launch your mission to the stars
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-indigo-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-indigo-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceTechnologyServices;