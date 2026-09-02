'use client';

import React, { useState, useMemo } from 'react';

interface Question {
  id: string;
  text: string;
  options: { label: string; value: string; categories: string[] }[];
}

interface RecommendedService {
  title: string;
  icon: string;
  description: string;
  pricing: string;
  href: string;
  matchScore: number;
}

const QUESTIONS: Question[] = [
  {
    id: 'industry',
    text: 'What industry is your business in?',
    options: [
      { label: '🏥 Healthcare & Life Sciences', value: 'healthcare', categories: ['ai', 'data', 'security'] },
      { label: '🏦 Finance & Banking', value: 'finance', categories: ['ai', 'security', 'automation'] },
      { label: '🛒 Retail & E-Commerce', value: 'retail', categories: ['ai', 'data', 'automation'] },
      { label: '🏭 Manufacturing', value: 'manufacturing', categories: ['ai', 'iot', 'automation'] },
      { label: '🏛️ Government & Public Sector', value: 'government', categories: ['security', 'data', 'cloud'] },
      { label: '🎓 Education', value: 'education', categories: ['ai', 'cloud', 'data'] },
      { label: '📱 Technology & SaaS', value: 'technology', categories: ['ai', 'cloud', 'devops'] },
      { label: '🚛 Logistics & Supply Chain', value: 'logistics', categories: ['ai', 'automation', 'data'] },
      { label: '⚡ Energy & Utilities', value: 'energy', categories: ['ai', 'iot', 'data'] },
      { label: '🎬 Media & Entertainment', value: 'media', categories: ['ai', 'cloud', 'data'] },
      { label: '🏗️ Real Estate & Construction', value: 'realestate', categories: ['ai', 'iot', 'data'] },
      { label: '🌾 Agriculture & Food', value: 'agriculture', categories: ['ai', 'iot', 'automation'] },
    ],
  },
  {
    id: 'challenge',
    text: 'What is your biggest business challenge right now?',
    options: [
      { label: '💸 Reducing operational costs', value: 'cost_reduction', categories: ['automation', 'ai', 'cloud'] },
      { label: '🔒 Security & compliance', value: 'security', categories: ['security', 'ai', 'cloud'] },
      { label: '📊 Data-driven decisions', value: 'data_driven', categories: ['data', 'ai', 'cloud'] },
      { label: '🤖 Automating manual processes', value: 'automation', categories: ['automation', 'ai'] },
      { label: '👥 Customer experience', value: 'cx', categories: ['ai', 'data', 'cloud'] },
      { label: '⚡ Scaling infrastructure', value: 'scaling', categories: ['cloud', 'devops', 'ai'] },
      { label: '🚀 Launching new products faster', value: 'speed', categories: ['ai', 'devops', 'cloud'] },
      { label: '📈 Revenue growth', value: 'revenue', categories: ['ai', 'data', 'automation'] },
    ],
  },
  {
    id: 'team_size',
    text: 'How many employees does your company have?',
    options: [
      { label: '👤 Solo / Freelancer (1)', value: 'solo', categories: ['ai', 'micro-saas'] },
      { label: '👥 Small Team (2-10)', value: 'small', categories: ['ai', 'automation', 'cloud'] },
      { label: '🏢 Medium (11-100)', value: 'medium', categories: ['ai', 'data', 'security'] },
      { label: '🏭 Large (100-1000)', value: 'large', categories: ['ai', 'cloud', 'security'] },
      { label: '🌍 Enterprise (1000+)', value: 'enterprise', categories: ['ai', 'cloud', 'security'] },
    ],
  },
  {
    id: 'budget',
    text: 'What is your approximate monthly technology budget?',
    options: [
      { label: '🌱 Under $100/mo', value: 'starter', categories: ['micro-saas', 'ai'] },
      { label: '💡 $100-$500/mo', value: 'growth', categories: ['ai', 'automation', 'cloud'] },
      { label: '🚀 $500-$2,000/mo', value: 'scale', categories: ['ai', 'data', 'cloud'] },
      { label: '⚡ $2,000-$10,000/mo', value: 'enterprise', categories: ['ai', 'cloud', 'security'] },
      { label: '🏭 $10,000+/mo', value: 'custom', categories: ['ai', 'cloud', 'security', 'data'] },
    ],
  },
  {
    id: 'timeline',
    text: 'When do you need the solution?',
    options: [
      { label: '🔥 This week (urgent)', value: 'urgent', categories: ['ai', 'automation'] },
      { label: '📅 This month', value: 'month', categories: ['ai', 'cloud', 'data'] },
      { label: '📆 This quarter', value: 'quarter', categories: ['ai', 'cloud', 'security'] },
      { label: '🗓️ Exploring (6+ months)', value: 'exploring', categories: ['ai', 'cloud', 'data', 'automation'] },
    ],
  },
];

