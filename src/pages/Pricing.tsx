import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Globe, Brain, Rocket } from 'lucide-react';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Marketing Automation',
        'Email Support',
        '5 AI Agents',
        'Basic Analytics',
        'Standard Security'
      ],
      icon: Zap,
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=starter'
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies with advanced AI needs',
      features: [
        'Everything in Starter',
        'Advanced AI Analytics',
        'Custom AI Models',
        'Priority Support',
        '15 AI Agents',
        'Advanced Security',
        'API Access',
        'Custom Integrations'
      ],
      icon: Brain,
      popular: true,
      cta: 'Start Free Trial',
      href: '/contact?plan=professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'Dedicated Support Team',
        'Unlimited AI Agents',
        'Advanced Compliance',
        'Custom Security Protocols',
        'On-premise Options',
        'SLA Guarantees'
      ],
      icon: Rocket,
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ];

  const servicePricing = [
    {
      category: 'AI & Machine Learning',
      services: [
        { name: 'AI Business Intelligence', price: '$299/month', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', price: '$199/month', description: 'Automated marketing campaigns' },
        { name: 'AI HR & Recruitment', price: '$249/month', description: 'Intelligent hiring solutions' },
        { name: 'AI Legal Tech', price: '$399/month', description: 'Legal document automation' }
      ]
    },
    {
      category: 'Cybersecurity',
      services: [
        { name: 'Quantum-Safe Security', price: '$599/month', description: 'Future-proof security solutions' },
        { name: 'Security Assessment', price: '$1,500', description: 'Comprehensive security audit' },
        { name: 'Compliance & Audit', price: '$799/month', description: 'Regulatory compliance support' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud Migration', price: '$2,500', description: 'Complete cloud transition' },
        { name: 'Network Infrastructure', price: '$899/month', description: 'Managed network services' },
        { name: 'Managed IT Services', price: '$1,299/month', description: 'Full IT management' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our cutting-edge AI technology 
            and world-class support to help you succeed.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <span>Monthly billing</span>
            <div className="w-12 h-6 bg-gray-700 rounded-full relative">
              <div className="w-4 h-4 bg-cyan-400 rounded-full absolute top-1 left-1 transition-transform duration-300"></div>
            </div>
            <span>Annual billing (Save 20%)</span>
          </div>
        </div>
      </div>

      {/* Main Pricing Plans */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-2xl shadow-cyan-500/20'
                      : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Pricing */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Individual Service Pricing
          </h2>
          
          <div className="space-y-12">
            {servicePricing.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
                      <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <Link
                        to="/contact"
                        className="inline-block mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg font-medium transition-colors duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! Our enterprise plans are tailored to your specific needs and include custom pricing based on your requirements."
              },
              {
                question: "What's included in the free trial?",
                answer: "Our free trial includes full access to all Professional plan features for 14 days, with no credit card required."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for our monthly plans. Custom enterprise solutions may have one-time implementation costs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using Zion Tech Group's AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;