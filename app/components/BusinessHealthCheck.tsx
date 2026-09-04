'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Question {
  id: string;
  category: string;
  question: string;
  options: { value: string; label: string; score: number }[];
}

interface HealthScore {
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'fair' | 'poor';
  recommendations: string[];
}

const questions: Question[] = [
  {
    id: 'security_q1',
    category: 'Security',
    question: 'How do you currently manage user authentication and access control?',
    options: [
      { value: 'none', label: 'Basic passwords only', score: 1 },
      { value: 'mfa', label: 'Multi-factor authentication', score: 3 },
      { value: 'sso', label: 'Single Sign-On (SSO)', score: 4 },
      { value: 'zero_trust', label: 'Zero Trust architecture', score: 5 },
    ],
  },
  {
    id: 'security_q2',
    category: 'Security',
    question: 'How often do you perform security audits and penetration testing?',
    options: [
      { value: 'never', label: 'Never or rarely', score: 1 },
      { value: 'yearly', label: 'Annually', score: 3 },
      { value: 'quarterly', label: 'Quarterly', score: 4 },
      { value: 'continuous', label: 'Continuous monitoring', score: 5 },
    ],
  },
  {
    id: 'automation_q1',
    category: 'Automation',
    question: 'How much of your business processes are automated?',
    options: [
      { value: 'manual', label: 'Mostly manual processes', score: 1 },
      { value: 'some', label: 'Some automation (20-40%)', score: 2 },
      { value: 'moderate', label: 'Moderate automation (40-70%)', score: 4 },
      { value: 'high', label: 'Highly automated (70%+)', score: 5 },
    ],
  },
  {
    id: 'automation_q2',
    category: 'Automation',
    question: 'Do you use workflow automation tools for repetitive tasks?',
    options: [
      { value: 'none', label: 'No automation tools', score: 1 },
      { value: 'basic', label: 'Basic tools (Zapier, IFTTT)', score: 3 },
      { value: 'advanced', label: 'Advanced platforms (n8n, Make)', score: 4 },
      { value: 'custom', label: 'Custom RPA solutions', score: 5 },
    ],
  },
  {
    id: 'data_q1',
    category: 'Data',
    question: 'How do you currently analyze business data?',
    options: [
      { value: 'spreadsheets', label: 'Spreadsheets only', score: 1 },
      { value: 'basic_bi', label: 'Basic BI tools (Google Analytics)', score: 3 },
      { value: 'advanced_bi', label: 'Advanced BI (Tableau, Power BI)', score: 4 },
      { value: 'ml', label: 'ML-powered analytics', score: 5 },
    ],
  },
  {
    id: 'data_q2',
    category: 'Data',
    question: 'How is your data infrastructure organized?',
    options: [
      { value: 'siloed', label: 'Data silos across departments', score: 1 },
      { value: 'warehouse', label: 'Centralized data warehouse', score: 3 },
      { value: 'lake', label: 'Data lake with governance', score: 4 },
      { value: 'lakehouse', label: 'Modern data lakehouse', score: 5 },
    ],
  },
  {
    id: 'cloud_q1',
    category: 'Cloud',
    question: 'What is your current cloud strategy?',
    options: [
      { value: 'on_prem', label: 'On-premises only', score: 1 },
      { value: 'single_cloud', label: 'Single cloud provider', score: 3 },
      { value: 'multi_cloud', label: 'Multi-cloud strategy', score: 4 },
      { value: 'hybrid', label: 'Hybrid cloud with optimization', score: 5 },
    ],
  },
  {
    id: 'cloud_q2',
    category: 'Cloud',
    question: 'How do you manage cloud costs and resources?',
    options: [
      { value: 'manual', label: 'Manual monitoring', score: 1 },
      { value: 'basic', label: 'Basic cost alerts', score: 3 },
      { value: 'automated', label: 'Automated optimization', score: 4 },
      { value: 'ai', label: 'AI-powered cost management', score: 5 },
    ],
  },
  {
    id: 'ai_q1',
    category: 'AI',
    question: 'How are you currently using AI in your business?',
    options: [
      { value: 'none', label: 'Not using AI yet', score: 1 },
      { value: 'experimental', label: 'Experimental projects', score: 2 },
      { value: 'production', label: 'AI in production (1-3 use cases)', score: 4 },
      { value: 'scaled', label: 'Scaled AI across business (4+ use cases)', score: 5 },
    ],
  },
  {
    id: 'ai_q2',
    category: 'AI',
    question: 'What is your AI infrastructure like?',
    options: [
      { value: 'none', label: 'No AI infrastructure', score: 1 },
      { value: 'basic', label: 'Basic cloud AI services', score: 3 },
      { value: 'custom', label: 'Custom ML models', score: 4 },
      { value: 'mlops', label: 'Full MLOps platform', score: 5 },
    ],
  },
];

const serviceRecommendations: Record<string, string[]> = {
  Security: [
    'AI Cybersecurity Monitor - Real-time threat detection',
    'Zero Trust Security Architecture - Modern security framework',
    'Penetration Testing Service - Identify vulnerabilities',
  ],
  Automation: [
    'Workflow Orchestration Platform - Visual automation builder',
    'RPA Automation Platform - Robotic process automation',
    'AI Workflow Automation - Intelligent process optimization',
  ],
  Data: [
    'Real-Time Analytics Platform - Sub-second insights',
    'Machine Learning Platform - End-to-end ML',
    'Data Lakehouse Platform - Modern data architecture',
  ],
  Cloud: [
    'Multi-Cloud Management Platform - Unified control',
    'Serverless Computing Platform - Infinite scale',
    'Cloud Disaster Recovery - 99.999% uptime',
  ],
  AI: [
    'AI Chatbot Builder - 80% support automation',
    'AI Code Review Platform - 70% faster reviews',
    'AI Lead Generation Platform - 5x more qualified leads',
  ],
};

