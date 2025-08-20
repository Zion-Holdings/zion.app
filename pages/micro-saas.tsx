import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { realMicroSaasServices, getServicesByCategory } from '../data/real-micro-saas-services';

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
      bgColor: 'from-teal-500/10 to-teal-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-rose-500/10'
    }
  ];
  
  // Get all services and filter by category
  const allServices = realMicroSaasServices;
  const filteredServices = selectedCategory === 'All' 
    ? allServices 
    : getServicesByCategory(selectedCategory);
  
  // Get unique categories for filtering
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <title>45+ Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 45+ real micro SaaS services including AI tools, cloud optimization, cybersecurity, business intelligence, and more. Start your free trial today." />
        <meta name="keywords" content="micro SaaS services, AI tools, cloud optimization, cybersecurity, business intelligence, marketing automation, team collaboration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="45+ Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="Discover 45+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="45+ Micro SaaS Services - Zion Tech Group" />
        <meta name="twitter:description" content="Discover 45+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="particles-bg opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-blue-300">
              Real Micro SaaS Solutions
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Transform Your Business with
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real Micro SaaS Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover 45+ fully-functional micro SaaS tools that deliver immediate value. 
            From AI-powered automation to cloud optimization, get enterprise-grade solutions without enterprise complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="futuristic"
              size="lg"
              href="#services"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              glow
              className="min-w-[200px]"
            >
              Explore Services
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              href="#demo"
              icon={<Play className="w-5 h-5" />}
              iconPosition="left"
              glow
              className="min-w-[200px]"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">45+</div>
              <div className="text-sm text-gray-400">Real Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">14</div>
              <div className="text-sm text-gray-400">Day Trials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <Card
                key={index}
                variant="glass"
                size="lg"
                hover
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${advantage.bgColor} flex items-center justify-center text-3xl`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Not just mockups - these are fully functional, production-ready tools that solve real business problems.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                variant="futuristic"
                size="lg"
                hover
                glow
                className="group relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500">{service.tagline}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-gray-900">${service.price.monthly}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.price.setupTime} setup
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {service.price.trialDays}-day trial
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-gray-500 text-center">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    href={service.link}
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                    fullWidth
                    className="sm:flex-1"
                  >
                    Start Free Trial
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    fullWidth
                    className="sm:flex-1"
                  >
                    Learn More
                  </Button>
                </div>
                
                {/* Market Position */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <strong>Market Position:</strong> {service.marketPosition}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    <strong>Target:</strong> {service.targetAudience}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="neon-text-green">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with any of our 45+ micro SaaS services today. Our team of experts is here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border border-neon-blue/20 rounded-2xl p-6 backdrop-blur-sm">
                <Phone className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-neon-blue font-semibold text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-green/10 to-neon-green/5 border border-neon-green/20 rounded-2xl p-6 backdrop-blur-sm">
                <Mail className="h-12 w-12 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-neon-green font-semibold text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border border-neon-purple/20 rounded-2xl p-6 backdrop-blur-sm">
                <MapPin className="h-12 w-12 text-neon-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                <p className="text-neon-purple font-semibold text-sm leading-tight">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              href="/contact"
              className="btn-futuristic px-8 py-3 text-lg font-semibold"
            >
              Start Your Free Trial Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}