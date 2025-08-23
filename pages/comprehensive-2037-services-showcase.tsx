import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, 
  Brain, 
  Atom, 
  Rocket, 
  Cpu, 
  Target, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Database,
  Cloud,
  Globe,
  Users,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const Comprehensive2037ServicesShowcase: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Consciousness',
      description: 'Revolutionary AI platforms and consciousness evolution',
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      services: [
        {
          name: 'AI Consciousness Evolution Platform',
          description: 'Advanced AI consciousness development and evolution',
          href: '/ai-consciousness-evolution-platform',
          featured: true
        },
        {
          name: 'AI Emotional Intelligence Trainer',
          description: 'AI-powered emotional intelligence development',
          href: '/ai-emotional-intelligence-trainer'
        },
        {
          name: 'Autonomous Business Operations Engine',
          description: 'Fully autonomous business process automation',
          href: '/autonomous-business-operations-engine'
        }
      ]
    },
    {
      title: 'Quantum Technology',
      description: 'Breakthrough quantum computing and communication',
      icon: <Atom className="w-12 h-12 text-purple-400" />,
      services: [
        {
          name: 'Quantum Cybersecurity Sentinel',
          description: 'Quantum-resistant security solutions',
          href: '/quantum-cybersecurity-sentinel',
          featured: true
        },
        {
          name: 'Quantum Supply Chain Optimizer',
          description: 'Quantum-powered supply chain optimization',
          href: '/quantum-supply-chain-optimizer'
        },
        {
          name: 'Quantum Financial Risk Manager',
          description: 'Quantum algorithms for financial risk assessment',
          href: '/quantum-financial-risk-manager'
        }
      ]
    },
    {
      title: 'Space Technology',
      description: 'Advanced space exploration and resource management',
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      services: [
        {
          name: 'Space Resource Mining Platform',
          description: 'AI-powered space resource extraction',
          href: '/space-resource-mining-platform',
          featured: true
        },
        {
          name: 'AI-Powered Space Technology',
          description: 'Intelligent space exploration systems',
          href: '/ai-powered-space-technology'
        },
        {
          name: 'Quantum Space Communication',
          description: 'Quantum-secured space communication',
          href: '/quantum-space-communication'
        }
      ]
    },
    {
      title: 'Enterprise IT Solutions',
      description: 'Next-generation enterprise infrastructure',
      icon: <Cpu className="w-12 h-12 text-green-400" />,
      services: [
        {
          name: 'Autonomous Cloud Orchestrator',
          description: 'Self-managing cloud infrastructure',
          href: '/autonomous-cloud-orchestrator',
          featured: true
        },
        {
          name: 'AI-Powered Enterprise Architecture',
          description: 'Intelligent enterprise architecture design',
          href: '/ai-powered-enterprise-architecture'
        },
        {
          name: 'Zero Trust Security Platform',
          description: 'Advanced zero trust security implementation',
          href: '/zero-trust-security-platform'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Innovative business automation platforms',
      icon: <Target className="w-12 h-12 text-orange-400" />,
      services: [
        {
          name: 'AI Autonomous Content Factory',
          description: 'Automated content creation and management',
          href: '/ai-autonomous-content-factory',
          featured: true
        },
        {
          name: 'Autonomous Business Intelligence',
          description: 'Self-driving business analytics',
          href: '/autonomous-business-intelligence'
        },
        {
          name: 'AI Autonomous Customer Success',
          description: 'Automated customer success management',
          href: '/ai-autonomous-customer-success'
        }
      ]
    }
  ];

  const features = [
    'AI-powered automation and optimization',
    'Quantum computing integration',
    'Space technology applications',
    'Advanced cybersecurity solutions',
    'Autonomous business operations',
    'Next-generation cloud infrastructure'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <Star className="w-20 h-20 text-yellow-400" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent mb-6">
                2037 Services Showcase
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto">
                Experience the future of technology with our revolutionary 2037 solutions. 
                From AI consciousness to quantum space technology, we're building tomorrow's innovations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-cyan-600 text-white font-semibold rounded-2xl hover:from-yellow-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore 2037 Solutions
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center px-10 py-5 border border-yellow-500/50 text-yellow-400 font-semibold rounded-2xl hover:bg-yellow-500/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary Technology Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover our comprehensive range of cutting-edge solutions 
                designed to transform industries and accelerate progress.
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10"
                >
                  <div className="flex items-center mb-8">
                    {category.icon}
                    <div className="ml-6">
                      <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                      <p className="text-xl text-gray-300">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className={`bg-gray-700/50 backdrop-blur-sm border rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                          service.featured ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-gray-600/50'
                        }`}
                      >
                        {service.featured && (
                          <div className="flex items-center mb-3">
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            <span className="text-xs text-yellow-400 font-semibold">Featured</span>
                          </div>
                        )}
                        <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                        <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                        <Link 
                          href={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why 2037 Technology?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2037 solutions represent the pinnacle of technological advancement, 
                designed to solve tomorrow's challenges today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ready for 2037?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join the future of technology with our revolutionary 2037 solutions. 
                Let's build tomorrow's innovations together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-cyan-600 text-white font-semibold rounded-2xl hover:from-yellow-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your 2037 Journey
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-10 py-5 border border-yellow-500/50 text-yellow-400 font-semibold rounded-2xl hover:bg-yellow-500/10 transition-all duration-300"
                >
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Comprehensive2037ServicesShowcase;