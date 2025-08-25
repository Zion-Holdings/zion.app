import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Brain, Rocket } from 'lucide-react';

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Cybersecurity Protection',
        'Cloud Infrastructure Setup',
        '24/7 Support',
        'Monthly Reports',
        'Basic Training'
      ],
      icon: Zap,
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive solutions for growing enterprises',
      features: [
        'Everything in Starter',
        'Advanced AI & Machine Learning',
        'Quantum-Safe Security',
        'Custom Micro SAAS Solutions',
        'Priority Support',
        'Weekly Consultations',
        'Advanced Analytics',
        'Custom Integrations'
      ],
      icon: Brain,
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-purple-500 to-pink-500'
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
        'Dedicated Support Team',
        'Custom Training Programs',
        'SLA Guarantees',
        'On-site Implementation',
        'Strategic Consulting'
      ],
      icon: Rocket,
      popular: false,
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalServices = [
    {
      name: 'AI Autonomous Systems',
      price: 'From $15,000',
      description: 'Custom autonomous business operations platform'
    },
    {
      name: 'Quantum Technology Solutions',
      price: 'From $25,000',
      description: 'Quantum computing and cryptography services'
    },
    {
      name: 'Cybersecurity Suite',
      price: 'From $8,000',
      description: 'Advanced threat protection and compliance'
    },
    {
      name: 'Micro SAAS Development',
      price: 'From $12,000',
      description: 'Custom software-as-a-service solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business transformation. All plans include our cutting-edge AI technology and expert support.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <span className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              No hidden fees
            </span>
            <span className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              Cancel anytime
            </span>
            <span className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              30-day money-back guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? 'ring-2 ring-cyan-500 bg-gradient-to-br from-gray-900 to-gray-800'
                    : 'bg-gray-900/50 border border-gray-700'
                } hover:scale-105 transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need something specific? We offer custom solutions tailored to your unique requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</p>
              <p className="text-gray-400 text-sm">{service.description}</p>
              <button className="mt-4 w-full py-2 px-4 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              question: "Can I change my plan at any time?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
            },
            {
              question: "Do you offer custom pricing for large organizations?",
              answer: "Absolutely! We provide custom pricing and solutions for enterprise clients with specific requirements."
            },
            {
              question: "What's included in the support?",
              answer: "All plans include 24/7 support. Professional and Enterprise plans include priority support and dedicated account managers."
            },
            {
              question: "Is there a setup fee?",
              answer: "No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation costs."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using Zion Tech Group to accelerate their digital transformation.
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
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}