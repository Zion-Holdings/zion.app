import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Homepage2025: React.FC = () => {
  const featuredServices = [
    {
      id: 'quantum-ai-orchestrator',
      name: 'Quantum AI Orchestrator',
      tagline: 'Orchestrate AI workflows with quantum computing power',
      description: 'Advanced AI workflow orchestration platform that leverages quantum computing to optimize and accelerate complex AI pipelines, enabling faster model training and deployment.',
      price: '$1,299',
      period: '/month',
      features: [
        'Quantum-enhanced workflow optimization',
        'Intelligent resource allocation',
        'Automated pipeline management',
        'Real-time performance monitoring',
        'Advanced scheduling algorithms',
        'Multi-cloud orchestration',
        'Custom workflow templates',
        'API for integration',
        'Enterprise-grade security'
      ],
      popular: true,
      category: 'AI Orchestration',
      icon: '⚛️🎭',
      variant: 'quantum-futuristic'
    },
    {
      id: 'ai-ethics-compliance-suite',
      name: 'AI Ethics & Compliance Suite',
      tagline: 'Ensure responsible AI with comprehensive ethics and compliance',
      description: 'Comprehensive AI ethics and compliance platform that helps organizations develop, deploy, and monitor AI systems in accordance with ethical principles and regulatory requirements.',
      price: '$899',
      period: '/month',
      features: [
        'AI ethics assessment and monitoring',
        'Compliance automation and reporting',
        'Bias detection and mitigation',
        'Transparency and explainability tools',
        'Regulatory compliance tracking',
        'Ethics training and education',
        'Audit trail and documentation',
        'Integration with AI platforms',
        'Custom compliance workflows'
      ],
      popular: false,
      category: 'AI Ethics',
      icon: '🤖⚖️',
      variant: 'ai-futuristic'
    },
    {
      id: 'metaverse-business-platform',
      name: 'Metaverse Business Platform',
      tagline: 'Build your business in the metaverse with AI-powered tools',
      description: 'Comprehensive metaverse business platform that enables organizations to create, manage, and monetize virtual experiences, digital assets, and immersive business solutions.',
      price: '$1,599',
      period: '/month',
      features: [
        '3D virtual environment creation',
        'Digital asset management and monetization',
        'AI-powered avatar customization',
        'Virtual event hosting and management',
        'E-commerce integration and payments',
        'Analytics and performance tracking',
        'Multi-platform compatibility',
        'Custom branding and theming',
        '24/7 technical support'
      ],
      popular: true,
      category: 'Metaverse',
      icon: '🌐🏢',
      variant: 'metaverse-futuristic'
    },
    {
      id: 'quantum-financial-modeling',
      name: 'Quantum Financial Modeling Platform',
      tagline: 'Revolutionize financial modeling with quantum computing',
      description: 'Advanced financial modeling platform that leverages quantum computing to solve complex financial problems, optimize portfolios, and provide unprecedented insights for investment decisions.',
      price: '$2,199',
      period: '/month',
      features: [
        'Quantum-enhanced portfolio optimization',
        'Advanced risk assessment and modeling',
        'Real-time market analysis and predictions',
        'Multi-asset class modeling',
        'Scenario analysis and stress testing',
        'Regulatory compliance and reporting',
        'API for financial data integration',
        'Custom model development',
        'Enterprise-grade security'
      ],
      popular: true,
      category: 'Quantum Finance',
      icon: '⚛️💰',
      variant: 'quantum-futuristic'
    },
    {
      id: 'ai-powered-content-automation',
      name: 'AI-Powered Content Automation',
      tagline: 'Automate content creation and management with AI',
      description: 'Intelligent content automation platform that uses artificial intelligence to create, optimize, and manage content across multiple channels, improving engagement and ROI.',
      price: '$799',
      period: '/month',
      features: [
        'AI-powered content generation',
        'Multi-channel content management',
        'Automated content optimization',
        'SEO and performance analytics',
        'Content scheduling and automation',
        'Brand voice and style consistency',
        'Multi-language content support',
        'Integration with marketing tools',
        'Custom content workflows'
      ],
      popular: false,
      category: 'Content Automation',
      icon: '🤖✍️',
      variant: 'ai-futuristic'
    },
    {
      id: 'quantum-supply-chain-optimization',
      name: 'Quantum Supply Chain Optimization',
      tagline: 'Optimize supply chains with quantum computing power',
      description: 'Advanced supply chain optimization platform that uses quantum computing to solve complex logistics problems, reduce costs, and improve efficiency across global supply networks.',
      price: '$1,899',
      period: '/month',
      features: [
        'Quantum-enhanced route optimization',
        'Real-time supply chain monitoring',
        'Predictive demand forecasting',
        'Inventory optimization and management',
        'Supplier performance analytics',
        'Risk assessment and mitigation',
        'Multi-modal transportation planning',
        'Custom optimization algorithms',
        'Enterprise integration capabilities'
      ],
      popular: true,
      category: 'Quantum Supply Chain',
      icon: '⚛️🚚',
      variant: 'quantum-futuristic'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Services', icon: '🚀' },
    { number: '10,000+', label: 'Happy Customers', icon: '😊' },
    { number: '99.9%', label: 'Uptime SLA', icon: '⚡' },
    { number: '24/7', label: 'Support', icon: '🛡️' }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
                x: [0, -50, 0],
                y: [0, 50, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4 relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={service}
                    variant={service.variant as any}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16 space-y-4"
            >
              <Link
                href="/comprehensive-2026-services-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                View 2026 Services Showcase
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge technologies and frameworks to deliver exceptional performance and scalability
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'Quantum Computing', icon: '⚛️', color: 'from-purple-500 to-pink-600' },
                { name: 'AI/ML', icon: '🧠', color: 'from-cyan-500 to-blue-600' },
                { name: 'Cloud Native', icon: '☁️', color: 'from-blue-500 to-indigo-600' },
                { name: 'Blockchain', icon: '🔗', color: 'from-green-500 to-emerald-600' },
                { name: 'IoT', icon: '🌐', color: 'from-orange-500 to-red-600' },
                { name: 'AR/VR', icon: '🥽', color: 'from-pink-500 to-purple-600' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our cutting-edge technology solutions to stay ahead of the competition
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold text-lg rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;