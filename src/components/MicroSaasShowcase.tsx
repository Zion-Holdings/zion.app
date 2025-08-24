import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Star, TrendingUp, Users, Zap, Shield, BarChart3, Globe, Cpu, Database, Cloud } from 'lucide-react';

export function MicroSaasShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" /> },
    { id: 'ai-ml', name: 'AI & ML', icon: <Cpu className="h-5 w-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="h-5 w-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="h-5 w-5" /> },
    { id: 'cloud', name: 'Cloud', icon: <Cloud className="h-5 w-5" /> }
  ];

  const microSaasServices = [
    {
      id: 'ai-content-optimizer',
      title: 'AI Content Optimizer Pro',
      description: 'Advanced AI-powered content optimization tool that analyzes, improves, and optimizes your content for SEO, readability, and engagement.',
      icon: <Cpu className="h-8 w-8" />,
      category: 'ai-ml',
      price: '$29/month',
      rating: 4.9,
      features: ['SEO optimization', 'Readability scoring', 'Content suggestions', 'Performance analytics'],
      badge: 'Popular',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'cyber-threat-monitor',
      title: 'Cyber Threat Monitor',
      description: 'Real-time cybersecurity threat detection and monitoring system with AI-powered analysis and automated response capabilities.',
      icon: <Shield className="h-8 w-8" />,
      category: 'security',
      price: '$99/month',
      rating: 4.8,
      features: ['Real-time monitoring', 'AI threat detection', 'Automated response', 'Compliance reporting'],
      badge: 'New',
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 'data-visualization-studio',
      title: 'Data Visualization Studio',
      description: 'Interactive data visualization platform that transforms complex datasets into actionable insights with customizable dashboards and reports.',
      icon: <BarChart3 className="h-8 w-8" />,
      category: 'analytics',
      price: '$49/month',
      rating: 4.7,
      features: ['Interactive dashboards', 'Custom reports', 'Data integration', 'Real-time updates'],
      badge: 'Pro',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'smart-email-marketing',
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email marketing solution for personalized campaigns, automated workflows, and advanced audience segmentation.',
      icon: <Users className="h-8 w-8" />,
      category: 'automation',
      price: '$39/month',
      rating: 4.6,
      features: ['AI personalization', 'Automated workflows', 'Advanced segmentation', 'Performance tracking'],
      badge: 'Featured',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Assistant',
      description: 'Intelligent chatbot and virtual assistant for 24/7 customer support, automated query resolution, and personalized user experience.',
      icon: <Zap className="h-8 w-8" />,
      category: 'ai-ml',
      price: '$59/month',
      rating: 4.9,
      features: ['24/7 availability', 'AI-powered responses', 'Multi-language support', 'Integration APIs'],
      badge: 'AI',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'smart-invoice-manager',
      title: 'Smart Invoice Manager',
      description: 'Automated invoicing and billing system with smart reminders, expense tracking, and financial reporting for small to medium businesses.',
      icon: <Database className="h-8 w-8" />,
      category: 'automation',
      price: '$19/month',
      rating: 4.5,
      features: ['Automated invoicing', 'Expense tracking', 'Financial reporting', 'Payment reminders'],
      badge: 'Finance',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'cloud-infrastructure-manager',
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud infrastructure management platform with monitoring, optimization, and cost management capabilities.',
      icon: <Cloud className="h-8 w-8" />,
      category: 'cloud',
      price: '$79/month',
      rating: 4.8,
      features: ['Multi-cloud support', 'Cost optimization', 'Performance monitoring', 'Security compliance'],
      badge: 'Enterprise',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-seo-analyzer',
      title: 'AI SEO Analyzer',
      description: 'Advanced SEO analysis tool powered by AI that provides actionable insights, competitor analysis, and optimization recommendations.',
      icon: <Globe className="h-8 w-8" />,
      category: 'ai-ml',
      price: '$45/month',
      rating: 4.7,
      features: ['AI-powered analysis', 'Competitor insights', 'Keyword research', 'Performance tracking'],
      badge: 'SEO',
      color: 'from-emerald-500 to-blue-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl font-bold tracking-tight text-white">Micro SAAS Solutions</h2>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our curated collection of intelligent, innovative, and cost-effective micro SAAS services.
            From AI-powered tools to enterprise security solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <TrendingUp className="h-5 w-5 text-zion-cyan" />
              <span>12 Categories</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.8★ Rating</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Users className="h-5 w-5 text-zion-purple" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 backdrop-blur-sm text-zion-slate-light border border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-1"
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                  {service.icon}
                </div>
                <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-xs font-medium">
                  {service.badge}
                </span>
              </div>

              {/* Service Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="text-xs text-zion-slate-light/70 mb-2">Key Features:</div>
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-white">{service.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-zion-slate-light">{service.rating}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/micro-saas-services/${service.id}`}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
              >
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25"
          >
            <Sparkles className="h-5 w-5" />
            View All Micro SAAS Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}