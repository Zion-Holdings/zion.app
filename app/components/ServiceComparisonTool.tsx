'use client';

import { useState } from 'react';
import { allServices } from '../data/servicesData';

interface ComparisonResult {
  winner: string;
  reasoning: string[];
  bestFor: string;
}

export default function ServiceComparisonTool() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showComparison, setShowComparison] = useState(false);

  const filteredServices = allServices
    .filter(s => 
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 20);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else if (selectedServices.length < 3) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const compareServices = () => {
    setShowComparison(true);
  };

  const resetComparison = () => {
    setSelectedServices([]);
    setShowComparison(false);
    setSearchTerm('');
  };

  const getComparisonAnalysis = (): ComparisonResult => {
    if (selectedServices.length < 2) return { winner: '', reasoning: [], bestFor: '' };

    const services = selectedServices.map(id => allServices.find(s => s.id === id)!);
    const reasoning: string[] = [];
    
    // Compare pricing (enterprise tier)
    const prices = services.map(s => parseInt(s.pricing.enterprise.replace(/\D/g, '')));
    const minPriceIdx = prices.indexOf(Math.min(...prices));
    const maxPriceIdx = prices.indexOf(Math.max(...prices));
    
    if (prices[minPriceIdx] < prices[maxPriceIdx] * 0.7) {
      reasoning.push(`${services[minPriceIdx].title} is ${Math.round((1 - prices[minPriceIdx]/prices[maxPriceIdx]) * 100)}% more cost-effective`);
    }

    // Compare features count
    const featureCounts = services.map(s => s.features.length);
    const maxFeaturesIdx = featureCounts.indexOf(Math.max(...featureCounts));
    
    if (featureCounts[maxFeaturesIdx] > featureCounts[(maxFeaturesIdx + 1) % featureCounts.length] + 1) {
      reasoning.push(`${services[maxFeaturesIdx].title} offers more features (${featureCounts[maxFeaturesIdx]} vs ${featureCounts[(maxFeaturesIdx + 1) % featureCounts.length]})`);
    }

    // Compare benefits
    const benefitCounts = services.map(s => s.benefits.length);
    const maxBenefitsIdx = benefitCounts.indexOf(Math.max(...benefitCounts));
    
    if (benefitCounts[maxBenefitsIdx] > 3) {
      reasoning.push(`${services[maxBenefitsIdx].title} emphasizes ${benefitCounts[maxBenefitsIdx]} key benefits`);
    }

    // Determine winner based on value proposition
    let winner = services[0].title;
    let bestFor = '';

    if (prices[0] < prices[1] * 0.6) {
      winner = services[0].title;
      bestFor = 'Budget-conscious organizations prioritizing cost efficiency';
    } else if (featureCounts[1] > featureCounts[0] + 2) {
      winner = services[1].title;
      bestFor = 'Organizations needing comprehensive feature coverage';
    } else if (services[0].category === services[1].category) {
      winner = featureCounts[0] >= featureCounts[1] ? services[0].title : services[1].title;
      bestFor = 'Organizations in the same domain seeking optimal feature-to-price ratio';
    } else {
      winner = 'Depends on your specific needs';
      bestFor = 'Review the comparison below to determine the best fit for your use case';
    }

    return { winner, reasoning, bestFor };
  };

  const selectedServiceObjects = selectedServices.map(id => allServices.find(s => s.id === id)!);
  const analysis = getComparisonAnalysis();

  if (showComparison && selectedServices.length >= 2) {
    return (
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🔍 Service Comparison Results
          </h2>
          <p className="text-slate-300 text-lg">
            Side-by-side analysis of {selectedServices.length} services
          </p>
        </div>

        {/* Analysis Summary */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-3">📊 Analysis Summary</h3>
          <div className="space-y-3">
            <div>
              <span className="text-slate-400">Recommended Choice:</span>
              <span className="text-white font-semibold ml-2">{analysis.winner}</span>
            </div>
            <div>
              <span className="text-slate-400">Best For:</span>
              <span className="text-slate-300 ml-2">{analysis.bestFor}</span>
            </div>
            {analysis.reasoning.length > 0 && (
              <div>
                <span className="text-slate-400">Key Insights:</span>
                <ul className="mt-2 space-y-1">
                  {analysis.reasoning.map((reason, idx) => (
                    <li key={idx} className="text-slate-300 text-sm">• {reason}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="py-4 px-4 text-slate-400 font-semibold">Feature</th>
                {selectedServiceObjects.map(service => (
                  <th key={service.id} className="py-4 px-4 text-white font-semibold">
                    {service.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-4 text-slate-400">Category</td>
                {selectedServiceObjects.map(service => (
                  <td key={service.id} className="py-4 px-4 text-slate-300">
                    {service.category}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-4 text-slate-400">Industry</td>
                {selectedServiceObjects.map(service => (
                  <td key={service.id} className="py-4 px-4 text-slate-300">
                    {service.industry}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-4 text-slate-400">Basic Plan</td>
                {selectedServiceObjects.map(service => (
                  <td key={service.id} className="py-4 px-4 text-green-400 font-semibold">
                    ${service.pricing.basic}/mo
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-4 text-slate-400">Pro Plan</td>
                {selectedServiceObjects.map(service => (
                  <td key={service.id} className="py-4 px-4 text-blue-400 font-semibold">
                    ${service.pricing.pro}/mo
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-4 text-slate-400">Enterprise Plan</td>
                {selectedServiceObjects.map(service => (
                  <td key={service.id} className="py-4 px-4 text-purple-400 font-semibold">
                    ${service.pricing.enterprise}/mo
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-4 text-slate-400">Features Count</td>
                {selectedServiceObjects.map(service => (
                  <td key={service.id} className="py-4 px-4 text-slate-300">
                    {service.features.length} features
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-4 text-slate-400">Status</td>
                {selectedServiceObjects.map(service => (
                  <td key={service.id} className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      service.popular ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30 text-slate-300'
                    }`}>
                      {service.popular ? '⭐ Popular' : 'Available'}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed Features Comparison */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {selectedServiceObjects.map(service => (
            <div key={service.id} className="bg-slate-900/60 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-bold text-white mb-4">{service.title}</h4>
              
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h5>
                <ul className="space-y-1">
                  {service.features.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="text-slate-300 text-sm">• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-semibold text-slate-400 mb-2">Benefits:</h5>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-green-400 text-sm">✓ {benefit}</li>
                  ))}
                </ul>
              </div>

              <a
                href={`/services/${service.id}/`}
                className="block w-full text-center py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all text-sm"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetComparison}
            className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all"
          >
            ← Compare Different Services
          </button>
          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all text-center"
          >
            📞 Get Expert Advice
          </a>
          <a
            href="/services"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all text-center"
          >
            Browse All 834+ Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm font-semibold mb-4">
          🔍 NEW: Compare Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Compare Services Side-by-Side
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Select 2-3 services to compare features, pricing, and benefits. Get AI-powered recommendations.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search services by name, category, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-all"
        />
      </div>

      {/* Selected Services */}
      {selectedServices.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Selected ({selectedServices.length}/3):
          </h3>
          <div className="flex flex-wrap gap-3">
            {selectedServiceObjects.map(service => (
              <div
                key={service.id}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600/30 border border-purple-500/50 rounded-lg"
              >
                <span className="text-white text-sm font-medium">{service.title}</span>
                <button
                  onClick={() => toggleService(service.id)}
                  className="text-purple-300 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Service Selection Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-h-96 overflow-y-auto">
        {filteredServices.map(service => {
          const isSelected = selectedServices.includes(service.id);
          const isDisabled = !isSelected && selectedServices.length >= 3;

          return (
            <button
              key={service.id}
              onClick={() => !isDisabled && toggleService(service.id)}
              disabled={isDisabled}
              className={`p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-purple-600/30 border-purple-500'
                  : isDisabled
                  ? 'bg-slate-900/30 border-slate-800 opacity-50 cursor-not-allowed'
                  : 'bg-slate-900/60 border-slate-700 hover:border-purple-500/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{service.icon}</span>
                {isSelected && <span className="text-purple-400">✓</span>}
              </div>
              <h4 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                {service.title}
              </h4>
              <p className="text-slate-400 text-xs mb-2 line-clamp-2">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{service.category}</span>
                <span className="text-xs text-green-400 font-semibold">
                  From ${service.pricing.basic}/mo
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Compare Button */}
      <div className="text-center">
        <button
          onClick={compareServices}
          disabled={selectedServices.length < 2}
          className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
            selectedServices.length >= 2
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
              : 'bg-slate-700 text-slate-400 cursor-not-allowed'
          }`}
        >
          {selectedServices.length < 2
            ? `Select ${2 - selectedServices.length} more service${2 - selectedServices.length > 1 ? 's' : ''} to compare`
            : `Compare ${selectedServices.length} Services →`}
        </button>
        {selectedServices.length < 2 && (
          <p className="text-slate-400 text-sm mt-3">
            💡 Tip: Compare services in the same category for the most relevant insights
          </p>
        )}
      </div>
    </div>
  );
}
