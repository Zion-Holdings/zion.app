import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, 
  CheckCircle, 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  TestTube, 
  AlertTriangle,
  ArrowRight,
  Star,
  Users,
  Globe
} from 'lucide-react';

export default function AIEvaluationOrchestrator() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Comprehensive Model Testing',
      description: 'End-to-end evaluation of AI models across accuracy, bias, safety, and performance metrics'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety & Bias Detection',
      description: 'Advanced algorithms to identify and mitigate harmful outputs and biases in AI systems'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Detailed performance metrics and benchmarking against industry standards'
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Automated Testing',
      description: 'Continuous integration testing for AI models with automated quality gates'
    }
  ];

  const evaluationTypes = [
    'Accuracy & Reliability Testing',
    'Bias & Fairness Assessment',
    'Safety & Harm Prevention',
    'Performance Benchmarking',
    'Adversarial Testing',
    'Robustness Evaluation',
    'Explainability Analysis',
    'Compliance Verification'
  ];

  const industries = [
    'Healthcare & Medical AI',
    'Financial Services',
    'Legal & Compliance',
    'Education & Training',
    'Customer Service',
    'Content Generation',
    'Autonomous Systems',
    'Cybersecurity'
  ];

  return (
    <Layout>
      <Head>
        <title>AI Evaluation Orchestrator | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI model evaluation, testing, and safety assessment services. Ensure your AI systems are reliable, safe, and compliant." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-evaluation-orchestrator" />
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Evaluation Orchestrator
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive AI model evaluation, testing, and safety assessment services. 
                Ensure your AI systems are reliable, safe, and compliant with industry standards.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/pricing" 
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
                Comprehensive AI Evaluation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Evaluation Orchestrator provides end-to-end testing and validation 
                for AI systems across all critical dimensions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
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

        {/* Evaluation Types Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Evaluation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive testing and validation across all critical AI system dimensions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {evaluationTypes.map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-semibold">{type}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI evaluation services are trusted across diverse industries 
                where AI safety and reliability are critical.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center"
                >
                  <div className="text-white font-semibold">{industry}</div>
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
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center p-12 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Evaluate Your AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ensure your AI systems are safe, reliable, and compliant. 
                Get started with our comprehensive evaluation services today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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