import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, X, Star, ArrowRight, Zap, Shield, Database, Code, Lock, Link, QrCode, FileText, Mail, Key } from 'lucide-react';

export default function PricingPage() {
  const services = [
    {
      id: 'code-review',
      name: 'Code Review Assistant',
      icon: <Code className="w-6 h-6" />,
      color: 'from-fuchsia-500 to-purple-600',
      description: 'AI-powered code analysis with security and performance insights'
    },
    {
      id: 'rate-limiter',
      name: 'API Rate Limiter',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      description: 'Intelligent rate limiting with configurable policies'
    },
    {
      id: 'email-validator',
      name: 'Email Validator',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      description: 'Comprehensive email validation with security assessment'
    },
    {
      id: 'password-checker',
      name: 'Password Strength',
      icon: <Key className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      description: 'Advanced password analysis with security recommendations'
    },
    {
      id: 'url-shortener',
      name: 'URL Shortener',
      icon: <Link className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600',
      description: 'Professional URL shortening with analytics'
    },
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-600',
      description: 'Advanced JSON processing and validation'
    },
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      icon: <QrCode className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600',
      description: 'Professional QR code creation with customization'
    },
    {
      id: 'file-detector',
      name: 'File Type Detector',
      icon: <Database className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-600',
      description: 'Intelligent file analysis with security scanning'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      description: 'Perfect for getting started and small projects',
      price: '$0',
      period: 'forever',
      features: [
        'Access to all services',
        'Basic functionality',
        'Email support',
        'Standard rate limits',
        'Community documentation'
      ],
      limitations: [
        'Limited monthly requests',
        'Basic features only',
        'No custom branding',
        'No priority support'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-gray-700'
    },
    {
      name: 'Pro',
      description: 'Ideal for growing businesses and development teams',
      price: '$49',
      period: 'per month',
      features: [
        'Everything in Free',
        'Unlimited requests',
        'Advanced features',
        'API access',
        'Custom branding',
        'Priority support',
        'Analytics dashboard',
        'Webhook notifications'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom requirements',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantees',
        'On-premise options',
        'Custom rate limits',
        'Advanced security',
        'Compliance reporting'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-purple-500'
    }
  ];

  const servicePricing = {
    'code-review': { free: '100/month', pro: '$29/month', enterprise: 'Custom' },
    'rate-limiter': { free: '10K/month', pro: '$49/month', enterprise: '$99/month' },
    'email-validator': { free: '1K/month', pro: '$19/month', enterprise: 'Custom' },
    'password-checker': { free: '500/month', pro: '$15/month', enterprise: 'Custom' },
    'url-shortener': { free: '100/month', pro: '$25/month', enterprise: 'Custom' },
    'json-formatter': { free: '500/month', pro: '$20/month', enterprise: 'Custom' },
    'qr-generator': { free: '50/month', pro: '$30/month', enterprise: 'Custom' },
    'file-detector': { free: '100/month', pro: '$35/month', enterprise: 'Custom' }
  };

  const faqs = [
    {
      question: 'Can I use multiple services with one plan?',
      answer: 'Yes! All our plans give you access to all services. You can use any combination of services within your plan limits.'
    },
    {
      question: 'What happens if I exceed my monthly limits?',
      answer: 'When you reach your limit, you\'ll receive a notification. You can either upgrade your plan or wait until the next month. We never charge overages.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll refund your payment, no questions asked.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time from your dashboard. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Do you offer discounts for startups or nonprofits?',
      answer: 'Yes! We offer special pricing for startups, nonprofits, and educational institutions. Contact our sales team to learn more about our discount programs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans. All payments are processed securely through Stripe.'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing — Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our micro SaaS services. Start with free tiers and scale as you grow. No hidden fees, no surprises." />
      </Head>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Start with our generous free tiers and scale as you grow. No hidden fees, no surprises. 
            Choose the plan that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#pricing" variant="primary" size="lg">
              View Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              All plans include access to all services. Upgrade anytime to unlock more features and higher limits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 border-2 ${plan.color} hover:border-blue-500/50 transition-all duration-300 ${
                  plan.popular ? 'scale-105 shadow-2xl shadow-blue-500/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period !== 'forever' && (
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  {plan.period === 'forever' && (
                    <p className="text-green-400 text-sm">No credit card required</p>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-2" />
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <X className="w-5 h-5 text-red-400 mr-2" />
                        Limitations
                      </h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-center text-gray-400">
                            <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Button
                    href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' 
                        : 'border-gray-600 text-white hover:border-blue-500 hover:bg-blue-500/10'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each service has its own pricing structure. Mix and match services based on your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 text-white font-semibold">Service</th>
                  <th className="text-center p-4 text-white font-semibold">Free Tier</th>
                  <th className="text-center p-4 text-white font-semibold">Pro Plan</th>
                  <th className="text-center p-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={service.id} className={`border-b border-gray-800 ${index % 2 === 0 ? 'bg-gray-800/30' : ''}`}>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="text-green-400 font-medium">{servicePricing[service.id].free}</div>
                    </td>
                    <td className="text-center p-4">
                      <div className="text-blue-400 font-medium">{servicePricing[service.id].pro}</div>
                    </td>
                    <td className="text-center p-4">
                      <div className="text-purple-400 font-medium">{servicePricing[service.id].enterprise}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
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
            Start with our free tiers today. No credit card required, instant access to all services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/signup" variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}