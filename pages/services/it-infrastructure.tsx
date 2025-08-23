import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, Cloud, Network, Zap, Shield, Target, Users, Star, CheckCircle, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Lock, FileText, GraduationCap, DollarSign, Clock, Server
} from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with hybrid and multi-cloud capabilities",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "High-performance networking with SDN and automation",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Server,
      title: "Data Center Services",
      description: "Enterprise-grade data center solutions and colocation",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "DevOps & Automation",
      description: "Streamlined development and deployment with CI/CD pipelines",
      color: "from-pink-500 to-purple-500"
    }
  ];

  const services = [
    {
      title: "Cloud Infrastructure Platform",
      description: "Comprehensive cloud platform with hybrid and multi-cloud management",
      price: "From $100,000",
      features: ["Multi-cloud orchestration", "Auto-scaling", "Cost optimization", "Security compliance"]
    },
    {
      title: "Network Infrastructure Suite",
      description: "Complete networking solution with SDN and automation capabilities",
      price: "From $75,000",
      features: ["Software-defined networking", "Network automation", "Performance monitoring", "Security integration"]
    },
    {
      title: "Data Center & Colocation",
      description: "Enterprise data center services with high availability and redundancy",
      price: "From $150,000",
      features: ["High availability", "Disaster recovery", "24/7 monitoring", "Compliance ready"]
    }
  ];

  const stats = [
    { number: "99.99%", label: "Uptime Guarantee", icon: Server },
    { number: "1000+", label: "Servers Managed", icon: Cpu },
    { number: "50+", label: "Data Centers", icon: Cloud },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <Layout 
      title="IT Infrastructure Services - Zion Tech Group"
      description="Comprehensive IT infrastructure solutions including cloud services, networking, data centers, and DevOps automation."
      keywords="IT infrastructure, cloud services, networking, data centers, DevOps, automation, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/it-infrastructure"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
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
                IT <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Infrastructure</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build robust, scalable, and secure IT infrastructure with our comprehensive 
                cloud services, networking solutions, and data center expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" />
                </button>
                <button className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300 flex items-center justify-center">
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
                Revolutionary Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT infrastructure services provide the foundation for digital transformation 
                with enterprise-grade reliability, security, and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300"
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
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive infrastructure solutions designed to support your business growth 
                with scalable, secure, and high-performance technology foundations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500 hover:border-yellow-400 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-yellow-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
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
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Build Your Digital Foundation
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to create a robust, scalable IT infrastructure that supports your business growth?
              </p>
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                Start Building Today
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ITInfrastructurePage;