import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Brain, Globe, Rocket } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Cybersecurity Assessment',
        'Cloud Migration Consultation',
        '24/7 Email Support',
        'Monthly Performance Reports',
        'Basic Training Sessions'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and enterprises',
      icon: Shield,
      monthlyPrice: 799,
      yearlyPrice: 7999,
      features: [
        'Everything in Starter',
        'Advanced AI & Machine Learning',
        'Quantum-Safe Security Implementation',
        'Full Cloud Infrastructure Setup',
        'Priority Support (4-hour response)',
        'Weekly Performance Reviews',
        'Custom Training Programs',
        'API Integration Support'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      icon: Rocket,
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        'Everything in Professional',
        'Custom AI Model Development',
        'Quantum Computing Solutions',
        'Full-Scale Digital Transformation',
        'Dedicated Account Manager',
        '24/7 Phone & Video Support',
        'Custom SLA Agreements',
        'On-Site Implementation',
        'Advanced Analytics & Reporting',
        'Compliance & Audit Support'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Training & Workshops',
      description: 'Custom AI training for your team',
      price: 299,
      icon: Brain
    },
    {
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment',
      price: 499,
      icon: Shield
    },
    {
      name: 'Cloud Optimization',
      description: 'Performance and cost optimization',
      price: 399,
      icon: Globe
    },
    {
      name: 'Emergency Support',
      description: '24/7 emergency technical support',
      price: 199,
      icon: Zap
    }
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'yearly') {
      return Math.round(((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and technology services with flexible billing options.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                    Save up to 17%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            const price = getPrice(plan);
            const savings = getSavings(plan);
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'ring-2 ring-cyan-400 bg-gradient-to-br from-gray-800/50 to-gray-900/50'
                    : 'bg-gray-800/30'
                } backdrop-blur-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${price}</span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="text-green-400 text-sm font-medium">
                      Save ${savings}% with yearly billing
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105'
                      : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600 hover:border-cyan-400'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enhance your plan with specialized services and support options
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex p-3 rounded-lg bg-cyan-500/20 mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400">${addon.price}</div>
                <button className="w-full mt-4 py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                  Add Service
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              question: "Can I change my plan at any time?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
            },
            {
              question: "Do you offer custom pricing for enterprise clients?",
              answer: "Absolutely! We provide custom pricing and service packages for enterprise clients with specific requirements."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely."
            },
            {
              question: "Is there a setup fee?",
              answer: "No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation costs."
            },
            {
              question: "What kind of support do you provide?",
              answer: "Support varies by plan - from email support to 24/7 phone and video support with dedicated account managers."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a custom quote tailored to your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
            <button className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}