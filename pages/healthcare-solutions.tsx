import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Users, Target, Zap, Globe, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function HealthcareSolutions() {
  const solutions = [
    {
      icon: <Heart className="w-12 h-12 text-cyan-400" />,
      title: "Healthcare AI Diagnostics",
      description: "AI-powered diagnostic tools and medical imaging analysis",
      href: "/ai-healthcare-diagnostics"
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: "AI-Powered Healthcare",
      description: "Intelligent healthcare solutions and patient care automation",
      href: "/healthcare-ai-solutions"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Healthcare Security",
      description: "HIPAA-compliant security and patient data protection",
      href: "/zero-trust-security-platform"
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Patient Experience",
      description: "Digital patient engagement and care coordination platforms",
      href: "/intelligent-content-automation-platform"
    },
    {
      icon: <Target className="w-12 h-12 text-yellow-400" />,
      title: "Clinical Analytics",
      description: "Advanced clinical data analytics and insights",
      href: "/intelligent-hr-analytics-platform"
    },
    {
      icon: <Zap className="w-12 h-12 text-pink-400" />,
      title: "Healthcare Automation",
      description: "Streamline healthcare operations with intelligent automation",
      href: "/ai-autonomous-business-operations"
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
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform healthcare delivery with AI-powered diagnostics, secure patient care platforms, 
                and intelligent healthcare automation solutions designed for modern medical practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = solution.href}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{solution.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{solution.description}</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our healthcare technology experts help you improve patient care and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}