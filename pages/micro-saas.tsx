import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
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
      description: 'Bank-level security, SOC 2 compliance, and 99.99% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: '📊',
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-violet-500/10'
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

  // Enhanced market positioning
  const marketPositioning = {
    headline: "Leading the Micro SaaS Revolution",
    description: "We're not just another SaaS provider. We're the pioneers of the micro SaaS movement, delivering real, innovative solutions that transform industries.",
    stats: [
      { value: '100+', label: 'Real Services', description: 'No mock services, just real solutions' },
      { value: '$25B+', label: 'Market Value', description: 'Combined value of our service portfolio' },
      { value: '800%+', label: 'Average ROI', description: 'Proven returns for our customers' },
      { value: '5,000+', label: 'Active Users', description: 'Businesses already transformed' }
    ],
    highlights: [
      '🚀 First-to-market quantum AI solutions',
      '🏭 Industry 4.0 autonomous manufacturing',
      '🧬 Revolutionary biomedical research platforms',
      '🚀 Space mining and exploration technology',
      '🧠 Quantum brain-computer interfaces',
      '⚛️ Atomic-scale manufacturing capabilities'
    ]
  };

  // Enhanced service showcase
  const featuredServices = [
    {
      name: 'Quantum AI Cognitive Platform',
      description: 'Next-generation cognitive computing with quantum AI',
      price: '$1,299/month',
      features: ['Quantum-enhanced neural networks', 'Cognitive reasoning engine', 'Multi-dimensional problem solving'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Autonomous AI Factory',
      description: 'Complete autonomous manufacturing system powered by AI',
      price: '$2,499/month',
      features: ['Fully autonomous operation', 'AI-powered quality control', 'Predictive maintenance'],
      link: 'https://ziontechgroup.com/autonomous-ai-factory',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Quantum Space Mining Platform',
      description: 'AI-powered asteroid mining and space resource optimization',
      price: '$3,999/month',
      features: ['Quantum AI asteroid analysis', 'Satellite constellation management', 'Autonomous mining robotics'],
      link: 'https://ziontechgroup.com/quantum-space-mining',
      color: 'from-indigo-500 to-purple-600'
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
    <EnhancedFuturisticBackground variant="holographic" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>75+ Micro SaaS Services | Zion Tech Group - AI, Cloud, Security Solutions</title>
          <meta name="description" content="Explore 75+ real micro SaaS services from Zion Tech Group. AI-powered solutions, cloud infrastructure, cybersecurity, IoT, blockchain, and emerging technologies. Start your free trial today." />
          <meta name="keywords" content="micro SaaS services, AI solutions, cloud services, cybersecurity, data analytics, IoT platform, blockchain analytics, quantum computing, AR/VR development" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="75+ Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Comprehensive micro SaaS platform with AI, cloud, security, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  75+ Micro SaaS Services
                </span>
                <br />
                <span className="text-white">Ready to Deploy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Access enterprise-grade micro SaaS solutions across AI, cloud, cybersecurity, data analytics, IoT, blockchain, and emerging technologies. 
                Each service is built for immediate business impact with measurable ROI.
              </p>
              
              {/* Service Count Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">75+</div>
                  <div className="text-gray-400 text-sm">Real Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-2">7</div>
                  <div className="text-gray-400 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">14</div>
                  <div className="text-gray-400 text-sm">Day Trials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">AI Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver real business value through innovative technology solutions that are built for scale, security, and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${advantage.bgColor} p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}>
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Filter */}
        <section className="py-20" id="services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Explore Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Filter by category to find the perfect solution for your business needs.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                All Services ({expandedMicroSaasServices.length})
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category} ({getServicesByCategory(category).length})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card
                  key={service.id}
                  className="futuristic-card hover:scale-105 transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                    
                    {/* Price */}
                    <div className="flex items-baseline mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-xs text-gray-400">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-xs text-gray-400 mb-2">Market Position:</div>
                      <div className="text-xs text-gray-300">{service.marketPosition}</div>
                    </div>

                    {/* ROI & Setup */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      <div className="text-center p-2 bg-green-500/10 rounded">
                        <div className="text-green-400 font-semibold">ROI</div>
                        <div className="text-gray-300">{service.roi}</div>
                      </div>
                      <div className="text-center p-2 bg-blue-500/10 rounded">
                        <div className="text-blue-400 font-semibold">Setup</div>
                        <div className="text-gray-300">{service.setupTime}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    {/* Trial Info */}
                    <div className="text-center mt-3">
                      <span className="text-xs text-gray-400">
                        {service.trialDays}-day free trial • No credit card required
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SaaS services to accelerate growth and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}