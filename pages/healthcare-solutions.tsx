import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Database, Brain, Cpu, Rocket, Lock } from 'lucide-react';

export default function HealthcareSolutions() {
  const features = [
    {
      icon: Heart,
      title: "Patient Centered",
      description: "Solutions designed to improve patient outcomes and experience"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare privacy and security regulations"
    },
    {
      icon: Users,
      title: "Provider Focused",
      description: "Tools that enhance healthcare provider efficiency and care quality"
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Advanced security for sensitive patient and medical data"
    },
    {
      icon: Brain,
      title: "AI Powered",
      description: "Intelligent solutions for diagnosis, treatment, and patient care"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Meet all healthcare industry standards and requirements"
    }
  ];

  const solutions = [
    {
      title: "Healthcare AI Platform",
      href: "/healthcare-ai-platform",
      description: "AI solutions for diagnosis, treatment planning, and patient care"
    },
    {
      title: "Patient Management",
      href: "/patient-management",
      description: "Comprehensive patient data management and care coordination"
    },
    {
      title: "Telemedicine Platform",
      href: "/telemedicine-platform",
      description: "Secure video consultations and remote patient monitoring"
    },
    {
      title: "Medical Analytics",
      href: "/medical-analytics",
      description: "Data-driven insights for improved healthcare outcomes"
    },
    {
      title: "Electronic Health Records",
      href: "/electronic-health-records",
      description: "Modern EHR systems with AI-powered insights"
    },
    {
      title: "Healthcare Security",
      href: "/healthcare-security",
      description: "Comprehensive security for healthcare organizations"
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
                Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform healthcare delivery with AI-powered solutions designed for modern medical practices. 
                Improve patient outcomes while maintaining the highest security standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Healthcare Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed for healthcare success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.a
                  key={index}
                  href={solution.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300">{solution.description}</p>
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our healthcare experts help you improve patient care and outcomes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
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