import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  BarChart3, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Rocket,
  Brain,
  Atom
} from 'lucide-react';
import Link from 'next/link';

const EnterpriseSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: "Enterprise Architecture",
      description: "Scalable, secure, and future-ready enterprise infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive security solutions for large organizations",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless cloud transformation and optimization",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Enterprise-grade data governance and analytics",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      description: "Modernize legacy systems and processes",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Advanced analytics and decision-making tools",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const solutions = [
    {
      title: "Enterprise AI Platform",
      description: "Scalable AI solutions for enterprise operations",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      href: "/ai-enterprise-platform"
    },
    {
      title: "Quantum Enterprise Security",
      description: "Next-generation quantum-resistant security",
      features: ["Quantum Encryption", "Zero Trust Architecture", "Advanced Threat Detection", "Compliance Management"],
      href: "/quantum-enterprise-security"
    },
    {
      title: "Enterprise Cloud Infrastructure",
      description: "Multi-cloud and hybrid cloud solutions",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Automation", "Cost Optimization"],
      href: "/enterprise-cloud-infrastructure"
    },
    {
      title: "Enterprise Data Platform",
      description: "Unified data management and analytics",
      features: ["Data Governance", "Real-time Analytics", "Data Lake", "Business Intelligence"],
      href: "/enterprise-data-platform"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", description: "Trusted by Fortune 500 companies" },
    { number: "99.99%", label: "Uptime Guarantee", description: "Mission-critical reliability" },
    { number: "24/7", label: "Support", description: "Round-the-clock enterprise support" },
    { number: "50+", label: "Countries", description: "Global enterprise presence" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your enterprise with cutting-edge technology solutions designed for scale, security, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Enterprise Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for the most demanding enterprise environments with scalability, security, and performance at the core.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Solutions Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions designed to address the unique challenges of enterprise organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Trust & Scale
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven track record with the world's leading enterprises.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our enterprise solutions can drive innovation, security, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Enterprise Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnterpriseSolutionsPage;