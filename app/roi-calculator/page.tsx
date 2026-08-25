'use client';

import { useState, useMemo } from 'react';

interface CompanyData {
  employees: number;
  revenue: number;
  industry: string;
  painPoints: string[];
  budget: string;
  currentTools: string[];
}

interface ROIResult {
  totalROI: number;
  monthlySavings: number;
  annualSavings: number;
  timeToValue: number;
  riskScore: number;
  recommendations: ServiceRecommendation[];
  timeline: TimelinePhase[];
}

interface ServiceRecommendation {
  name: string;
  href: string;
  price: string;
  roi: number;
  impact: 'high' | 'medium' | 'low';
  reason: string;
}

interface TimelinePhase {
  phase: string;
  duration: string;
  milestone: string;
}

const industries = [
  'Technology & SaaS',
  'Healthcare',
  'Finance & Banking',
  'Retail & E-commerce',
  'Manufacturing',
  'Professional Services',
  'Education',
  'Real Estate',
  'Logistics',
  'Media & Entertainment',
];

const painPoints = [
  'Manual email processing',
  'Slow customer response times',
  'High support ticket volume',
  'Missed sales opportunities',
  'Inefficient workflows',
  'Data security concerns',
  'Poor customer retention',
  'Limited analytics/insights',
  'Scalability challenges',
  'High operational costs',
  'Compliance requirements',
  'Lack of automation',
];

const budgetRanges = [
  { label: 'Under $1,000/mo', value: 1000 },
  { label: '$1,000 - $5,000/mo', value: 5000 },
  { label: '$5,000 - $20,000/mo', value: 20000 },
  { label: '$20,000 - $100,000/mo', value: 100000 },
  { label: 'Over $100,000/mo', value: 150000 },
];

const currentTools = [
  'Gmail/Outlook',
  'Salesforce',
  'HubSpot',
  'Zendesk',
  'Slack',
  'Microsoft Teams',
  'Jira',
  'Custom CRM',
  'Spreadsheets',
  'None/Manual',
];

