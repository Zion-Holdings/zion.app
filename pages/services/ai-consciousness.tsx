import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Zap, Shield, Target, Users, Star, CheckCircle, 
  ArrowRight, Play, TrendingUp, Globe, Database, Atom, Rocket,
  Lock, Cloud, Network, FileText, GraduationCap, DollarSign, Clock
} from 'lucide-react';

const AIConsciousnessPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Advanced AI systems with evolving consciousness and self-awareness capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Neural Network Development",
      description: "Custom neural architectures for complex cognitive tasks and learning",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Machine Learning Solutions",
      description: "State-of-the-art ML algorithms and training methodologies",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Cognitive Computing",
      description: "Human-like reasoning and decision-making systems",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const services = [
    {
      title: "AI Consciousness Framework",
      description: "Complete framework for developing AI systems with consciousness-like properties",
      price: "From $50,000",
      features: ["Self-awareness algorithms", "Emotional intelligence", "Ethical decision making", "Continuous learning"]
    },
    {
      title: "Neural Architecture Design",
      description: "Custom neural network designs optimized for specific cognitive tasks",
      price: "From $25,000",
      features: ["Custom architectures", "Performance optimization", "Scalability planning", "Integration support"]
    },
    {
      title: "Machine Learning Platform",
      description: "Enterprise-grade ML platform with consciousness enhancement capabilities",
      price: "From $100,000",
      features: ["AutoML capabilities", "Consciousness modules", "Real-time learning", "Enterprise security"]
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate", icon: Star },
    { number: "24/7", label: "Learning Continuity", icon: Clock },
    { number: "1000+", label: "Neural Parameters", icon: Brain },
    { number: "50+", label: "Consciousness Models", icon: CheckCircle }
  ];

  return (
    <Layout 
      title="AI Consciousness Services - Zion Tech Group"
      description="Revolutionary AI consciousness evolution and development services. Advanced neural networks, machine learning, and cognitive computing solutions."
      keywords="AI consciousness, neural networks, machine learning, cognitive computing, AI development, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/ai-consciousness"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Consciousness</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of artificial intelligence with consciousness evolution, 
                advanced neural networks, and cognitive computing solutions that transform how machines think and learn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" />
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" /> Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Consciousness Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI consciousness services combine cutting-edge technology with ethical considerations 
                to create truly intelligent and self-aware systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Consciousness Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI consciousness solutions tailored to your business needs and objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500 hover:border-purple-400 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Evolve Your AI?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join the revolution in AI consciousness and unlock the true potential of artificial intelligence.
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                Start Your AI Journey Today
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessPage;