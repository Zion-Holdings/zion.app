import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

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

const featuredServices = [
  {
    id: 'ai-content-factory-pro',
    name: 'AI Content Factory Pro',
    description: 'Enterprise-grade AI content generation with 99.2% accuracy and multi-language support.',
    price: '$49/month',
    category: 'AI & Content',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    features: ['GPT-4 powered', '25+ languages', 'SEO optimization', 'Brand voice training']
  },
  {
    id: 'quantum-crm-suite',
    name: 'Quantum CRM Suite',
    description: 'Next-generation CRM with quantum-enhanced analytics and 95% accuracy in customer segmentation.',
    price: '$79/month',
    category: 'Sales & CRM',
    icon: Target,
    color: 'from-cyan-500 to-blue-600',
    features: ['Quantum analytics', 'AI lead scoring', 'Predictive forecasting', 'Multi-channel hub']
  },
  {
    id: 'cyber-threat-intelligence',
    name: 'Cyber Threat Intelligence',
    description: 'Advanced cybersecurity with 99.7% threat detection accuracy and automated incident response.',
    price: '$199/month',
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    features: ['Real-time detection', 'AI behavioral analysis', 'Automated response', 'Compliance reporting']
  },
  {
    id: 'quantum-data-analytics',
    name: 'Quantum Data Analytics',
    description: 'Revolutionary data processing with 1000x faster performance using quantum computing.',
    price: '$299/month',
    category: 'Data & Analytics',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-600',
    features: ['Quantum processing', 'ML algorithms', 'Real-time streaming', 'Predictive modeling']
  }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services',
    services: ['AI Content Factory Pro', 'AI Healthcare Diagnostics', 'AI Legal Contract Analyzer']
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services',
    services: ['Quantum CRM Suite', 'Quantum Data Analytics', 'Quantum Financial Trading']
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it',
    services: ['Cyber Threat Intelligence', 'Autonomous DevOps Platform', 'Zero Trust Security']
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas',
    services: ['AI Project Management', 'AI HR Recruitment', 'AI Sales Automation']
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

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum & Emerging Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. 500+ services, 99.9% uptime, 24/7 support." />
        <meta name="keywords" content="AI, quantum computing, emerging technology, enterprise IT, micro SAAS, automation, innovation" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, and emerging technologies. 
              Join 1000+ companies achieving 300% ROI with our innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-600 text-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/services/${service.id}`}>
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${service.color} border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform group-hover:scale-105 h-full`}>
                    <div className="text-4xl mb-4 text-white">
                      <service.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-white mb-3">
                      {service.price}
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-200">
                          <Check className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI consciousness to quantum computing, we provide the full spectrum of cutting-edge technology services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={category.href}
                  className="block group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform group-hover:scale-105`}>
                    <div className="text-4xl mb-4 text-white">
                      <category.icon className="w-16 h-16" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="text-sm text-gray-200 flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business value to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-8 rounded-2xl ${feature.gradient} border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 transform group-hover:scale-105`}>
                  <div className="text-4xl mb-4 text-white">
                    <feature.icon className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
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
            <p className="text-xl text-gray-300 mb-8">
              Join 1000+ companies already achieving breakthrough results with our technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-gray-600 text-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: {contactInfo.mobile} | {contactInfo.email}</p>
              <p>{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
