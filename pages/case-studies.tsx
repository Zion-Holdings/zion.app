import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Globe, Brain, Atom, Rocket, CheckCircle, Star, Zap } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <Trophy className="w-4 h-4" />
                Success Stories
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Real-world success stories showcasing our revolutionary technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                  View All Studies
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 rounded-2xl hover:bg-emerald-500/10 transition-all duration-300">
                  Submit Your Story
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transformative results achieved with our cutting-edge solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: "AI Consciousness Revolution",
                  company: "Global Tech Corp",
                  industry: "Technology",
                  challenge: "Needed advanced AI systems with emotional intelligence for customer service",
                  solution: "Implemented AI Consciousness Evolution 2040 platform",
                  results: [
                    "300% increase in customer satisfaction",
                    "85% reduction in support tickets",
                    "$2.5M annual cost savings"
                  ],
                  metrics: {
                    satisfaction: "98%",
                    efficiency: "300%",
                    savings: "$2.5M"
                  }
                },
                {
                  icon: <Atom className="w-12 h-12 text-blue-400" />,
                  title: "Quantum Computing Breakthrough",
                  company: "Financial Services Inc",
                  industry: "Finance",
                  challenge: "Required exponential computing power for risk modeling",
                  solution: "Deployed Quantum Neural Ecosystem 2040",
                  results: [
                    "1000x faster risk calculations",
                    "Real-time market analysis",
                    "40% improvement in trading accuracy"
                  ],
                  metrics: {
                    performance: "1000x",
                    accuracy: "40%",
                    speed: "Real-time"
                  }
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {study.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <p className="text-emerald-400 font-semibold">{study.company}</p>
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-500/20">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Success Stories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven results across diverse industries and use cases
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-purple-400" />,
                  title: "Healthcare Transformation",
                  description: "AI-powered diagnosis and patient care optimization",
                  results: "95% accuracy improvement"
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: "Global Supply Chain",
                  description: "Quantum-powered logistics and optimization",
                  results: "60% cost reduction"
                },
                {
                  icon: <Rocket className="w-8 h-8 text-cyan-400" />,
                  title: "Space Exploration",
                  description: "Autonomous systems for deep space missions",
                  results: "100% mission success"
                },
                {
                  icon: <Zap className="w-8 h-8 text-emerald-400" />,
                  title: "Energy Optimization",
                  description: "AI-driven renewable energy management",
                  results: "45% efficiency gain"
                },
                {
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  title: "Retail Innovation",
                  description: "Personalized shopping experiences with AI",
                  results: "200% revenue increase"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
                  title: "Financial Services",
                  description: "Quantum risk assessment and trading",
                  results: "80% risk reduction"
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{story.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{story.title}</h3>
                  <p className="text-gray-400 mb-4">{story.description}</p>
                  <div className="text-emerald-400 font-semibold">{story.results}</div>
                  <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300">
                    Read Full Story
                  </button>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the companies already transforming their business with our revolutionary technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 rounded-2xl hover:bg-emerald-500/10 transition-all duration-300">
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

export default CaseStudies;