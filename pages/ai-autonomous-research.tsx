import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Brain, 
  TestTube, 
  BookOpen, 
  TrendingUp, 
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Database,
  Lightbulb
} from 'lucide-react';

const AIAutonomousResearch: React.FC = () => {
  const researchAreas = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Consciousness",
      description: "Advanced research into artificial consciousness and self-aware systems"
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Quantum AI",
      description: "Exploration of quantum computing applications in artificial intelligence"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Space Technology",
      description: "Research into AI applications for space exploration and colonization"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Neural Networks",
      description: "Advanced neural network architectures and learning algorithms"
    }
  ];

  const capabilities = [
    "Autonomous hypothesis generation and testing",
    "Real-time data analysis and pattern recognition",
    "Cross-domain knowledge synthesis",
    "Predictive modeling and forecasting",
    "Automated literature review and synthesis",
    "Collaborative research with human scientists",
    "Continuous learning and adaptation",
    "Ethical AI research and governance"
  ];

  const applications = [
    {
      field: "Scientific Discovery",
      research: ["Drug Discovery, Material Science, Climate Modeling, Astrophysics""
    },
    {
      field: "Technology Innovation",
      research: ["Quantum Computing, Robotics, Biotechnology, Energy Systems""
    },
    {
      field: "Social Sciences",
      research: ["Economics, Psychology, Sociology, Political Science""
    },
    {
      field: "Environmental Studies",
      research: ["Climate Change, Biodiversity, Sustainability, Resource Management""
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Research
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize scientific discovery with autonomous AI systems that conduct research, 
                generate hypotheses, and make breakthrough discoveries 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 inline mr-2" />
                  Explore Research
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Start Research
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Research Focus Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous AI research spans cutting-edge domains that are shaping the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="text-indigo-400 mb-4 flex justify-center">{area.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Research Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous AI systems deliver unprecedented research capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Research Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous research AI is transforming discovery across multiple fields
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{application.field}</h3>
                  <ul className="space-y-2">
                    {application.research.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-indigo-400 mb-2">1000x</div>
                <div className="text-gray-300 text-lg">Faster Discovery</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Research Operation</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
                <div className="text-gray-300 text-lg">Knowledge Synthesis</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Accelerate Discovery?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of autonomous AI-powered research and discovery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Research
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousResearch;