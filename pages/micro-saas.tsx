import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { realMicroSaasServices, getAllCategories } from '../data/real-micro-saas-services';
import { motion } from 'framer-motion';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const allCategories = getAllCategories();
  
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
      bgColor: 'from-rose-500/10 to-rose-500/10'
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? realMicroSaasServices 
    : realMicroSaasServices.filter(service => service.category === selectedCategory);

  const realServicesCount = realMicroSaasServices.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <title>35+ Micro SaaS Services | Zion Tech Group - AI-Powered Business Solutions</title>
        <meta name="description" content="Discover 35+ real micro SaaS services that solve actual business problems. From AI content generation to cybersecurity, find the perfect solution for your business needs." />
        <meta name="keywords" content="micro SaaS, AI services, business automation, cloud optimization, content generation, sales automation, cybersecurity, data analytics, health monitoring, education platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="35+ Micro SaaS Services | Zion Tech Group - AI-Powered Business Solutions" />
        <meta property="og:description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="35+ Micro SaaS Services | Zion Tech Group - AI-Powered Business Solutions" />
        <meta name="twitter:description" content="Discover 35+ real micro SaaS services that solve actual business problems with AI-powered intelligence." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-text-blue">35+</span> Real Micro SaaS Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI-powered solutions that solve real business problems. 
            From content creation to cybersecurity, we've got you covered with enterprise-grade tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              href="/contact"
              className="btn-futuristic text-lg px-8 py-4 text-white font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black text-lg px-8 py-4 font-semibold transition-all duration-300"
            >
              View Pricing
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">
                {realServicesCount}+
              </div>
              <div className="text-gray-400 text-sm">Real Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">14</div>
              <div className="text-gray-400 text-sm">Days Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-cyan mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
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
              {allCategories.map((category) => (
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
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="p-6">
                    {/* Service Header */}
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.tagline}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm ml-2">({service.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        ${service.price.monthly}
                        <span className="text-gray-500 text-lg font-normal">/month</span>
                      </div>

                      {/* Trial Info */}
                      <div className="text-gray-600 text-sm mb-4">
                        {service.price.trialDays} days free trial • {service.price.setupTime} setup
                      </div>

                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white mb-4">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Category & Audience */}
                    <div className="mb-6 space-y-3">
                      <div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</span>
                        <p className="text-sm text-gray-700">{service.category}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Target Audience</span>
                        <p className="text-sm text-gray-700">{service.targetAudience.slice(0, 2).join(', ')}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      href={service.link}
                      className="w-full btn-futuristic"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="neon-text-cyan">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team of experts to find the perfect solution for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-neon-blue/20 to-cyan-500/20 mb-4">
                <Phone className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-neon-blue text-lg font-mono">+1 302 464 0950</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-neon-purple/20 to-pink-500/20 mb-4">
                <Mail className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-neon-purple text-lg font-mono">kleber@ziontechgroup.com</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-neon-green/20 to-emerald-500/20 mb-4">
                <MapPin className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-neon-green text-lg font-mono">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              href="/contact"
              className="btn-futuristic text-lg px-8 py-4 text-white font-semibold"
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}