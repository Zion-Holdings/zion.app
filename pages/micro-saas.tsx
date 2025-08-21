import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory } from '../data/expanded-micro-saas-services';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: '📊',
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-purple-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-cyan-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-pink-500/10'
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? expandedMicroSaasServices 
    : getServicesByCategory(selectedCategory);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <AdvancedFuturisticBackground variant="holographic-space" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>500+ Micro SaaS Services | Zion Tech Group - AI, Cloud, Security Solutions</title>
          <meta name="description" content="Explore 500+ real micro SaaS services from Zion Tech Group. AI-powered solutions, cloud infrastructure, cybersecurity, IoT, blockchain, and emerging technologies. Start your free trial today." />
          <meta name="keywords" content="micro SaaS services, AI solutions, cloud services, cybersecurity, data analytics, IoT platform, blockchain analytics, quantum computing, AR/VR development" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="500+ Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Comprehensive micro SaaS platform with AI, cloud, security, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  500+ Micro SaaS Services
                </span>
                <br />
                <span className="text-white">Ready to Deploy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Access enterprise-grade micro SaaS solutions across AI, cloud, cybersecurity, data analytics, IoT, blockchain, and emerging technologies. 
                Each service is built for immediate business impact with measurable ROI.
              </p>
              
              {/* Service Count Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {expandedMicroSaasServices.length}+
                  </div>
                  <div className="text-sm text-gray-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-2">
                    {serviceCategories.length - 1}
                  </div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    14 Days
                  </div>
                  <div className="text-sm text-gray-400">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade technology solutions with the agility and innovation of a startup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <AdvancedFuturisticCard
                  key={index}
                  variant={index % 2 === 0 ? 'quantum' : 'neural'}
                  className="h-full"
                  glowIntensity="medium"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                    <p className="text-gray-300">{advantage.description}</p>
                  </div>
                </AdvancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our comprehensive range of micro SaaS services organized by industry and technology type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {serviceCategories.slice(1).map((category, index) => (
                <AdvancedFuturisticCard
                  key={category}
                  variant={index % 3 === 0 ? 'holographic' : index % 3 === 1 ? 'quantum' : 'neural'}
                  className="text-center cursor-pointer group"
                  interactive={true}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                  <div className="text-sm text-gray-400">
                    {getServicesByCategory(category).length} services
                  </div>
                </AdvancedFuturisticCard>
              ))}
            </div>

            {/* Category Filter */}
            <div className="text-center mb-12">
              <div className="inline-flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  All Categories
                </button>
                {serviceCategories.slice(1, 7).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {selectedCategory === 'All' ? 'All Services' : selectedCategory} Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {selectedCategory === 'All' 
                  ? 'Discover our complete portfolio of micro SaaS solutions.'
                  : `Explore our ${selectedCategory} services designed for your specific needs.`
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.slice(0, 12).map((service, index) => (
                <AdvancedFuturisticCard
                  key={service.id}
                  variant={service.variant?.includes('quantum') ? 'quantum' : service.variant?.includes('neural') ? 'neural' : 'holographic'}
                  className="h-full"
                  glowIntensity="medium"
                  interactive={true}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{service.name}</h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.tagline}</p>
                    <div className="text-cyan-400 font-semibold mb-4">{service.price}{service.period}</div>
                    <div className="text-xs text-gray-500 mb-4">{service.category}</div>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button
                      href={service.link}
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </AdvancedFuturisticCard>
              ))}
            </div>

            {filteredServices.length > 12 && (
              <div className="text-center mt-12">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  View All {filteredServices.length} Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact our team to learn more about our micro SaaS services and start your free trial today.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                  <div className="text-white font-semibold">Mobile</div>
                  <div className="text-cyan-400">{contactInfo.mobile}</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-4" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-purple-400">{contactInfo.email}</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-green-400 mb-4" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-green-400 text-sm">{contactInfo.address}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdvancedFuturisticBackground>
  );
}

function getCategoryIcon(category: string): string {
  const iconMap: { [key: string]: string } = {
    'AI & Machine Learning': '🤖',
    'Blockchain & Web3': '⛓️',
    'AR/VR & Metaverse': '🥽',
    'IoT & Smart Cities': '🏙️',
    'Cloud & Infrastructure': '☁️',
    'Data Analytics & BI': '📊',
    'Cybersecurity': '🔐',
    'Emerging Technologies': '🚀',
    'Quantum Computing': '⚛️',
    'Autonomous Systems': '🤖',
    'Sustainable Technology': '🌱',
    'Biomedical & Healthcare': '🏥',
    'Financial Technology': '💰',
    'Climate & Environment': '🌍',
    'Manufacturing & Industry 4.0': '🏭',
    'Transportation & Logistics': '🚚',
    'Energy & Utilities': '⚡',
    'Research & Development': '🔬',
    'Government & Defense': '🛡️',
    'Education & Training': '🎓',
    'Legal Technology': '⚖️',
    'Supply Chain & Logistics': '📦',
    'Space Technology': '🚀',
    'Industrial Automation': '🏭',
    'Neuroscience & Brain Research': '🧠',
    'Materials Science': '🧪',
    'Environmental Technology': '🌱'
  };
  
  return iconMap[category] || '⚡';
}