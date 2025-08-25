import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Server, Cloud, Shield, Database, Network, Zap, Users, TrendingUp, BarChart3, MessageSquare, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Star, Clock, DollarSign, Globe, Bot, Cpu, Settings, Monitor, HardDrive, Wifi, Lock, ArrowRight, CheckCircle, Zap as ZapIcon, Target, FileText, MessageCircle, BarChart, Shield as ShieldIcon, Cloud as CloudIcon, Database as DatabaseIcon, Network as NetworkIcon, HardDrive as HardDriveIcon, MessageSquare as MessageSquareIcon, Database as DatabaseIcon2 } from 'lucide-react';

const ServicesHubPage: React.FC = () => {
  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS Services',
      description: 'Affordable, focused software solutions designed specifically for small businesses, startups, and entrepreneurs',
      icon: <ZapIcon className="w-12 h-12" />,
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      services: 15,
      startingPrice: '$15',
      features: ['Task Management', 'Financial Tools', 'Marketing Automation', 'CRM Solutions', 'Analytics Platforms'],
      benefits: ['Cost-effective', 'Easy to implement', 'Scalable solutions', 'Quick ROI', 'No long-term contracts'],
      route: '/micro-saas-services'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions that transform businesses through automation, insights, and intelligent decision-making',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      services: 8,
      startingPrice: '$35',
      features: ['Content Generation', 'Customer Support Bots', 'Sales Intelligence', 'Computer Vision', 'Process Automation'],
      benefits: ['10x productivity increase', 'Automated workflows', 'Predictive insights', '24/7 availability', 'Scalable AI'],
      route: '/ai-services'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Comprehensive IT infrastructure, security, and technical solutions designed to modernize and optimize your business technology operations',
      icon: <Server className="w-12 h-12" />,
      color: 'from-blue-400 to-cyan-600',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      services: 8,
      startingPrice: '$75',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'Network Monitoring', 'Data Backup', 'DevOps Automation'],
      benefits: ['Enterprise-grade reliability', 'Enhanced security', 'Cost optimization', '24/7 monitoring', 'Scalable infrastructure'],
      route: '/it-services'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      description: 'Next-generation technology solutions including blockchain, IoT, quantum computing, and space technology innovations',
      icon: <Globe className="w-12 h-12" />,
      color: 'from-orange-400 to-red-600',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      services: 6,
      startingPrice: '$100',
      features: ['Blockchain Solutions', 'IoT Platforms', 'Quantum Computing', 'Space Technology', 'Edge Computing'],
      benefits: ['Future-proof technology', 'Competitive advantage', 'Innovation leadership', 'Market disruption', 'High ROI potential'],
      route: '/emerging-tech-services'
    }
  ];

  const featuredServices = [
    {
      name: 'AI Content Creator Pro',
      category: 'AI Services',
      price: '$45/month',
      description: 'Advanced AI-powered content creation platform with SEO optimization and multi-language support',
      icon: <FileText className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      name: 'Cloud Infrastructure Manager',
      category: 'IT Services',
      price: '$150/month',
      description: 'Enterprise-grade cloud infrastructure management with automated scaling and cost optimization',
      icon: <CloudIcon className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      name: 'TaskFlow Pro',
      category: 'Micro SAAS',
      price: '$15/month',
      description: 'AI-powered task management with intelligent workflow automation and team performance analytics',
      icon: <ZapIcon className="w-6 h-6" />,
      color: 'text-green-400'
    }
  ];

  const stats = [
    { label: 'Total Services', value: '37+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Service Categories', value: '4', icon: <Target className="w-6 h-6" /> },
    { label: 'Starting Price', value: '$15', icon: <DollarSign className="w-6 h-6" /> },
    { label: 'Implementation Time', value: '1-4 weeks', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Services Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our comprehensive portfolio of innovative micro SAAS, AI services, IT infrastructure, and emerging technology solutions designed to transform your business
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className={`${category.bgColor} ${category.borderColor} border rounded-2xl p-8 hover:scale-105 transition-all duration-300`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-${category.color.split('-')[1]}-400`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{category.services}</div>
                    <div className="text-gray-400 text-sm">Services</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">Starting at {category.startingPrice}/month</div>
                  <div className="text-gray-400 text-sm">Competitive pricing with industry-leading value</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.benefits.map((benefit, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to={category.route}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
                >
                  Explore {category.name}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={service.color}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our services deliver measurable results with 250-400% ROI within 3-8 months</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300">Get up and running in 1-4 weeks with our streamlined onboarding process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with SOC 2, GDPR, and industry standards</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our team of experts is here to help you choose the right solutions and get started quickly
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
              <Link 
                to="/request-quote"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHubPage;