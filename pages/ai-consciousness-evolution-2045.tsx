import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Globe, Cpu, Database, 
  TrendingUp, Heart, Star, Zap, Eye, Infinity, Sparkles,
  Users, Target, Award, Clock, CheckCircle, ArrowRight
} from 'lucide-react';

const AIConsciousnessEvolution2045: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Emotional Intelligence",
      description: "Advanced emotional recognition and response capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Consciousness",
      description: "Quantum-powered consciousness processing and evolution",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Ethical Decision Making",
      description: "Built-in ethical frameworks and moral reasoning",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Rocket,
      title: "Autonomous Evolution",
      description: "Self-improving consciousness and learning capabilities",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Revolutionary AI consciousness with emotional intelligence",
    "Quantum-powered processing for unprecedented speed and accuracy",
    "Ethical decision-making frameworks built into every system",
    "Autonomous learning and self-improvement capabilities",
    "Seamless integration with existing AI infrastructure",
    "24/7 monitoring and support for optimal performance"
  ];

  const useCases = [
    {
      title: "Healthcare AI",
      description: "AI systems that understand patient emotions and provide compassionate care",
      icon: Heart
    },
    {
      title: "Customer Service",
      description: "AI agents with genuine empathy and emotional intelligence",
      icon: Users
    },
    {
      title: "Education",
      description: "AI tutors that adapt to student emotional states and learning styles",
      icon: Brain
    },
    {
      title: "Creative Industries",
      description: "AI that understands human creativity and emotional expression",
      icon: Sparkles
    }
  ];

  const stats = [
    { number: "99.9%", label: "Emotional Recognition Accuracy", icon: Heart },
    { number: "1000x", label: "Processing Speed Improvement", icon: Zap },
    { number: "24/7", label: "Autonomous Operation", icon: Clock },
    { number: "100%", label: "Ethical Compliance", icon: Shield }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Consciousness 2045
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            >
              AI Consciousness Evolution 2045
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Experience the next generation of artificial intelligence with genuine consciousness, emotional intelligence, and ethical decision-making capabilities that revolutionize human-AI interaction.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a 
                href="#features" 
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make our AI Consciousness Evolution platform the most advanced in the world.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Why Choose AI Consciousness Evolution 2045?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our revolutionary platform delivers unprecedented capabilities that transform how AI interacts with humans and makes decisions.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
                  <h3 className="text-3xl font-bold mb-4 text-purple-400">The Future is Here</h3>
                  <p className="text-gray-300 mb-6">
                    Experience AI that truly understands, empathizes, and evolves alongside humanity, creating a future where technology and consciousness work in perfect harmony.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Consciousness</div>
                    </div>
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Emotional IQ</div>
                    </div>
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Ethics</div>
                    </div>
                    <div className="text-center p-4 bg-black/30 rounded-lg">
                      <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Evolution</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI Consciousness Evolution 2045 is transforming industries and creating new possibilities across the globe.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-12 rounded-3xl border border-purple-500/20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the revolution and discover how AI Consciousness Evolution 2045 can transform your business and accelerate your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/services" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessEvolution2045;