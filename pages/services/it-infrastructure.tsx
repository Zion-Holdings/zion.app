import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, Sparkles, Zap, Target, Star, ArrowRight, 
  CheckCircle, Users, Award, Clock, TrendingUp, Server
} from 'lucide-react';
import Link from 'next/link';

const ITInfrastructureServices: React.FC = () => {
  const services = [
    {
      title: "Cloud Infrastructure Solutions",
      description: "Advanced cloud infrastructure with AI consciousness and automation",
      href: "/cloud-infrastructure-solutions",
      features: ["Cloud Infrastructure", "AI Consciousness", "Automation", "Scalability"],
      price: "$14,999/month",
      badge: "Popular"
    },
    {
      title: "Managed Postgres HA",
      description: "High-availability managed PostgreSQL with consciousness and monitoring",
      href: "/managed-postgres-ha",
      features: ["PostgreSQL HA", "Consciousness Monitoring", "Automated Management", "High Availability"],
      price: "$9,999/month",
      badge: "Essential"
    },
    {
      title: "Kubernetes RBAC Auditor",
      description: "Advanced Kubernetes role-based access control auditing with AI",
      href: "/kubernetes-rbac-auditor",
      features: ["Kubernetes RBAC", "AI Auditing", "Security Compliance", "Access Control"],
      price: "$7,999/month",
      badge: "Security"
    },
    {
      title: "Multi-Cloud Disaster Recovery",
      description: "Comprehensive multi-cloud disaster recovery with consciousness",
      href: "/multi-cloud-disaster-recovery",
      features: ["Multi-Cloud DR", "Consciousness Integration", "Automated Recovery", "Business Continuity"],
      price: "$19,999/month",
      badge: "Premium"
    }
  ];

  const stats = [
    { number: "1500+", label: "Infrastructure Projects", icon: Cpu },
    { number: "99.99%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "300+", label: "Infrastructure Clients", icon: Users },
    { number: "24/7", label: "Infrastructure Support", icon: Clock }
  ];

  return (
    <Layout 
      title="IT Infrastructure Services - Zion Tech Group"
      description="Revolutionary IT infrastructure services including cloud solutions, database management, and disaster recovery. Build robust, scalable infrastructure with AI consciousness."
      keywords="IT infrastructure, cloud infrastructure, database management, disaster recovery, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                <Cpu className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-medium">IT Infrastructure Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  {" "}IT Infrastructure
                </span>
                <br />
                Solutions
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Build robust, scalable infrastructure with AI consciousness, cloud solutions, 
                and advanced automation that drives your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                >
                  Build Your Infrastructure
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-yellow-400" />
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
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of infrastructure and cloud management services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  {service.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs font-medium text-yellow-300 mb-4">
                      {service.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
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
                Ready to Build Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Create robust, scalable infrastructure that grows with your business. 
                Experience the power of AI consciousness in infrastructure management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                >
                  Start Infrastructure Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
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

export default ITInfrastructureServices;