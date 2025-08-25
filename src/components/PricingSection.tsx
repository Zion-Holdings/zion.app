import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  Crown,
  Rocket,
  Building
} from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      icon: Rocket,
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'annual' ? 299 : 349,
      originalPrice: billingCycle === 'annual' ? 399 : 449,
      features: [
        'AI-powered analytics dashboard',
        'Basic cloud infrastructure',
        '24/7 email support',
        'Monthly performance reports',
        'Basic security features',
        'Up to 5 team members'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      icon: Building,
      description: 'Ideal for growing businesses',
      price: billingCycle === 'annual' ? 799 : 899,
      originalPrice: billingCycle === 'annual' ? 999 : 1099,
      features: [
        'Everything in Starter',
        'Advanced AI & ML capabilities',
        'Custom integrations',
        'Priority support (4hr response)',
        'Advanced security & compliance',
        'Up to 25 team members',
        'Custom reporting',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations with complex needs',
      price: 'Custom',
      originalPrice: null,
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone & chat support',
        'SOC 2 compliance',
        'Unlimited team members',
        'Custom SLA guarantees',
        'On-premise deployment options',
        'White-label solutions'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const savings = billingCycle === 'annual' ? 25 : 0;

  return (
    <section className="py-24 bg-gradient-to-b from-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Simple,{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Choose the plan that best fits your business needs. All plans include our core features 
            with no hidden fees or surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-zion-purple/20 rounded-full p-1 transition-colors duration-200"
            >
              <motion.div
                layout
                className={`w-6 h-6 bg-zion-cyan rounded-full shadow-lg ${
                  billingCycle === 'annual' ? 'ml-8' : 'ml-0'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-zion-slate-light'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium"
              >
                <Check className="w-4 h-4" />
                Save {savings}%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${
                  plan.popular ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className={`relative h-full bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                  plan.popular ? 'border-zion-cyan/50 bg-zion-blue-light/20' : ''
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Plan Info */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-zion-slate-light">/month</span>
                        {plan.originalPrice && (
                          <span className="text-lg text-zion-slate-light line-through">
                            ${plan.originalPrice}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-3xl font-bold text-white">{plan.price}</div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                    className="block w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                          : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              We understand that every business is unique. Contact us to discuss custom pricing 
              and solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/request-quote">
                <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
                  <Zap className="w-5 h-5" />
                  Get Free Quote
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};