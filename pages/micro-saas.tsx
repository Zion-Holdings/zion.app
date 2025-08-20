import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, Lock, Link, FileText, CheckCircle, AlertCircle, Clock, BarChart3, TrendingUp, Users, Zap, Shield } from 'lucide-react';

export default function MicroSaaSPage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const microServices = [
    {
      id: 'email-validator',
      icon: <Mail className="w-8 h-8 text-white" />,
      title: 'Email Validator Pro',
      description: 'Advanced email validation with domain checking, disposable email detection, and deliverability scoring.',
      features: [
        'Real-time email format validation',
        'Domain MX record verification',
        'Disposable email detection',
        'Role-based email identification',
        'Deliverability scoring (0-100)',
        'Detailed validation reports'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-cyan-500',
      pricing: 'Free tier: 100 validations/month',
      useCase: 'Perfect for signup forms, lead generation, and email marketing campaigns.',
      apiEndpoint: '/api/email-validator',
      documentation: 'https://docs.zion.app/email-validator',
      status: 'active'
    },
    {
      id: 'password-strength',
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'Password Strength Analyzer',
      description: 'Comprehensive password security analysis with entropy calculation and improvement suggestions.',
      features: [
        'Multi-factor strength scoring',
        'Entropy calculation',
        'Common pattern detection',
        'Real-time feedback',
        'Security recommendations',
        'Compliance checking'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: 'Free tier: 500 checks/month',
      useCase: 'Ideal for user registration, password policies, and security audits.',
      apiEndpoint: '/api/password-strength',
      documentation: 'https://docs.zion.app/password-strength',
      status: 'active'
    },
    {
      id: 'url-shortener',
      icon: <Link className="w-8 h-8 text-white" />,
      title: 'Smart URL Shortener',
      description: 'Professional URL shortening service with analytics, custom codes, and click tracking.',
      features: [
        'Custom short codes',
        'Click analytics',
        'QR code generation',
        'Link expiration',
        'Geographic tracking',
        'API integration'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
      pricing: 'Free tier: 1000 URLs/month',
      useCase: 'Great for social media marketing, email campaigns, and link management.',
      apiEndpoint: '/api/url-shortener',
      documentation: 'https://docs.zion.app/url-shortener',
      status: 'active'
    },
    {
      id: 'text-analyzer',
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Text Analysis Suite',
      description: 'Advanced text analysis with readability scores, sentiment analysis, and keyword extraction.',
      features: [
        'Multiple readability formulas',
        'Sentiment analysis',
        'Keyword extraction',
        'Reading time estimation',
        'Language detection',
        'SEO optimization insights'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      pricing: 'Free tier: 50 analyses/month',
      useCase: 'Perfect for content creators, marketers, and SEO professionals.',
      apiEndpoint: '/api/text-analyzer',
      documentation: 'https://docs.zion.app/text-analyzer',
      status: 'active'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Lightning Fast',
      description: 'All services respond in under 100ms with optimized algorithms and caching.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, rate limiting, and comprehensive audit logs.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Monitor usage, performance, and insights with detailed dashboards.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" />,
      title: 'Developer Friendly',
      description: 'RESTful APIs, comprehensive documentation, and SDKs for all major platforms.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: [
        '100 API calls per service',
        'Basic analytics',
        'Community support',
        'Standard rate limits'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: [
        '10,000 API calls per service',
        'Advanced analytics',
        'Priority support',
        'Custom rate limits',
        'Webhook notifications'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited API calls',
        'Dedicated infrastructure',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - Professional API Services</title>
        <meta name="description" content="Discover our professional micro SaaS services including email validation, password strength analysis, URL shortening, and text analysis. Free tiers available with enterprise-grade reliability." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Professional micro SaaS services with free tiers and enterprise-grade reliability." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in">
                <Zap className="w-4 h-4 mr-2" />
                Professional Micro SaaS Services
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              Micro SaaS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                API Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Professional-grade micro SaaS services with free tiers, enterprise reliability, and lightning-fast performance. 
              Perfect for developers, businesses, and startups.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#services"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
                style={{ animationDelay: '0.2s' }}
              >
                Explore Services
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="#pricing"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={{ animationDelay: '0.4s' }}
              >
                View Pricing
                <BarChart3 className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="text-gray-400 text-sm">Professional Services</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                &lt;100ms
              </div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-400 text-sm">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                Free
              </div>
              <div className="text-gray-400 text-sm">Tier Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Professional Micro SaaS
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each service is built with enterprise-grade reliability, comprehensive documentation, and developer-friendly APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microServices.map((service, index) => (
              <Card
                key={service.id}
                className="group border-gradient-blue hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl font-bold ${service.textColor}`}>
                        {service.title}
                      </h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.status === 'active' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {service.status === 'active' ? 'Active' : 'Beta'}
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Use Case:</p>
                      <p className="text-sm text-gray-300">{service.useCase}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Pricing:</p>
                      <p className="text-sm text-gray-300 font-medium">{service.pricing}</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        href={service.documentation}
                        variant="outline"
                        size="sm"
                        className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                      >
                        Documentation
                      </Button>
                      <Button
                        href={service.apiEndpoint}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                      >
                        API Endpoint
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Built for developers, trusted by enterprises, and designed for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center group bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative group ${tier.popular ? 'border-2 border-blue-500' : 'border border-gray-800'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={tier.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of developers and businesses using our micro SaaS services. 
            Start with our free tier and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Building
              <CheckCircle className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/docs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}