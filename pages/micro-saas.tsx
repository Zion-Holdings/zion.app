import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Brain, Atom, ShieldCheck, Network, Cpu as CpuIcon, Zap as ZapIcon2, Globe as GlobeIcon, Shield as ShieldIcon, Cpu as CpuIcon2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { realMicroSaasServices } from '../data/real-micro-saas-services';

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
      bgColor: 'from-rose-500/10 to-rose-500/10'
    }
  ];

  const categories = [
    { name: 'All', count: realMicroSaasServices.length, icon: '🚀' },
    { name: 'AI & Machine Learning', count: realMicroSaasServices.filter(s => s.category === 'AI & Research').length, icon: '🤖' },
    { name: 'Cloud & DevOps', count: realMicroSaasServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️' },
    { name: 'Cybersecurity', count: realMicroSaasServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' },
    { name: 'Blockchain & DeFi', count: realMicroSaasServices.filter(s => s.category === 'Blockchain & DeFi').length, icon: '🔗' },
    { name: 'IoT & Smart Cities', count: realMicroSaasServices.filter(s => s.category === 'IoT & Smart Cities').length, icon: '🏙️' },
    { name: 'Biotech & Research', count: realMicroSaasServices.filter(s => s.category === 'Biotech & Research').length, icon: '🧬' },
    { name: 'Content & Marketing', count: realMicroSaasServices.filter(s => s.category === 'Content & Marketing').length, icon: '📝' },
    { name: 'Sales & CRM', count: realMicroSaasServices.filter(s => s.category === 'Sales & CRM').length, icon: '💼' },
    { name: 'Legal Tech', count: realMicroSaasServices.filter(s => s.category === 'Legal Tech').length, icon: '⚖️' }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? realMicroSaasServices 
    : realMicroSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Explore 35+ innovative micro SaaS services across AI, cybersecurity, blockchain, IoT, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SaaS, AI services, cybersecurity, blockchain, DeFi, IoT, biotech, legal tech, sales automation, content generation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="Explore 35+ innovative micro SaaS services across AI, cybersecurity, blockchain, IoT, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta name="twitter:description" content="Explore 35+ innovative micro SaaS services across AI, cybersecurity, blockchain, IoT, and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="neon-text-blue">35+</span> Innovative
            <br />
            <span className="neon-text-purple">Micro SaaS</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business with cutting-edge technology solutions. From AI-powered intelligence to quantum-resistant security, 
            we offer the tools you need to stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="#services"
              className="btn-futuristic text-lg px-8 py-4 text-white font-semibold"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black text-lg px-8 py-4 font-semibold transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="neon-text-green">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another SaaS provider. We're your innovation partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className={`p-6 rounded-lg border border-gray-700 bg-gradient-to-br ${advantage.bgColor} hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}>
                  {advantage.title}
                </h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'border-neon-blue bg-neon-blue text-black'
                    : 'border-gray-600 text-gray-300 hover:border-neon-blue hover:text-neon-blue'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-sm bg-gray-700 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-blue">Innovative</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover cutting-edge solutions that are transforming industries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={service.id}
                className="h-full hover:scale-105 transition-transform duration-300 group"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-bold text-white mb-2">
                      ${service.price.monthly}
                      <span className="text-gray-400 text-sm font-normal">/month</span>
                    </div>

                    {/* Customers */}
                    <div className="text-gray-300 text-sm mb-6">
                      {service.customers.toLocaleString()}+ customers
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 flex-grow">{service.description}</p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <Check className="h-4 w-4 text-neon-green mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Position */}
                  <div className="mb-6 p-3 bg-gray-800 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 text-sm">Market Position:</h4>
                    <p className="text-gray-300 text-xs">{service.marketPosition}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    href={service.link}
                    className="w-full btn-futuristic mt-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="neon-text-cyan">Innovate</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses already using our innovative micro SaaS services to stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              className="btn-futuristic text-lg px-8 py-4 text-white font-semibold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black text-lg px-8 py-4 font-semibold transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get in <span className="neon-text-blue">Touch</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-neon-blue text-lg font-semibold">+1 302 464 0950</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-neon-blue text-lg font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}