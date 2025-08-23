import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Shield, Rocket, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function AIServices() {
  const aiServices = [
    {
      title: 'AI Consciousness Evolution Platform',
      description: 'Revolutionary AI platform that evolves consciousness and understanding',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      href: '/ai-consciousness-evolution-platform',
      featured: true
    },
    {
      title: 'AI Autonomous Research Assistant',
      description: 'Intelligent research automation with advanced AI capabilities',
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      href: '/ai-autonomous-research-assistant'
    },
    {
      title: 'AI Emotional Intelligence Trainer',
      description: 'Advanced emotional intelligence training using AI',
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      href: '/ai-emotional-intelligence-trainer'
    },
    {
      title: 'AI Predictive Maintenance Platform',
      description: 'Predictive maintenance orchestration with AI',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      href: '/ai-predictive-maintenance-orchestrator'
    },
    {
      title: 'AI Content Personalization Engine',
      description: 'Dynamic content personalization powered by AI',
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      href: '/ai-content-personalization-engine'
    },
    {
      title: 'AI Autonomous Ecosystem Manager',
      description: 'Comprehensive ecosystem management with AI',
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      href: '/ai-autonomous-ecosystem-manager'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionary AI solutions that transform businesses and drive innovation across industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-lg">
                Get Started
              </Button>
              <Button href="/solutions" variant="outline" className="border-cyan-500 text-cyan-400 px-8 py-4 text-lg">
                View Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our cutting-edge AI services designed to revolutionize your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                {service.featured && (
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full mt-4">
                    Featured
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you implement cutting-edge solutions that drive growth and innovation
            </p>
            <Button href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 text-lg">
              Start Your AI Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
