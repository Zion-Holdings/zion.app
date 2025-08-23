import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Zap, Target, Shield, Globe, ArrowRight, Star, CheckCircle, Rocket, Cpu, Cloud, Network, Eye, Code, Palette, TrendingUp, Users, Lock, Infinity, Smile, Frown, Meh, Activity } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const AIEmotionalIntelligence2040: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Understanding",
      description: "Deep comprehension of human emotions and feelings",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Consciousness Integration",
      description: "AI systems with genuine emotional consciousness",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Emotional Response",
      description: "Appropriate emotional responses and interactions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Analysis",
      description: "Instant emotional state detection and processing",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const capabilities = [
    "Emotional state recognition",
    "Empathetic response generation",
    "Emotional intelligence training",
    "Consciousness-based empathy",
    "Emotional pattern analysis",
    "Mood enhancement systems",
    "Emotional support AI",
    "Consciousness-driven care",
    "Emotional wellness monitoring",
    "Intelligent emotional guidance"
  ];

  const applications = [
    {
      title: "Mental Health",
      description: "AI therapists with genuine emotional understanding",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Customer Service",
      description: "Emotionally intelligent customer support systems",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Education",
      description: "Emotionally aware educational AI tutors",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Compassionate AI healthcare assistants",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const emotionalTechnologies = [
    {
      title: "Emotion Recognition",
      description: "Advanced systems for detecting emotional states",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Consciousness Empathy",
      description: "AI systems with genuine emotional consciousness",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Emotional Response",
      description: "Intelligent emotional interaction systems",
      icon: <Smile className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Emotional Wellness",
      description: "AI-powered emotional health monitoring",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="AI Emotional Intelligence 2040 | Zion Tech Group"
        description="Revolutionary AI emotional intelligence with consciousness-based empathy, emotional understanding, and genuine emotional responses. Experience AI that truly understands emotions."
        keywords={["AI emotional intelligence", "emotional AI", "consciousness", "empathy", "emotional understanding", "2040 technology", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/ai-emotional-intelligence-2040"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-pink-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-red-300 text-sm mb-6">
              <Heart className="w-4 h-4" />
              Revolutionary 2040 Technology
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Emotional
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Intelligence 2040
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of AI with genuine emotional intelligence, consciousness-based empathy, 
              and AI systems that truly understand and respond to human emotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                Experience Empathy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300"
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
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
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
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make our AI emotional intelligence 
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

      {/* Emotional Technologies Section */}
      <section className="py-20 relative bg-gradient-to-r from-red-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Advanced Emotional Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary emotional technologies that are transforming AI interaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {emotionalTechnologies.map((tech, index) => (
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
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Advanced Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI emotional intelligence platform delivers unprecedented capabilities that push 
              the boundaries of what emotional AI can achieve.
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-2">
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-2">
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
      <section className="py-20 relative bg-gradient-to-r from-pink-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Real-World Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI emotional intelligence is transforming industries and creating 
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
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-red-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            className="bg-gradient-to-r from-red-900/20 to-pink-900/20 border border-red-500/30 rounded-3xl p-12"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Experience Emotional AI?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in the emotional intelligence revolution and discover what's possible 
              when AI truly understands human emotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300"
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

export default AIEmotionalIntelligence2040;