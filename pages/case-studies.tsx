import React from 'react';
import { motion } from 'framer-motion';
import { Star, Target, Users, CheckCircle, ArrowRight, Zap, Globe, Award, Heart, Rocket, Brain, Atom, Building, TrendingUp, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function CaseStudies() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm mb-6">
                <Star className="w-4 h-4" />
                Success Stories
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Case
                <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Studies
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-world examples of how our AI consciousness and quantum technology solutions are transforming industries
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                >
                  View All Case Studies
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-violet-500/30 text-violet-300 font-semibold rounded-xl hover:bg-violet-500/10 transition-all duration-300"
                >
                  Submit Your Story
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies Section */}
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transformative implementations that showcase the power of our revolutionary technology
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "AI Consciousness in Healthcare: Revolutionizing Patient Care",
                  company: "MedTech Solutions Inc",
                  industry: "Healthcare",
                  challenge: "Traditional patient monitoring systems lacked emotional intelligence and couldn't provide personalized care recommendations.",
                  solution: "Implemented our AI consciousness platform with emotional intelligence capabilities for patient interaction and care planning.",
                  results: [
                    "40% improvement in patient satisfaction scores",
                    "35% reduction in readmission rates",
                    "Personalized care plans for 10,000+ patients",
                    "24/7 emotional support for patients"
                  ],
                  icon: <Brain className="w-16 h-16 text-violet-400" />
                },
                {
                  title: "Quantum Computing in Financial Services: Risk Assessment Revolution",
                  company: "Quantum Finance Corp",
                  industry: "Financial Services",
                  challenge: "Complex risk assessment calculations took days to complete, limiting real-time decision making.",
                  solution: "Deployed our quantum computing platform for real-time risk assessment and portfolio optimization.",
                  results: [
                    "99.9% faster risk calculations",
                    "Real-time portfolio optimization",
                    "Enhanced fraud detection accuracy",
                    "Improved regulatory compliance"
                  ],
                  icon: <Atom className="w-16 h-16 text-purple-400" />
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 border border-violet-500/30 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {study.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <p className="text-violet-300">{study.company}</p>
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Case Studies Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-violet-900/30 to-purple-900/30">
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our technology is transforming different sectors and industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Manufacturing AI Transformation",
                  company: "Global Manufacturing Co",
                  industry: "Manufacturing",
                  results: "50% increase in production efficiency, 30% reduction in defects",
                  icon: <Building className="w-12 h-12 text-violet-400" />
                },
                {
                  title: "Space Resource Intelligence",
                  company: "Space Dynamics Ltd",
                  industry: "Aerospace",
                  results: "Autonomous satellite operations, 60% cost reduction",
                  icon: <Rocket className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Retail AI Personalization",
                  company: "Smart Retail Solutions",
                  industry: "Retail",
                  results: "45% increase in customer engagement, 25% boost in sales",
                  icon: <TrendingUp className="w-12 h-12 text-indigo-400" />
                },
                {
                  title: "Government AI Security",
                  company: "Federal Security Agency",
                  industry: "Government",
                  results: "99.9% threat detection accuracy, 40% faster response times",
                  icon: <Shield className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Education AI Tutoring",
                  company: "EduTech Innovations",
                  industry: "Education",
                  results: "Personalized learning paths, 35% improvement in test scores",
                  icon: <Users className="w-12 h-12 text-green-400" />
                },
                {
                  title: "Energy AI Optimization",
                  company: "Green Energy Corp",
                  industry: "Energy",
                  results: "Smart grid management, 30% reduction in energy waste",
                  icon: <Zap className="w-12 h-12 text-yellow-400" />
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-violet-800/30 to-purple-800/30 border border-violet-500/20 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {study.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-violet-300 mb-2">{study.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{study.industry}</p>
                  <p className="text-gray-300 text-sm">{study.results}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Impact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology Impact Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantified results across all our case studies and implementations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "500+", label: "Successful Implementations", description: "Across various industries worldwide" },
                { metric: "40%", label: "Average Efficiency Gain", description: "Improvement in operational efficiency" },
                { metric: "99.9%", label: "System Reliability", description: "Uptime and performance consistency" },
                { metric: "$2B+", label: "Value Generated", description: "Total business value created for clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {stat.metric}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-400">{stat.description}</p>
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of organizations already transforming their operations with our technology
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}