export default function BusinessHealthCheck() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [healthScores, setHealthScores] = useState<HealthScore[]>([]);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateHealthScores(newAnswers);
      setShowResults(true);
    }
  };

  const calculateHealthScores = (answers: Record<string, string>) => {
    const categoryScores: Record<string, number[]> = {
      Security: [],
      Automation: [],
      Data: [],
      Cloud: [],
      AI: [],
    };

    questions.forEach((q) => {
      const answer = answers[q.id];
      const option = q.options.find((o) => o.value === answer);
      if (option) {
        categoryScores[q.category].push(option.score);
      }
    });

    const scores: HealthScore[] = Object.entries(categoryScores).map(
      ([category, scores]) => {
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        const percentage = (avgScore / 5) * 100;

        let status: HealthScore['status'];
        if (percentage >= 80) status = 'excellent';
        else if (percentage >= 60) status = 'good';
        else if (percentage >= 40) status = 'fair';
        else status = 'poor';

        const recommendations =
          percentage < 80 ? serviceRecommendations[category] : [];

        return {
          category,
          score: Math.round(percentage),
          status,
          recommendations,
        };
      }
    );

    setHealthScores(scores);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setHealthScores([]);
  };

  const getStatusColor = (status: HealthScore['status']) => {
    switch (status) {
      case 'excellent':
        return 'text-green-400 bg-green-600/20 border-green-500/30';
      case 'good':
        return 'text-blue-400 bg-blue-600/20 border-blue-500/30';
      case 'fair':
        return 'text-yellow-400 bg-yellow-600/20 border-yellow-500/30';
      case 'poor':
        return 'text-red-400 bg-red-600/20 border-red-500/30';
    }
  };

  const getOverallScore = () => {
    if (healthScores.length === 0) return 0;
    const total = healthScores.reduce((sum, s) => sum + s.score, 0);
    return Math.round(total / healthScores.length);
  };

  const getOverallStatus = (): HealthScore['status'] => {
    const score = getOverallScore();
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'fair';
    return 'poor';
  };

  if (showResults) {
    return (
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🏥 Your Business Health Report
          </h2>
          <p className="text-slate-300 text-lg">
            Based on your responses, here's your technology health assessment
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-700 mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Overall Health Score</h3>
          <div className="text-6xl font-bold mb-4">
            <span className={getStatusColor(getOverallStatus()).split(' ')[0]}>
              {getOverallScore()}
            </span>
            <span className="text-slate-400 text-3xl">/100</span>
          </div>
          <div
            className={`inline-block px-6 py-2 rounded-full text-sm font-semibold border ${getStatusColor(
              getOverallStatus()
            )}`}
          >
            {getOverallStatus().toUpperCase()}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {healthScores.map((score) => (
            <div
              key={score.category}
              className="bg-slate-900/60 rounded-xl p-6 border border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">{score.category}</h4>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                    score.status
                  )}`}
                >
                  {score.status.toUpperCase()}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Score</span>
                  <span className="text-white font-bold">{score.score}/100</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      score.status === 'excellent'
                        ? 'bg-green-500'
                        : score.status === 'good'
                        ? 'bg-blue-500'
                        : score.status === 'fair'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${score.score}%` }}
                  />
                </div>
              </div>

              {score.recommendations.length > 0 && (
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-slate-300 mb-2">
                    Recommended Solutions:
                  </h5>
                  <ul className="space-y-2">
                    {score.recommendations.map((rec, idx) => (
                      <li key={idx} className="text-xs text-slate-400">
                        • {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Plan */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-3">🎯 Recommended Action Plan</h3>
          <ol className="space-y-3 text-slate-300">
            <li>
              <strong className="text-white">Priority 1:</strong> Address areas with "Poor" or "Fair"
              status first
            </li>
            <li>
              <strong className="text-white">Priority 2:</strong> Implement recommended solutions
              for quick wins
            </li>
            <li>
              <strong className="text-white">Priority 3:</strong> Schedule a free consultation to
              discuss implementation
            </li>
            <li>
              <strong className="text-white">Priority 4:</strong> Retake assessment in 3 months to
              track progress
            </li>
          </ol>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all"
          >
            ← Retake Assessment
          </button>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Business Health Check Follow-up"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all text-center"
          >
            📧 Get Expert Consultation
          </a>
          <Link
            href="/services"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all text-center"
          >
            Browse All 975+ Services
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            🏥 Business Health Check
          </h2>
          <span className="text-slate-400 text-sm">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-semibold">
            {question.category}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
          {question.question}
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(question.id, option.value)}
            className="flex items-start gap-4 p-5 bg-slate-900/60 rounded-xl border border-slate-700 hover:border-purple-500 hover:bg-slate-800/60 transition-all text-left group"
          >
            <span className="text-white font-medium text-base">{option.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 text-center text-slate-400 text-sm">
        ⏱️ Takes less than 3 minutes • 🎯 Personalized recommendations • 📊 Instant health score
      </div>
    </div>
  );
}
