import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Globe,
  Rocket,
  Brain,
  Atom,
  Cpu,
  Target,
  CheckCircle,
  Play,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

const Homepage2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Global Clients', icon: <Globe className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'AI Services', icon: <Brain className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services'
    },
    {
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      title: 'Quantum Computing',
      description: 'Next-generation quantum technology solutions'
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: 'Space Technology',
      description: 'Innovative space exploration and mining solutions'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      title: 'Enterprise IT',
      description: 'Scalable enterprise infrastructure and solutions'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      company: "TechFlow Inc.",
      content: "Zion Tech Group transformed our AI infrastructure. Their quantum computing solutions gave us a 300% performance boost.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Engineering, QuantumCorp",
      company: "QuantumCorp",
      content: "The autonomous systems they implemented reduced our operational costs by 40% while improving reliability.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, FutureLabs",
      company: "FutureLabs",
      content: "Their AI consciousness platform opened new frontiers in our research. Truly groundbreaking technology.",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ];

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ y }}
          >
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          </motion.div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering the future of technology with cutting-edge AI, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>

                          <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a
                  href="/innovative-2038-services-showcase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-2xl shadow-purple-500/25 mb-4 sm:mb-0"
                >
                  <span>Explore 2038 Services</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Watch Demo
                <Play className="w-5 h-5 ml-2 inline" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Social Proof Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join hundreds of companies already transforming their business with our solutions
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/get-started">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2025 Services Showcase
                  </button>
                </Link>
                <Link href="/2037-innovative-services-showcase">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2037 Innovation Showcase
                  </button>
                </Link>
                <Link href="/2037-innovative-pricing-showcase">
                  <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2037 Pricing Showcase
                  </button>
                </Link>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              
              <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with{' '}
                <span className="text-cyan-400 font-semibold">innovative solutions</span> that drive{' '}
                <span className="text-blue-400 font-semibold">business transformation</span> and{' '}
                <span className="text-purple-400 font-semibold">digital evolution</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.button 
                  className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats Section */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-cyan-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver solutions that transform businesses and drive innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Premium Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'ai-ml',
                    name: 'AI & Machine Learning',
                    tagline: 'Advanced artificial intelligence solutions',
                    description: 'Advanced artificial intelligence solutions for modern businesses',
                    price: '$999',
                    period: 'month',
                    features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
                    popular: true,
                    category: 'AI',
                    icon: '🧠'
                  }}
                  variant="ai"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'quantum-computing',
                    name: 'Quantum Computing',
                    tagline: 'Next-generation computing solutions',
                    description: 'Next-generation computing solutions for complex problems',
                    price: '$1999',
                    period: 'month',
                    features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation'],
                    popular: false,
                    category: 'Quantum',
                    icon: '⚛️'
                  }}
                  variant="quantum"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'process-automation',
                    name: 'Process Automation',
                    tagline: 'Intelligent automation solutions',
                    description: 'Intelligent automation to streamline your operations',
                    price: '$799',
                    period: 'month',
                    features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics'],
                    popular: true,
                    category: 'Automation',
                    icon: '⚡'
                  }}
                  variant="automation"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16 space-y-4"
            >
              <Link
                href="/comprehensive-2026-services-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                View 2026 Services Showcase
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our cutting-edge technology solutions to stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Start Free Trial
                </motion.button>
                
                <motion.button 
                  className="px-10 py-5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-5 h-5" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;