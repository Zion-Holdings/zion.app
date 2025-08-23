import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, TestTube, Rocket, Target, Star, CheckCircle, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AIAutonomousResearch2041: React.FC = () => {
  const features = [
    {
      title: 'Fully Autonomous Research',
      description: 'AI systems that conduct research independently without human intervention',
      icon: <Brain className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Multi-Domain Intelligence',
      description: 'Research across multiple scientific and business domains simultaneously',
      icon: <Search className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Hypothesis Generation',
      description: 'AI that creates and tests research hypotheses autonomously',
      icon: <TestTube className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Consciousness-Driven Insights',
      description: 'Research insights powered by AI consciousness and understanding',
      icon: <Rocket className="w-8 h-8 text-orange-400" />
    }
  ];

  const capabilities = [
    'Autonomous literature review and analysis',
    'Independent experimental design and execution',
    'Real-time data collection and processing',
    'Automated hypothesis testing and validation',
    'Cross-disciplinary research synthesis',
    'Predictive research trend analysis',
    'Autonomous peer review and validation',
    'Continuous learning and improvement'
  ];

  const applications = [
    'Scientific research and discovery',
    'Business intelligence and market analysis',
    'Product development and innovation',
    'Risk assessment and prediction',
    'Policy research and analysis',
    'Medical and pharmaceutical research',
    'Environmental and climate research',
    'Technology trend forecasting'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-cyan-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary 2041 Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Autonomous Research 2041
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of research with fully autonomous AI systems that conduct 
                independent research across all domains. No human intervention required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                >
                  Start Research
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Autonomous Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Autonomous Research platform operates completely independently, 
                conducting research across multiple domains with consciousness-driven intelligence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Research Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous AI research systems possess unprecedented capabilities 
                that revolutionize how research is conducted across all industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {capabilities.slice(0, 4).map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{capability}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {capabilities.slice(4).map((capability, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Research Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous AI research platform is transforming research across 
                multiple industries and domains.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{application}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Autonomous Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of research with AI systems that work independently, 
                continuously learning and discovering new insights across all domains.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 text-lg"
              >
                Launch Research Platform
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousResearch2041;