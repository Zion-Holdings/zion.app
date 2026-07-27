'use client';

import { useState } from 'react';

interface ROIResult {
  annualSavings: number;
  roiPercent: number;
  paybackMonths: number;
  implementationTime: string;
  industryMultiplier: number;
}

interface ROICalculatorProps {
  serviceName: string;
  baseCost: number;
  industry?: string;
  className?: string;
}

// Industry-specific ROI multipliers
const INDUSTRY_MULTIPLIERS: Record<string, number> = {
  'financial-services': 3.5,
  'healthcare': 4.2,
  'retail': 3.8,
  'manufacturing': 4.5,
  'logistics': 3.2,
  'technology': 3.0,
  'energy': 3.6,
  'default': 3.2
};

// Industry-specific improvement baselines
const INDUSTRY_BASELINES: Record<string, { savings: number; time: number }> = {
  'financial-services': { savings: 0.4, time: 0.5 },
  'healthcare': { savings: 0.35, time: 0.4 },
  'retail': { savings: 0.3, time: 0.35 },
  'manufacturing': { savings: 0.45, time: 0.6 },
  'logistics': { savings: 0.25, time: 0.3 },
  'technology': { savings: 0.3, time: 0.4 },
  'energy': { savings: 0.35, time: 0.45 },
  'default': { savings: 0.3, time: 0.35 }
};

export default function ROICalculator({ 
  serviceName, 
  baseCost, 
  industry = 'default',
  className = '' 
}: ROICalculatorProps) {
  const [annualRevenue, setAnnualRevenue] = useState<number>(1000000);
  const [employeeCount, setEmployeeCount] = useState<number>(50);
  const [currentPain, setCurrentPain] = useState<string>('moderate');

  const multiplier = INDUSTRY_MULTIPLIERS[industry] || INDUSTRY_MULTIPLIERS.default;
  const baseline = INDUSTRY_BASELINES[industry] || INDUSTRY_BASELINES.default;

  const result: ROIResult = {
    annualSavings: Math.round(annualRevenue * baseline.savings * multiplier),
    roiPercent: Math.round((annualRevenue * baseline.savings * multiplier / baseCost) * 100),
    paybackMonths: Math.round((baseCost / (annualRevenue * baseline.savings * multiplier)) * 12 * 10) / 10,
    implementationTime: industry === 'financial-services' ? '2-4 weeks' : 
                         industry === 'healthcare' ? '4-8 weeks' :
                         industry === 'retail' ? '1-3 weeks' :
                         industry === 'manufacturing' ? '6-12 weeks' :
                         industry === 'logistics' ? '2-6 weeks' :
                         '4-8 weeks',
    industryMultiplier: multiplier
  };

  const painMultiplier: Record<string, number> = {
    low: 0.7,
    moderate: 1,
    high: 1.5
  };

  const adjustedAnnualSavings = Math.round(result.annualSavings * (painMultiplier[currentPain] || 1));
  const adjustedROI = Math.round((adjustedAnnualSavings / baseCost) * 100);
  const adjustedPayback = Math.round((baseCost / adjustedAnnualSavings) * 12 * 10) / 10;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Calculate Your ROI</h2>
            <p className="text-slate-400">
              See potential savings with {serviceName}
            </p>
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="text-xs text-slate-400 block mb-2">Annual Revenue</label>
              <input
                type="number"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full glass-card px-4 py-3 rounded-xl text-white bg-slate-900/70 border border-slate-700"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-2">Current Pain Level</label>
              <select
                value={currentPain}
                onChange={(e) => setCurrentPain(e.target.value)}
                className="w-full glass-card px-4 py-3 rounded-xl text-white bg-slate-900/70 border border-slate-700"
              >
                <option value="low">Low Impact</option>
                <option value="moderate">Moderate Impact</option>
                <option value="high">High Impact</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-2">Implementation</label>
              <div className="glass-card px-4 py-3 rounded-xl border border-slate-700">
                <span className="text-sm text-white">{result.implementationTime}</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center hover:border-purple-500/40 transition-all">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                ${adjustedAnnualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-slate-400">Annual Savings</div>
              <div className="text-xs text-purple-400 mt-2">
                {adjustedROI}% ROI
              </div>
            </div>

            <div className="glass-card p-6 text-center hover:border-emerald-500/40 transition-all">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {adjustedPayback}mo
              </div>
              <div className="text-sm text-slate-400">Payback Period</div>
              <div className="text-xs text-purple-400 mt-2">
                Industry: {result.industryMultiplier}x multiplier
              </div>
            </div>

            <div className="glass-card p-6 text-center hover:border-pink-500/40 transition-all">
              <div className="text-3xl font-bold text-pink-400 mb-2">
                ${baseCost.toLocaleString()}
              </div>
              <div className="text-sm text-slate-400">Service Cost</div>
              <div className="text-xs text-purple-400 mt-2">
                Starting at
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=ROI%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              📧 Get Custom ROI Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ROI calculation helper function
export function calculateROI(
  annualRevenue: number,
  industry: string,
  painLevel: 'low' | 'moderate' | 'high' = 'moderate'
): ROIResult {
  const multiplier = INDUSTRY_MULTIPLIERS[industry] || INDUSTRY_MULTIPLIERS.default;
  const baseline = INDUSTRY_BASELINES[industry] || INDUSTRY_BASELINES.default;
  const painMultiplier: Record<string, number> = { low: 0.7, moderate: 1, high: 1.5 };
  
  const annualSavings = Math.round(annualRevenue * baseline.savings * multiplier * (painMultiplier[painLevel] || 1));
  const roiPercent = Math.round((annualSavings / 1000) * 100 / multiplier);
  const paybackMonths = Math.round((1000 / annualSavings) * 12 * 10) / 10;

  return {
    annualSavings,
    roiPercent,
    paybackMonths,
    implementationTime: industry === 'financial-services' ? '2-4 weeks' : '4-8 weeks',
    industryMultiplier: multiplier
  };
}