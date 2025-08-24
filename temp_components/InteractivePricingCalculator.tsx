import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Check, X, Info, TrendingUp, Zap, Shield, Brain } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  popular?: boolean;
}

interface PricingOptions {
  users: number;
  storage: number;
  support: 'basic' | 'priority' | 'enterprise';
  customization: boolean;
  integration: boolean;
  training: boolean;
}

const InteractivePricingCalculator: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('starter');
  const [options, setOptions] = useState<PricingOptions>({
    users: 5,
    storage: 10,
    support: 'basic',
    customization: false,
    integration: false,
    training: false
  });

  const pricingTiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Starter',
      basePrice: 99,
      description: 'Perfect for small teams and startups',
      features: ['Up to 5 users', '10GB storage', 'Basic support', 'Core features'],
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      basePrice: 299,
      description: 'Ideal for growing businesses',
      features: ['Up to 25 users', '100GB storage', 'Priority support', 'Advanced features'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      basePrice: 999,
      description: 'For large organizations',
      features: ['Unlimited users', '1TB storage', 'Enterprise support', 'All features'],
      icon: <Shield className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-premium',
      name: 'AI Premium',
      basePrice: 1999,
      description: 'Advanced AI and machine learning features',
      features: ['AI-powered insights', 'Predictive analytics', 'Custom AI models', '24/7 support'],
      icon: <Brain className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const supportPricing = {
    basic: 0,
    priority: 99,
    enterprise: 299
  };

  const addonPricing = {
    customization: 199,
    integration: 299,
    training: 399
  };

  const calculatePrice = useMemo(() => {
    const tier = pricingTiers.find(t => t.id === selectedTier);
    if (!tier) return 0;

    let total = tier.basePrice;

    // User scaling (beyond base users)
    const baseUsers = tier.id === 'starter' ? 5 : tier.id === 'professional' ? 25 : 999;
    if (options.users > baseUsers) {
      const additionalUsers = options.users - baseUsers;
      total += additionalUsers * 19; // $19 per additional user
    }

    // Storage scaling (beyond base storage)
    const baseStorage = tier.id === 'starter' ? 10 : tier.id === 'professional' ? 100 : 1000;
    if (options.storage > baseStorage) {
      const additionalStorage = options.storage - baseStorage;
      total += additionalStorage * 2; // $2 per additional GB
    }

    // Support level
    total += supportPricing[options.support];

    // Add-ons
    if (options.customization) total += addonPricing.customization;
    if (options.integration) total += addonPricing.integration;
    if (options.training) total += addonPricing.training;

    return total;
  }, [selectedTier, options]);

  const handleOptionChange = (key: keyof PricingOptions, value: any) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 text-cyan-400 mr-3" />
          <h2 className="text-3xl font-bold text-white">Interactive Pricing Calculator</h2>
        </div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Customize your plan and see real-time pricing. Choose the features that matter most to your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pricing Tiers */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">Choose Your Plan</h3>
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedTier === tier.id
                  ? 'border-cyan-400 bg-cyan-500/10'
                  : 'border-gray-700 hover:border-cyan-400/50 bg-gray-800/50'
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tier.color} flex items-center justify-center text-white`}>
                  {tier.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{tier.name}</h4>
                  <p className="text-sm text-gray-400">{tier.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-600">
                <span className="text-2xl font-bold text-white">{formatPrice(tier.basePrice)}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customization Options */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-4">Customize Your Plan</h3>
          
          {/* Users */}
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Number of Users
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="1"
                max="100"
                value={options.users}
                onChange={(e) => handleOptionChange('users', parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <span className="text-white font-medium min-w-[3rem]">{options.users}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {options.users <= 5 ? 'Included in base price' : `+${formatPrice((options.users - 5) * 19)}/month`}
            </p>
          </div>

          {/* Storage */}
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Storage (GB)
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                min="1"
                max="1000"
                value={options.storage}
                onChange={(e) => handleOptionChange('storage', parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <span className="text-white font-medium min-w-[4rem]">{options.storage}GB</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {options.storage <= 10 ? 'Included in base price' : `+${formatPrice((options.storage - 10) * 2)}/month`}
            </p>
          </div>

          {/* Support Level */}
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Support Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['basic', 'priority', 'enterprise'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => handleOptionChange('support', level)}
                  className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    options.support === level
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                  <div className="text-xs opacity-75">
                    {level === 'basic' ? 'Free' : `+${formatPrice(supportPricing[level])}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Additional Services
            </label>
            <div className="space-y-3">
              {[
                { key: 'customization', label: 'Custom Development', price: addonPricing.customization },
                { key: 'integration', label: 'Third-party Integrations', price: addonPricing.integration },
                { key: 'training', label: 'Team Training', price: addonPricing.training }
              ].map((addon) => (
                <label key={addon.key} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={options[addon.key as keyof PricingOptions] as boolean}
                      onChange={(e) => handleOptionChange(addon.key as keyof PricingOptions, e.target.checked)}
                      className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-gray-300">{addon.label}</span>
                  </div>
                  <span className="text-cyan-400 text-sm">+{formatPrice(addon.price)}/month</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Total Price Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Your Custom Plan</h3>
          <div className="text-6xl font-bold text-cyan-400 mb-2">
            {formatPrice(calculatePrice)}
          </div>
          <p className="text-gray-300 text-lg mb-6">per month</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="text-left">
              <p className="text-gray-400 text-sm">Selected Plan</p>
              <p className="text-white font-medium">
                {pricingTiers.find(t => t.id === selectedTier)?.name}
              </p>
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">Users</p>
              <p className="text-white font-medium">{options.users}</p>
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">Storage</p>
              <p className="text-white font-medium">{options.storage}GB</p>
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">Support</p>
              <p className="text-white font-medium capitalize">{options.support}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.div>

      {/* CSS for custom slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </div>
  );
};

export default InteractivePricingCalculator;