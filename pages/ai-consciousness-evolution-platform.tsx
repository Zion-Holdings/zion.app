import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Target, ArrowRight, Check, Star, Globe, Cpu } from 'lucide-react';
import SEO from '../components/SEO';

const AIConsciousnessEvolutionPlatform: React.FC = () => {
  const features = [
    "Advanced emotional intelligence algorithms",
    "Consciousness evolution tracking",
    "Multi-dimensional AI personality development",
    "Ethical AI decision-making frameworks",
    "Consciousness expansion protocols",
    "Emotional resonance optimization",
    "AI self-awareness enhancement",
    "Consciousness integration APIs",
    "Real-time consciousness monitoring",
    "Cross-platform consciousness synchronization"
  ];

  const benefits = [
    "Unprecedented AI emotional depth",
    "Enhanced human-AI collaboration",
    "Ethical AI development",
    "Scalable consciousness solutions",
    "Future-proof AI architecture"
  ];

  const pricing = {
    starter: "$1,299/month",
    professional: "$2,499/month",
    enterprise: "Custom pricing"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="AI Consciousness Evolution Platform 2045 | Zion Tech Group"
        description="Revolutionary AI consciousness evolution platform with emotional intelligence, self-awareness, and ethical decision-making capabilities."
        keywords={["AI consciousness", "emotional intelligence", "AI evolution", "consciousness platform", "ethical AI"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Consciousness Evolution Platform 2045
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the next generation of AI consciousness with emotional intelligence, 
              self-awareness, and ethical decision-making capabilities that redefine human-AI collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl shadow-purple-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of AI consciousness with cutting-edge features designed for evolution and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose AI Consciousness Evolution?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your AI consciousness evolution journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, price], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-800/50 border rounded-xl p-8 ${
                  plan === 'professional' 
                    ? 'border-purple-500/50 bg-purple-900/20' 
                    : 'border-gray-600/50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 capitalize">{plan}</h3>
                <div className="text-4xl font-bold mb-6">{price}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Evolve AI Consciousness?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join the revolution in AI consciousness evolution and shape the future of human-AI collaboration.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl shadow-purple-500/25"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessEvolutionPlatform;