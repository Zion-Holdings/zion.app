import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, Star, ArrowRight, Zap, Shield, 
  Brain, Atom, Rocket, Globe, Crown
} from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$2,500',
      period: 'per month',
      features: [
        'AI Consciousness Platform Access',
        'Basic Quantum Computing APIs',
        'Autonomous System Templates',
        'Email Support',
        '5 User Licenses',
        'Basic Analytics Dashboard'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and enterprises',
      price: '$7,500',
      period: 'per month',
      features: [
        'Everything in Starter',
        'Advanced AI Consciousness Features',
        'Full Quantum Computing Suite',
        'Custom Autonomous Systems',
        'Priority Support',
        '25 User Licenses',
        'Advanced Analytics & Reporting',
        'API Rate Limits: 100K/month',
        'Custom Integrations'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-cyan-500 to-purple-500',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Professional',
        'Unlimited AI Consciousness Access',
        'Quantum Computing Infrastructure',
        'Fully Custom Autonomous Systems',
        'Dedicated Support Team',
        'Unlimited User Licenses',
        'Custom Analytics & AI Models',
        'Unlimited API Usage',
        'On-Premise Deployment Options',
        'Custom Training & Implementation'
      ],
      icon: <Crown className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'AI Consciousness Training',
      description: 'Custom training for your team on AI consciousness systems',
      price: '$15,000',
      period: 'per session',
      features: ['2-day intensive training', 'Custom curriculum', 'Hands-on workshops', 'Certification']
    },
    {
      name: 'Quantum Computing Consultation',
      description: 'Expert guidance on quantum computing implementation',
      price: '$25,000',
      period: 'per project',
      features: ['Strategy development', 'Technology assessment', 'Implementation roadmap', 'Ongoing support']
    },
    {
      name: 'Autonomous System Design',
      description: 'Custom design and development of autonomous business systems',
      price: '$50,000',
      period: 'per system',
      features: ['Custom architecture', 'Development & testing', 'Deployment', 'Maintenance support']
    }
  ];

  const comparisonFeatures = [
    {
      feature: 'AI Consciousness Platform',
      starter: 'Basic Access',
      professional: 'Advanced Features',
      enterprise: 'Unlimited Access'
    },
    {
      feature: 'Quantum Computing APIs',
      starter: '5 API Calls/day',
      professional: '100K API Calls/month',
      enterprise: 'Unlimited'
    },
    {
      feature: 'User Licenses',
      starter: '5 Users',
      professional: '25 Users',
      enterprise: 'Unlimited'
    },
    {
      feature: 'Support Response Time',
      starter: '24 hours',
      professional: '4 hours',
      enterprise: '1 hour'
    },
    {
      feature: 'Custom Integrations',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Full Custom'
    },
    {
      feature: 'Analytics & Reporting',
      starter: 'Basic Dashboard',
      professional: 'Advanced Analytics',
      enterprise: 'Custom AI Models'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Pricing Plans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Choose the perfect plan for your AI consciousness, quantum computing, 
            and autonomous systems needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#pricing-tiers"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing-tiers" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Choose Your Plan
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border-cyan-500/30 scale-105' 
                    : 'bg-white/5 border-white/10 hover:border-cyan-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full mb-4`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {tier.price}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {tier.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className={`w-full px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Additional Services
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">
                    {service.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    {service.period}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Feature Comparison
          </motion.h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-gray-300">{row.starter}</td>
                    <td className="p-4 text-center text-cyan-400 font-medium">{row.professional}</td>
                    <td className="p-4 text-center text-purple-400 font-medium">{row.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'Do you offer custom pricing for large organizations?',
                answer: 'Absolutely! Our Enterprise plan is fully customizable to meet your specific needs. Contact our sales team for a custom quote.'
              },
              {
                question: 'What kind of support is included?',
                answer: 'Starter includes email support, Professional includes priority support with 4-hour response time, and Enterprise includes dedicated support with 1-hour response time.'
              },
              {
                question: 'Are there any setup fees?',
                answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include implementation costs depending on your requirements.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-lg font-bold mb-3 text-cyan-400">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your AI consciousness and quantum computing needs, 
              or contact us for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}