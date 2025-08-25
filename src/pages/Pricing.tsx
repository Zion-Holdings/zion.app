import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Cybersecurity Assessment',
        'Cloud Infrastructure Setup',
        '24/7 Support',
        'Monthly Reports',
        'Basic Training'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Everything in Starter',
        'Advanced AI & Machine Learning',
        'Quantum-Safe Security',
        'Custom Micro SAAS Solutions',
        'Priority Support',
        'Weekly Reports',
        'Advanced Training',
        'API Access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'Quantum Computing Solutions',
        'Full-Stack Development',
        'Dedicated Support Team',
        'Custom Integrations',
        'On-site Training',
        'SLA Guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Training & Workshops',
      price: '$299',
      period: '/session',
      description: 'Custom AI training for your team'
    },
    {
      name: 'Security Audit',
      price: '$1,499',
      period: '/audit',
      description: 'Comprehensive security assessment'
    },
    {
      name: 'Cloud Migration',
      price: '$4,999',
      period: '/project',
      description: 'Complete cloud infrastructure setup'
    },
    {
      name: 'Custom Development',
      price: '$150',
      period: '/hour',
      description: 'Tailored software development'
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
            Choose the perfect plan for your business. All plans include our core AI services with flexible options to scale as you grow.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-400">Monthly</span>
            <div className="relative">
              <div className="w-14 h-7 bg-cyan-500 rounded-full p-1">
                <div className="w-5 h-5 bg-white rounded-full transform translate-x-7 transition-transform duration-300"></div>
              </div>
            </div>
            <span className="text-cyan-400 font-medium">Annual (Save 20%)</span>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                    : 'border-gray-700 bg-gray-800/30 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600 hover:border-cyan-400'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with specialized services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-bold text-cyan-400">{addon.price}</span>
                  <span className="text-gray-400 ml-1">{addon.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom solutions and pricing that fits their specific requirements and budget."
              },
              {
                question: "What's included in the support?",
                answer: "All plans include 24/7 support. Professional and Enterprise plans include priority support with dedicated account managers."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for monthly plans. Annual plans include free setup and onboarding services."
              },
              {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel at any time with no penalties. We'll help you export your data and ensure a smooth transition."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already transforming their operations with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}