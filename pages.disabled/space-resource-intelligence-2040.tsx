import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Atom, Zap, Target, Shield, ArrowRight, Star, CheckCircle, Brain, Cpu, Cloud, Network, Heart, Eye, Code, Palette, TrendingUp, Users, Lock, Infinity, Satellite, Telescope } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const SpaceResourceIntelligence2040: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Exploration",
      description: "Advanced AI-powered space exploration and resource discovery",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Resource Mapping",
      description: "Comprehensive mapping of space resources and mining opportunities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Analysis",
      description: "Quantum-powered analysis of space resources and composition",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "Deep Space Vision",
      description: "Advanced telescopic systems with AI-enhanced observation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const capabilities = [
    "AI-powered space resource discovery",
    "Quantum-enhanced resource analysis",
    "Autonomous space exploration systems",
    "Resource composition mapping",
    "Mining opportunity identification",
    "Space weather prediction",
    "Resource extraction planning",
    "Interplanetary logistics optimization",
    "Space resource economics",
    "Environmental impact assessment"
  ];

  const applications = [
    {
      title: "Asteroid Mining",
      description: "AI-powered identification and extraction of valuable resources",
              icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Lunar Resources",
      description: "Comprehensive mapping and extraction of lunar materials",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mars Exploration",
      description: "Advanced AI systems for Mars resource discovery",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Space Manufacturing",
      description: "In-space manufacturing using local resources",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const spaceTechnologies = [
    {
      title: "Quantum Telescopes",
      description: "Revolutionary quantum-enhanced telescopic systems",
      icon: <Telescope className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Satellites",
      description: "Autonomous satellites with advanced AI capabilities",
      icon: <Satellite className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Resource Probes",
      description: "Intelligent probes for resource analysis and mapping",
              icon: <Star className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Space Drones",
      description: "Autonomous drones for space exploration and mining",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Space Resource Intelligence 2040 | Zion Tech Group"
        description="Revolutionary AI-powered space exploration and resource discovery systems. Leading the future of space technology and resource intelligence."
        keywords={["space resources", "space exploration", "AI space technology", "space mining", "2040 technology", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/space-resource-intelligence-2040"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-6">
              <Rocket className="w-4 h-4" />
              Revolutionary 2040 Technology
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Space Resource
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligence 2040
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of space exploration with AI-powered resource discovery, 
              quantum-enhanced analysis, and autonomous space systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                Explore Space
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: -1,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: -1,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make our space resource intelligence 
              platform the most advanced in the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Technologies Section */}
      <section className="py-20 relative bg-gradient-to-r from-indigo-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Advanced Space Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary space technologies that are transforming exploration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {spaceTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${tech.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{tech.title}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Advanced Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our space resource intelligence platform delivers unprecedented capabilities that push 
              the boundaries of what space exploration can achieve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {capabilities.slice(0, 5).map((capability, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-2">
                    <CheckCircle className="w-full h-full text-white" />
                  </div>
                  <span className="text-lg text-gray-300">{capability}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {capabilities.slice(5).map((capability, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-2">
                    <CheckCircle className="w-full h-full text-white" />
                  </div>
                  <span className="text-lg text-gray-300">{capability}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Real-World Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how space resource intelligence is transforming industries and creating 
              new possibilities across the solar system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{app.title}</h3>
                  <p className="text-gray-300 text-sm">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-12"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Explore Space?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in the space revolution and discover what's possible 
              when AI meets space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SpaceResourceIntelligence2040;