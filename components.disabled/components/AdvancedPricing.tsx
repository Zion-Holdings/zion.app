import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Rocket, Crown, Sparkles } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string;
  cta: string;
  href: string;
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$2,999',
    period: '/month',
    features: [
      'Basic AI Integration',
      'Cloud Hosting (AWS/Azure)',
      'Responsive Web Design',
      'SEO Optimization',
      'Basic Analytics',
      'Email Support',
      '2 Team Members',
      'Monthly Updates'
    ],
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    cta: 'Get Started',
    href: '/contact?plan=starter'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses and enterprises',
    price: '$7,999',
    period: '/month',
    popular: true,
    features: [
      'Advanced AI & ML Solutions',
      'Multi-Cloud Architecture',
      'Progressive Web Apps',
      'Advanced SEO & Analytics',
      'Real-time Monitoring',
      'Priority Support',
      'Unlimited Team Members',
      'Weekly Updates',
      'Custom Integrations',
      'Performance Optimization'
    ],
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    cta: 'Choose Professional',
    href: '/contact?plan=professional'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Custom AI Development',
      'Hybrid Cloud Solutions',
      'Advanced Security',
      'Custom Analytics',
      '24/7 Support',
      'Dedicated Team',
      'Custom Features',
      'SLA Guarantees',
      'Compliance & Security',
      'Training & Onboarding'
    ],
    icon: Sparkles,
    color: 'from-emerald-500 to-green-500',
    cta: 'Contact Sales',
    href: '/contact?plan=enterprise'
  }
];

const AdvancedPricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const getDiscountedPrice = (basePrice: string) => {
    if (billingPeriod === 'yearly') {
      const price = parseInt(basePrice.replace('$', '').replace(',', ''));
      const discounted = Math.round(price * 0.8); // 20% discount
      return `$${discounted.toLocaleString()}`;
    }
    return basePrice;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business needs. 
            Start small and grow with us.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 bg-blue-500 rounded-full"
                animate={{ x: billingPeriod === 'yearly' ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`relative group ${isPopular ? 'md:-mt-4' : ''}`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className={`relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                    isSelected 
                      ? 'border-blue-500/50 shadow-2xl shadow-blue-500/25' 
                      : isPopular 
                        ? 'border-purple-500/50 shadow-xl shadow-purple-500/25'
                        : 'border-gray-700/50 hover:border-gray-600/50'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">
                          {plan.price === 'Custom' ? 'Custom' : getDiscountedPrice(plan.price)}
                        </span>
                        {plan.price !== 'Custom' && (
                          <span className="text-gray-400 ml-2">
                            {billingPeriod === 'yearly' ? '/year' : plan.period}
                          </span>
                        )}
                      </div>
                      {billingPeriod === 'yearly' && plan.price !== 'Custom' && (
                        <p className="text-green-400 text-sm mt-2">
                          Save ${Math.round(parseInt(plan.price.replace('$', '').replace(',', '')) * 0.2).toLocaleString()} annually
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={plan.href}
                      className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        isPopular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                          : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.cta}
                    </motion.a>
                  </div>

                  {/* Selection Indicator */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              We specialize in creating tailored technology solutions that perfectly fit your unique business requirements.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote
              <Sparkles className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedPricing;