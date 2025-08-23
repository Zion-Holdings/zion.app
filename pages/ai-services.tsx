import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Shield, BarChart3, Globe, Rocket, Atom } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIServices() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI Content Automation",
      description: "Revolutionary AI-powered content generation and management platform",
      href: "/intelligent-content-automation-platform"
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-400" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models and AI infrastructure for enterprise applications",
      href: "/mlops-starter"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-400" />,
      title: "Process Automation",
      description: "Intelligent automation systems that transform business operations",
      href: "/intelligent-supply-chain-optimization"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "AI Security",
      description: "Advanced AI-powered cybersecurity and threat detection",
      href: "/quantum-cybersecurity-platform"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-400" />,
      title: "AI Analytics",
      description: "Intelligent data analysis and business intelligence platforms",
      href: "/intelligent-hr-analytics-platform"
    },
    {
      icon: <Globe className="w-12 h-12 text-pink-400" />,
      title: "AI Infrastructure",
      description: "Scalable AI infrastructure and cloud-native AI solutions",
      href: "/llm-gateway"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI & Machine Learning Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future with cutting-edge AI consciousness, quantum computing, 
                and autonomous systems that transform businesses and accelerate human progress.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = service.href}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you implement cutting-edge solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
