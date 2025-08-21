import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Cpu, Rocket, Target, Microscope,
  ArrowRight, Star, TrendingUp, Zap, Shield, Globe,
  Phone, Mail, MapPin
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const serviceCategories = [
  {
    title: '🧠 2034 Revolutionary AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      {
        name: 'AI Quantum Hybrid Brain Interface',
        description: 'Revolutionary brain-computer interface that combines quantum computing with AI to enable direct neural control of digital systems.',
        price: '$49,999/month',
        features: ['Quantum-enhanced neural processing', 'Real-time brain analysis', 'Direct digital control', 'Quantum encryption'],
        market: '$25.8B by 2035',
        growth: '400% annual growth',
        href: '/ai-quantum-hybrid-brain-interface'
      },
      {
        name: 'AI Quantum Creativity Studio',
        description: 'Revolutionary platform that combines AI and quantum computing to generate creative content with unprecedented originality.',
        price: '$29,999/month',
        features: ['Quantum creativity algorithms', 'Multi-media generation', 'Originality optimization', 'Style transfer'],
        market: '$31.2B by 2035',
        growth: '350% annual growth',
        href: '/ai-quantum-creativity-studio'
      },
      {
        name: 'Quantum Emotional Intelligence',
        description: 'Advanced platform that uses quantum computing to analyze and understand human emotions with unprecedented accuracy.',
        price: '$19,999/month',
        features: ['Quantum emotion analysis', 'Real-time tracking', 'Predictive modeling', 'Cross-cultural understanding'],
        market: '$12.4B by 2035',
        growth: '280% annual growth',
        href: '/quantum-emotional-intelligence'
      }
    ]
  },
  {
    title: '⚛️ 2034 Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      {
        name: 'Quantum DNA Storage Platform',
        description: 'Breakthrough platform that uses quantum computing to encode and store massive amounts of data in synthetic DNA molecules.',
        price: '$39,999/month',
        features: ['1TB in 1 gram DNA', 'Quantum error correction', 'Long-term preservation', 'Quantum encryption'],
        market: '$18.7B by 2035',
        growth: '450% annual growth',
        href: '/quantum-dna-storage-platform'
      },
      {
        name: 'Quantum Financial Prediction',
        description: 'Advanced platform that uses quantum computing to predict financial markets with unprecedented accuracy and speed.',
        price: '$79,999/month',
        features: ['Quantum market analysis', 'Real-time predictions', 'Risk assessment', 'Portfolio optimization'],
        market: '$67.8B by 2035',
        growth: '500% annual growth',
        href: '/quantum-financial-prediction'
      },
      {
        name: 'Quantum Blockchain Infrastructure',
        description: 'Revolutionary blockchain platform that integrates quantum computing for enhanced security, scalability, and performance.',
        price: '$39,999/month',
        features: ['Quantum-enhanced security', 'Scalable architecture', 'Smart contracts', 'Cross-chain interoperability'],
        market: '$52.3B by 2035',
        growth: '400% annual growth',
        href: '/quantum-blockchain-infrastructure'
      }
    ]
  },
  {
    title: '🏙️ 2034 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      {
        name: 'Quantum Zero Trust Architecture',
        description: 'Revolutionary security platform that implements quantum-enhanced zero trust principles across all enterprise systems.',
        price: '$34,999/month',
        features: ['Quantum identity verification', 'Real-time threat detection', 'Zero trust segmentation', 'Quantum encryption'],
        market: '$45.6B by 2035',
        growth: '350% annual growth',
        href: '/quantum-zero-trust-architecture'
      },
      {
        name: 'AI Autonomous DevOps Platform',
        description: 'Next-generation DevOps platform that uses AI to autonomously manage, optimize, and operate enterprise development.',
        price: '$24,999/month',
        features: ['Autonomous deployment', 'AI testing automation', 'Predictive maintenance', 'Self-healing infrastructure'],
        market: '$28.9B by 2035',
        growth: '300% annual growth',
        href: '/ai-autonomous-devops-platform'
      },
      {
        name: 'AI Autonomous Data Center',
        description: 'Next-generation data center management platform that uses AI to autonomously operate and optimize enterprise data centers.',
        price: '$44,999/month',
        features: ['Autonomous management', 'AI cooling optimization', 'Predictive maintenance', 'Energy efficiency'],
        market: '$38.9B by 2035',
        growth: '400% annual growth',
        href: '/ai-autonomous-data-center'
      }
    ]
  },
  {
    title: '🌌 2034 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      {
        name: 'Autonomous Space Colony AI',
        description: 'AI system designed to autonomously manage and operate space colonies, handling everything from life support to resource management.',
        price: '$89,999/month',
        features: ['Autonomous life support', 'Resource optimization', 'Space health monitoring', 'Emergency protocols'],
        market: '$42.3B by 2035',
        growth: '500% annual growth',
        href: '/autonomous-space-colony-ai'
      },
      {
        name: 'Metaverse AI Development Platform',
        description: 'Build immersive virtual worlds with AI-powered development tools and quantum-enhanced rendering.',
        price: '$2,999/month',
        features: ['AI world building', 'Quantum rendering', 'Immersive experiences', 'Cross-platform sync'],
        market: '$800B by 2035',
        growth: '350% annual growth',
        href: '/metaverse-ai-development-platform'
      },
      {
        name: 'Holographic Event Platform',
        description: 'Create immersive holographic experiences for events, meetings, and virtual gatherings.',
        price: '$2,999/month',
        features: ['3D holographic rendering', 'Real-time modeling', 'Holographic projection', 'Event management'],
        market: '$45B by 2035',
        growth: '400% annual growth',
        href: '/holographic-event-platform'
      }
    ]
  },
  {
    title: '🎯 2034 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      {
        name: 'AI Quantum Sales Automation',
        description: 'Revolutionary sales automation platform that uses quantum computing and AI to optimize sales processes.',
        price: '$2,999/month',
        features: ['Quantum lead scoring', 'AI sales forecasting', 'Automated follow-ups', 'Predictive behavior'],
        market: '$15.8B by 2035',
        growth: '300% annual growth',
        href: '/ai-quantum-sales-automation'
      },
      {
        name: 'Quantum Content Generation Studio',
        description: 'Advanced content creation platform that uses quantum computing to generate unique, engaging content.',
        price: '$1,999/month',
        features: ['Quantum content generation', 'Multi-media creation', 'SEO optimization', 'Brand consistency'],
        market: '$12.4B by 2035',
        growth: '250% annual growth',
        href: '/quantum-content-generation-studio'
      },
      {
        name: 'AI Quantum Customer Success',
        description: 'Intelligent customer success platform that uses quantum computing and AI to predict and prevent customer churn.',
        price: '$2,499/month',
        features: ['Quantum churn prediction', 'AI customer insights', 'Automated workflows', 'Predictive support'],
        market: '$18.7B by 2035',
        growth: '350% annual growth',
        href: '/ai-quantum-customer-success'
      }
    ]
  }
];

const UltraFuturisticServiceShowcase2034: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2034 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI, quantum computing, and emerging technology services. 
            Transform your business with solutions that were once science fiction.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-12"
            >
              {/* Category Header */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                    <p className="text-lg text-gray-400">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                      {/* Service Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Service Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                              <span className="text-sm text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Market Info */}
                        <div className="pt-4 border-t border-gray-700/50">
                          <div className="flex justify-between items-center text-sm text-gray-400">
                            <span>Market: {service.market}</span>
                            <span className="text-green-400">↑ {service.growth}</span>
                          </div>
                        </div>

                        {/* Price and CTA */}
                        <div className="pt-4 flex items-center justify-between">
                          <div className="text-3xl font-bold text-white">
                            {service.price}
                            <span className="text-lg text-gray-400">/month</span>
                          </div>
                          <Link
                            href={service.href}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                          >
                            <span>Explore</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary 2034 services. Get in touch to discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>Call {contactInfo.mobile}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticServiceShowcase2034;