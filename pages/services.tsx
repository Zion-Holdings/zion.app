import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ArrowRight, Check, Star, Zap, Shield, Database, Code, Lock, Link, QrCode, FileText, Mail, Key, Globe, BarChart3 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'code-review',
      name: 'Code Review Assistant',
      description: 'AI-powered code analysis with security, performance, and maintainability insights.',
      icon: <Code className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      features: [
        'Multi-language support (JavaScript, Python, TypeScript)',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code quality metrics',
        'Integration with Git workflows',
        'Custom rule configuration'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '100 reviews/month',
          features: ['Basic code analysis', 'Security scanning', 'Performance tips']
        },
        pro: {
          price: '$29/month',
          requests: 'Unlimited reviews',
          features: ['Advanced AI analysis', 'Custom rules', 'Team collaboration', 'Priority support']
        }
      },
      useCases: ['Development teams', 'Code quality assurance', 'Security compliance', 'Performance optimization']
    },
    {
      id: 'rate-limiter',
      name: 'API Rate Limiter',
      description: 'Intelligent rate limiting with configurable policies, real-time analytics, and Express.js middleware support.',
      icon: <Shield className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Configurable rate limiting policies',
        'Real-time analytics dashboard',
        'Express.js middleware support',
        'IP-based and user-based limiting',
        'Automatic scaling',
        'Webhook notifications'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '10,000 requests/month',
          features: ['Basic rate limiting', 'Standard policies', 'Email support']
        },
        enterprise: {
          price: '$99/month',
          requests: 'Unlimited requests',
          features: ['Advanced policies', 'Custom rules', 'Priority support', 'SLA guarantee']
        }
      },
      useCases: ['API protection', 'DDoS prevention', 'Fair usage enforcement', 'Cost control']
    },
    {
      id: 'email-validator',
      name: 'Email Validator',
      description: 'Comprehensive email validation with security risk assessment, disposable email detection, and MX record validation.',
      icon: <Mail className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [
        'Syntax validation',
        'MX record verification',
        'Disposable email detection',
        'Security risk assessment',
        'Bulk validation support',
        'Real-time validation'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '1,000 validations/month',
          features: ['Basic validation', 'MX record check', 'Email support']
        },
        pro: {
          price: '$19/month',
          requests: '100,000 validations/month',
          features: ['Security scanning', 'Bulk validation', 'API access', 'Priority support']
        }
      },
      useCases: ['User registration', 'Email marketing', 'Lead validation', 'Fraud prevention']
    },
    {
      id: 'password-checker',
      name: 'Password Strength Checker',
      description: 'Advanced password analysis with security recommendations, policy enforcement, and strong password generation.',
      icon: <Key className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        'Multi-factor strength analysis',
        'Security recommendations',
        'Policy enforcement',
        'Strong password generation',
        'Breach database checking',
        'Custom policy rules'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '500 checks/month',
          features: ['Basic strength checking', 'Security tips', 'Email support']
        },
        pro: {
          price: '$15/month',
          requests: 'Unlimited checks',
          features: ['Advanced analysis', 'Custom policies', 'API access', 'Priority support']
        }
      },
      useCases: ['User registration', 'Password policies', 'Security compliance', 'Employee onboarding']
    },
    {
      id: 'url-shortener',
      name: 'URL Shortener',
      description: 'Professional URL shortening with analytics, custom aliases, password protection, and expiration dates.',
      icon: <Link className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      features: [
        'Custom URL aliases',
        'Click analytics',
        'Password protection',
        'Expiration dates',
        'Geographic tracking',
        'QR code generation'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '100 URLs/month',
          features: ['Basic shortening', 'Click tracking', 'Email support']
        },
        pro: {
          price: '$25/month',
          requests: 'Unlimited URLs',
          features: ['Custom aliases', 'Advanced analytics', 'API access', 'Priority support']
        }
      },
      useCases: ['Marketing campaigns', 'Social media', 'Link tracking', 'Brand awareness']
    },
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      description: 'Advanced JSON processing with validation, transformation, schema generation, and performance optimization.',
      icon: <FileText className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      features: [
        'JSON validation',
        'Formatting and minification',
        'Schema generation',
        'Data transformation',
        'Performance optimization',
        'Bulk processing'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '500 operations/month',
          features: ['Basic formatting', 'Validation', 'Email support']
        },
        pro: {
          price: '$20/month',
          requests: 'Unlimited operations',
          features: ['Advanced features', 'Bulk processing', 'API access', 'Priority support']
        }
      },
      useCases: ['API development', 'Data processing', 'Debugging', 'Documentation']
    },
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      description: 'Professional QR code creation with customization, security validation, and multiple content types support.',
      icon: <QrCode className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      features: [
        'Multiple content types',
        'Custom styling options',
        'Security validation',
        'Bulk generation',
        'High-resolution output',
        'Analytics tracking'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '50 QR codes/month',
          features: ['Basic generation', 'Standard styling', 'Email support']
        },
        pro: {
          price: '$30/month',
          requests: 'Unlimited QR codes',
          features: ['Custom styling', 'Bulk generation', 'API access', 'Priority support']
        }
      },
      useCases: ['Marketing materials', 'Business cards', 'Event tickets', 'Product packaging']
    },
    {
      id: 'file-detector',
      name: 'File Type Detector',
      description: 'Intelligent file analysis with security scanning, metadata extraction, and magic number detection.',
      icon: <Database className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      features: [
        'Magic number detection',
        'Metadata extraction',
        'Security scanning',
        'File validation',
        'Bulk processing',
        'Custom rules'
      ],
      pricing: {
        free: {
          price: 'Free',
          requests: '100 files/month',
          features: ['Basic detection', 'Security scan', 'Email support']
        },
        pro: {
          price: '$35/month',
          requests: 'Unlimited files',
          features: ['Advanced analysis', 'Custom rules', 'API access', 'Priority support']
        }
      },
      useCases: ['File uploads', 'Security compliance', 'Content validation', 'Data processing']
    }
  ];

  const categories = [
    {
      name: 'Development Tools',
      description: 'Tools to improve code quality and development workflow',
      services: ['code-review', 'json-formatter']
    },
    {
      name: 'Security & Validation',
      description: 'Services to enhance security and validate data',
      services: ['email-validator', 'password-checker', 'file-detector']
    },
    {
      name: 'API & Infrastructure',
      description: 'Services to protect and optimize your APIs',
      services: ['rate-limiter']
    },
    {
      name: 'Marketing & Utilities',
      description: 'Tools for marketing campaigns and general utilities',
      services: ['url-shortener', 'qr-generator']
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of micro SaaS services including code review, rate limiting, email validation, password security, URL shortening, JSON processing, QR codes, and file analysis." />
      </Head>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Our Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our suite of production-ready services designed to solve real problems for developers and businesses. 
            Each service includes free tiers and scales with your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" variant="primary" size="lg">
              View Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Get Support
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our services are organized into logical categories to help you find the right tools for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="text-center p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.services.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    return service ? (
                      <div key={serviceId} className="text-sm text-blue-400">
                        • {service.name}
                      </div>
                    ) : null;
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Service Details
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each service is built with production environments in mind, featuring comprehensive testing, 
              error handling, and real-world use cases.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Header */}
                  <div className="lg:col-span-1">
                    <div className={`${service.color} p-8 rounded-xl mb-6 lg:mb-0`}>
                      <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-white/90 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-blue-400 mr-2" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Globe className="w-5 h-5 text-blue-400 mr-2" />
                        Use Cases
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm rounded-full"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
                        Pricing Plans
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(service.pricing).map(([plan, details]) => (
                          <div
                            key={plan}
                            className={`p-6 rounded-xl border ${
                              plan === 'pro' || plan === 'enterprise'
                                ? 'border-blue-500/30 bg-blue-500/5'
                                : 'border-gray-700 bg-gray-800/50'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <h5 className="text-lg font-semibold text-white capitalize">
                                {plan === 'free' ? 'Free Tier' : plan === 'pro' ? 'Pro Plan' : 'Enterprise'}
                              </h5>
                              {plan === 'pro' || plan === 'enterprise' ? (
                                <Star className="w-5 h-5 text-yellow-400" />
                              ) : null}
                            </div>
                            <div className="text-2xl font-bold text-white mb-2">{details.price}</div>
                            <div className="text-sm text-gray-400 mb-4">{details.requests}</div>
                            <ul className="space-y-2">
                              {details.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Start with our free tiers and experience the power of our micro SaaS services. 
            No credit card required, instant access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              View All Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}