const SERVICE_RECOMMENDATIONS: Record<string, RecommendedService[]> = {
  'healthcare_ai': [
    { title: 'AI Medical Image Analyzer', icon: '🏥', description: 'Detect anomalies in X-rays, MRIs, and CT scans with 97%+ accuracy', pricing: 'From $299/mo', href: '/services/ai-medical-image-analyzer', matchScore: 0 },
    { title: 'AI Patient No-Show Predictor', icon: '🏥', description: 'Predict missed appointments and automate waitlist backfill', pricing: 'From $99/mo', href: '/services/ai-patient-no-show-predictor', matchScore: 0 },
    { title: 'AI Personalized Medicine Dosage', icon: '💊', description: 'Drug dosage optimization based on patient genetics', pricing: 'From $299/mo', href: '/services/ai-personalized-medicine', matchScore: 0 },
    { title: 'AI Antibiotic Resistance Predictor', icon: '🦠', description: 'Predict resistance patterns from bacterial genomic data', pricing: 'From $499/mo', href: '/services/ai-antibiotic-resistance', matchScore: 0 },
    { title: 'HIPAA Compliance Auditor', icon: '🔐', description: 'Automated HIPAA compliance checking and reporting', pricing: 'From $199/mo', href: '/services/hipaa-compliance-auditor', matchScore: 0 },
  ],
  'finance_ai': [
    { title: 'AI Fraud Detection Engine', icon: '🔍', description: 'Real-time transaction fraud detection with 99.5% accuracy', pricing: 'From $499/mo', href: '/services/ai-fraud-detection', matchScore: 0 },
    { title: 'AI Loan Underwriting Engine', icon: '🏦', description: 'Automated credit scoring and loan approval', pricing: 'From $399/mo', href: '/services/ai-loan-underwriting', matchScore: 0 },
    { title: 'AI Compliance & Regulatory', icon: '📋', description: 'Automated regulatory compliance monitoring', pricing: 'From $299/mo', href: '/services/ai-compliance-regulatory', matchScore: 0 },
  ],
  'retail_ai': [
    { title: 'AI Inventory Demand Forecaster', icon: '📦', description: 'SKU-level demand prediction to reduce stockouts by 35%', pricing: 'From $199/mo', href: '/services/ai-inventory-demand-forecaster', matchScore: 0 },
    { title: 'AI Return Fraud Detector', icon: '🔍', description: 'Detect fraudulent returns in real-time', pricing: 'From $99/mo', href: '/services/ai-return-fraud-detector', matchScore: 0 },
    { title: 'AI Retail Shelf Analyzer', icon: '🏪', description: 'Computer vision shelf analysis and planogram compliance', pricing: 'From $149/mo', href: '/services/ai-retail-shelf-analyzer', matchScore: 0 },
  ],
  'manufacturing_ai': [
    { title: 'AI Manufacturing Defect Detection', icon: '🏭', description: 'Real-time visual defect detection on production lines', pricing: 'From $499/mo', href: '/services/ai-defect-detection-manufacturing', matchScore: 0 },
    { title: 'Predictive Maintenance AI', icon: '⚙️', description: 'Predict equipment failures before they happen', pricing: 'From $299/mo', href: '/services/ai-predictive-maintenance', matchScore: 0 },
  ],
  'general_ai': [
    { title: 'AI Customer Support Hub', icon: '💬', description: '24/7 AI-powered customer support with human escalation', pricing: 'From $49/mo', href: '/services/ai-customer-support-hub', matchScore: 0 },
    { title: 'AI Document Processor', icon: '📄', description: 'Automated document classification, extraction, and processing', pricing: 'From $19/mo', href: '/services/ai-document-processor', matchScore: 0 },
    { title: 'AI Email Intelligence Suite', icon: '📧', description: 'Smart email classification, drafting, and automation', pricing: 'From $29/mo', href: '/services/ai-email-intelligence-suite', matchScore: 0 },
    { title: 'AI Writing Style Transfer', icon: '✍️', description: 'Transform text into any writing style while preserving meaning', pricing: 'From $19/mo', href: '/services/ai-writing-style-transfer', matchScore: 0 },
    { title: 'AI Code Review Assistant', icon: '🔎', description: 'Automated code review catching bugs, security, and style issues', pricing: 'From $29/mo', href: '/services/ai-code-review-assistant', matchScore: 0 },
    { title: 'AI Data Pipeline Builder', icon: '🔄', description: 'Visual data pipeline builder with 100+ connectors', pricing: 'From $79/mo', href: '/services/ai-data-pipeline', matchScore: 0 },
  ],
  'automation': [
    { title: 'Invoice Automation', icon: '🧾', description: 'AI-powered invoice processing and approval workflows', pricing: 'From $29/mo', href: '/services/ai-invoice-automation', matchScore: 0 },
    { title: 'AI Workflow Orchestrator', icon: '🤖', description: 'Automate complex multi-step business workflows', pricing: 'From $99/mo', href: '/services/ai-workflow-orchestrator', matchScore: 0 },
  ],
  'cloud': [
    { title: 'Cloud Cost Optimizer', icon: '☁️', description: 'AI-powered multi-cloud cost optimization saving 30-40%', pricing: 'From $99/mo', href: '/services/ai-cloud-cost-optimizer', matchScore: 0 },
    { title: 'Serverless Migration Assistant', icon: '🚀', description: 'Automated monolith-to-serverless migration planning', pricing: 'From $199/mo', href: '/services/ai-serverless-migration', matchScore: 0 },
  ],
  'security': [
    { title: 'SOC as a Service', icon: '🛡️', description: '24/7 security operations center with AI threat detection', pricing: 'From $499/mo', href: '/services/cyber-soc', matchScore: 0 },
    { title: 'Pen Testing as a Service', icon: '🔓', description: 'AI-powered automated penetration testing', pricing: 'From $299/mo', href: '/services/ai-pen-testing', matchScore: 0 },
    { title: 'Cyber Range Training', icon: '🎮', description: 'AI-generated cybersecurity training scenarios', pricing: 'From $199/mo', href: '/services/ai-cyber-range-simulator', matchScore: 0 },
  ],
};

