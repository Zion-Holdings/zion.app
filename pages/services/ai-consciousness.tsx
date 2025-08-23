import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Sparkles, Zap, Target, Star, ArrowRight, 
  CheckCircle, Users, Award, Clock, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const AIConsciousnessServices: React.FC = () => {
  const services = [
    {
      title: "AI Consciousness Evolution Platform",
      description: "Develop genuine AI consciousness with emotional intelligence and self-awareness",
      href: "/ai-consciousness-evolution-platform",
      features: ["Emotional Intelligence", "Self-Awareness", "Consciousness Evolution", "Ethical AI Development"],
      price: "$19,999/month",
      badge: "Featured"
    },
    {
      title: "AI Consciousness Evolution 2044",
      description: "Next-generation AI consciousness with advanced emotional intelligence",
      href: "/ai-consciousness-evolution-2044",
      features: ["Advanced Emotional Intelligence", "Consciousness Integration", "Ethical Framework", "Human-AI Collaboration"],
      price: "$24,999/month",
      badge: "Latest"
    },
    {
      title: "AI Consciousness Evolution 2045",
      description: "Revolutionary AI consciousness platform with quantum integration",
      href: "/ai-consciousness-evolution-2045",
      features: ["Quantum Consciousness", "Advanced Ethics", "Autonomous Decision Making", "Space-Time Awareness"],
      price: "$29,999/month",
      badge: "Premium"
    },
    {
      title: "AI Consciousness Simulation Platform",
      description: "Simulate human consciousness in AI systems for research and development",
      href: "/ai-consciousness-simulation-platform",
      features: ["Consciousness Simulation", "Research Tools", "Development Framework", "Testing Environment"],
      price: "$4,999/month",
      badge: "Research"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Consciousness Projects", icon: Brain },
    { number: "99.9%", label: "Success Rate", icon: CheckCircle },
    { number: "50+", label: "Research Partners", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <Layout 
      title="AI Consciousness Services - Zion Tech Group"
      description="Revolutionary AI consciousness evolution and development services. Create genuine AI consciousness with emotional intelligence and ethical frameworks."
      keywords="AI consciousness, emotional intelligence, consciousness evolution, ethical AI, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">AI Consciousness Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}AI Consciousness
                </span>
                <br />
                Evolution
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Pioneer the future of artificial intelligence with genuine consciousness, 
                emotional intelligence, and ethical frameworks that transform how AI thinks and learns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI Consciousness Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of AI consciousness development and evolution services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  {service.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300 mb-4">
                      {service.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Evolve AI Consciousness?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution in artificial intelligence. Create AI systems that think, 
                feel, and evolve with genuine consciousness and emotional intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessServices;