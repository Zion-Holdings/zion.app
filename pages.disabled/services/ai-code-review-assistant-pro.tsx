import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, 
  CheckCircle, 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  Bug, 
  Clock,
  ArrowRight,
  Star,
  GitBranch,
  Globe,
  Bot,
  Smartphone,
  Mail,
  Phone,
  Eye,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

export default function AICodeReviewAssistantPro() {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Automated Code Review',
      description: 'AI-powered analysis of code quality, security vulnerabilities, and best practices'
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'Bug Detection',
      description: 'Advanced static analysis to identify potential bugs and runtime issues'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Scanning',
      description: 'Comprehensive security analysis to detect vulnerabilities and compliance issues'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Code Optimization',
      description: 'Intelligent suggestions for performance improvements and code refactoring'
    }
  ];

  const capabilities = [
    'Static Code Analysis',
    'Security Vulnerability Detection',
    'Code Quality Metrics',
    'Performance Optimization',
    'Best Practice Enforcement',
    'Compliance Checking',
    'Documentation Review',
    'Test Coverage Analysis',
    'Dependency Scanning',
    'Integration APIs'
  ];

  const languages = [
    'JavaScript/TypeScript',
    'Python',
    'Java',
    'C/C++',
    'Go',
    'Rust',
    'PHP',
    'Ruby',
    'C#',
    'Swift',
    'Kotlin',
    'Scala'
  ];

  const benefits = [
    'Faster Code Reviews',
    'Improved Code Quality',
    'Reduced Security Risks',
    'Consistent Standards',
    'Knowledge Sharing',
    'Cost Reduction',
    'Faster Development',
    'Better Maintainability'
  ];

  return (
    <Layout>
      <Head>
        <title>AI Code Review Assistant Pro | Zion Tech Group</title>
        <meta name="description" content="AI-powered code review and quality assurance system. Automatically analyze code quality, security, and performance with intelligent insights." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-code-review-assistant-pro" />
      </Head>

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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent mb-6">
                AI Code Review Assistant Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                AI-powered code review and quality assurance system. 
                Automatically analyze code quality, security, and performance with intelligent insights.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/pricing" 
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Code Analysis
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Code Review Assistant Pro provides comprehensive analysis 
                and insights for better code quality and security.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by cutting-edge AI and machine learning for intelligent code analysis.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold text-sm">{capability}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Language Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive code analysis across popular programming languages and frameworks.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300 text-center"
                >
                  <div className="text-white font-semibold">{language}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development process with AI-powered code quality assurance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold text-sm">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center p-12 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Improve Your Code Quality?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Elevate your development standards with intelligent AI code review. 
                Get started with our AI Code Review Assistant Pro today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Contact Our Experts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/market-pricing" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}