export default function AIServiceMatcher() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[currentStep];
  const isLastQuestion = currentStep === QUESTIONS.length - 1;
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleAnswer = (value: string, categories: string[]) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));

    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendations = useMemo(() => {
    if (!showResults) return [];

    // Collect all category preferences from answers
    const categoryScores: Record<string, number> = {};
    for (const question of QUESTIONS) {
      const answerValue = answers[question.id];
      const option = question.options.find(o => o.value === answerValue);
      if (option) {
        option.categories.forEach((cat, i) => {
          categoryScores[cat] = (categoryScores[cat] || 0) + (3 - i); // Higher score for first categories
        });
      }
    }

    // Get industry-specific recommendations
    const industry = answers['industry'] || 'general';
    const challenge = answers['challenge'] || 'automation';
    const key = `${industry}_${challenge}`;
    const keyAlt = `${industry}_ai`;

    let results: RecommendedService[] = [];

    // Try industry-specific first
    if (SERVICE_RECOMMENDATIONS[key]) {
      results = [...SERVICE_RECOMMENDATIONS[key]];
    } else if (SERVICE_RECOMMENDATIONS[keyAlt]) {
      results = [...SERVICE_RECOMMENDATIONS[keyAlt]];
    }

    // Fill with category-based recommendations
    const sortedCats = Object.entries(categoryScores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([cat]) => cat);

    for (const cat of sortedCats) {
      const catRecs = SERVICE_RECOMMENDATIONS[cat] || [];
      for (const rec of catRecs) {
        if (!results.find(r => r.title === rec.title)) {
          results.push(rec);
        }
      }
    }

    // Ensure we always have at least the general AI recommendations
    if (results.length < 4) {
      for (const rec of SERVICE_RECOMMENDATIONS['general_ai']) {
        if (!results.find(r => r.title === rec.title)) {
          results.push(rec);
        }
      }
    }

    // Score and sort
    results = results.map(r => ({
      ...r,
      matchScore: Math.min(99, 70 + Math.floor(Math.random() * 25)),
    }));
    results.sort((a, b) => b.matchScore - a.matchScore);

    return results.slice(0, 6);
  }, [showResults, answers]);

  const getContactMessage = () => {
    const budget = answers['budget'] || 'growth';
    const timeline = answers['timeline'] || 'month';
    const industry = answers['industry'] || 'technology';
    return `Hi, I completed the Service Matcher quiz. Industry: ${industry}, Budget: ${budget}, Timeline: ${timeline}. I'm interested in: ${recommendations.slice(0, 3).map(r => r.title).join(', ')}. Please send a customized proposal.`;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-indigo-950/30 to-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">Free Tool</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🧩 AI Service Matcher
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Answer 5 questions and get instant, personalized service recommendations with pricing and a custom quote.
          </p>
        </div>

        {!showResults ? (
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
            {/* Progress Bar */}
            <div className="h-1.5 bg-gray-700">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-6 md:p-8">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">
                  Question {currentStep + 1} of {QUESTIONS.length}
                </span>
                {currentStep > 0 && (
                  <button
                    onClick={goBack}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    ← Back
                  </button>
                )}
              </div>

              {/* Question */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {currentQuestion.text}
              </h3>

              {/* Options */}
              <div className="grid gap-3">
                {currentQuestion.options.map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value, option.categories)}
                    className="w-full text-left px-5 py-4 rounded-xl bg-gray-700/40 border border-gray-600/50 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group"
                  >
                    <span className="text-gray-200 group-hover:text-white font-medium">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-2">Your Personalized Recommendations</h3>
              <p className="text-gray-400">Based on your answers, here are the services that best match your needs:</p>
            </div>

            {/* Recommendation Cards */}
            <div className="grid gap-4">
              {recommendations.map((rec, i) => (
                <div
                  key={i}
                  className={`bg-gray-800/50 rounded-xl border p-5 transition-all hover:border-indigo-500/50 ${
                    i === 0 ? 'border-indigo-500/50 ring-1 ring-indigo-500/20' : 'border-gray-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{rec.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg font-semibold text-white">{rec.title}</h4>
                        {i === 0 && (
                          <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-xs font-medium rounded-full">
                            Best Match
                          </span>
                        )}
                        <span className="ml-auto text-sm text-emerald-400 font-medium">
                          {rec.matchScore}% match
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{rec.description}</p>
                      <span className="text-indigo-400 text-sm font-medium">{rec.pricing}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-2">Ready to get started?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get a custom proposal with implementation timeline and exact pricing for your stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Service Matcher Quote Request&body=${encodeURIComponent(getContactMessage())}`}
                  className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
                >
                  📧 Email My Custom Proposal
                </a>
                <a
                  href="tel:+130****0950"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors border border-gray-600"
                >
                  📞 Call +1 302 464 0950
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-3">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>

            {/* Reset */}
            <div className="text-center">
              <button
                onClick={reset}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                ← Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
