import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Shield, Zap, Brain, Globe } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Documentation() {
  const docSections = [
    {
      icon: <BookOpen className="w-12 h-12 text-cyan-400" />,
      title: "Getting Started",
      description: "Quick start guides and tutorials for all our platforms",
      href: "/docs/getting-started"
    },
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "API Documentation",
      description: "Comprehensive API reference and integration guides",
      href: "/api-docs"
    },
    {
      icon: <Code className="w-12 h-12 text-purple-400" />,
      title: "SDKs & Libraries",
      description: "Client libraries and SDKs for popular programming languages",
      href: "/docs/sdks"
    },
    {
      icon: <Database className="w-12 h-12 text-green-400" />,
      title: "Database Guides",
      description: "Database setup, optimization, and management guides",
      href: "/docs/databases"
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: "Security & Compliance",
      description: "Security best practices and compliance documentation",
      href: "/docs/security"
    },
    {
      icon: <Zap className="w-12 h-12 text-pink-400" />,
      title: "Performance & Scaling",
      description: "Performance optimization and scaling strategies",
      href: "/docs/performance"
    }
  ];

  const quickLinks = [
    { title: "AI Platform Setup", href: "/docs/ai-platform-setup" },
    { title: "Quantum Computing Guide", href: "/docs/quantum-computing" },
    { title: "Cloud Infrastructure", href: "/docs/cloud-infrastructure" },
    { title: "Cybersecurity Best Practices", href: "/docs/cybersecurity" },
    { title: "Data Analytics Platform", href: "/docs/data-analytics" },
    { title: "Process Automation", href: "/docs/process-automation" }
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
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, tutorials, and reference materials to help you 
                get the most out of our cutting-edge technology platforms and solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {docSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = section.href}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{section.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Quick Links</h2>
              <p className="text-xl text-gray-300">Popular documentation and guides</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-6 bg-black/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group hover:bg-black/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {link.title}
                    </span>
                    <Globe className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </a>
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
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Need Help Getting Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our technical team is here to help you succeed with our platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  View Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}