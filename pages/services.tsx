import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, ArrowRight, CheckCircle, 
  Star, Users, Globe, Zap, Target, TrendingUp,
  Cpu, Database, Lock, Satellite, Microscope, Network,
  Cloud, Heart, DollarSign, Cog, ShoppingBag
} from 'lucide-react';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: "AI Consciousness Evolution",
      description: "Revolutionary AI systems that develop self-awareness, emotional intelligence, and autonomous learning capabilities.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      features: [
        "Emotional intelligence development",
        "Self-aware learning systems",
        "Consciousness evolution algorithms",
        "Human-AI collaboration frameworks"
      ],
      benefits: [
        "Enhanced decision-making capabilities",
        "Improved human-AI interaction",
        "Autonomous problem-solving",
        "Continuous self-improvement"
      ]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing platforms that solve previously impossible computational problems.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Quantum algorithm optimization",
        "Hybrid quantum-classical systems",
        "Cryptography and security",
        "Complex problem solving"
      ],
      benefits: [
        "1000x faster computation",
        "Breakthrough research capabilities",
        "Unbreakable encryption",
        "Optimization solutions"
      ]
    },
    {
      title: "Advanced Cybersecurity",
      description: "AI-powered security systems that provide real-time threat detection and autonomous response capabilities.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      features: [
        "AI threat intelligence",
        "Zero-trust architecture",
        "Automated incident response",
        "Behavioral analysis"
      ],
      benefits: [
        "99.9% threat detection rate",
        "Real-time protection",
        "Reduced false positives",
        "Compliance assurance"
      ]
    },
    {
      title: "Space Technology",
      description: "Autonomous space exploration systems and resource intelligence platforms for the final frontier.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      features: [
        "Autonomous exploration systems",
        "Space resource intelligence",
        "Satellite network management",
        "Mission planning and execution"
      ],
      benefits: [
        "Reduced mission costs",
        "Enhanced safety protocols",
        "Real-time decision making",
        "Resource optimization"
      ]
    }
  ];

  const specializedServices = [
    {
      title: "Edge Computing Orchestration",
      description: "Intelligent edge computing solutions that bring processing power closer to data sources.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      href: "/edge-computing-orchestration"
    },
    {
      title: "Cloud Platform Solutions",
      description: "Advanced cloud infrastructure and platform services for scalable applications.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      href: "/cloud-platform"
    },
    {
      title: "AI Services Platform",
      description: "Comprehensive AI services including consciousness evolution and autonomous systems.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      href: "/ai-services"
    },
    {
      title: "Quantum Services",
      description: "Quantum computing solutions for cryptography, optimization, and research.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      href: "/quantum-services"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, treatment planning, and patient care",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Finance",
      description: "Intelligent trading, risk assessment, and fraud detection",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and process optimization",
      icon: <Cog className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Retail",
      description: "Customer personalization, inventory management, and demand forecasting",
      icon: <ShoppingBag className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <Layout 
      title="Services - Zion Tech Group"
      description="Comprehensive technology services including AI consciousness, quantum computing, cybersecurity, and space technology"
      canonicalUrl="https://ziontechgroup.com/services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {' '}Technology Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our cutting-edge services 
                in AI consciousness, quantum computing, cybersecurity, and space technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary technology solutions designed to transform industries 
                and drive innovation across all sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Specialized Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Targeted solutions for specific technology needs and industry requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <a href={service.href} className="block">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary technology solutions are designed to transform 
                operations across diverse industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the technology revolution and discover how our cutting-edge 
                solutions can drive innovation and growth in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <Rocket className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;