export default function ROICalculatorPage() {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<CompanyData>({
    employees: 50,
    revenue: 5000000,
    industry: '',
    painPoints: [],
    budget: '',
    currentTools: [],
  });

  const results = useMemo<ROIResult | null>(() => {
    if (!showResults) return null;
    return calculateROI(formData);
  }, [showResults, formData]);

  const handlePainPointToggle = (point: string) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter(p => p !== point)
        : [...prev.painPoints, point],
    }));
  };

  const handleToolToggle = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter(t => t !== tool)
        : [...prev.currentTools, tool],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.industry !== '';
      case 2: return formData.painPoints.length >= 2;
      case 3: return formData.budget !== '';
      case 4: return true;
      default: return false;
    }
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  if (showResults && results) {
    return <ROIResults results={results} formData={formData} onReset={() => { setShowResults(false); setStep(1); }} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            💰 AI ROI Calculator & Business Case Generator
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your potential ROI with Zion's AI-powered solutions in 2 minutes
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div className={`w-24 h-1 mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-600">
            {step === 1 && 'Step 1: Company Information'}
            {step === 2 && 'Step 2: Pain Points'}
            {step === 3 && 'Step 3: Budget & Tools'}
            {step === 4 && 'Step 4: Review & Calculate'}
          </div>
        </div>

        {/* Step 1: Company Info */}
        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Tell us about your company</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Formatted: ${(formData.revenue || 0).toLocaleString()}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!canProceed()}
              className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2: Pain Points */}
        {step === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2">What challenges are you facing?</h2>
            <p className="text-gray-600 mb-6">Select all that apply (minimum 2)</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {painPoints.map(point => (
                <button
                  key={point}
                  onClick={() => handlePainPointToggle(point)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    formData.painPoints.includes(point)
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`w-5 h-5 rounded border-2 mr-3 flex-shrink-0 flex items-center justify-center ${
                      formData.painPoints.includes(point)
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-300'
                    }`}>
                      {formData.painPoints.includes(point) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">{point}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!canProceed()}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Budget & Tools */}
        {step === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Budget & Current Tools</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Monthly Budget Range *
                </label>
                <div className="space-y-2">
                  {budgetRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setFormData({ ...formData, budget: range.label })}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                        formData.budget === range.label
                          ? 'border-blue-600 bg-blue-50 text-blue-900'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Current Tools (select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {currentTools.map(tool => (
                    <button
                      key={tool}
                      onClick={() => handleToolToggle(tool)}
                      className={`p-3 border-2 rounded-lg text-sm transition-all ${
                        formData.currentTools.includes(tool)
                          ? 'border-blue-600 bg-blue-50 text-blue-900'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!canProceed()}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review & Calculate */}
        {step === 4 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Review Your Information</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Company Info</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Employees:</span>
                    <span className="ml-2 font-medium">{formData.employees}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Revenue:</span>
                    <span className="ml-2 font-medium">${(formData.revenue || 0).toLocaleString()}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Industry:</span>
                    <span className="ml-2 font-medium">{formData.industry}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Pain Points ({formData.painPoints.length})</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.painPoints.map(point => (
                    <span key={point} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Budget</h3>
                <p className="text-sm font-medium">{formData.budget}</p>
              </div>

              {formData.currentTools.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Current Tools ({formData.currentTools.length})</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.currentTools.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleCalculate}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                🚀 Calculate My ROI
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ROIResults({ results, formData, onReset }: { results: ROIResult; formData: CompanyData; onReset: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📊 Your ROI Analysis Results
          </h1>
          <p className="text-xl text-gray-600">
            Based on your {formData.employees} employees and ${(formData.revenue || 0).toLocaleString()} revenue
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-sm text-gray-600 mb-2">Projected ROI</div>
            <div className="text-4xl font-bold text-green-600">{results.totalROI}%</div>
            <div className="text-sm text-gray-500 mt-1">over 12 months</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-sm text-gray-600 mb-2">Monthly Savings</div>
            <div className="text-4xl font-bold text-blue-600">${results.monthlySavings.toLocaleString()}</div>
            <div className="text-sm text-gray-500 mt-1">per month</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-sm text-gray-600 mb-2">Time to Value</div>
            <div className="text-4xl font-bold text-purple-600">{results.timeToValue}</div>
            <div className="text-sm text-gray-500 mt-1">weeks</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-sm text-gray-600 mb-2">Risk Score</div>
            <div className={`text-4xl font-bold ${results.riskScore < 30 ? 'text-green-600' : results.riskScore < 60 ? 'text-yellow-600' : 'text-red-600'}`}>
              {results.riskScore}
            </div>
            <div className="text-sm text-gray-500 mt-1">out of 100</div>
          </div>
        </div>

        {/* Annual Savings Highlight */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 mb-12 text-white text-center">
          <div className="text-lg mb-2">Projected Annual Savings</div>
          <div className="text-6xl font-bold mb-2">${results.annualSavings.toLocaleString()}</div>
          <div className="text-green-100">Based on your company profile and selected pain points</div>
        </div>

        {/* Service Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">🎯 Recommended Solutions</h2>
          <div className="space-y-4">
            {results.recommendations.map((rec, idx) => (
              <a
                key={idx}
                href={rec.href}
                className="block border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{rec.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{rec.reason}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{rec.price}</div>
                    <div className={`text-sm font-semibold ${
                      rec.impact === 'high' ? 'text-green-600' : rec.impact === 'medium' ? 'text-yellow-600' : 'text-gray-600'
                    }`}>
                      {rec.impact.toUpperCase()} IMPACT
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm">
                    <span className="text-gray-600">Expected ROI:</span>
                    <span className="ml-2 font-bold text-green-600">{rec.roi}%</span>
                  </div>
                  <div className="text-blue-600 font-semibold">Learn More →</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">📅 Implementation Timeline</h2>
          <div className="space-y-4">
            {results.timeline.map((phase, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {idx + 1}
                </div>
                <div className="flex-1 pb-4 border-b last:border-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                    <span className="text-sm text-gray-600">{phase.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">{phase.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Get a personalized demo and see how Zion can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Schedule Free Consultation
            </a>
            <button
              onClick={onReset}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition-colors"
            >
              Recalculate
            </button>
          </div>
          <div className="mt-6 text-sm text-blue-100">
            📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateROI(data: CompanyData): ROIResult {
  const baseMultiplier = data.revenue / 1000000;
  const employeeMultiplier = data.employees / 50;
  
  // Calculate monthly savings based on pain points
  let monthlySavings = 0;
  data.painPoints.forEach(point => {
    if (point.includes('email')) monthlySavings += 2500 * employeeMultiplier;
    if (point.includes('response times')) monthlySavings += 3500 * employeeMultiplier;
    if (point.includes('support ticket')) monthlySavings += 4000 * employeeMultiplier;
    if (point.includes('sales opportunities')) monthlySavings += 5000 * baseMultiplier;
    if (point.includes('workflows')) monthlySavings += 3000 * employeeMultiplier;
    if (point.includes('security')) monthlySavings += 4500 * baseMultiplier;
    if (point.includes('retention')) monthlySavings += 6000 * baseMultiplier;
    if (point.includes('analytics')) monthlySavings += 2000 * employeeMultiplier;
    if (point.includes('scalability')) monthlySavings += 3500 * baseMultiplier;
    if (point.includes('operational costs')) monthlySavings += 5500 * baseMultiplier;
    if (point.includes('compliance')) monthlySavings += 4000 * baseMultiplier;
    if (point.includes('automation')) monthlySavings += 3000 * employeeMultiplier;
  });

  const annualSavings = monthlySavings * 12;
  const budgetValue = budgetRanges.find(b => b.label === data.budget)?.value || 5000;
  const totalROI = Math.round((annualSavings / (budgetValue * 12)) * 100);
  
  // Time to value based on complexity
  const timeToValue = data.painPoints.length > 6 ? 8 : data.painPoints.length > 3 ? 6 : 4;
  
  // Risk score based on number of pain points and current tools
  let riskScore = Math.min(100, data.painPoints.length * 8);
  if (data.currentTools.includes('None/Manual')) riskScore += 20;
  if (data.currentTools.includes('Spreadsheets')) riskScore += 10;
  riskScore = Math.min(100, riskScore);

  // Generate recommendations based on pain points
  const recommendations: ServiceRecommendation[] = [];
  
  if (data.painPoints.some(p => p.includes('email'))) {
    recommendations.push({
      name: 'AI Self-Learning Email Engine',
      href: '/services/ai-self-learning-email-engine',
      price: '$2,399/mo',
      roi: Math.round(280 + (employeeMultiplier * 50)),
      impact: 'high',
      reason: 'Automates email processing and learns from outcomes to continuously improve responses',
    });
  }
  
  if (data.painPoints.some(p => p.includes('support ticket'))) {
    recommendations.push({
      name: 'AI Technical Support Triage',
      href: '/services/ai-technical-support-triage',
      price: '$1,499/mo',
      roi: Math.round(220 + (employeeMultiplier * 40)),
      impact: 'high',
      reason: 'Reduces first-response time by 65% with intelligent ticket routing',
    });
  }
  
  if (data.painPoints.some(p => p.includes('sales opportunities'))) {
    recommendations.push({
      name: 'AI CRM Intelligence',
      href: '/services/ai-crm-intelligence',
      price: '$1,499/mo',
      roi: Math.round(310 + (baseMultiplier * 60)),
      impact: 'high',
      reason: 'Increases conversion rates by 35% with AI-powered lead scoring and deal prediction',
    });
  }
  
  if (data.painPoints.some(p => p.includes('workflows'))) {
    recommendations.push({
      name: 'AI Workflow Automation Builder',
      href: '/services/ai-workflow-automation-builder',
      price: '$899/mo',
      roi: Math.round(250 + (employeeMultiplier * 45)),
      impact: 'high',
      reason: 'No-code automation with 500+ connectors and AI decision nodes',
    });
  }
  
  if (data.painPoints.some(p => p.includes('retention'))) {
    recommendations.push({
      name: 'AI Customer Health Dashboard',
      href: '/services/ai-customer-health-dashboard',
      price: '$2,999/mo',
      roi: Math.round(290 + (baseMultiplier * 55)),
      impact: 'high',
      reason: 'Predicts churn 30 days in advance with 85% accuracy',
    });
  }
  
  if (data.painPoints.some(p => p.includes('analytics'))) {
    recommendations.push({
      name: 'AI Email Insights Dashboard',
      href: '/services/ai-email-insights-dashboard',
      price: '$899/mo',
      roi: Math.round(180 + (employeeMultiplier * 35)),
      impact: 'medium',
      reason: 'Data-driven decisions with performance metrics and optimization suggestions',
    });
  }
  
  if (data.painPoints.some(p => p.includes('compliance'))) {
    recommendations.push({
      name: 'AI Compliance Monitoring Platform',
      href: '/services/ai-compliance-monitoring',
      price: '$8,999/mo',
      roi: Math.round(200 + (baseMultiplier * 50)),
      impact: 'high',
      reason: 'Automated compliance for SOC 2, HIPAA, GDPR with continuous monitoring',
    });
  }

  // Limit to top 4 recommendations
  const topRecommendations = recommendations.slice(0, 4);

  // Generate timeline
  const timeline: TimelinePhase[] = [
    {
      phase: 'Discovery & Planning',
      duration: '1-2 weeks',
      milestone: 'Requirements gathering, integration planning, and success metrics definition',
    },
    {
      phase: 'Implementation & Configuration',
      duration: '2-3 weeks',
      milestone: 'System setup, data migration, and custom configuration',
    },
    {
      phase: 'Training & Testing',
      duration: '1-2 weeks',
      milestone: 'Team training, UAT, and performance optimization',
    },
    {
      phase: 'Go-Live & Monitoring',
      duration: '1 week',
      milestone: 'Production launch with 24/7 monitoring and support',
    },
    {
      phase: 'Optimization & Scaling',
      duration: 'Ongoing',
      milestone: 'Continuous improvement, feature expansion, and ROI tracking',
    },
  ];

  return {
    totalROI: Math.min(500, totalROI),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    timeToValue,
    riskScore,
    recommendations: topRecommendations,
    timeline,
  };
}
