import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Users, Shield, Database, Cloud, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Brain,
  Atom, Rocket, Cpu, Server, Network, Lock
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI Enterprise Platform",
      description: "Comprehensive AI solutions for large-scale enterprise operations",
      features: ["AI Consciousness Integration", "Enterprise Workflow Automation", "Predictive Analytics", "24/7 AI Support"],
      color: "from-purple-500 to-pink-500",
      href: "/ai-enterprise-platform"
    },
    {
      icon: Atom,
      title: "Quantum Enterprise Solutions",
      description: "Quantum computing solutions for enterprise-grade security and performance",
      features: ["Quantum Cybersecurity", "Quantum Data Processing", "Quantum Machine Learning", "Future-Proof Architecture"],
      color: "from-blue-500 to-cyan-500",
      href: "/quantum-enterprise-solutions"
    },
    {
      icon: Shield,
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions for enterprise environments",
      features: ["Zero Trust Architecture", "Advanced Threat Detection", "Compliance Automation", "24/7 Security Monitoring"],
      color: "from-red-500 to-orange-500",
      href: "/enterprise-cybersecurity"
    },
    {
      icon: Cloud,
      title: "Enterprise Cloud Infrastructure",
      description: "Scalable cloud solutions designed for enterprise needs",
      features: ["Multi-Cloud Management", "Auto-scaling Infrastructure", "Disaster Recovery", "Performance Optimization"],
      color: "from-indigo-500 to-purple-500",
      href: "/enterprise-cloud-infrastructure"
    },
    {
      icon: Database,
      title: "Enterprise Data Solutions",
      description: "Advanced data management and analytics for enterprise",
      features: ["Big Data Processing", "Real-time Analytics", "Data Governance", "AI-Powered Insights"],
      color: "from-emerald-500 to-teal-500",
      href: "/enterprise-data-solutions"
    },
    {
      icon: Server,
      title: "Enterprise IT Infrastructure",
      description: "Modern IT infrastructure solutions for enterprise scale",
      features: ["Network Automation", "Server Management", "Monitoring & Alerting", "Performance Optimization"],
      color: "from-yellow-500 to-orange-500",
      href: "/enterprise-it-infrastructure"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Solutions that grow with your business needs"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "Track record of successful enterprise implementations"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Building },
    { number: "99.99%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Countries Served", icon: Users }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Enterprise Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Enterprise Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your enterprise with cutting-edge AI consciousness, quantum computing, 
                and autonomous solutions designed for large-scale operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise-grade solutions are designed to handle the most demanding business requirements
                with cutting-edge technology and proven reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade solutions with the innovation and reliability your business demands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
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
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our enterprise solutions can drive innovation and growth in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Enterprise Quote <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Services
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