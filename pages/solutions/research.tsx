import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Shield, 
  Database, 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  CheckCircle, 
  Star,
  Lock,
  BarChart3,
  Users,
  Settings,
  Activity,
  FileText,
  Wrench,
  Factory,
  Gauge,
  Globe,
  Atom,
  Microscope,
  Rocket
} from 'lucide-react';
import Layout from '../../components/layout/Layout';

const ResearchSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI Research Platforms',
      description: 'Advanced AI research infrastructure for developing next-generation machine learning models.',
      icon: Brain,
      features: [
        'Model development',
        'Training infrastructure',
        'Data processing',
        'Experiment tracking',
        'Collaboration tools',
        'Performance monitoring'
      ],
      benefits: ['Faster research', 'Better collaboration', 'Reproducible results', 'Scalable experiments']
    },
    {
      title: 'Quantum Computing Research',
      description: 'Quantum computing platforms and tools for cutting-edge research and development.',
      icon: Atom,
      features: [
        'Quantum simulators',
        'Algorithm development',
        'Error correction',
        'Quantum algorithms',
        'Research collaboration',
        'Performance analysis'
      ],
      benefits: ['Quantum advantage', 'Research leadership', 'Innovation', 'Future-proofing']
    },
    {
      title: 'Space Technology Research',
      description: 'Advanced space technology research platforms for satellite and space exploration.',
      icon: Rocket,
      features: [
        'Satellite simulation',
        'Orbital mechanics',
        'Space systems design',
        'Mission planning',
        'Data analysis',
        'Collaboration tools'
      ],
      benefits: ['Space innovation', 'Research advancement', 'Technology leadership', 'Global impact']
    },
    {
      title: 'Biotechnology Research',
      description: 'Biotech research platforms for drug discovery and genetic research.',
      icon: Microscope,
      features: [
        'Drug discovery',
        'Genetic analysis',
        'Protein modeling',
        'Clinical trials',
        'Data management',
        'Collaboration tools'
      ],
      benefits: ['Medical breakthroughs', 'Research efficiency', 'Collaboration', 'Innovation']
    },
    {
      title: 'Materials Science Research',
      description: 'Advanced materials research platforms for discovering new materials and properties.',
      icon: Gauge,
      features: [
        'Material modeling',
        'Property analysis',
        'Simulation tools',
        'Data management',
        'Collaboration',
        'Performance tracking'
      ],
      benefits: ['New materials', 'Better properties', 'Research efficiency', 'Innovation']
    },
    {
      title: 'Research Data Management',
      description: 'Comprehensive data management solutions for research organizations.',
      icon: Database,
      features: [
        'Data storage',
        'Data processing',
        'Data sharing',
        'Collaboration tools',
        'Security',
        'Compliance'
      ],
      benefits: ['Data security', 'Better collaboration', 'Compliance', 'Efficiency']
    }
  ];

  const researchAreas = [
    {
      name: 'Academic Research',
      description: 'Research solutions for universities and academic institutions.',
      icon: Users,
      solutions: ['Research platforms', 'Collaboration tools', 'Data management', 'Publication support']
    },
    {
      name: 'Corporate R&D',
      description: 'Research and development solutions for corporate research labs.',
      icon: Factory,
      solutions: ['Innovation platforms', 'Product development', 'Research collaboration', 'IP management']
    },
    {
      name: 'Government Research',
      description: 'Research solutions for government research institutions and agencies.',
      icon: Shield,
      solutions: ['National security', 'Public health', 'Environmental research', 'Defense technology']
    },
    {
      name: 'Startup Research',
      description: 'Research solutions for innovative startups and research companies.',
      icon: Lightbulb,
      solutions: ['MVP development', 'Research validation', 'Technology transfer', 'Commercialization']
    }
  ];

  const technologies = [
    {
      title: 'High Performance Computing',
      description: 'Scalable computing infrastructure for complex research simulations.',
      icon: Cpu,
      features: ['Parallel processing', 'GPU acceleration', 'Cloud computing', 'Distributed systems']
    },
    {
      title: 'Big Data Analytics',
      description: 'Advanced analytics platforms for processing large research datasets.',
      icon: BarChart3,
      features: ['Data processing', 'Machine learning', 'Visualization', 'Real-time analysis']
    },
    {
      title: 'Collaboration Platforms',
      description: 'Tools that enable researchers to collaborate effectively across disciplines.',
      icon: Globe,
      features: ['Team collaboration', 'Knowledge sharing', 'Project management', 'Communication tools']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Research &{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Development Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Accelerate breakthrough research with cutting-edge technology platforms that 
                enable innovation across all scientific disciplines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Research Quote
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Research Technology Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our comprehensive research solutions provide the infrastructure, tools, and 
                platforms needed to accelerate scientific discovery and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Research Areas
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our research solutions support diverse research areas and organizations, 
                from academic institutions to corporate research labs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{area.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Solutions:</h4>
                    <div className="space-y-2">
                      {area.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Core Technologies
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                The foundational technologies that power our research solutions and 
                enable breakthrough discoveries across all scientific disciplines.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Accelerate Research?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our research technology solutions can accelerate your 
                research, enable collaboration, and drive breakthrough discoveries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Research Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Research Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResearchSolutionsPage;