'use client';

import { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Readiness Score — Quick Audit | Zion Tech Group',
  description: 'Take the free AI Readiness Score quiz: 5 yes/no questions, 0–100 score, and a personalized tier label to see how ready your business is for AI adoption.',
};

const questions = [
  {
    id: 'q1',
    question: 'Do you currently use AI or automation in any business process?',
  },
  {
    id: 'q2',
    question: 'Do you have structured data available for training or analytics?',
  },
  {
    id: 'q3',
    question: 'Is your leadership team aligned on an AI strategy or roadmap?',
  },
  {
    id: 'q4',
    question: 'Do you have dedicated IT/AI talent or partnerships to execute AI projects?',
  },
  {
    id: 'q5',
    question: 'Do you measure ROI for new technology initiatives today?',
  },
];

function getTier(score: number) {
  if (score >= 80) return { label: 'AI Ready', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' };
  if (score >= 60) return { label: 'AI Emerging', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' };
  if (score >= 40) return { label: 'AI Aware', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' };
  return { label: 'AI Beginner', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' };
}

export default function AIQuickAuditPage() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? questions.reduce((acc, q) => acc + (answers[q.id] ? 20 : 0), 0) : 0;
  const tier = getTier(score);

  const toggle = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div className="container-page py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/tools/" className="text-purple-400 text-sm hover:underline mb-6 inline-block">
          ← All Tools
        </Link>
        <h1 className="text-4xl font-bold text-white mb-4">AI Readiness Score</h1>
        <p className="text-slate-400 mb-8">
          Answer 5 quick yes/no questions to measure how ready your business is for AI adoption and
          get a personalized tier with next steps.
        </p>

        <div className="glass-card p-6 mb-8">
          {questions.map((q, idx) => (
            <div key={q.id} className="mb-6 last:mb-0">
              <p className="text-white font-medium mb-3">
                {idx + 1}. {q.question}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => toggle(q.id, true)}
                  className={`px-4 py-2 rounded-lg border ${
                    answers[q.id] === true
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-emerald-500/40'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => toggle(q.id, false)}
                  className={`px-4 py-2 rounded-lg border ${
                    answers[q.id] === false
                      ? 'bg-red-500/20 border-red-500/40 text-red-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-red-500/40'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className="btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate Score
          </button>
        </div>

        {submitted && (
          <div className="glass-card p-8 text-center">
            <p className="text-slate-400 text-sm mb-2">Your AI Readiness Score</p>
            <div className="text-6xl font-bold text-white mb-2">{score}</div>
            <div className={`inline-block px-4 py-2 rounded-full ${tier.bg} ${tier.border} border mb-6`}>
              <span className={`text-sm font-semibold ${tier.color}`}>{tier.label}</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              {score >= 80
                ? 'You are ready to scale AI across operations. Let’s fine-tune an implementation plan.'
                : score >= 60
                  ? 'You have strong foundations. A focused pilot can unlock quick wins and build momentum.'
                  : score >= 40
                    ? 'You are aware of AI potential. Start with a clear strategy and one high-impact use case.'
                    : 'You are at the beginning of your AI journey. A readiness assessment is the best first step.'}
            </p>
            <Link href="/configurator/" className="btn-primary">
              Build Your AI Configurator Plan
            </Link>
          </div>
        )}

        <div className="mt-12 glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-3">How is this scored?</h2>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>• <strong className="text-white">Yes</strong> = 20 points each (5 core readiness signals).</li>
            <li>• <strong className="text-white">80–100</strong> = AI Ready — scale across teams.</li>
            <li>• <strong className="text-white">60–79</strong> = AI Emerging — start with pilots.</li>
            <li>• <strong className="text-white">40–59</strong> = AI Aware — strategy first.</li>
            <li>• <strong className="text-white">0–39</strong> = AI Beginner — readiness assessment recommended.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
