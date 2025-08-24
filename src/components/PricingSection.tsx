import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, Zap, Shield, Users, ArrowRight, Crown, Rocket, Building } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: 99,
    period: "month",
    description: "Perfect for small businesses and startups",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-zion-cyan to-zion-blue",
    bgColor: "from-zion-cyan/20 to-zion-blue/20",
    features: [
      "Up to 5 team members",
      "Basic AI tools access",
      "Email support",
      "Standard templates",
      "1 project at a time"
    ],
    notIncluded: [
      "Advanced analytics",
      "Priority support",
      "Custom integrations"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: 299,
    period: "month",
    description: "Ideal for growing companies and teams",
    icon: <Building className="w-8 h-8" />,
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
    features: [
      "Up to 25 team members",
      "Full AI tools access",
      "Priority email support",
      "Advanced templates",
      "Unlimited projects",
      "Team collaboration",
      "Basic analytics"
    ],
    notIncluded: [
      "Custom integrations",
      "Dedicated account manager"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: 999,
    period: "month",
    description: "For large organizations with complex needs",
    icon: <Crown className="w-8 h-8" />,
    color: "from-zion-cyan-light to-zion-purple",
    bgColor: "from-zion-cyan-light/20 to-zion-purple/20",
    features: [
      "Unlimited team members",
      "All AI tools + custom models",
      "24/7 phone support",
      "Custom templates",
      "Unlimited projects",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "On-premise options"
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales"
  }
];

const addons = [
  {
    name: "AI Model Training",
    price: 199,
    period: "month",
    description: "Custom AI model training and optimization",
    icon: <Zap className="w-6 h-6" />,
    features: ["Custom model training", "Performance optimization", "Model monitoring"]
  },
  {
    name: "Premium Support",
    price: 99,
    period: "month",
    description: "24/7 dedicated support with guaranteed response times",
    icon: <Shield className="w-6 h-6" />,
    features: ["24/7 phone support", "Guaranteed 2-hour response", "Dedicated support team"]
  },
  {
    name: "Advanced Analytics",
    price: 149,
    period: "month",
    description: "Comprehensive analytics and reporting suite",
    icon: <Users className="w-6 h-6" />,
    features: ["Custom dashboards", "Advanced reporting", "Data export options"]
  }
];

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const getDiscountedPrice = (price: number) => {
    return billingPeriod === 'year' ? Math.round(price * 10) : price;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-zion-blue-dark/40 rounded-xl p-1 border border-zion-blue-light/30">
            <button
              onClick={() => setBillingPeriod('month')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                billingPeriod === 'month'
                  ? 'bg-zion-cyan text-white shadow-lg'
                  : 'text-zion-slate-light hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('year')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                billingPeriod === 'year'
                  ? 'bg-zion-cyan text-white shadow-lg'
                  : 'text-zion-slate-light hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-zion-purple text-white text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 inline mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group ${
                plan.popular ? 'ring-2 ring-zion-purple/50' : ''
              }`}>
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${getDiscountedPrice(plan.price)}</span>
                    <span className="text-zion-slate-light">/{billingPeriod}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-zion-cyan flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-zion-slate-light/30 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-zion-slate-light" />
                      </div>
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white shadow-lg hover:shadow-zion-purple/25'
                      : 'bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50'
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Additional <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto mb-12">
            Enhance your plan with these powerful add-ons to meet your specific needs
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {addons.map((addon, index) => (
            <motion.div
              key={addon.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
                    <div className="text-white">
                      {addon.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">{addon.name}</h4>
                  <p className="text-zion-slate-light text-sm mb-4">{addon.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-zion-cyan">${addon.price}</span>
                    <span className="text-zion-slate-light">/{addon.period}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 px-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-lg text-sm font-medium transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Have Questions?</h3>
          <p className="text-zion-slate-light mb-8">
            Our team is here to help you choose the right plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
              Contact Sales
            </button>
            <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}