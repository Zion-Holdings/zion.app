import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock } from 'lucide-react';
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
  { label: 'Services Delivered', value: '500+', icon: <Star className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '1000+', icon: <Users className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '300%', icon: <TrendingUp className="w-5 h-5" /> }
];

const stats = [
  { number: '50+', label: 'Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Shield, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: innovativeAIServicesEnhanced2025.slice(0, 3),
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services'
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: emergingTechServicesEnhanced2025.slice(0, 3),
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services'
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: innovativeITServicesEnhanced2025.slice(0, 3),
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: innovativeRealMicroSaasServices2025.slice(0, 3),
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas'
  }
];

const heroFeatures = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest AI, quantum computing, and emerging technologies that give you a competitive edge.',
    icon: Zap,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'Rapid Implementation',
    description: 'Get up and running in under 24 hours with our streamlined setup process and expert guidance.',
    icon: Rocket,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Global Infrastructure',
    description: 'Enterprise-grade infrastructure available in 150+ countries worldwide with 99.9% uptime guarantee.',
    icon: Globe,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support and monitoring for all services with dedicated account managers.',
    icon: Shield,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  },
  {
    title: 'AI-Powered Automation',
    description: 'Intelligent automation that reduces manual work by 80% and increases operational efficiency.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    title: 'Future-Proof Solutions',
    description: 'Built with scalability and adaptability in mind to grow with your business needs.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-600'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp Inc.',
    content: 'Zion Tech Group transformed our infrastructure with their quantum AI solutions. 40% efficiency improvement in just 3 months!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO, InnovateLabs',
    content: 'The AI consciousness platform opened new possibilities for human-AI collaboration. Game-changing technology!',
    rating: 5
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Research Director, BioTech Solutions',
    content: 'Their quantum bio-computing platform accelerated our drug discovery process by 1000x. Revolutionary!',
    rating: 5
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, and emerging technology solutions. 500+ services, 99.9% uptime, 24/7 support." />
        <meta name="keywords" content="AI, quantum computing, emerging technology, micro SAAS, enterprise IT, space technology, brain-computer interface" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        {/* Business Information */}
        <meta name="business:name" content="Zion Tech Group" />
        <meta name="business:website" content="https://ziontechgroup.com" />
        <meta name="business:industry" content="Technology Services" />
        <meta name="business:services" content="AI, Quantum Computing, Emerging Technology, Micro SAAS, Enterprise IT" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, and emerging technologies. 
              Experience the future of innovation with Zion Tech Group.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
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
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="text-white">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <span className="text-white text-center">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <stat.icon className="w-12 h-12" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Technology Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of cutting-edge technology solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                    
                    {/* Sample Services */}
                    <div className="space-y-3">
                      {category.services.slice(0, 2).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 truncate">{service.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all duration-300">
                      <span className="text-sm font-semibold">Explore Services</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Features */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of technology with our comprehensive suite of innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses with our technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group. Get started today and experience the power of revolutionary AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                  Contact Us Today
                </button>
              </Link>
              <Link href="/comprehensive-services-showcase-2025">
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View All Services
                </button>
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <span className="text-white">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-cyan-400">
                  <Mail className="w-5 h-5" />
                  <span className="text-white">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span className="text-white text-center">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
