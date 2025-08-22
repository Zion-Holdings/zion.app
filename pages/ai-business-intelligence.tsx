import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, BarChart3, Brain, Database, Users, Target, TrendingUp as TrendingUpIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { motion } from 'framer-motion';

export default function AIBusinessIntelligencePage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Real-time data analytics dashboard',
    'AI-powered predictive modeling',
    'Automated report generation',
    'Natural language query interface',
    'Advanced data visualization',
    'Custom KPI tracking',
    'Multi-source data integration',
    'Role-based access control',
    'Mobile-responsive design',
    'API for custom integrations'
  ];

  const useCases = [
    'Sales performance analysis',
    'Customer behavior insights',
    'Financial forecasting',
    'Operational efficiency tracking',
    'Market trend analysis'
  ];

  const integrations = [
    'Salesforce',
    'HubSpot',
    'Slack',
    'Microsoft Teams',
    'Zapier',
    'Google Analytics'
  ];

  const technology = [
    'React',
    'Node.js',
    'Python',
    'TensorFlow',
    'PostgreSQL',
    'Redis',
    'AWS'
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
          <title>AI Business Intelligence Suite - Zion Tech Group | Transform Data into Insights</title>
          <meta name="description" content="Transform data into actionable business insights with our AI-powered BI platform. Real-time analytics, predictive modeling, and automated reporting. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI business intelligence, data analytics, predictive modeling, business insights, data visualization, KPI tracking, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="AI Business Intelligence Suite - Zion Tech Group" />
          <meta property="og:description" content="Transform data into actionable business insights with AI-powered analytics and predictive modeling." />
          <meta property="og:url" content="https://ziontechgroup.com/ai-business-intelligence" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence" />
        </Head>

        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="text-6xl mb-6">📊</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI Business Intelligence Suite
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform data into actionable business insights with our advanced AI-powered business intelligence platform. 
                Get real-time analytics, predictive insights, and automated reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="#pricing"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  View Pricing
                  <DollarSign className="ml-2 h-5 w-5 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Everything you need to turn your data into actionable business intelligence
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-6 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-700/50 rounded-2xl hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover how AI-powered business intelligence transforms your operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-6 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-700/50 rounded-2xl hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase}</h3>
                  <p className="text-gray-300 text-sm">
                    Leverage AI-powered insights to optimize your {useCase.toLowerCase()} and drive better business outcomes.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Start with a free trial and scale as you grow
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-700/50 rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-3xl font-bold text-white mb-4">AI Business Intelligence Suite</h3>
                  <div className="text-5xl font-bold text-blue-400 mb-2">$299</div>
                  <div className="text-gray-400 text-xl mb-6">per month</div>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Professional AI-powered business intelligence platform with real-time analytics, 
                    predictive modeling, and comprehensive reporting capabilities.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {features.slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Additional Benefits:</h4>
                      <ul className="space-y-2">
                        {features.slice(5).map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="/contact" variant="primary" size="lg" className="group">
                      <Phone className="mr-2 h-5 w-5" />
                      Start Free Trial
                    </Button>
                    <Button href="/contact" variant="secondary" size="lg" className="group">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Sales
                    </Button>
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-4">
                    14-day free trial • No credit card required • Cancel anytime
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology & Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technology & Integrations
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Built with modern technology and integrates with your existing tools
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technology.map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700/50">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Integrations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-800/60 rounded-lg border border-gray-700/50">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{integration}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Market Position */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Market Position
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Competitive pricing with superior features and AI-powered insights
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-700/50 rounded-3xl p-8"
              >
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Competitive Analysis</h3>
                  <p className="text-gray-300">
                    Our AI Business Intelligence Suite offers superior value compared to market alternatives
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-800/60 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Tableau</h4>
                    <p className="text-yellow-400 font-bold">$70-70</p>
                    <p className="text-gray-400 text-sm">Limited AI features</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800/60 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Power BI</h4>
                    <p className="text-yellow-400 font-bold">$9.99-20</p>
                    <p className="text-gray-400 text-sm">Basic analytics</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800/60 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Looker</h4>
                    <p className="text-yellow-400 font-bold">$300-500</p>
                    <p className="text-gray-400 text-sm">Complex setup</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h4 className="text-xl font-bold text-white mb-4">Our Advantages:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-blue-900/40 rounded-lg">
                      <div className="text-2xl mb-2">🧠</div>
                      <p className="text-blue-300 font-semibold">AI-Powered Insights</p>
                    </div>
                    <div className="p-3 bg-blue-900/40 rounded-lg">
                      <div className="text-2xl mb-2">⚡</div>
                      <p className="text-blue-300 font-semibold">Real-time Analytics</p>
                    </div>
                    <div className="p-3 bg-blue-900/40 rounded-lg">
                      <div className="text-2xl mb-2">🎯</div>
                      <p className="text-blue-300 font-semibold">Predictive Modeling</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Transform your business with AI-powered business intelligence. Start your free trial today.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-700/50 rounded-3xl p-8 text-center"
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Start Your Free Trial</h3>
                <p className="text-gray-300 mb-8">
                  Join thousands of businesses already transforming their operations with AI-powered insights.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button href="/contact" variant="primary" size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5" />
                    Free Consultation
                  </Button>
                  <Button href="/contact" variant="secondary" size="lg" className="group">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Sales
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{contactInfo.mobile}</div>
                    <div className="text-gray-400 text-sm">Phone</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-cyan-400">{contactInfo.email}</div>
                    <div className="text-gray-400 text-sm">Email</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cyan-400">{contactInfo.address}</div>
                    <div className="text-gray-400 text-sm">Address</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}