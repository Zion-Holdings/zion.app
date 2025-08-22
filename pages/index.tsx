import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon, Palette, BookOpen, Truck } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'AI Services', value: '50+', icon: <Brain className="w-6 h-6" /> },
  { label: 'Quantum Solutions', value: '25+', icon: <Atom className="w-6 h-6" /> },
  { label: 'Enterprise IT', value: '30+', icon: <Shield className="w-6 h-6" /> },
  { label: 'Micro SAAS', value: '40+', icon: <Rocket className="w-6 h-6" /> }
];

const stats = [
  { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Years Experience', value: '15+', icon: <Clock className="w-5 h-5" /> },
  { label: 'Awards Won', value: '25+', icon: <Award className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence solutions',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services',
    services: innovativeAIServicesEnhanced2025.slice(0, 4)
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Quantum computing and breakthrough technologies',
    icon: <Atom className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-600',
    href: '/quantum-services',
    services: emergingTechServicesEnhanced2025.slice(0, 4)
  },
  {
    title: 'Enterprise IT',
    description: 'Enterprise solutions and infrastructure',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it',
    services: innovativeITServicesEnhanced2025.slice(0, 4)
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-emerald-500 to-green-600',
    href: '/micro-saas',
    services: innovativeRealMicroSaasServices2025.slice(0, 4)
  },
  {
    title: 'Creative & Design',
    description: 'AI-powered creative and design solutions',
    icon: <Palette className="w-8 h-8" />,
    color: 'from-pink-500 to-rose-600',
    href: '/creative-services',
    services: []
  },
  {
    title: 'Research & Development',
    description: 'Cutting-edge research and development services',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-orange-500 to-red-600',
    href: '/research-development',
    services: []
  }
];

const heroFeatures = [
  {
    title: 'AI Consciousness Evolution',
    description: 'Revolutionary AI that develops emotional intelligence and self-awareness',
    icon: <Brain className="w-6 h-6" />,
    href: '/ai-consciousness-evolution-2025'
  },
  {
    title: 'Quantum Internet Security',
    description: 'Unbreakable encryption using quantum computing principles',
    icon: <Lock className="w-6 h-6" />,
    href: '/quantum-internet-security-platform'
  },
  {
    title: 'Space Resource Mining',
    description: 'Asteroid mining and space resource extraction technology',
    icon: <Rocket className="w-6 h-6" />,
    href: '/space-resource-mining-platform'
  },
  {
    title: 'Brain-Computer Interface',
    description: 'Neural interface technology for human-computer interaction',
    icon: <Cpu className="w-6 h-6" />,
    href: '/brain-computer-interface-platform'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions 2025</title>
        <meta name="description" content="Discover cutting-edge AI, Quantum Computing, and Enterprise IT solutions. Transform your business with Zion Tech Group's innovative technology services." />
        <meta name="keywords" content="AI, Quantum Computing, Enterprise IT, Micro SAAS, Technology Solutions, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions 2025" />
        <meta property="og:description" content="Discover cutting-edge AI, Quantum Computing, and Enterprise IT solutions. Transform your business with Zion Tech Group's innovative technology services." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI consciousness, quantum computing, and enterprise IT solutions. 
              Experience the future of technology with Zion Tech Group.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Explore All Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                Get Started Today
              </button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our revolutionary technology solutions across AI, Quantum Computing, Enterprise IT, and Micro SAAS platforms.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                    
                    {category.services.length > 0 && (
                      <div className="space-y-3 mb-6">
                        {category.services.map((service) => (
                          <div key={service.id} className="flex items-center space-x-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-300">{service.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Link href={category.href}>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 font-semibold rounded-xl border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-600/30 hover:text-white transition-all duration-300">
                        Explore {category.title}
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the cutting-edge technology that's shaping the future of business and innovation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <Link href={feature.href}>
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with our technology.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the future of technology with Zion Tech Group. Our revolutionary AI, quantum computing, and enterprise IT solutions are ready to accelerate your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                  Get Started Today
                </button>
              </Link>
              <Link href="/comprehensive-services-showcase-2025">
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                  View All Services
                </button>
              </Link>
            </div>
            
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
