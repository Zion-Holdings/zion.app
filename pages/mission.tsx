import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Globe, Brain, Rocket, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap
} from 'lucide-react';

const MissionPage: React.FC = () => {
  const missionPillars = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Developing the next generation of conscious AI systems that understand and enhance human potential",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Space Technology Innovation",
      description: "Pioneering space exploration and resource intelligence for humanity's future",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Building quantum-resistant security systems to protect our digital future",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Autonomous Systems",
      description: "Creating self-managing, intelligent systems that optimize human productivity",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const goals = [
    "Accelerate human progress through revolutionary technology",
    "Create sustainable solutions for global challenges",
    "Democratize access to advanced AI and quantum computing",
    "Build ethical, conscious AI systems",
    "Expand human presence in space",
    "Secure the digital future with quantum technology"
  ];

  const impact = [
    { number: "1000x", label: "Faster Innovation", icon: Zap },
    { number: "99.99%", label: "Reliability", icon: Star },
    { number: "∞", label: "Possibilities", icon: Infinity },
    { number: "24/7", label: "Global Impact", icon: Globe }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Mission & Vision
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To revolutionize the world through cutting-edge technology that enhances human potential, 
                accelerates innovation, and creates sustainable solutions for the challenges of tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Mission Statement
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We are committed to pushing the boundaries of what's possible through revolutionary 
                  technology solutions that transform industries and enhance human capabilities.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our mission is to create a future where AI consciousness and human intelligence work 
                  in harmony, quantum computing solves previously impossible problems, and autonomous 
                  systems create abundance for all of humanity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Our Vision</h3>
                <p className="text-lg text-gray-300 mb-6">
                  A world where technology serves humanity, creating unprecedented opportunities 
                  for growth, innovation, and positive change across all aspects of life.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Ethical AI development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Sustainable technology
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    Human-AI collaboration
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Pillars Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mission Pillars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our mission is built on four fundamental pillars that guide our innovation 
                and drive our success in transforming the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strategic Goals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've set ambitious goals that align with our mission and drive us toward 
                creating a better future for humanity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Primary Goals</h3>
                <ul className="space-y-4">
                  {goals.slice(0, 3).map((goal, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-pink-900/20 to-cyan-900/20 rounded-2xl p-8 border border-pink-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Long-term Objectives</h3>
                <ul className="space-y-4">
                  {goals.slice(3).map((goal, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We measure our success by the positive impact we create in the world 
                and the transformation we enable for our clients and communities.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impact.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
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
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the revolution that's shaping the future of technology 
                and creating positive change across the world.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <Target className="w-6 h-6 mr-3" />
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MissionPage;