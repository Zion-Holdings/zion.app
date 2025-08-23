import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, Home, MapPin, DollarSign, ChartBar, 
  Shield, Zap, Brain, Atom, Rocket, Target,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Users, Globe, Lock, Cloud, Database, BarChart3
} from 'lucide-react';

const RealEstateTechnologySolutions: React.FC = () => {
  const features = [
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Smart Property Management',
      description: 'AI-powered property management systems with predictive maintenance and tenant management.'
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: 'Real Estate Analytics',
      description: 'Advanced analytics and market intelligence for informed investment decisions.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Blockchain Security',
      description: 'Secure property transactions and ownership verification using blockchain technology.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'IoT Integration',
      description: 'Smart building sensors and automation for energy efficiency and tenant comfort.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Market Predictions',
      description: 'Machine learning algorithms for property value forecasting and market trends.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Virtual Tours & AR',
      description: 'Immersive virtual reality experiences and augmented reality property showcases.'
    }
  ];

  const solutions = [
    {
      title: 'PropTech Platform',
      description: 'Comprehensive real estate technology platform for developers and investors.',
      features: ['Market Analysis', 'Property Valuation', 'Investment Tracking', 'Portfolio Management'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Smart Building Management',
      description: 'IoT-powered building management system with AI optimization.',
      features: ['Energy Management', 'Predictive Maintenance', 'Tenant Portal', 'Security Integration'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Real Estate Analytics Suite',
      description: 'Advanced analytics and reporting for real estate professionals.',
      features: ['Market Intelligence', 'Investment Analysis', 'Risk Assessment', 'Performance Metrics'],
      price: 'Starting at $3,200/month'
    }
  ];

  return (
    <>
      <Head>
        <title>Real Estate Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your real estate business with cutting-edge PropTech solutions. AI-powered analytics, smart building management, and blockchain security." />
        <meta name="keywords" content="real estate technology, PropTech, smart buildings, real estate analytics, blockchain real estate, AI real estate" />
        <link rel="canonical" href="https://ziontechgroup.com/real-estate-technology-solutions" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                  <Building className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real Estate Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your real estate business with cutting-edge PropTech solutions powered by AI, 
                blockchain, and IoT technology. Drive innovation and maximize returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary PropTech Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our real estate technology solutions combine the latest innovations to create 
                a comprehensive platform for modern real estate professionals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PropTech Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of real estate technology solutions designed to 
                meet the needs of developers, investors, and property managers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <p className="text-blue-400 font-semibold mb-4">{solution.price}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Real Estate Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of real estate technology with our innovative PropTech solutions. 
                Get in touch to learn how we can help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/quote"
                  className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealEstateTechnologySolutions;