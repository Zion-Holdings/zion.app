import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Microscope, Cpu, Shield,
  ArrowRight, Star, CheckCircle, Zap, Globe
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticBackground2030 from '../components/backgrounds/UltraFuturisticBackground2030';

export default function ProductsListPage() {
  const productCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-violet-600 to-purple-600',
      products: [
        {
          name: 'AI Consciousness Platform',
          description: 'Revolutionary AI system with true consciousness and emotional intelligence',
          price: '$1,999/month',
          features: ['Emotional Intelligence', 'Conscious Decision Making', 'Self-Learning', 'Ethical AI']
        },
        {
          name: 'Emotional Intelligence AI',
          description: 'AI that understands and responds to human emotions',
          price: '$1,299/month',
          features: ['Emotion Recognition', 'Sentiment Analysis', 'Empathetic Responses', 'Human-like Interaction']
        },
        {
          name: 'AI Creativity Orchestrator',
          description: 'AI-powered creative content generation and management',
          price: '$1,799/month',
          features: ['Content Generation', 'Creative Collaboration', 'Style Transfer', 'Multi-Media Support']
        },
        {
          name: 'Autonomous Business Manager',
          description: 'AI system that autonomously manages business operations',
          price: '$3,999/month',
          features: ['Process Automation', 'Decision Making', 'Resource Optimization', 'Performance Analytics']
        }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-600 to-blue-600',
      products: [
        {
          name: 'Quantum Security Gateway',
          description: 'Unbreakable quantum encryption for enterprise security',
          price: '$3,999/month',
          features: ['Quantum Cryptography', 'Unbreakable Encryption', 'Real-time Security', 'Compliance Ready']
        },
        {
          name: 'Quantum Learning Platform',
          description: 'Quantum-powered machine learning and AI training',
          price: '$899/month',
          features: ['Quantum ML', 'Faster Training', 'Better Accuracy', 'Scalable Computing']
        },
        {
          name: 'Quantum Trading Platform',
          description: 'Quantum algorithms for financial trading and analysis',
          price: '$4,999/month',
          features: ['Quantum Algorithms', 'Real-time Analysis', 'Risk Assessment', 'Portfolio Optimization']
        },
        {
          name: 'Quantum Cloud Infrastructure',
          description: 'Quantum computing resources in the cloud',
          price: '$4,999/month',
          features: ['Quantum Access', 'Scalable Resources', 'Pay-per-use', 'Global Network']
        }
      ]
    },
    {
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-teal-600 to-emerald-600',
      products: [
        {
          name: 'Space Mining Automation',
          description: 'Autonomous systems for space resource extraction',
          price: '$8,999/month',
          features: ['Autonomous Mining', 'Resource Detection', 'Efficient Extraction', 'Safety Systems']
        },
        {
          name: 'Metaverse Platform',
          description: 'Immersive virtual world creation and management',
          price: '$2,499/month',
          features: ['3D World Building', 'User Interaction', 'Content Creation', 'Scalable Infrastructure']
        },
        {
          name: 'Quantum Research Platform',
          description: 'Advanced research tools for quantum experiments',
          price: '$3,999/month',
          features: ['Quantum Simulations', 'Research Tools', 'Data Analysis', 'Collaboration Features']
        },
        {
          name: 'AI Research Assistant',
          description: 'AI-powered research and development support',
          price: '$899/month',
          features: ['Research Automation', 'Data Analysis', 'Literature Review', 'Hypothesis Testing']
        }
      ]
    },
    {
      title: 'Biotechnology',
      icon: Microscope,
      color: 'from-green-600 to-emerald-600',
      products: [
        {
          name: 'DNA Computing Platform',
          description: 'Biological computing using DNA molecules',
          price: '$5,999/month',
          features: ['DNA Processing', 'Biological Computing', 'High Efficiency', 'Low Energy']
        },
        {
          name: 'Personalized Nutrition AI',
          description: 'AI-powered personalized nutrition recommendations',
          price: '$599/month',
          features: ['Personalized Plans', 'Health Monitoring', 'Diet Optimization', 'Progress Tracking']
        },
        {
          name: 'Predictive Health Analytics',
          description: 'AI-driven health prediction and prevention',
          price: '$1,599/month',
          features: ['Health Prediction', 'Risk Assessment', 'Preventive Care', 'Data Integration']
        },
        {
          name: 'Research Automation',
          description: 'Automated laboratory and research processes',
          price: '$1,999/month',
          features: ['Lab Automation', 'Data Collection', 'Process Optimization', 'Quality Control']
        }
      ]
    },
    {
      title: 'Enterprise IT',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      products: [
        {
          name: 'Autonomous DevOps Platform',
          description: 'AI-powered DevOps automation and optimization',
          price: '$2,999/month',
          features: ['CI/CD Automation', 'Infrastructure Management', 'Performance Monitoring', 'Auto-scaling']
        },
        {
          name: 'IT Operations Center',
          description: 'Centralized IT operations management',
          price: '$6,999/month',
          features: ['Centralized Control', 'Real-time Monitoring', 'Incident Management', 'Performance Analytics']
        },
        {
          name: 'AI-Powered Security',
          description: 'Intelligent cybersecurity threat detection',
          price: '$2,999/month',
          features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Security Intelligence']
        },
        {
          name: 'Intelligent Data Governance',
          description: 'AI-driven data management and compliance',
          price: '$7,999/month',
          features: ['Data Classification', 'Compliance Monitoring', 'Privacy Protection', 'Audit Trails']
        }
      ]
    }
  ];

  return (
    <UltraFuturisticBackground2030>
      <Head>
        <title>Products & Services - Zion Tech Group | Revolutionary 2029 Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive portfolio of revolutionary technology products and services including AI consciousness, quantum computing, space technology, and biotechnology." />
        <meta name="keywords" content="Zion Tech Group products, AI services, quantum computing services, space technology services, biotechnology services, enterprise IT solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Products & Services - Zion Tech Group" />
        <meta property="og:description" content="Explore our revolutionary technology products and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/products" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products & Services - Zion Tech Group" />
        <meta name="twitter:description" content="Explore our revolutionary technology products and services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://ziontechgroup.com/products" />
      </Head>

      <UltraFuturisticNavigation2030 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Products & Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Discover our revolutionary 2029 technology solutions that are transforming industries and shaping the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Revolutionary solutions that push the boundaries of what's possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {product.name}
                          </h3>
                          <div className="text-2xl font-bold text-cyan-400">
                            {product.price}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                          >
                            Learn More
                          </motion.button>
                          
                          <div className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <span className="text-sm font-medium">Get Started</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Revolutionary Technology?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 21-day free trial today and experience the future of business technology. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2030 />
    </UltraFuturisticBackground2030>
  );
}
