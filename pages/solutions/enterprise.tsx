import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Users, Shield, Database, Cloud, Target, 
  ArrowRight, CheckCircle, Star, Zap, Brain, Atom,
  Rocket, Cpu, Lock, TrendingUp, Globe, Award
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: "AI Consciousness Enterprise Platform",
      description: "Scalable AI consciousness solutions for enterprise-wide deployment",
      features: [
        "Multi-tenant architecture",
        "Enterprise-grade security",
        "Custom consciousness models",
        "Integration APIs"
      ],
      icon: <Brain className="w-8 h-8" />,
      category: "AI & Consciousness"
    },
    {
      title: "Quantum Computing Infrastructure",
      description: "Enterprise quantum computing solutions with hybrid classical-quantum architecture",
      features: [
        "Hybrid quantum-classical systems",
        "Enterprise security protocols",
        "Scalable quantum algorithms",
        "Performance monitoring"
      ],
      icon: <Atom className="w-8 h-8" />,
      category: "Quantum Computing"
    },
    {
      title: "Autonomous IT Operations Center",
      description: "Fully autonomous IT management with AI-powered decision making",
      features: [
        "Self-healing infrastructure",
        "Predictive maintenance",
        "Automated incident response",
        "Real-time analytics"
      ],
      icon: <Cpu className="w-8 h-8" />,
      category: "IT Infrastructure"
    },
    {
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions with quantum-resistant encryption",
      features: [
        "Quantum-resistant cryptography",
        "AI threat detection",
        "Zero-trust architecture",
        "Compliance frameworks"
      ],
      icon: <Shield className="w-8 h-8" />,
      category: "Cybersecurity"
    },
    {
      title: "Space Resource Intelligence Platform",
      description: "Enterprise space technology solutions for resource management",
      features: [
        "Satellite data processing",
        "Resource optimization",
        "Risk assessment",
        "Strategic planning tools"
      ],
      icon: <Rocket className="w-8 h-8" />,
      category: "Space Technology"
    },
    {
      title: "Autonomous Business Intelligence",
      description: "AI-powered business intelligence with autonomous insights",
      features: [
        "Predictive analytics",
        "Automated reporting",
        "Real-time dashboards",
        "Decision support"
      ],
      icon: <Target className="w-8 h-8" />,
      category: "Business Intelligence"
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Solutions that grow with your enterprise needs",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Integration",
      description: "Seamless integration with existing systems",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Support",
      description: "24/7 dedicated enterprise support",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Technology",
    "Energy",
    "Government",
    "Education"
  ];

  return (
    <Layout 
      title="Enterprise Solutions - Zion Tech Group"
      description="Transform your enterprise with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous technology solutions."
      keywords="enterprise solutions, AI consciousness, quantum computing, autonomous systems, enterprise technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-cyan-400 mb-6">
                <Building className="w-20 h-20 mx-auto" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your enterprise with revolutionary AI consciousness, quantum computing, 
                and autonomous technology solutions designed for scale and performance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#solutions" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/contact" className="border border-cyan-500/50 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for enterprise-scale deployment 
                and mission-critical operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">
                    {solution.icon}
                  </div>
                  <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30 mb-4">
                    {solution.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are designed to meet the unique challenges 
                and requirements of various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-3">
                    <Star className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {industry}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading enterprises that are already leveraging our revolutionary 
                technology solutions to gain competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact Sales Team</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnterpriseSolutionsPage;