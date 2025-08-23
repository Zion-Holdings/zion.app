import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Rocket, Star } from 'lucide-react';
import Link from 'next/link';

const AIServices: React.FC = () => {
  const aiServices = [
    {
      category: 'AI Consciousness & Evolution',
      services: [
        { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', description: 'Advanced AI consciousness development platform' },
        { name: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training', description: 'Emotional intelligence enhancement for AI systems' },
        { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework', description: 'Ethical AI development and governance' }
      ]
    },
    {
      category: 'Autonomous AI Systems',
      services: [
        { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations-platform', description: 'Fully autonomous business process automation' },
        { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', description: 'Intelligent customer service automation' },
        { name: 'AI Autonomous HR Platform', href: '/ai-autonomous-hr-platform', description: 'Human resources automation platform' },
        { name: 'AI Autonomous Marketing Platform', href: '/ai-autonomous-marketing-platform', description: 'Marketing campaign automation' },
        { name: 'AI Autonomous Sales Platform', href: '/ai-autonomous-sales-platform', description: 'Sales process automation' }
      ]
    },
    {
      category: 'AI Business Intelligence',
      services: [
        { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Comprehensive business intelligence platform' },
        { name: 'AI Customer Journey Analytics', href: '/ai-customer-journey-analytics', description: 'Customer journey optimization' },
        { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial analysis and insights' },
        { name: 'AI Market Research', href: '/ai-market-research', description: 'Market intelligence and analysis' }
      ]
    },
    {
      category: 'AI Content & Creativity',
      services: [
        { name: 'AI Content Generator', href: '/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
        { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'Creative AI assistance' },
        { name: 'AI Video Editing', href: '/ai-video-editing', description: 'Automated video editing' }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-16 h-16 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI Services
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI solutions that transform businesses through consciousness evolution, 
                autonomous operations, and intelligent decision-making.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From autonomous business operations to consciousness evolution, our AI services 
                cover every aspect of modern enterprise needs.
              </p>
            </motion.div>

            <div className="space-y-16">
              {aiServices.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={service.href}>
                          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full">
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {service.description}
                            </p>
                            <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                              Learn More
                              <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can revolutionize your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    View All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIServices;
