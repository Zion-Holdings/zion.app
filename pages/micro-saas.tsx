import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon } from 'lucide-react';
import Button from '../components/ui/Button';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      tagline: 'Professional AI-powered content creation',
      price: '$49',
      period: '/month',
      description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant. Perfect for content marketers, agencies, and businesses.',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (15+ languages)',
        'Brand voice customization',
        'Content templates library (100+ templates)',
        'Plagiarism-free writing guarantee',
        'Advanced content analytics',
        'Team collaboration tools',
        'API access for integrations'
      ],
      popular: true,
      icon: '📝',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      link: 'https://content.ziontechgroup.com',
      marketPosition: 'Competitive with Jasper ($39-99), Copy.ai ($36-186), and Writesonic ($12.67-100)',
      targetAudience: 'Content marketers, agencies, e-commerce businesses, and content creators',
      trialDays: 14,
      setupTime: '5 minutes',
      category: 'Content & Marketing'
    },
    {
      name: 'Design System Builder',
      tagline: 'Automated design system management',
      price: '$79',
      period: '/month',
      description: 'Build and maintain consistent design systems with automated component generation and team collaboration. Streamline your design workflow.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools',
        'Version control & history',
        'Design system analytics',
        'Integration with Figma, Sketch, Adobe XD'
      ],
      popular: false,
      icon: '🎨',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      link: 'https://design.ziontechgroup.com',
      marketPosition: 'Competitive with Zeroheight ($0-200), Frontify ($0-200), and InVision DSM ($0-100)',
      targetAudience: 'Design teams, product managers, and design system architects',
      trialDays: 14,
      setupTime: '15 minutes',
      category: 'Design & UX'
    },
    {
      name: 'App Performance Monitor',
      tagline: 'Real-time performance monitoring',
      price: '$39',
      period: '/month',
      description: 'Monitor and optimize your web and mobile applications with real-time performance insights. Catch issues before they affect users.',
      features: [
        'Performance metrics tracking',
        'Error monitoring & alerting',
        'User experience analytics',
        'Automated optimization',
        'Custom dashboards',
        'Real-time alerts',
        'Performance budgets',
        'Integration with popular frameworks'
      ],
      popular: false,
      icon: '📱',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      link: 'https://monitor.ziontechgroup.com',
      marketPosition: 'Competitive with Sentry ($26-80), LogRocket ($99-199), and New Relic ($0-99)',
      targetAudience: 'Developers, DevOps teams, and product managers',
      trialDays: 14,
      setupTime: '10 minutes',
      category: 'Development & DevOps'
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Specialized Business Solutions</title>
        <meta name="description" content="Discover our specialized micro SaaS solutions for content creation, design systems, performance monitoring, SEO automation, chatbots, and business intelligence. Competitive pricing with 14-day free trials." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Specialized business solutions with competitive pricing and free trials." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Micro SaaS Solutions
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Specialized Tools for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Every Business Need</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI-powered micro SaaS solutions, all hosted on <strong className="text-green-400">ziontechgroup.com</strong>. 
              From content creation to compliance monitoring, we provide specialized tools that integrate seamlessly with your existing workflows. 
              One domain, one billing, unlimited possibilities.
            </p>
            
            {/* Domain Information */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">All Services Available on Zion Tech Group Domain</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Every micro SaaS service is accessible through our main domain <strong className="text-green-400">ziontechgroup.com</strong>, 
                ensuring consistent branding, unified billing, and seamless integration across all tools. No more juggling multiple accounts or domains.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-4">
                <div className="flex items-center text-green-400">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Single sign-on access</span>
                </div>
                <div className="flex items-center text-green-400">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Unified dashboard</span>
                </div>
                <div className="flex items-center text-green-400">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Integrated billing</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="#services"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white shadow-2xl"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Professional Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each service is designed to solve specific business problems with enterprise-grade quality and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    {service.popular && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6 p-4 bg-gray-700/50 rounded-lg">
                    <div className="text-sm text-gray-300 mb-2">
                      <strong>Market Position:</strong> {service.marketPosition}
                    </div>
                    <div className="text-sm text-gray-300 mb-2">
                      <strong>Target Audience:</strong> {service.targetAudience}
                    </div>
                    <div className="text-sm text-gray-300">
                      <strong>Setup Time:</strong> {service.setupTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium py-3 px-4 rounded-lg text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                    >
                      Start Free Trial ({service.trialDays} days)
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 text-sm text-center hover:text-green-300 transition-colors"
                    >
                      Visit {service.link.replace('https://', '')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Choose the solution that fits your needs. All services include comprehensive documentation, 
              dedicated support, and enterprise-grade reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
              >
                View All Pricing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}