import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Globe, Rocket } from 'lucide-react';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Business Intelligence Basic',
        '5 AI-powered reports per month',
        'Email support',
        'Basic analytics dashboard',
        '2 user accounts',
        'Standard security features'
      ],
      popular: false,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies with advanced AI needs',
      features: [
        'Everything in Starter',
        'Unlimited AI reports',
        'Priority support',
        'Advanced analytics & insights',
        '10 user accounts',
        'Enhanced security & compliance',
        'Custom AI model training',
        'API access'
      ],
      popular: true,
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI solutions',
        'Dedicated account manager',
        '24/7 phone & email support',
        'Unlimited user accounts',
        'Enterprise-grade security',
        'Custom integrations',
        'On-premise deployment options',
        'SLA guarantees',
        'Training & onboarding'
      ],
      popular: false,
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Autonomous Systems',
      price: '$199',
      period: '/month',
      description: 'Advanced AI automation for business processes',
      icon: Rocket
    },
    {
      name: 'Quantum Technology Solutions',
      price: '$399',
      period: '/month',
      description: 'Cutting-edge quantum computing services',
      icon: Globe
    },
    {
      name: 'Cybersecurity Suite',
      price: '$149',
      period: '/month',
      description: 'Comprehensive security and compliance tools',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI services with flexible options to scale as you grow.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500 bg-gradient-to-br from-gray-900/50 to-cyan-900/20 shadow-2xl shadow-cyan-500/30'
                    : 'border-gray-700 bg-gray-900/30 hover:border-cyan-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105'
                    : 'bg-gray-800 text-white border border-gray-600 hover:border-cyan-500 hover:bg-gray-700'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-cyan-500/20 mr-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{addon.name}</h3>
                      <p className="text-gray-400 text-sm">{addon.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {addon.price}
                      <span className="text-gray-400 text-lg ml-1">{addon.period}</span>
                    </div>
                    <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/30 transition-colors">
                      Add Service
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! Our enterprise plans are fully customizable to meet your specific needs and scale requirements."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer email support for all plans, priority support for Professional, and 24/7 dedicated support for Enterprise clients."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all paid plans so you can experience our services before committing."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-900/30">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using Zion Tech Group's AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}