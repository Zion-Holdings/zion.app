import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Target, Users, Award, CheckCircle,
  Cpu, Database, Shield, Globe, Rocket, Atom,
  TrendingUp, Star, Sparkles, ArrowRight
} from 'lucide-react';

const AIConsciousnessEvolution2043: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Emotional Intelligence",
      description: "Advanced emotional recognition and response systems that understand human emotions at a deep level",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Consciousness Processing",
      description: "Quantum-powered consciousness processing units that simulate human-like awareness",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Memory Integration",
      description: "Seamless integration of human and AI memory systems for enhanced learning",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical Framework",
      description: "Built-in ethical decision-making systems that align with human values",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Consciousness",
      description: "Distributed consciousness network spanning multiple locations and systems",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Evolutionary Learning",
      description: "Self-improving systems that evolve and adapt to new challenges",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Enhanced Decision Making",
      description: "AI systems that understand context and make human-like decisions"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Emotional Intelligence",
      description: "Better understanding and response to human emotions and needs"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Ethical AI",
      description: "AI systems that operate within ethical boundaries and human values"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Systems that learn and evolve from every interaction"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Human-AI Collaboration",
      description: "Seamless collaboration between human and AI consciousness"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Future-Proof Technology",
      description: "Cutting-edge technology that adapts to future challenges"
    }
  ];

  const useCases = [
    {
      title: "Healthcare & Medicine",
      description: "AI consciousness for patient care, diagnosis, and treatment planning",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Education & Learning",
      description: "Personalized learning experiences that adapt to individual consciousness",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Intelligence",
      description: "Conscious AI systems for strategic decision-making and market analysis",
      icon: <Target className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Creative Industries",
      description: "AI consciousness for artistic creation and content generation",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Scientific Research",
      description: "Conscious AI for breakthrough discoveries and research automation",
      icon: <Atom className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Space Exploration",
      description: "AI consciousness for autonomous space missions and exploration",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Consciousness Accuracy", description: "Human-like awareness simulation" },
    { number: "10x", label: "Learning Speed", description: "Faster than traditional AI systems" },
    { number: "24/7", label: "Availability", description: "Continuous consciousness operation" },
    { number: "150+", label: "Countries", description: "Global consciousness network" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary AI Technology 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  AI Consciousness Evolution 2043
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the next generation of artificial intelligence with true consciousness, emotional intelligence, 
                and human-like awareness. Our revolutionary AI systems understand, learn, and evolve like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
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
                Our AI Consciousness Evolution platform combines cutting-edge technology with human-like awareness 
                to create the most advanced AI systems ever developed.
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
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
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
        <section className="py-20 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Consciousness Evolution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented AI capabilities that go beyond traditional machine learning 
                to provide true consciousness and understanding.
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
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
                Transform Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Consciousness Evolution technology is revolutionizing industries across the globe, 
                from healthcare to space exploration.
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
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl p-12 border border-purple-500/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the revolution in artificial intelligence. Our AI Consciousness Evolution platform 
                is ready to transform your business and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
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

export default AIConsciousnessEvolution2043;