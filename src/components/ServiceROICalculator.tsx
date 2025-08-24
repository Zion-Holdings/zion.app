import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Target, BarChart3 } from 'lucide-react';

interface ServiceROICalculatorProps {
  serviceName: string;
  basePrice: number;
  implementationTime: string;
  expectedROI: number;
  className?: string;
}

export const ServiceROICalculator: React.FC<ServiceROICalculatorProps> = ({
  serviceName,
  basePrice,
  implementationTime,
  expectedROI,
  className = ""
}) => {
  const [companySize, setCompanySize] = useState('small');
  const [customFeatures, setCustomFeatures] = useState(0);
  const [maintenanceCost, setMaintenanceCost] = useState(0);
  const [timeToValue, setTimeToValue] = useState(3);
  const [results, setResults] = useState<any>(null);

  const companySizes = {
    small: { multiplier: 1, employees: '1-50', annualRevenue: 1000000 },
    medium: { multiplier: 1.5, employees: '51-200', annualRevenue: 10000000 },
    large: { multiplier: 2.5, employees: '201-1000', annualRevenue: 100000000 },
    enterprise: { multiplier: 4, employees: '1000+', annualRevenue: 1000000000 }
  };

  useEffect(() => {
    calculateROI();
  }, [companySize, customFeatures, maintenanceCost, timeToValue]);

  const calculateROI = () => {
    const size = companySizes[companySize as keyof typeof companySizes];
    const totalInvestment = basePrice * size.multiplier + customFeatures + maintenanceCost;
    const annualSavings = (totalInvestment * expectedROI) / 100;
    const paybackPeriod = totalInvestment / annualSavings;
    const threeYearROI = ((annualSavings * 3 - totalInvestment) / totalInvestment) * 100;

    setResults({
      totalInvestment,
      annualSavings,
      paybackPeriod,
      threeYearROI,
      monthlySavings: annualSavings / 12,
      size
    });
  };

  return (
    <div className={`bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30 ${className}`}>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 mr-3 text-zion-cyan" />
          <h2 className="text-2xl font-bold text-white">ROI Calculator</h2>
        </div>
        <p className="text-zion-slate-light">
          Calculate the return on investment for {serviceName}
        </p>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-zion-slate-light text-sm font-medium mb-2">
            Company Size
          </label>
          <select
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
          >
            <option value="small">Small (1-50 employees)</option>
            <option value="medium">Medium (51-200 employees)</option>
            <option value="large">Large (201-1000 employees)</option>
            <option value="enterprise">Enterprise (1000+ employees)</option>
          </select>
        </div>

        <div>
          <label className="block text-zion-slate-light text-sm font-medium mb-2">
            Custom Features ($)
          </label>
          <input
            type="number"
            value={customFeatures}
            onChange={(e) => setCustomFeatures(Number(e.target.value))}
            placeholder="0"
            className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
          />
        </div>

        <div>
          <label className="block text-zion-slate-light text-sm font-medium mb-2">
            Annual Maintenance ($)
          </label>
          <input
            type="number"
            value={maintenanceCost}
            onChange={(e) => setMaintenanceCost(Number(e.target.value))}
            placeholder="0"
            className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
          />
        </div>

        <div>
          <label className="block text-zion-slate-light text-sm font-medium mb-2">
            Time to Value (months)
          </label>
          <input
            type="number"
            value={timeToValue}
            onChange={(e) => setTimeToValue(Number(e.target.value))}
            min="1"
            max="24"
            className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
          />
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zion-blue-dark/30 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-zion-cyan" />
              </div>
              <p className="text-zion-slate-light text-sm">Total Investment</p>
              <p className="text-2xl font-bold text-white">${results.totalInvestment.toLocaleString()}</p>
            </div>

            <div className="bg-zion-blue-dark/30 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-zion-slate-light text-sm">Annual Savings</p>
              <p className="text-2xl font-bold text-green-400">${results.annualSavings.toLocaleString()}</p>
            </div>

            <div className="bg-zion-blue-dark/30 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-zion-slate-light text-sm">Payback Period</p>
              <p className="text-2xl font-bold text-yellow-400">{results.paybackPeriod.toFixed(1)} months</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zion-blue-dark/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-white font-medium">Monthly Savings</h3>
              </div>
              <p className="text-3xl font-bold text-green-400">${results.monthlySavings.toLocaleString()}</p>
              <p className="text-zion-slate-light text-sm">Average monthly cost savings</p>
            </div>

            <div className="bg-zion-blue-dark/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-white font-medium">3-Year ROI</h3>
              </div>
              <p className="text-3xl font-bold text-zion-cyan">{results.threeYearROI.toFixed(1)}%</p>
              <p className="text-zion-slate-light text-sm">Return on investment over 3 years</p>
            </div>
          </div>

          {/* Company Size Info */}
          <div className="bg-zion-blue-dark/30 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Company Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-zion-slate-light">Size: <span className="text-white">{results.size.employees} employees</span></p>
                <p className="text-zion-slate-light">Annual Revenue: <span className="text-white">${(results.size.annualRevenue / 1000000).toFixed(0)}M</span></p>
              </div>
              <div>
                <p className="text-zion-slate-light">Implementation: <span className="text-white">{implementationTime}</span></p>
                <p className="text-zion-slate-light">Time to Value: <span className="text-white">{timeToValue} months</span></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-8 pt-6 border-t border-zion-blue-light/30">
        <p className="text-zion-slate-light mb-4">
          Ready to get started? Get a detailed quote and implementation plan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors">
            Get Detailed Quote
          </button>
          <button className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};