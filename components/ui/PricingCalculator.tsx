import React, { useState } from 'react';
import { Calculator, Users, Mail, CreditCard, Building, TrendingUp } from 'lucide-react';

interface PricingCalculatorProps {
  service: {
    title: string;
    icon: string;
    pricing: {
      starter: { price: string; period: string; features: string[] };
      pro: { price: string; period: string; features: string[] };
      enterprise: { price: string; period: string; features: string[] };
    };
    marketPrice: string;
  };
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ service }) => {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | 'enterprise'>('pro');
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);
  const [additionalUsers, setAdditionalUsers] = useState(0);
  const [customVolume, setCustomVolume] = useState(0);

  const calculatePrice = () => {
    let basePrice = 0;
    let additionalCosts = 0;

    // Base pricing based on plan
    switch (selectedPlan) {
      case 'starter':
        basePrice = parseInt(service.pricing.starter.price.replace(/[^0-9]/g, ''));
        break;
      case 'pro':
        basePrice = parseInt(service.pricing.pro.price.replace(/[^0-9]/g, ''));
        break;
      case 'enterprise':
        basePrice = parseInt(service.pricing.enterprise.price.replace(/[^0-9]/g, ''));
        break;
    }

    // Additional costs for custom features
    if (customFeatures.length > 0) {
      additionalCosts += customFeatures.length * 50; // $50 per custom feature
    }

    // Additional costs for users (if applicable)
    if (additionalUsers > 0) {
      if (service.title.includes('CRM')) {
        additionalCosts += additionalUsers * 25; // $25 per additional user
      }
    }

    // Additional costs for volume (if applicable)
    if (customVolume > 0) {
      if (service.title.includes('Email')) {
        additionalCosts += Math.ceil(customVolume / 10000) * 20; // $20 per 10k emails
      }
    }

    return {
      basePrice,
      additionalCosts,
      total: basePrice + additionalCosts
    };
  };

  const pricing = calculatePrice();

  const availableFeatures = [
    'API Access',
    'Advanced Analytics',
    'Custom Integrations',
    'White-label Solution',
    'Priority Support',
    'Custom Branding',
    'Advanced Security',
    'Multi-language Support'
  ];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Pricing Calculator</h3>
        <p className="text-gray-400">Estimate your costs for {service.title}</p>
      </div>

      {/* Plan Selection */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Select Your Plan</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['starter', 'pro', 'enterprise'] as const).map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                selectedPlan === plan
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                  : 'border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white'
              }`}
            >
              <div className="text-lg font-semibold capitalize mb-2">{plan}</div>
              <div className="text-2xl font-bold">{service.pricing[plan].price}</div>
              <div className="text-sm text-gray-400">{service.pricing[plan].period}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Features */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Additional Features</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {availableFeatures.map((feature) => (
            <label key={feature} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={customFeatures.includes(feature)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCustomFeatures([...customFeatures, feature]);
                  } else {
                    setCustomFeatures(customFeatures.filter(f => f !== feature));
                  }
                }}
                className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Additional Options */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Additional Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.title.includes('CRM') && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Users
              </label>
              <input
                type="number"
                min="0"
                value={additionalUsers}
                onChange={(e) => setAdditionalUsers(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
          
          {service.title.includes('Email') && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Emails per Month
              </label>
              <input
                type="number"
                min="0"
                value={customVolume}
                onChange={(e) => setCustomVolume(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
        </div>
      </div>

      {/* Price Calculation */}
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
        <h4 className="text-lg font-semibold text-white mb-4">Price Breakdown</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-300">Base Plan ({selectedPlan})</span>
            <span className="text-white">${pricing.basePrice}</span>
          </div>
          {pricing.additionalCosts > 0 && (
            <>
              {customFeatures.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-300">Custom Features ({customFeatures.length})</span>
                  <span className="text-white">${customFeatures.length * 50}</span>
                </div>
              )}
              {additionalUsers > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-300">Additional Users ({additionalUsers})</span>
                  <span className="text-white">${additionalUsers * 25}</span>
                </div>
              )}
              {customVolume > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-300">Additional Volume</span>
                  <span className="text-white">${Math.ceil(customVolume / 10000) * 20}</span>
                </div>
              )}
            </>
          )}
          <div className="border-t border-gray-600 pt-3">
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-white">Total Monthly Cost</span>
              <span className="text-green-400">${pricing.total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Comparison */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          Market average: <span className="text-gray-300">{service.marketPrice}</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          * Prices are estimates and may vary based on specific requirements
        </p>
      </div>
    </div>
  );
};

export default PricingCalculator;