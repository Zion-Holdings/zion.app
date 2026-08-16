'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

// Business needs questions for the discovery quiz
const DISCOVERY_QUESTIONS = [
  {
    id: 'business-size',
    question: 'What is your business size?',
    options: [
      { label: 'Startup (1-10 employees)', value: 'startup', weight: { ai: 1, data: 1, micro: 1 } },
      { label: 'SMB (11-100 employees)', value: 'smb', weight: { ai: 2, cloud: 2, security: 1 } },
      { label: 'Enterprise (100+ employees)', value: 'enterprise', weight: { it: 3, security: 3, data: 2, automation: 2 } },
    ]
  },
  {
    id: 'primary-goal',
    question: 'What is your primary business goal?',
    options: [
      { label: 'Reduce costs', value: 'cost', weight: { cloud: 3, automation: 2, ai: 1 } },
      { label: 'Increase revenue', value: 'revenue', weight: { ai: 3, micro: 2, data: 2 } },
      { label: 'Improve efficiency', value: 'efficiency', weight: { automation: 3, it: 2, ai: 1 } },
      { label: 'Enhance security', value: 'security', weight: { security: 3, it: 2, compliance: 1 } },
      { label: 'Scale operations', value: 'scale', weight: { cloud: 3, devops: 2, automation: 1 } },
    ]
  },
  {
    id: 'tech-stack',
    question: 'What is your current tech stack maturity?',
    options: [
      { label: 'Basic (on-prem or simple cloud)', value: 'basic', weight: { it: 2, cloud: 1 } },
      { label: 'Intermediate (hybrid cloud)', value: 'intermediate', weight: { cloud: 3, devops: 2, security: 1 } },
      { label: 'Advanced (multi-cloud, microservices)', value: 'advanced', weight: { cloud: 3, devops: 3, automation: 2, security: 2 } },
    ]
  },
  {
    id: 'pain-point',
    question: 'What keeps you up at night?',
    options: [
      { label: 'Security incidents', value: 'security', weight: { security: 3, monitoring: 2 } },
      { label: 'High cloud costs', value: 'costs', weight: { cloud: 3, optimization: 2 } },
      { label: 'Slow development cycles', value: 'dev-speed', weight: { devops: 3, automation: 2 } },
      { label: 'Poor data insights', value: 'data', weight: { data: 3, ai: 2 } },
      { label: 'Manual processes', value: 'manual', weight: { automation: 3, micro: 2 } },
    ]
  },
  {
    id: 'timeline',
    question: 'When do you need results?',
    options: [
      { label: 'Next 30 days (urgent)', value: 'urgent', weight: { micro: 2, automation: 1 } },
      { label: 'Next 3 months (short-term)', value: 'short', weight: { ai: 2, cloud: 2, security: 1 } },
      { label: '6+ months (long-term strategy)', value: 'long', weight: { architecture: 2, devops: 2, data: 2 } },
    ]
  },
];

type Answer = { questionId: string; optionValue: string };

interface ServiceRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  href: string;
  score: number;
}

export default function ServiceDiscoveryHub() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<ServiceRecommendation[]>([]);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = DISCOVERY_QUESTIONS.length;
  const currentQuestion = DISCOVERY_QUESTIONS[step];

  const handleAnswer = (option: { value: string; weight: Record<string, number> }) => {
    setAnswers([...answers, { questionId: currentQuestion.id, optionValue: option.value }]);
    if (step < totalQuestions - 1) {
      setStep(step + 1);
    } else {
      calculateResults([...answers, { questionId: currentQuestion.id, optionValue: option.value }]);
    }
  };

  const calculateResults = (finalAnswers: Answer[]) => {
    const scores: Record<string, number> = {};
    
    // Aggregate scores from weights
    finalAnswers.forEach(answer => {
      const question = DISCOVERY_QUESTIONS.find(q => q.id === answer.questionId);
      const option = question?.options.find(o => o.value === answer.optionValue);
      if (option && option.weight) {
        Object.entries(option.weight).forEach(([cat, weight]) => {
          scores[cat] = (scores[cat] || 0) + weight;
        });
      }
    });

    // Get top 6 recommended services based on scores
    const recommended = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([cat, score]) => ({ category: cat, score }));

    // Simulate service recommendations (would normally fetch from API)
    const mockRecommendations: ServiceRecommendation[] = [
      {
        id: 'ai-smart-inventory',
        title: 'AI Inventory Management',
        description: 'Optimize stock levels with AI-driven demand forecasting and automated reorder points.',
        category: 'micro',
        icon: '📦',
        href: '/services/ai-inventory-management',
        score: recommended.find(r => r.category === 'micro')?.score || 0
      },
      {
        id: 'cloud-cost-optimization',
        title: 'Cloud Cost Optimization Platform',
        description: 'Reduce cloud spend by 25-40% with FinOps-led cost management and optimization.',
        category: 'cloud',
        icon: '☁️',
        href: '/services/cloud-cost-optimization-platform',
        score: recommended.find(r => r.category === 'cloud')?.score || 0
      },
      {
        id: 'ai-fraud-detection',
        title: 'FinTech Fraud Detection Engine',
        description: 'Real-time transaction monitoring with graph-based anomaly detection.',
        category: 'ai',
        icon: '🏦',
        href: '/services/fintech-fraud-detection-engine',
        score: recommended.find(r => r.category === 'ai')?.score || 0
      },
      {
        id: 'automation-workflow',
        title: 'AI Agent Orchestrator',
        description: 'Manage, monitor, and scale fleets of autonomous AI agents.',
        category: 'automation',
        icon: '🤖',
        href: '/services/ai-multi-agent-orchestration-platform',
        score: recommended.find(r => r.category === 'automation')?.score || 0
      },
      {
        id: 'security-edge',
        title: 'Zero Trust Network Architecture',
        description: 'Identity-based access controls and microsegmentation for enterprise security.',
        category: 'security',
        icon: '🔐',
        href: '/services/zero-trust-network-architecture',
        score: recommended.find(r => r.category === 'security')?.score || 0
      },
      {
        id: 'ai-insights',
        title: 'AI Analytics & BI Platform',
        description: 'Unified analytics platform with AI-powered insights and visualization.',
        category: 'data',
        icon: '📊',
        href: '/services/ai-analytics-bi',
        score: recommended.find(r => r.category === 'data')?.score || 0
      },
    ];

    setResults(mockRecommendations);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResults([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Personalized Service Match
            </span>
          </h2>
          <p className="text-slate-400">Based on your needs, here are the best services to explore:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {results.map((service) => (
            <div key={service.id} className="glass-card p-5 hover:scale-[1.01] transition-transform">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-2">{service.description}</p>
                  <a 
                    href={service.href}
                    className="text-sm text-purple-400 hover:text-purple-300 font-medium"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:bg-slate-700/80 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex gap-2">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i <= step ? 'bg-purple-500' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-slate-400">
          Question {step + 1} of {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <div className="glass-card p-8 mb-6">
        <h3 className="text-xl font-semibold text-white mb-6">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option)}
              className="w-full text-left px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-500/50 transition-all flex justify-between items-center"
            >
              <span className="text-slate-200">{option.label}</span>
              <Check className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        {step > 0 && (
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            className="px-4 py-2 rounded-full bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 transition"
          >
            Back
          </button>
        )}
        <button
          onClick={() => calculateResults(answers)}
          disabled={answers.length === 0}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-pink-500 transition"
        >
          Skip to Results
        </button>
      </div>
    </div>
  );
}