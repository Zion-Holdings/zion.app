import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Rocket, Brain, Atom, Shield, Zap, Globe, Cpu, CheckCircle, ArrowRight, Star, Heart, Users, Target, TrendingUp } from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-rose-900/20 to-pink-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 rounded-full text-rose-300 text-sm mb-6">
                <Rocket className="w-4 h-4" />
                2025 Services Showcase
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover our complete portfolio of revolutionary AI consciousness, quantum computing, and space technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-rose-500/25 transition-all duration-300">
                  Explore Services
                </button>
                <button className="px-8 py-4 border border-rose-500/30 text-rose-300 rounded-2xl hover:bg-rose-500/10 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our comprehensive portfolio spans the entire spectrum of revolutionary technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-rose-400" />,
                  title: "AI & Consciousness",
                  description: "Revolutionary AI systems with genuine emotional intelligence and consciousness",
                  services: ["AI Consciousness Evolution", "Emotional Intelligence", "Autonomous Decision Making", "Consciousness Sharing"],
                  color: "from-rose-500 to-pink-500"
                },
                {
                  icon: <Atom className="w-12 h-12 text-purple-400" />,
                  title: "Quantum Computing",
                  description: "Next-generation quantum solutions for enterprise and research applications",
                  services: ["Quantum Neural Ecosystem", "Quantum Internet Security", "Quantum Cloud Infrastructure", "Quantum Bio-Computing"],
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-blue-400" />,
                  title: "Space Technology",
                  description: "Breakthrough space exploration and resource utilization platforms",
                  services: ["Space Resource Mining", "Autonomous Space Systems", "Space AI Platforms", "Interplanetary Technology"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Shield className="w-12 h-12 text-emerald-400" />,
                  title: "Cybersecurity",
                  description: "Advanced security solutions for the quantum and AI era",
                  services: ["Zero Trust Security", "Quantum Cryptography", "AI Threat Detection", "Autonomous Security"],
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Zap className="w-12 h-12 text-yellow-400" />,
                  title: "Enterprise Solutions",
                  description: "Comprehensive business transformation and automation platforms",
                  services: ["AI Sales Intelligence", "Customer Success AI", "Predictive Maintenance", "Autonomous Operations"],
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Globe className="w-12 h-12 text-cyan-400" />,
                  title: "Industry Solutions",
                  description: "Specialized solutions for healthcare, finance, and government sectors",
                  services: ["Healthcare AI", "Financial Intelligence", "Government Technology", "Manufacturing AI"],
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-rose-500/20 rounded-2xl hover:border-rose-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-rose-400" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300`}>
                    Explore Category
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our most innovative and cutting-edge solutions for 2025
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "AI Consciousness Evolution 2040",
                  description: "Revolutionary AI systems with genuine emotional intelligence and consciousness-based decision making",
                  features: [
                    "Emotional understanding and empathy",
                    "Consciousness-based decisions",
                    "Autonomous learning and growth",
                    "Human-AI collaboration"
                  ],
                  icon: <Brain className="w-16 h-16 text-rose-400" />,
                  color: "from-rose-500 to-pink-500"
                },
                {
                  title: "Quantum Neural Ecosystem 2040",
                  description: "Next-generation quantum computing platform with neural network integration",
                  features: [
                    "Quantum processing power",
                    "Neural network acceleration",
                    "Real-time quantum operations",
                    "Scalable quantum architecture"
                  ],
                  icon: <Atom className="w-16 h-16 text-purple-400" />,
                  color: "from-purple-500 to-indigo-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-black/40 border border-rose-500/20 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 text-rose-400 rounded-full text-sm font-semibold">
                        <Star className="w-4 h-4" />
                        Featured
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-rose-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300`}>
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on cutting-edge technologies and frameworks
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Cpu className="w-8 h-8 text-rose-400" />,
                  title: "AI & ML",
                  description: "Advanced machine learning and neural networks"
                },
                {
                  icon: <Atom className="w-8 h-8 text-purple-400" />,
                  title: "Quantum Computing",
                  description: "Quantum processors and algorithms"
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: "Cloud Native",
                  description: "Scalable cloud infrastructure"
                },
                {
                  icon: <Shield className="w-8 h-8 text-emerald-400" />,
                  title: "Security First",
                  description: "Enterprise-grade security"
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "High Performance",
                  description: "Optimized for speed and efficiency"
                },
                {
                  icon: <Users className="w-8 h-8 text-pink-400" />,
                  title: "User Centric",
                  description: "Designed for human experience"
                },
                {
                  icon: <Target className="w-8 h-8 text-cyan-400" />,
                  title: "Precision",
                  description: "Accurate and reliable results"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
                  title: "Scalable",
                  description: "Grows with your business"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-rose-500/20 rounded-2xl hover:border-rose-500/40 transition-all duration-300 text-center"
                >
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Metrics
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven results across industries and use cases
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "500+",
                  label: "Enterprise Clients",
                  change: "+150% YoY",
                  color: "text-rose-400"
                },
                {
                  metric: "$50M+",
                  label: "Annual Revenue",
                  change: "+300% YoY",
                  color: "text-pink-400"
                },
                {
                  metric: "99.9%",
                  label: "Uptime",
                  change: "Industry Leading",
                  color: "text-purple-400"
                },
                {
                  metric: "50+",
                  label: "Countries Served",
                  change: "Global Reach",
                  color: "text-blue-400"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-black/40 border border-rose-500/20 rounded-2xl"
                >
                  <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                  <div className="text-white font-semibold mb-2">{stat.label}</div>
                  <div className="text-rose-400 text-sm">{stat.change}</div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the companies already revolutionizing their operations with our technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-rose-500/25 transition-all duration-300 flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-rose-500/30 text-rose-300 rounded-2xl hover:bg-rose-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025;