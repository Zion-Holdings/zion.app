import React from 'react';
import { Check, X, ExternalLink, TrendingUp, DollarSign, Users } from 'lucide-react';

interface ServiceComparisonProps {
  service: {
    title: string;
    description: string;
    icon: string;
    color: string;
    pricing: {
      starter: { price: string; period: string; features: string[] };
      pro: { price: string; period: string; features: string[] };
      enterprise: { price: string; period: string; features: string[] };
    };
    marketPrice: string;
    competitors: Array<{
      name: string;
      price: string;
      link: string;
    }>;
    marketSize: string;
    growthRate: string;
    targetAudience: string;
  };
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({ service }) => {
  const allFeatures = [
    ...new Set([
      ...service.pricing.starter.features,
      ...service.pricing.pro.features,
      ...service.pricing.enterprise.features,
    ])
  ];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
      {/* Service Header */}
      <div className="text-center mb-8">
        <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl`}>
          {service.icon}
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">{service.title}</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">{service.description}</p>
      </div>

      {/* Market Insights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
          <div className="text-sm text-gray-400">Market Size</div>
          <div className="text-xl font-bold text-white">{service.marketSize}</div>
        </div>
        <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-400" />
          <div className="text-sm text-gray-400">Growth Rate</div>
          <div className="text-xl font-bold text-white">{service.growthRate}</div>
        </div>
        <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
          <div className="text-sm text-gray-400">Target Market</div>
          <div className="text-sm font-bold text-white">SMBs</div>
        </div>
        <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <DollarSign className="w-8 h-8 mx-auto mb-2 text-orange-400" />
          <div className="text-sm text-gray-400">Market Price</div>
          <div className="text-sm font-bold text-white">{service.marketPrice}</div>
        </div>
      </div>

      {/* Pricing Comparison Table */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Pricing Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4 text-gray-300 font-medium">Features</th>
                <th className="text-center p-4 text-gray-300 font-medium">
                  <div className="text-lg font-bold text-white">Starter</div>
                  <div className="text-2xl font-bold text-green-400">{service.pricing.starter.price}</div>
                  <div className="text-sm text-gray-400">{service.pricing.starter.period}</div>
                </th>
                <th className="text-center p-4 text-gray-300 font-medium">
                  <div className="text-lg font-bold text-white">Professional</div>
                  <div className="text-2xl font-bold text-blue-400">{service.pricing.pro.price}</div>
                  <div className="text-sm text-gray-400">{service.pricing.pro.period}</div>
                </th>
                <th className="text-center p-4 text-gray-300 font-medium">
                  <div className="text-lg font-bold text-white">Enterprise</div>
                  <div className="text-2xl font-bold text-purple-400">{service.pricing.enterprise.price}</div>
                  <div className="text-sm text-gray-400">{service.pricing.enterprise.period}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="p-4 text-gray-300">{feature}</td>
                  <td className="text-center p-4">
                    {service.pricing.starter.features.includes(feature) ? (
                      <Check className="w-6 h-6 mx-auto text-green-400" />
                    ) : (
                      <X className="w-6 h-6 mx-auto text-red-400" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {service.pricing.pro.features.includes(feature) ? (
                      <Check className="w-6 h-6 mx-auto text-green-400" />
                    ) : (
                      <X className="w-6 h-6 mx-auto text-red-400" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {service.pricing.enterprise.features.includes(feature) ? (
                      <Check className="w-6 h-6 mx-auto text-green-400" />
                    ) : (
                      <X className="w-6 h-6 mx-auto text-red-400" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {service.competitors.map((competitor, index) => (
            <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-white">{competitor.name}</h4>
                <a 
                  href={competitor.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="text-2xl font-bold text-gray-300 mb-2">{competitor.price}</div>
              <div className="text-sm text-gray-400">Market competitor pricing</div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience */}
      <div className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700">
        <h4 className="text-lg font-semibold text-white mb-2">Target Audience</h4>
        <p className="text-gray-300">{service.targetAudience}</p>
      </div>
    </div>
  );
};

export default ServiceComparison;