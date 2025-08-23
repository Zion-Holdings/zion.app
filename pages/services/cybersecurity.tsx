import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Cpu, Zap, Target, Users, Star, CheckCircle, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Cloud, Network, FileText, GraduationCap, DollarSign, Clock, Eye
} from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security with AI-powered threat detection and prevention",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Never trust, always verify security architecture for modern enterprises",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Eye,
      title: "Incident Response",
      description: "24/7 security monitoring and rapid response to security incidents",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Security Audits",
      description: "Comprehensive security assessments and compliance verification",
      color: "from-pink-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "Enterprise Security Suite",
      description: "Complete cybersecurity platform with advanced threat protection and zero trust architecture",
      price: "From $150,000",
      features: ["AI threat detection", "Zero trust implementation", "24/7 monitoring", "Incident response"]
    },
    {
      title: "Security Assessment & Audit",
      description: "Comprehensive security evaluation and compliance verification services",
      price: "From $25,000",
      features: ["Vulnerability assessment", "Penetration testing", "Compliance audit", "Security roadmap"]
    },
    {
      title: "Incident Response & Recovery",
      description: "Rapid response and recovery services for security incidents and breaches",
      price: "From $50,000",
      features: ["24/7 response team", "Forensic analysis", "Recovery planning", "Post-incident review"]
    }
  ];

  const stats = [
    { number: "99.99%", label: "Threat Detection", icon: Shield },
    { number: "24/7", label: "Security Monitoring", icon: Eye },
    { number: "15min", label: "Response Time", icon: Clock },
    { number: "100%", label: "Compliance Rate", icon: CheckCircle }
  ];

  return (
    <Layout 
      title="Cybersecurity Services - Zion Tech Group"
      description="Advanced cybersecurity solutions with AI-powered threat detection, zero trust architecture, and comprehensive security services."
      keywords="cybersecurity, threat protection, zero trust security, incident response, security audits, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
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
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Cybersecurity</span> Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Protecting your digital assets with cutting-edge cybersecurity solutions, 
                AI-powered threat detection, and zero trust security architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" />
                </button>
                <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center">
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
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cybersecurity services combine advanced technology with proven methodologies 
                to provide comprehensive protection against evolving threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300"
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
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your business 
                from the most sophisticated cyber threats and ensure compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500 hover:border-red-400 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-red-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
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
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Digital Future
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Don't wait for a breach to happen. Protect your business with our 
                comprehensive cybersecurity solutions today.
              </p>
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                Get Protected Now
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityPage;