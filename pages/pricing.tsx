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
        'Access to all 75+ services',
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
      name: 'Enterprise Integration',
      description: 'Custom integrations with your existing systems',
      price: 'From $1,500',
      period: '/integration',
      icon: '🔗',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'White-Label Solution',
      description: 'Rebrand our services under your own brand',
      price: 'From $5,000',
      period: '/month',
      icon: '🏷️',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'On-Premise Deployment',
      description: 'Deploy services in your own infrastructure',
      price: 'From $10,000',
      period: '/setup',
      icon: '🏢',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const servicePricingExamples = [
    {
      category: 'AI & Machine Learning',
      services: getServicesByCategory('AI & Machine Learning').slice(0, 3),
      color: 'from-purple-500 to-pink-600'
    },
    {
      category: 'Cloud & DevOps',
      services: getServicesByCategory('Cloud & DevOps').slice(0, 3),
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Cybersecurity',
      services: getServicesByCategory('Cybersecurity').slice(0, 3),
      color: 'from-red-500 to-orange-600'
    },
    {
      category: 'Data & Analytics',
      services: getServicesByCategory('Data & Analytics').slice(0, 3),
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const faqs = [
    {
      question: 'What services are included in each plan?',
      answer: 'Each plan includes access to a different number of our 75+ micro SaaS services. Starter includes 20 core services, Professional includes 50+ services, and Enterprise includes all services plus custom options.'
    },
    {
      question: 'Can I switch between plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs depending on complexity.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans. All payments are processed securely.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll refund your payment.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period.'
    }
  ];

  return (
          <EnhancedFuturisticBackground variant="quantum-entanglement" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>Pricing Plans | Zion Tech Group - Transparent Pricing for 75+ Services</title>
          <meta name="description" content="Choose from our flexible pricing plans for 75+ micro SaaS services. Starter from $99/month, Professional from $299/month, Enterprise from $799/month. Start your free trial today." />
          <meta name="keywords" content="pricing plans, micro SaaS pricing, AI services pricing, cloud services cost, cybersecurity pricing, enterprise solutions pricing" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Pricing Plans | Zion Tech Group" />
          <meta property="og:description" content="Transparent pricing for our comprehensive portfolio of 75+ micro SaaS services." />
          <meta property="og:url" content="https://ziontechgroup.com/pricing" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/pricing" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
                <br />
                <span className="text-white">Choose Your Perfect Plan</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Access our portfolio of 75+ micro SaaS services with flexible pricing plans designed to scale with your business. 
                Start with what you need and grow as you expand.
              </p>
              
              {/* Pricing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                  <span className="ml-2 text-sm text-cyan-400">Save 17%</span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  View All Plans
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All plans include 14-day free trials, no setup fees, and the ability to upgrade or downgrade at any time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`futuristic-card hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold py-2 px-6 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-8 text-center">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                        <span className="text-xl text-gray-400 ml-2">{plan.period}</span>
                      </div>
                      {plan.savings && (
                        <div className="text-cyan-400 text-sm font-semibold mt-2">{plan.savings}</div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={plan.ctaLink}
                      className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pricing Examples */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Service Pricing Examples
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how individual services are priced across different categories. All prices include full access and support.
              </p>
            </div>

            <div className="space-y-12">
              {servicePricingExamples.map((category) => (
                <div key={category.category} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.services.map((service) => (
                      <div key={service.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="text-2xl mb-3">{service.icon}</div>
                        <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                        <div className="flex items-baseline mb-4">
                          <span className="text-2xl font-bold text-white">{service.price}</span>
                          <span className="text-gray-400 ml-1">{service.period}</span>
                        </div>
                        <Button
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Add-On Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Need something custom? We offer specialized services to meet your unique business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <Card
                  key={index}
                  className="futuristic-card hover:scale-105 transition-all duration-300"
                >
                  <div className="p-6 text-center">
                    <div className={`text-3xl mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="text-xl font-bold text-white mb-4">
                      {service.price}
                      <span className="text-gray-400 text-sm">{service.period}</span>
                    </div>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="futuristic-card"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
                Have questions about pricing or need a custom solution? Our team is here to help you find the perfect plan.
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
                  Contact Sales Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}