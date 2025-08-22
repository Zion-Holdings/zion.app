import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, 
  Rocket, Brain, Sparkles, Atom, Users, Globe, Cpu, Target, 
  Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, 
  Clock, Heart, Lightbulb, ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeNewMicroSaasServices2025 } from '../data/2025-innovative-new-micro-saas-services';
import { innovativeNewAIServices2025 } from '../data/2025-innovative-new-ai-services';
import { innovativeNewITServices2025 } from '../data/2025-innovative-new-it-services';
import { innovativeNewBusinessSolutions2025 } from '../data/2025-innovative-new-business-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...innovativeNewMicroSaasServices2025,
  ...innovativeNewAIServices2025,
  ...innovativeNewITServices2025,
  ...innovativeNewBusinessSolutions2025
];

const serviceCategories = [
  {
    name: 'New Micro SAAS Services',
    services: innovativeNewMicroSaasServices2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    description: 'Innovative business solutions with AI-powered automation'
  },
  {
    name: 'New AI Services',
    services: innovativeNewAIServices2025,
    icon: Brain,
    color: 'from-pink-500 to-rose-600',
    description: 'Cutting-edge AI services with autonomous capabilities'
  },
  {
    name: 'New IT Services',
    services: innovativeNewITServices2025,
    icon: Shield,
    color: 'from-cyan-500 to-blue-600',
    description: 'Next-generation IT infrastructure and security'
  },
  {
    name: 'New Business Solutions',
    services: innovativeNewBusinessSolutions2025,
    icon: Target,
    color: 'from-emerald-500 to-teal-600',
    description: 'AI-powered business intelligence and automation'
  }
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
  >
    {/* Popular Badge */}
    {service.popular && (
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
        POPULAR
      </div>
    )}

    {/* Service Icon */}
    <div className="flex items-center justify-between mb-4">
      <div className="text-4xl">{service.icon}</div>
      <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
        {service.price}
        <span className="text-sm text-gray-400">{service.period}</span>
      </div>
    </div>

    {/* Service Title */}
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
      {service.name}
    </h3>

    {/* Service Tagline */}
    <p className="text-gray-300 mb-4 text-sm">
      {service.tagline}
    </p>

    {/* Service Description */}
    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
      {service.description}
    </p>

    {/* Key Features */}
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
      <ul className="space-y-1">
        {service.features.slice(0, 3).map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-xs text-gray-400">
            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* Market Position */}
    <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
      <h4 className="text-xs font-semibold text-cyan-400 mb-1">Market Position:</h4>
      <p className="text-xs text-gray-400 line-clamp-3">
        {service.marketPosition}
      </p>
    </div>

    {/* Service Stats */}
    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
      <div className="flex items-center">
        <Star className="w-3 h-3 text-yellow-400 mr-1" />
        {service.rating} ({service.reviews} reviews)
      </div>
      <div className="flex items-center">
        <Users className="w-3 h-3 text-blue-400 mr-1" />
        {service.customers} customers
      </div>
    </div>

    {/* CTA Button */}
    <Link 
      href={service.link}
      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
    >
      Learn More
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </motion.div>
);

const CategorySection = ({ category, index }: { category: any; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="mb-16"
  >
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl mb-6">
        <category.icon className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
      </div>
      <h2 className="text-4xl font-bold text-white mb-4">
        {category.name}
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        {category.description}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.services.map((service: any, serviceIndex: number) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          index={serviceIndex} 
        />
      ))}
    </div>
  </motion.section>
);

const HeroSection = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            New Services
          </span>
          <br />
          <span className="text-white">Showcase 2025</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Discover our latest innovative micro SAAS services, AI solutions, IT infrastructure, and business solutions. 
          All services are real, market-ready, and designed to transform your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#services"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          
          <Link
            href="/contact"
            className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
          <div className="text-gray-400">New Services</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
          <div className="text-gray-400">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
          <div className="text-gray-400">Real Services</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
          <div className="text-gray-400">Support</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Get in touch with our team to learn more about our innovative services and how they can help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-700/50">
          <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
          <p className="text-cyan-400">{contactInfo.mobile}</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-700/50">
          <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-blue-400">{contactInfo.email}</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-700/50">
          <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
          <p className="text-purple-400 text-sm">{contactInfo.address}</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Get Started Today
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  </section>
);

export default function ComprehensiveNewServicesShowcase2025() {
  return (
    <Layout>
      <Head>
        <title>New Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our latest innovative micro SAAS services, AI solutions, IT infrastructure, and business solutions. All services are real, market-ready, and designed to transform your business." />
        <meta name="keywords" content="AI services, micro SAAS, IT services, business solutions, Zion Tech Group, innovative technology" />
        <meta property="og:title" content="New Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Discover our latest innovative micro SAAS services, AI solutions, IT infrastructure, and business solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-new-services-showcase-2025" />
        <meta property="og:type" content="website" />
      </Head>

      <HeroSection />

      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, index) => (
            <CategorySection key={category.name} category={category} index={index} />
          ))}
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}