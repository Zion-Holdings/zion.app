import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Database, Network, Settings, Shield, Zap, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, Cpu, HardDrive
} from 'lucide-react';

const ITInfrastructureServices: React.FC = () => {
  const services = [
    {
      title: 'Quantum Cloud Infrastructure 2045',
      description: 'Quantum-powered cloud computing and infrastructure solutions',
      href: '/quantum-cloud-infrastructure-2045',
      icon: Cloud,
      features: ['Quantum Computing', 'Scalable Infrastructure', 'High Performance', 'Energy Efficient']
    },
    {
      title: 'Quantum Data Center Management 2045',
      description: 'Revolutionary data center management powered by quantum technology',
      href: '/quantum-data-center-management-2045',
      icon: Database,
      features: ['Quantum Optimization', 'Resource Management', 'Energy Efficiency', 'Performance Monitoring']
    },
    {
      title: 'Autonomous DevOps Platform 2045',
      description: 'AI-powered DevOps automation and infrastructure management',
      href: '/autonomous-devops-platform-2045',
      icon: Settings,
      features: ['DevOps Automation', 'CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring & Alerting']
    },
    {
      title: 'Autonomous Network Management 2045',
      description: 'Intelligent network infrastructure management and optimization',
      href: '/autonomous-network-management-2045',
      icon: Network,
      features: ['Network Automation', 'Performance Optimization', 'Security Management', 'Traffic Analysis']
    },
    {
      title: 'Autonomous IT Service Management 2045',
      description: 'AI-driven IT service management and support automation',
      href: '/autonomous-it-service-management-2045',
      icon: Server,
      features: ['Service Automation', 'Incident Management', 'Change Management', 'Service Desk']
    },
    {
      title: '5G Enterprise Network Solutions 2045',
      description: 'Advanced 5G network infrastructure for enterprise applications',
      href: '/5g-enterprise-network-solutions',
      icon: Network,
      features: ['5G Infrastructure', 'Enterprise Networks', 'Low Latency', 'High Bandwidth']
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>IT Infrastructure Services 2045 - Zion Tech Group</title>
        <meta name="description" content="Modern cloud computing, data center management, and IT infrastructure solutions powered by quantum technology and AI. Build the future with Zion Tech Group." />
        <meta name="keywords" content="IT infrastructure, cloud computing, data center, DevOps, network management, quantum technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/it-infrastructure" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-sky-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-sky-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">IT Infrastructure Services 2045</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Future-Ready Infrastructure
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Build the foundation of tomorrow with our revolutionary IT infrastructure solutions. From quantum cloud 
                computing to autonomous DevOps, we're redefining what's possible in infrastructure technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-400 hover:to-sky-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  <span>Build Your Infrastructure</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center space-x-2 border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Our IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of infrastructure solutions designed to power your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href} className="block">
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-sky-500/30 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT infrastructure solutions can power your digital transformation
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-400 hover:to-sky-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITInfrastructureServices;