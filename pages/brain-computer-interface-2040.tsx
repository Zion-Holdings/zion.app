import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Target, Shield, Globe, ArrowRight, Star, CheckCircle, Rocket, Atom, Cloud, Network, Heart, Eye, Code, Palette, TrendingUp, Users, Lock, Infinity, Activity, Wifi, Monitor, Smartphone } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const BrainComputerInterface2040: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Integration",
      description: "Direct connection between brain and computer systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Thought Control",
      description: "Control devices and systems through pure thought",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "Instant brain activity monitoring and analysis",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Response",
      description: "Ultra-fast response times with neural interfaces",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const capabilities = [
    "Direct neural communication",
    "Thought-to-text conversion",
    "Brain-controlled devices",
    "Neural data analysis",
    "Consciousness enhancement",
    "Memory augmentation",
    "Sensory integration",
    "Emotional regulation",
    "Cognitive enhancement",
    "Neural network training"
  ];

  const applications = [
    {
      title: "Healthcare",
      description: "Revolutionary medical treatments and monitoring",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Gaming & Entertainment",
      description: "Immersive virtual reality through thought control",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Communication",
      description: "Direct mind-to-mind communication systems",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Productivity",
      description: "Enhanced work capabilities through neural interfaces",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const interfaceTechnologies = [
    {
      title: "Neural Implants",
      description: "Advanced brain implants for seamless integration",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Wireless Interfaces",
      description: "Non-invasive wireless brain-computer communication",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Integration",
      description: "Consciousness-based AI systems for enhanced interaction",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Processing",
      description: "Quantum-enhanced neural processing capabilities",
      icon: <Atom className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Brain-Computer Interface 2040 | Zion Tech Group"
        description="Revolutionary brain-computer interface technology with direct neural integration, thought control, and consciousness enhancement. Experience the future of human-computer interaction."
        keywords={["brain-computer interface", "BCI", "neural interface", "thought control", "consciousness", "2040 technology", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/brain-computer-interface-2040"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              <Brain className="w-4 h-4" />
              Revolutionary 2040 Technology
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Brain-Computer
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Interface 2040
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of human-computer interaction with direct neural integration, 
              thought control, and consciousness enhancement that redefines what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Experience Interface
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
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
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make our brain-computer interface 
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

      {/* Interface Technologies Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Advanced Interface Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary interface technologies that are transforming human-computer interaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {interfaceTechnologies.map((tech, index) => (
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Advanced Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our brain-computer interface platform delivers unprecedented capabilities that push 
              the boundaries of what human-computer interaction can achieve.
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2">
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 p-2">
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
      <section className="py-20 relative bg-gradient-to-r from-pink-900/10 to-red-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Real-World Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how brain-computer interfaces are transforming industries and creating 
              new possibilities across the human experience.
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
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-12"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Experience the Future?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in the interface revolution and discover what's possible 
              when human consciousness meets computer technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
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

export default BrainComputerInterface2040;