import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Rocket, 
  Brain, 
  Atom, 
  Globe, 
  Zap,
  Target,
  TrendingUp,
  Users,
  Award,
  BookOpen
} from 'lucide-react';

const InnovationLab: React.FC = () => {
  const researchAreas = [
    {
      id: 1,
      title: 'Quantum Computing Research',
      description: 'Pioneering breakthroughs in quantum algorithms, quantum machine learning, and quantum cryptography.',
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      status: 'Active Research',
      progress: 85,
      keyProjects: [
        'Quantum Neural Networks',
        'Quantum-Secure Communication',
        'Quantum Optimization Algorithms'
      ]
    },
    {
      id: 2,
      title: 'AI Consciousness & Ethics',
      description: 'Exploring the boundaries of artificial consciousness and developing ethical AI frameworks.',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      status: 'Breakthrough Phase',
      progress: 92,
      keyProjects: [
        'AI Emotional Intelligence',
        'Consciousness Evolution Platform',
        'Ethical AI Governance'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Innovation',
      description: 'Advancing space exploration through AI-powered robotics, resource mining, and sustainable colonization.',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      status: 'Prototype Development',
      progress: 78,
      keyProjects: [
        'Autonomous Space Mining',
        'AI-Powered Space Robotics',
        'Sustainable Space Habitats'
      ]
    },
    {
      id: 4,
      title: 'Biocomputing & Neural Interfaces',
      description: 'Merging biological systems with computational technology for next-generation interfaces.',
      icon: <Zap className="w-8 h-8 text-green-400" />,
      status: 'Research Phase',
      progress: 65,
      keyProjects: [
        'Brain-Computer Interfaces',
        'Quantum Bio-Computing',
        'Neural Network Optimization'
      ]
    }
  ];

  const upcomingInnovations = [
    {
      title: 'Quantum Internet Infrastructure',
      description: 'Building the foundation for quantum-secure global communication networks.',
      timeline: 'Q2 2026',
      impact: 'Revolutionary'
    },
    {
      title: 'AI Autonomous Ecosystems',
      description: 'Self-sustaining AI systems that can manage complex business operations independently.',
      timeline: 'Q4 2026',
      impact: 'Transformative'
    },
    {
      title: 'Metaverse Development Platform',
      description: 'Next-generation tools for creating immersive digital experiences and virtual worlds.',
      timeline: 'Q1 2027',
      impact: 'Innovative'
    }
  ];

  const labStats = [
    { label: 'Research Projects', value: '25+', icon: <FlaskConical className="w-6 h-6" /> },
    { label: 'Team Members', value: '50+', icon: <Users className="w-6 h-6" /> },
    { label: 'Patents Filed', value: '15+', icon: <Award className="w-6 h-6" /> },
    { label: 'Publications', value: '100+', icon: <BookOpen className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <SEO 
        title="Innovation Lab | Zion Tech Group" 
        description="Explore our cutting-edge research and development initiatives in quantum computing, AI consciousness, space technology, and biocomputing."
        canonical="https://ziontechgroup.com/innovation-lab/"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <FlaskConical className="w-4 h-4" />
                <span>Innovation Lab</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Innovation Lab
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Where tomorrow's technology is born today. Our research teams are pushing the boundaries of what's possible in AI, quantum computing, and space technology.
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span>Breakthrough Research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span>Continuous Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Global Impact</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lab Statistics */}
        <section className="py-12 px-4 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {labStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-purple-500/20 rounded-xl"
                >
                  <div className="text-purple-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Active Research Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our multidisciplinary teams are working on cutting-edge technologies that will shape the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-purple-400">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-gray-300 mb-4">{area.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-400 font-medium">{area.status}</span>
                        <span className="text-sm text-gray-400">{area.progress}% Complete</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Key Projects */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Projects</h4>
                    <ul className="space-y-2">
                      {area.keyProjects.map((project, i) => (
                        <li key={i} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Innovations */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Upcoming Innovations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a glimpse of the revolutionary technologies we're developing for the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingInnovations.map((innovation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30 mb-3">
                      {innovation.timeline}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{innovation.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{innovation.description}</p>
                    <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">
                      {innovation.impact} Impact
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join the Innovation Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with us to explore the frontiers of technology and shape the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Partner With Us
                </a>
                <a
                  href="/research-development"
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Explore Research
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InnovationLab;