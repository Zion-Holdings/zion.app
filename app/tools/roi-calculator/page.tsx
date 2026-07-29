// app/tools/roi-calculator/page.tsx - ROI Calculator Tool
'use client';

import { useState, useMemo } from 'react';

interface ROIInputs {
  teamSize: number;
  hoursPerWeek: number;
  avgHourlyRate: number;
  automationEfficiency: number;
  errorReduction: number;
}

interface ROIOutputs {
  annualSavings: number;
  monthlySavings: number;
  roiPercentage: number;
  paybackMonths: number;
}

const SERVICE_ROI_DATA: Record<string, { 
  efficiencyGain: number; 
  errorReduction: number; 
  implementationCost: number;
  typicalSavings: string;
}> = {
  'ai-automation-roi': {
    efficiencyGain: 40,
    errorReduction: 85,
    implementationCost: 5000,
    typicalSavings: '40-60% time reduction'
  },
  'ai-fraud-detection': {
    efficiencyGain: 95,
    errorReduction: 99,
    implementationCost: 10000,
    typicalSavings: '$1-5M annually'
  },
  'ai-customer-support': {
    efficiencyGain: 70,
    errorReduction: 90,
    implementationCost: 3000,
    typicalSavings: '24/7 coverage, 60% cost reduction'
  },
  'ai-document-processing': {
    efficiencyGain: 85,
    errorReduction: 95,
    implementationCost: 2000,
    typicalSavings: '95% reduction in manual entry'
  },
  'cloud-cost-optimization': {
    efficiencyGain: 30,
    errorReduction: 50,
    implementationCost: 1500,
    typicalSavings: '30-40% cloud spend reduction'
  },
  'predictive-maintenance': {
    efficiencyGain: 75,
    errorReduction: 60,
    implementationCost: 8000,
    typicalSavings: '50% downtime reduction'
  },
};

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState<ROIInputs>({
    teamSize: 10,
    hoursPerWeek: 40,
    avgHourlyRate: 50,
    automationEfficiency: 40,
    errorReduction: 50,
  });
  
  const [selectedService, setSelectedService] = useState<string>('ai-automation-roi');
  const [showResults, setShowResults] = useState(false);

  const calculateROI = (): ROIOutputs => {
    const { teamSize, hoursPerWeek, avgHourlyRate, automationEfficiency, errorReduction } = inputs;
    
    // Calculate current costs
    const weeklyLaborCost = teamSize * hoursPerWeek * avgHourlyRate;
    const weeklyErrorCost = weeklyLaborCost * (errorReduction / 100) * 0.3;
    const weeklyTotalCost = weeklyLaborCost + weeklyErrorCost;
    
    // Calculate savings
    const weeklySavings = weeklyTotalCost * (automationEfficiency / 100);
    const monthlySavings = weeklySavings * 4.33;
    const annualSavings = monthlySavings * 12;
    
    // Calculate ROI
    const serviceData = SERVICE_ROI_DATA[selectedService];
    const implementationCost = serviceData?.implementationCost || 5000;
    const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = implementationCost / monthlySavings;
    
    return {
      annualSavings,
      monthlySavings,
      roiPercentage,
      paybackMonths,
    };
  };

  const results = useMemo(() => calculateROI(), [inputs, selectedService]);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* ── Header ── */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
            <span className="text-green-400">●</span> ROI Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Calculate Your ROI</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Estimate cost savings, efficiency gains, and payback period for AI automation solutions.
          </p>
        </div>
      </section>

      {/* ── Calculator Form ── */}
      <section className="py-20">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-xl border border-slate-800/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Your Current Situation</h2>
              
              {/* Service Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Select Your Primary Challenge
                </label>
                <select
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                  className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-white"
                >
                  {Object.entries(SERVICE_ROI_DATA).map(([key, data]) => (
                    <option key={key} value={key} className="bg-slate-800">
                      {key.replace(/-/g, ' ').toUpperCase()} — {data.typicalSavings}
                    </option>
                  ))}
                </select>
              </div>

              {/* Inputs Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Team Size
                  </label>
                  <input
                    type="number"
                    value={inputs.teamSize}
                    onChange={e => setInputs({ ...inputs, teamSize: parseInt(e.target.value) || 0 })}
                    className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Hours/Week per Person
                  </label>
                  <input
                    type="number"
                    value={inputs.hoursPerWeek}
                    onChange={e => setInputs({ ...inputs, hoursPerWeek: parseInt(e.target.value) || 0 })}
                    className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Avg. Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.avgHourlyRate}
                    onChange={e => setInputs({ ...inputs, avgHourlyRate: parseInt(e.target.value) || 0 })}
                    className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Expected Efficiency Gain (%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={inputs.automationEfficiency}
                    onChange={e => setInputs({ ...inputs, automationEfficiency: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>0%</span>
                    <span>{inputs.automationEfficiency}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="text-center mb-8">
                <button
                  onClick={() => setShowResults(true)}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg hover:from-emerald-500 hover:to-teal-500 transition-all"
                >
                  Calculate ROI
                </button>
              </div>

              {/* Results Section */}
              {showResults && (
                <div className="border-t border-slate-800 pt-8">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">Your ROI Analysis</h3>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="glass-card rounded-xl border border-slate-800 p-6 text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        ${results.monthlySavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-400">Monthly Savings</div>
                    </div>
                    
                    <div className="glass-card rounded-xl border border-slate-800 p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${results.annualSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-400">Annual Savings</div>
                    </div>
                    
                    <div className="glass-card rounded-xl border border-slate-800 p-6 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        {results.roiPercentage.toFixed(0)}%
                      </div>
                      <div className="text-sm text-slate-400">ROI</div>
                    </div>
                    
                    <div className="glass-card rounded-xl border border-slate-800 p-6 text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">
                        {results.paybackMonths.toFixed(1)}m
                      </div>
                      <div className="text-sm text-slate-400">Payback Period</div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-xl">
                    <h4 className="font-semibold text-emerald-300 mb-2">Next Steps</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Based on your inputs, implementing AI automation could save you{' '}
                      <strong>${results.monthlySavings.toLocaleString()}</strong> per month with a payback period of{' '}
                      <strong>{results.paybackMonths.toFixed(1)} months</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:kleber@ziontechgroup.com?subject=ROI%20Calculator%20Results&body=Hello%2Zion%2Tech%2Group%2C%0A%0AI%20used%20your%20ROI%20calculator%20and%20got%20interesting%20results.%0A%0AExpected%20Annual%20Savings%3A%20%24%7Bresults.annualSavings.toLocaleString()%7D%0AExpected%20Monthly%20Savings%3A%20%24%7Bresults.monthlySavings.toLocaleString()%7D%0AROI%3A%20%7Bresults.roiPercentage.toFixed(0)%7D%25%0APayback%20Period%3A%20%7Bresults.paybackMonths.toFixed(1)%7D%20months%0A%0APlease%20provide%20a%20custom%20proposal%20for%20the%20%7BselectedService.replace(/-/g%2C%20%27%27)%20solution.%0A%0AThank%20you!"
                        className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition"
                      >
                        Email My Results
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="px-4 py-2 rounded-full bg-slate-800/60 text-slate-300 text-sm font-medium hover:bg-slate-700 transition"
                      >
                        Call: +1 302 464 0950
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Benefits ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Why Our Clients Choose Us</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl border border-slate-800/50">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-white mb-2">Fast Implementation</h3>
                <p className="text-sm text-slate-400">Deploy in days, not months</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-slate-800/50">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-sm text-slate-400">SOC 2, HIPAA, GDPR compliant</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-slate-800/50">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-semibold text-white mb-2">Measurable ROI</h3>
                <p className="text-sm text-slate-400">30%+ efficiency gains typical</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}