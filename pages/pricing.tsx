import React from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and individual developers',
      features: [
        'Up to 5 team members',
        'Basic AI assistance',
        '10GB storage',
        'Email support',
        'Basic analytics',
        'Standard security'
      ],
      popular: false,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Enhanced security',
        'Custom integrations',
        'Team collaboration tools'
      ],
      popular: true,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom requirements',
      features: [
        'Unlimited team members',
        'Full AI suite access',
        'Unlimited storage',
        '24/7 dedicated support',
        'Custom analytics',
        'Enterprise security',
        'Custom integrations',
        'Advanced collaboration',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Management',
      description: 'Advanced team collaboration and management tools'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment and global CDN'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliance and advanced security features'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your team. Transparent pricing with enterprise-grade features." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Header Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Simple Pricing
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with enterprise-grade features. Scale as you grow with our flexible plans.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-blue-500 scale-105'
                      : 'bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                      plan.popular ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${
                      plan.popular ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold ${
                        plan.popular ? 'text-white' : 'text-white'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ml-1 ${
                        plan.popular ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-white' : 'text-blue-400'
                        }`} />
                        <span className={`text-sm ${
                          plan.popular ? 'text-blue-100' : 'text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    {plan.name === 'Enterprise' ? (
                      <Button
                        href="/contact"
                        variant={plan.popular ? 'secondary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        Contact Sales
                      </Button>
                    ) : (
                      <Button
                        href="/contact"
                        variant={plan.popular ? 'secondary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-8">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Advanced capabilities designed for large organizations and complex requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Micro SaaS Solutions
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                Specialized Tools & Services
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Discover our 20 specialized micro SaaS solutions covering every essential business operation. 
                Focused solutions for specific business needs with transparent, competitive pricing and 14-day free trials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Content Generator Pro */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl text-3xl mb-4">
                    📝
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Content Generator Pro</h3>
                  <div className="text-4xl font-bold text-pink-400 mb-2">$49</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    SEO-optimized content generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Multi-language support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Brand voice customization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Content templates library
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Plagiarism-free writing
                  </li>
                </ul>
                <Button
                  href="https://contentgen.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
                >
                  Get Started
                </Button>
              </div>

              {/* Design System Builder */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-violet-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl text-3xl mb-4">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Design System Builder</h3>
                  <div className="text-4xl font-bold text-violet-400 mb-2">$79</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Component library management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Design token automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Style guide generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Design-to-code workflow
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Team collaboration tools
                  </li>
                </ul>
                <Button
                  href="https://design.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                >
                  Get Started
                </Button>
              </div>

              {/* App Performance Monitor */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl text-3xl mb-4">
                    📱
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">App Performance Monitor</h3>
                  <div className="text-4xl font-bold text-amber-400 mb-2">$39</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Performance metrics tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Error monitoring & alerting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    User experience analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Automated optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Custom dashboards
                  </li>
                </ul>
                <Button
                  href="https://monitor.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                >
                  Get Started
                </Button>
              </div>

              {/* SEO Automation Suite */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl text-3xl mb-4">
                    🔍
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">SEO Automation Suite</h3>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">$89</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Keyword research automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    On-page optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Technical SEO audits
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Competitor analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ranking tracking
                  </li>
                </ul>
                <Button
                  href="https://seo.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                >
                  Get Started
                </Button>
              </div>

              {/* AI Chatbot Platform */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl text-3xl mb-4">
                    💬
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Chatbot Platform</h3>
                  <div className="text-4xl font-bold text-sky-400 mb-2">$69</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Natural language processing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Multi-channel integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Analytics & insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Custom training data
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    24/7 availability
                  </li>
                </ul>
                <Button
                  href="https://chatbot.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
                >
                  Get Started
                </Button>
              </div>

              {/* Business Intelligence Hub */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-rose-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl text-3xl mb-4">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Business Intelligence Hub</h3>
                  <div className="text-4xl font-bold text-rose-400 mb-2">$99</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Data visualization tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Automated reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    KPI dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Data integration
                  </li>
                </ul>
                <Button
                  href="https://bi.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Additional Micro SaaS Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {/* Email Automation Studio */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-3xl mb-4">
                    📧
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Email Automation Studio</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$59</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    AI-powered personalization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Advanced segmentation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Behavioral triggers
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    A/B testing automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Email template builder
                  </li>
                </ul>
                <Button
                  href="https://emailstudio.zion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                >
                  Get Started
                </Button>
              </div>

              {/* Social Media Scheduler */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl text-3xl mb-4">
                    📱
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Social Media Scheduler</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$29</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Multi-platform scheduling
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    AI content optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Best time to post analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Content calendar management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Hashtag research tools
                  </li>
                </ul>
                <Button
                  href="https://socialscheduler.zion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
                >
                  Get Started
                </Button>
              </div>

              {/* Project Management Hub */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl text-3xl mb-4">
                    📋
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Project Management Hub</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$45</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Task management & tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Team collaboration tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Time tracking & reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Project templates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    File sharing & storage
                  </li>
                </ul>
                <Button
                  href="https://projecthub.zion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                >
                  Get Started
                </Button>
              </div>

              {/* Invoice & Billing Manager */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl text-3xl mb-4">
                    💰
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Invoice & Billing Manager</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">$25</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Professional invoice templates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Payment tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Automated reminders
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Multi-currency support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Tax calculation
                  </li>
                </ul>
                <Button
                  href="https://invoice.zion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
                >
                  Get Started
                </Button>
              </div>

              {/* Customer Support Suite */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl text-3xl mb-4">
                    🎧
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Customer Support Suite</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">$75</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ticket management system
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Knowledge base builder
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Live chat integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Customer satisfaction surveys
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Automated responses
                  </li>
                </ul>
                <Button
                  href="https://support.zion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                >
                  Get Started
                </Button>
              </div>

              {/* HR Management System */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl text-3xl mb-4">
                    👥
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">HR Management System</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">$85</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Employee database management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Time & attendance tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Leave management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Performance reviews
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Payroll integration
                  </li>
                </ul>
                <Button
                  href="https://hr.zion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700"
                >
                  Get Started
                </Button>
              </div>

              {/* Inventory Management Pro */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-teal-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl text-3xl mb-4">
                    📦
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inventory Management Pro</h3>
                  <div className="text-4xl font-bold text-teal-400 mb-2">$55</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Real-time inventory tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Stock level alerts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Purchase order management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Supplier management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Barcode scanning
                  </li>
                </ul>
                <Button
                  href="https://inventory.zion.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
                All micro SaaS services include 14-day free trials, comprehensive documentation, 
                and dedicated support. Enterprise customers receive volume discounts and custom integrations.
              </p>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Contact Sales for Enterprise
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-400">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to start.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-400">
                  We accept all major credit cards, PayPal, and wire transfers for enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers and teams already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}