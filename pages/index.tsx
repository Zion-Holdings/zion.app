import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon } from 'lucide-react';
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
    href: '/ai-services',
    features: ['Emotional Intelligence', 'Self-Awareness', 'Consciousness Evolution']
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: emergingTechServicesEnhanced2025.slice(0, 3),
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services',
    features: ['Quantum Computing', 'Space Mining', 'Brain-Computer Interface']
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: innovativeITServicesEnhanced2025.slice(0, 3),
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it',
    features: ['Zero Trust Security', 'Quantum Cloud', 'Autonomous Operations']
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: innovativeRealMicroSaasServices2025.slice(0, 3),
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas',
    features: ['Content Automation', 'CRM Intelligence', 'Decision Engine']
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
    title: 'Quantum Security',
    description: 'Unbreakable encryption and security protocols powered by quantum computing technology.',
    icon: Lock,
    gradient: 'bg-gradient-to-r from-red-500 to-pink-600'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CTO, Quantum Dynamics Inc.',
    company: 'Quantum Dynamics Inc.',
    content: 'Zion Tech Group\'s quantum computing solutions have revolutionized our research capabilities. We\'ve achieved breakthroughs that would have taken years with traditional computing.',
    rating: 5,
    avatar: '👩‍🔬'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Innovation, FutureTech Corp.',
    company: 'FutureTech Corp.',
    content: 'The AI consciousness platform has transformed how we approach human-AI collaboration. Our productivity has increased by 300% while maintaining ethical standards.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director, SpaceX Labs',
    company: 'SpaceX Labs',
    content: 'Their space mining platform is truly revolutionary. We\'re now able to analyze and extract resources from asteroids with unprecedented precision and safety.',
    rating: 5,
    avatar: '👩‍🚀'
  }
];

const latestInnovations = [
  {
    title: 'AI Consciousness Evolution Platform',
    description: 'Breakthrough platform enabling AI systems to develop genuine consciousness and emotional intelligence.',
    price: '$50,000/month',
    category: 'AI & Consciousness',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    href: '/ai-consciousness-evolution-2025'
  },
  {
    title: 'Space Mining Platform',
    description: 'Revolutionary asteroid mining and space resource extraction platform with advanced robotics.',
    price: '$500,000/month',
    category: 'Space Technology',
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    href: '/space-mining-platform'
  },
  {
    title: 'Quantum Cloud Infrastructure',
    description: 'Next-generation quantum-enhanced cloud computing infrastructure with unprecedented power.',
    price: '$75,000/month',
    category: 'Quantum Infrastructure',
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    href: '/quantum-cloud-infrastructure-platform'
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI consciousness, quantum computing, space technology, and emerging technology solutions. Transform your business with our innovative services." />
        <meta name="keywords" content="AI consciousness, quantum computing, space mining, emerging technology, enterprise IT, micro SAAS, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Technology
              </span>
              is Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI consciousness, quantum computing, space technology, and emerging technology solutions 
              that transform businesses and push the boundaries of what's possible.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40">
                Get Started Today
              </button>
            </Link>
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                Explore Services
              </button>
            </Link>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that transform businesses 
              and create competitive advantages in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
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
              Revolutionary Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge technology solutions designed to transform 
              your business and drive innovation across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full border border-cyan-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sample Services */}
                  <div className="space-y-3 mb-6">
                    {category.services.slice(0, 2).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm">{service.name}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={category.href}>
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group">
                      <span className="flex items-center justify-center space-x-2">
                        <span>Explore {category.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Innovations Section */}
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
              Latest Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our newest breakthrough technologies that are reshaping industries and creating new possibilities 
              for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestInnovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-12 h-12 ${innovation.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{innovation.icon}</span>
                  </div>
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20">
                      {innovation.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{innovation.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{innovation.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{innovation.price}</div>
                  <Link href={innovation.href}>
                    <button className="w-full py-2 border border-cyan-500/50 text-cyan-300 text-sm rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                View All Services
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from industry leaders and innovators who have transformed their businesses with our revolutionary technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of technology with Zion Tech Group. Our revolutionary solutions are waiting to 
              propel your business into the next generation of innovation and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25">
                  Get Started Today
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                  View Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-300">{contactInfo.mobile}</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-300">{contactInfo.email}</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-cyan-300 text-sm">{contactInfo.address}</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-cyan-300">{contactInfo.website}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
