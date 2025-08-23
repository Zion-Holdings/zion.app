import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Sparkles, Zap, Target, Users, Award, Clock, TrendingUp,
  Cpu, Shield, Globe, Rocket, Atom, Eye, Heart, Lightbulb
} from 'lucide-react';

const AIServices: React.FC = () => {
  const aiServices = [
    {
      title: "AI Consciousness & Evolution",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      services: [
        { name: "AI Consciousness Evolution 2029", href: "/ai-consciousness-evolution-2029", featured: true },
        { name: "AI Emotional Intelligence Training", href: "/ai-emotional-intelligence-training", featured: true },
        { name: "AI Autonomous Research Assistant", href: "/ai-autonomous-research-assistant" },
        { name: "AI Autonomous Business Operations", href: "/autonomous-business-operations-platform" }
      ]
    },
    {
      title: "AI-Powered Solutions",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      services: [
        { name: "AI Predictive Maintenance Platform", href: "/ai-predictive-maintenance-platform", featured: true },
        { name: "AI Content Personalization Engine", href: "/ai-content-personalization-engine" },
        { name: "AI Autonomous Ecosystem Manager", href: "/ai-autonomous-ecosystem-manager" },
        { name: "AI Ethics & Governance Framework", href: "/ai-ethics-governance-framework" }
      ]
    },
    {
      title: "AI Business Intelligence",
      icon: <Target className="w-8 h-8 text-green-400" />,
      services: [
        { name: "AI Customer Success Platform", href: "/ai-customer-success-platform", featured: true },
        { name: "AI Sales Intelligence Platform", href: "/ai-sales-intelligence-platform" },
        { name: "AI Financial Intelligence", href: "/ai-financial-intelligence" },
        { name: "AI Business Intelligence Suite", href: "/ai-business-intelligence-suite" }
      ]
    },
    {
      title: "AI Industry Solutions",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      services: [
        { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics", featured: true },
        { name: "AI Legal Contract Analyzer", href: "/ai-legal-contract-analyzer" },
        { name: "AI Sustainability Platform", href: "/ai-sustainability-platform" },
        { name: "AI Education Platform", href: "/ai-education-platform" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full">
                  <Brain className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI & Machine Learning Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary artificial intelligence solutions that transform businesses, 
                from consciousness evolution to autonomous operations and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Explore AI Services
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Services Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete AI Service Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive AI services cover every aspect of artificial intelligence, 
                from cutting-edge research to practical business applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between">
                        <a
                          href={service.href}
                          className="text-white/80 hover:text-white transition-colors flex items-center"
                        >
                          {service.featured && (
                            <Award className="w-4 h-4 text-yellow-400 mr-2" />
                          )}
                          {service.name}
                        </a>
                        {service.featured && (
                          <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Transform your business with our cutting-edge AI solutions. 
                From consciousness evolution to autonomous operations, we have the expertise to drive your success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIServices;
