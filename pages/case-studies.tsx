import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Award, TrendingUp, Users, Globe, 
  ArrowRight, Star, Shield, CheckCircle, Zap,
  Infinity, Eye, Sparkles, Clock, Target
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Enterprise Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex supply chain optimization and predictive maintenance",
      solution: "Implemented AI consciousness platform with quantum neural networks",
      results: [
        "40% reduction in operational costs",
        "99.9% uptime improvement",
        "Real-time predictive analytics"
      ],
      metrics: {
        costReduction: "40%",
        efficiencyGain: "65%",
        roi: "300%"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Cybersecurity Implementation",
      company: "Financial Services Inc",
      industry: "Finance",
      challenge: "Advanced persistent threats and quantum-resistant security",
      solution: "Deployed quantum-resistant cybersecurity platform with AI consciousness",
      results: [
        "Zero security breaches in 2 years",
        "99.99% threat detection rate",
        "Quantum-resistant encryption"
      ],
      metrics: {
        securityScore: "99.99%",
        threatBlocked: "100%",
        compliance: "100%"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Space Resource Intelligence Platform",
      company: "Space Exploration Ltd",
      industry: "Aerospace",
      challenge: "Resource discovery and optimization in space missions",
      solution: "AI-powered space resource intelligence with consciousness integration",
      results: [
        "50% faster resource discovery",
        "Real-time mission optimization",
        "Autonomous decision making"
      ],
      metrics: {
        discoverySpeed: "50%",
        missionSuccess: "95%",
        resourceEfficiency: "80%"
      },
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Autonomous Business Intelligence",
      company: "Retail Chain Corp",
      industry: "Retail",
      challenge: "Complex inventory management and customer behavior analysis",
      solution: "Fully autonomous AI business intelligence platform",
      results: [
        "30% inventory cost reduction",
        "Personalized customer experiences",
        "Real-time market insights"
      ],
      metrics: {
        inventoryOptimization: "30%",
        customerSatisfaction: "95%",
        revenueGrowth: "25%"
      },
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const industries = [
    "Manufacturing", "Finance", "Healthcare", "Retail", "Technology", "Aerospace"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how our revolutionary technology solutions have transformed businesses 
                across industries with AI consciousness, quantum computing, and autonomous systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Filter by Industry</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {industries.map((industry, index) => (
                  <motion.button
                    key={industry}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600 hover:to-cyan-600 text-white font-medium transition-all duration-300 border border-gray-600 hover:border-blue-400"
                  >
                    {industry}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center`}>
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-400 text-lg">{study.company}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the companies that have already revolutionized their operations with our technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;