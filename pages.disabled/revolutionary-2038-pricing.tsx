import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Brain, Atom, Globe, Shield, Rocket, ArrowRight
} from 'lucide-react';

const Revolutionary2038Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for startups and small teams',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        'Up to 5 team members',
        'Basic AI services',
        'Standard support',
        'Core features access',
        'Community forum access',
        'Basic analytics'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/50',
      monthlyPrice: 799,
      yearlyPrice: 7999,
      features: [
        'Up to 25 team members',
        'Advanced AI services',
        'Quantum computing access',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      icon: <Star className="w-8 h-8" />,
      color: 'from-cyan-500 to-green-500',
      borderColor: 'border-cyan-500/50',
      monthlyPrice: 2499,
      yearlyPrice: 24999,
      features: [
        'Unlimited team members',
        'Full AI consciousness platform',
        'Quantum computing suite',
        'Space technology access',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'SLA guarantees',
        'Compliance certifications',
        'Executive dashboard'
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      services: [
        'AI Consciousness Evolution Platform',
        'Quantum AI Fusion Platform',
        'Autonomous AI Ethics Framework',
        'Consciousness Evolution Engine',
        'Quantum Neural Architecture Optimizer',
        'Autonomous AI Content Factory',
        'Quantum Emotional Intelligence Platform',
        'Autonomous AI Research Assistant',
        'Quantum Creativity Studio',
        'Autonomous AI Decision Engine',
        'Quantum Multimodal Fusion Platform'
      ]
    },
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        'Quantum Error Correction Automation',
        'Quantum Cloud Infrastructure Platform',
        'Quantum Network Security Gateway',
        'Quantum Data Center Optimizer',
        'Quantum Edge Computing Platform',
        'Quantum Blockchain Infrastructure',
        'Quantum Bio-Computing Platform',
        'Quantum Financial Risk Predictor'
      ]
    },
    {
      name: 'Space Technology',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      services: [
        'Space Debris Mitigation Platform',
        'Autonomous Space Operations',
        'Quantum Space Communications',
        'Interplanetary Infrastructure',
        'Space Resource Mining',
        'Satellite Constellation Management',
        'Space Tourism Platform',
        'Mars Colony Infrastructure'
      ]
    },
    {
      name: 'IT Services',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      services: [
        'Autonomous Cybersecurity Orchestrator',
        'AI-Powered DevOps Automation',
        'Autonomous IT Operations Center',
        'AI-Powered Infrastructure as Code',
        'Autonomous API Governance Platform',
        'Quantum-Secured Cloud Infrastructure',
        'Autonomous Supply Chain Orchestrator',
        'Biometric Emotion Authentication'
      ]
    }
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'yearly') {
      const monthlyTotal = plan.monthlyPrice * 12;
      const yearlyPrice = plan.yearlyPrice;
      return Math.round(((monthlyTotal - yearlyPrice) / monthlyTotal) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Revolutionary 2038 Pricing - Zion Tech Group"
        description="Explore our cutting-edge 2038 services pricing with AI consciousness evolution, quantum computing, and space technology solutions."
        keywords={[
          '2038 pricing', 'AI services pricing', 'quantum computing pricing', 
          'space technology pricing', 'Zion Tech Group', 'technology pricing',
          'enterprise solutions', 'AI consciousness', 'quantum computing'
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-40 h-40 border border-cyan-500/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-32 w-32 h-32 border border-purple-500/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-1/4 w-28 h-28 border border-blue-500/30 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              2038 Pricing
            </span>
            <br />
            <span className="text-white">Revolutionary</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Experience the future of technology with our revolutionary 2038 services. 
            From AI consciousness evolution to quantum space technology, we offer flexible pricing for every organization.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gray-600'
              }`}
            >
              <motion.div
                animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <span className="ml-2 text-sm text-cyan-400 font-medium">
                  Save up to 20%
                </span>
              )}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-2 ${plan.borderColor} rounded-2xl p-8 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-white mb-2">
                    ${getPrice(plan)}
                    <span className="text-lg text-gray-400">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                    <div className="text-cyan-400 text-sm font-medium">
                      Save {getSavings(plan)}% with yearly billing
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete range of revolutionary 2038 services across all technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="space-y-3">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                    View All {category.name} Services
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join the revolution and experience the future of technology with our cutting-edge 2038 services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10">
              Schedule Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 mb-4">Need a custom solution?</p>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              Contact our Enterprise Team
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Revolutionary2038Pricing;