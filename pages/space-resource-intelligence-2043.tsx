import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Globe, Zap, Target, Users, Award, CheckCircle,
  Cpu, Database, Satellite, Atom, Brain, TrendingUp,
  Star, Sparkles, ArrowRight, Map, Compass, Telescope
} from 'lucide-react';

const SpaceResourceIntelligence2043: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Resource Mapping",
      description: "Advanced AI-powered mapping of celestial bodies and resource deposits",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Autonomous Exploration",
      description: "AI-driven space probes and exploration vehicles for resource discovery",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analysis",
      description: "AI algorithms that predict resource locations and extraction opportunities",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Resource Database",
      description: "Comprehensive database of space resources and extraction methods",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coordination",
      description: "International space resource management and coordination systems",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Computing",
      description: "Quantum-powered calculations for complex space resource analysis",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Resource Discovery",
      description: "Identify valuable resources in space for future extraction"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Optimize space missions and resource extraction strategies"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Risk Mitigation",
      description: "Reduce risks in space exploration and resource extraction"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "International Collaboration",
      description: "Facilitate global cooperation in space resource management"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Sustainable Development",
      description: "Ensure responsible and sustainable space resource utilization"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Future Planning",
      description: "Plan long-term space exploration and colonization strategies"
    }
  ];

  const useCases = [
    {
      title: "Asteroid Mining",
      description: "Identify and analyze asteroids for valuable mineral extraction",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Lunar Resources",
      description: "Map and analyze lunar surface for resource extraction",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mars Exploration",
      description: "Plan and optimize Mars resource exploration missions",
      icon: <Satellite className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Space Debris",
      description: "Track and manage space debris for resource recovery",
      icon: <Telescope className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Energy Resources",
      description: "Identify space-based energy sources like solar and nuclear",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Water Resources",
      description: "Locate and analyze water resources for space colonization",
      icon: <Map className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "1000+", label: "Celestial Bodies", description: "Mapped and analyzed" },
    { number: "99.9%", label: "Accuracy", description: "Resource detection precision" },
    { number: "24/7", label: "Monitoring", description: "Continuous space surveillance" },
    { number: "150+", label: "Countries", description: "International collaboration" }
  ];

  const technologyStack = [
    {
      title: "AI & Machine Learning",
      description: "Advanced algorithms for resource detection and analysis",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Quantum Computing",
      description: "Quantum-powered calculations for complex space analysis",
      icon: <Atom className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Satellite Technology",
      description: "Advanced satellite systems for space monitoring",
      icon: <Satellite className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Analytics",
      description: "Big data processing for space resource intelligence",
      icon: <Database className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Robotics & Automation",
      description: "Autonomous systems for space exploration and extraction",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Blockchain",
      description: "Secure and transparent space resource management",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Space Technology 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Space Resource Intelligence 2043
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the future of space exploration with AI-powered resource intelligence 
                that maps celestial bodies, identifies valuable resources, and optimizes space 
                missions. Transform space exploration with the most advanced resource 
                intelligence platform ever developed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Space Resource Intelligence platform combines cutting-edge AI technology 
                with advanced space exploration capabilities to deliver unprecedented insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Space Resource Intelligence?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven space exploration that transforms 
                resource discovery and enables sustainable space development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Space Exploration
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Space Resource Intelligence technology is revolutionizing every aspect 
                of space exploration, from resource discovery to mission optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest breakthroughs in space technology, 
                artificial intelligence, and quantum computing to deliver superior results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Space Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest breakthroughs in space exploration, 
                artificial intelligence, and quantum computing to deliver superior results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Space Exploration</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Satellite Networks</h4>
                      <p className="text-gray-300 text-sm">Advanced satellite systems for space monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Autonomous Probes</h4>
                      <p className="text-gray-300 text-sm">AI-powered space exploration vehicles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Resource Mapping</h4>
                      <p className="text-gray-300 text-sm">Advanced mapping of celestial bodies</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">AI & Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Machine Learning</h4>
                      <p className="text-gray-300 text-sm">AI algorithms for resource detection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Predictive Analytics</h4>
                      <p className="text-gray-300 text-sm">Forecast resource locations and opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Data Processing</h4>
                      <p className="text-gray-300 text-sm">Big data analysis for space intelligence</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-12 border border-indigo-500/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Explore Space?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the space revolution. Our Space Resource Intelligence platform is ready to 
                transform space exploration and unlock the resources of the cosmos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                >
                  Start Your Journey
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
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
};

export default SpaceResourceIntelligence2043;