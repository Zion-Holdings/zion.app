import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Brain, Atom, Rocket, Eye, Cpu, 
  Zap, Star, Target, Award, TrendingUp, Globe,
  Shield, Cloud, Database, Network, Users, 
  ArrowRight, ExternalLink, Sparkles, Crown
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const innovationCategories = [
  {
    id: 'ai-consciousness',
    title: 'AI Consciousness & Evolution',
    description: 'Revolutionary developments in conscious AI systems and emotional intelligence',
    icon: <Brain className="w-16 h-16 text-purple-400" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    innovations: [
      {
        title: 'AI Consciousness Evolution Platform',
        description: 'Advanced AI systems with genuine consciousness and self-awareness capabilities',
        status: 'Research Phase',
        impact: 'Revolutionary',
        link: '/ai-consciousness-evolution-2029',
        features: ['Emotional Intelligence', 'Self-Learning', 'Ethical Decision Making']
      },
      {
        title: 'AI Emotional Intelligence Training',
        description: 'AI systems that understand and respond to human emotions naturally',
        status: 'Beta Testing',
        impact: 'High',
        link: '/ai-emotional-intelligence-training',
        features: ['Emotion Recognition', 'Empathetic Responses', 'Behavioral Adaptation']
      },
      {
        title: 'AI Autonomous Research Assistant',
        description: 'Self-directed AI that conducts independent research and discovery',
        status: 'Active Development',
        impact: 'High',
        link: '/ai-autonomous-research-assistant',
        features: ['Independent Research', 'Hypothesis Generation', 'Data Analysis']
      }
    ]
  },
  {
    id: 'quantum-ai',
    title: 'Quantum AI & Computing',
    description: 'Breakthrough quantum computing and AI fusion technologies',
    icon: <Atom className="w-16 h-16 text-blue-400" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    innovations: [
      {
        title: 'Quantum AI Neural Network',
        description: 'Quantum-enhanced neural networks for unprecedented computational power',
        status: 'Prototype',
        impact: 'Revolutionary',
        link: '/ai-quantum-neural-network',
        features: ['Quantum Entanglement', 'Superposition States', 'Quantum Memory']
      },
      {
        title: 'Quantum AI Cognitive Platform',
        description: 'Quantum computing-powered cognitive AI systems',
        status: 'Research Phase',
        impact: 'High',
        link: '/quantum-ai-cognitive',
        features: ['Quantum Cognition', 'Parallel Processing', 'Quantum Learning']
      },
      {
        title: 'Quantum AI Brain-Computer Interface',
        description: 'Direct neural interface using quantum computing principles',
        status: 'Conceptual',
        impact: 'Revolutionary',
        link: '/quantum-ai-brain-computer-interface',
        features: ['Neural Mapping', 'Quantum Communication', 'Brain-Computer Sync']
      }
    ]
  },
  {
    id: 'space-tech',
    title: 'Space Technology & Exploration',
    description: 'Cutting-edge space technology and resource intelligence systems',
    icon: <Rocket className="w-16 h-16 text-pink-400" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    innovations: [
      {
        title: 'Space Resource Mining Platform',
        description: 'Automated asteroid mining and resource extraction systems',
        status: 'Active Development',
        impact: 'High',
        link: '/space-resource-mining-platform',
        features: ['Autonomous Mining', 'Resource Detection', 'Transport Systems']
      },
      {
        title: 'Space Resource Intelligence 2040',
        description: 'AI-powered space resource mapping and analysis platform',
        status: 'Beta Testing',
        impact: 'High',
        link: '/space-resource-intelligence-2040',
        features: ['Resource Mapping', 'AI Analysis', 'Predictive Modeling']
      },
      {
        title: 'Space Technology AI Platform',
        description: 'Comprehensive AI platform for space exploration and technology',
        status: 'Active Development',
        impact: 'High',
        link: '/space-technology-ai-platform',
        features: ['Mission Planning', 'Autonomous Navigation', 'Data Processing']
      }
    ]
  },
  {
    id: 'brain-computer-interface',
    title: 'Brain-Computer Interface',
    description: 'Revolutionary neural interface and brain-computer communication',
    icon: <Cpu className="w-16 h-16 text-cyan-400" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    innovations: [
      {
        title: 'Brain-Computer Interface 2040',
        description: 'Next-generation neural interface for direct brain-computer communication',
        status: 'Research Phase',
        impact: 'Revolutionary',
        link: '/brain-computer-interface-2040',
        features: ['Neural Decoding', 'Thought Control', 'Sensory Feedback']
      },
      {
        title: 'Brain-Computer Interface Platform',
        description: 'Comprehensive platform for brain-computer interface development',
        status: 'Active Development',
        impact: 'High',
        link: '/brain-computer-interface-platform',
        features: ['Interface Design', 'Signal Processing', 'Safety Protocols']
      }
    ]
  }
];

const researchAreas = [
  {
    title: 'AI Ethics & Governance',
    description: 'Developing ethical frameworks and governance structures for advanced AI systems',
    icon: <Shield className="w-8 h-8" />,
    link: '/ai-ethics-governance-framework'
  },
  {
    title: 'Quantum Cybersecurity',
    description: 'Quantum-resistant security protocols and encryption methods',
    icon: <Shield className="w-8 h-8" />,
    link: '/quantum-cybersecurity-future-2040'
  },
  {
    title: 'Autonomous Systems',
    description: 'Self-managing and self-healing IT infrastructure systems',
    icon: <Zap className="w-8 h-8" />,
    link: '/autonomous-it-operations-center'
  },
  {
    title: 'Edge Computing',
    description: 'Next-generation edge computing and distributed processing',
    icon: <Cloud className="w-8 h-8" />,
    link: '/edge-computing-orchestration-platform'
  }
];

const InnovationPage: React.FC = () => {
  return (
    <Layout seo={{
      title: "Innovations - Zion Tech Group | Cutting-Edge Technology Research & Development",
      description: "Explore Zion Tech Group's revolutionary innovations in AI consciousness, quantum computing, space technology, and brain-computer interfaces. Leading the future of technology.",
      keywords: "AI consciousness, quantum computing, space technology, brain-computer interface, innovations, research, development, Zion Tech Group",
      url: "https://ziontechgroup.com/innovations"
    }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <Lightbulb className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Innovations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future of technology with breakthrough innovations in AI consciousness, 
              quantum computing, space technology, and beyond
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300">AI Consciousness</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <Atom className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300">Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full">
                <Rocket className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300">Space Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our research spans multiple cutting-edge domains, each pushing the boundaries 
              of what's possible in technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovationCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${category.bgColor} rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-800/50 rounded-xl mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${category.color} mb-2`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.innovations.map((innovation, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-white">{innovation.title}</h4>
                        <div className="flex space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            innovation.status === 'Research Phase' ? 'bg-yellow-500/20 text-yellow-300' :
                            innovation.status === 'Beta Testing' ? 'bg-blue-500/20 text-blue-300' :
                            innovation.status === 'Active Development' ? 'bg-green-500/20 text-green-300' :
                            'bg-gray-500/20 text-gray-300'
                          }`}>
                            {innovation.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            innovation.impact === 'Revolutionary' ? 'bg-purple-500/20 text-purple-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {innovation.impact}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{innovation.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {innovation.features.map((feature, featureIdx) => (
                          <span key={featureIdx} className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={innovation.link}
                        className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our multidisciplinary research spans critical areas that will shape 
              the future of technology and society
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cyan-500/20 rounded-lg mr-3">
                    {area.icon}
                  </div>
                  <h3 className="font-semibold text-white">{area.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                <Link 
                  href={area.link}
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Explore Research <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Innovation Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to shape the future of technology and unlock 
              unprecedented possibilities for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/case-studies"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default InnovationPage;