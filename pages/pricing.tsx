import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Crown, Sparkles, Shield as ShieldIcon, Zap as ZapIcon2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory } from '../data/expanded-micro-saas-services';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 990,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      savings: billingCycle === 'yearly' ? 'Save 17%' : '',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      features: [
        'Access to 20 core services',
        'Basic AI assistance',
        'Email support',
        'Standard integrations',
        '14-day free trial',
        'Basic analytics',
        'Community forum access',
        'Documentation & guides'
      ],
      popular: false,
      cta: 'Start Free Trial',
      ctaLink: '/contact'
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 2990,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      savings: billingCycle === 'yearly' ? 'Save 17%' : '',
      icon: '⭐',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      features: [
        'Access to 50+ services',
        'Advanced AI features',
        'Priority support',
        'Advanced integrations',
        '30-day free trial',
        'Advanced analytics',
        'Team collaboration',
        'Custom workflows',
        'API access',
        'White-label options'
      ],
      popular: true,
      cta: 'Start Free Trial',
      ctaLink: '/contact'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      price: billingCycle === 'monthly' ? 799 : 7990,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      savings: billingCycle === 'yearly' ? 'Save 17%' : '',
      icon: '👑',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-500/10 to-orange-500/10',
      features: [
        'Access to all 300+ services',
        'Custom AI models',
        '24/7 dedicated support',
        'On-premise options',
        'Custom integrations',
        'Training & onboarding',
        'White-label options',
        'SLA guarantees',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  const addOnServices = [
    {
      name: 'Custom AI Model Development',
      description: 'Tailored AI solutions for your specific business needs',
      price: 'From $2,500',
      period: '/project',
      icon: '🧠',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Quantum Computing Access',
      description: 'Direct access to quantum computing resources',
      price: 'From $5,000',
      period: '/month',
      icon: '⚛️',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Synthetic Biology Platform',
      description: 'Advanced genetic engineering and synthetic biology tools',
      price: 'From $3,500',
      period: '/month',
      icon: '🧬',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Brain-Computer Interface',
      description: 'Neural interface development and implementation',
      price: 'From $8,000',
      period: '/month',
      icon: '🧠',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and 24/7 security monitoring',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with automated onboarding and intuitive interfaces',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our team of technology experts',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Global Infrastructure',
      description: 'Worldwide deployment with local data centers and compliance',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="temporal" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Transparent Pricing Plans | Zion Tech Group - Revolutionary Micro SaaS Solutions</title>
          <meta name="description" content="Choose from our transparent pricing plans starting at $99/month. Access 300+ revolutionary micro SaaS services with enterprise-grade security and support." />
          <meta name="keywords" content="pricing, micro SaaS pricing, AI services pricing, quantum computing pricing, Zion Tech Group pricing" />
          <meta property="og:title" content="Transparent Pricing Plans | Zion Tech Group" />
          <meta property="og:description" content="Choose from our transparent pricing plans starting at $99/month." />
          <meta property="og:url" content="https://ziontechgroup.com/pricing" />
          <link rel="canonical" href="https://ziontechgroup.com/pricing" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Pricing</span>
              <br />Plans
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our revolutionary technology, 
              enterprise-grade security, and exceptional support. No hidden fees, just transparent pricing.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Questions About Pricing?</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly Billing
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <Card key={plan.id} className={`group hover:scale-105 transition-transform duration-300 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                      {plan.savings && (
                        <div className="text-green-400 text-sm font-medium mt-2">{plan.savings}</div>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      href={plan.ctaLink} 
                      variant="primary" 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Premium Add-on Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your experience with our premium add-on services designed for advanced use cases and custom requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index) => (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-xl font-bold text-blue-400 mb-4">
                    {service.price}{service.period}
                  </div>
                  <Button 
                    href="/contact" 
                    variant="secondary" 
                    size="sm"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with enterprise-grade reliability and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our pricing and services.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="text-left">
                <h3 className="text-lg font-semibold text-white mb-2">What's included in the free trial?</h3>
                <p className="text-gray-300">All plans include a free trial period where you can access the full features of your chosen plan. No credit card required to start.</p>
              </Card>
              
              <Card className="text-left">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.</p>
              </Card>
              
              <Card className="text-left">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing for enterprise?</h3>
                <p className="text-gray-300">Yes, we offer custom enterprise solutions with dedicated support, custom integrations, and on-premise options.</p>
              </Card>
              
              <Card className="text-left">
                <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and wire transfers for enterprise customers.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our revolutionary micro SaaS platform. 
              Start your free trial today and experience the future of technology.
            </p>
            
            <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">{contactInfo.mobile}</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">{contactInfo.email}</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">{contactInfo.address}</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg"
              >
                Explore Services
              </Button>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p>Questions? Contact us at {contactInfo.email} or call {contactInfo.mobile}</p>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}