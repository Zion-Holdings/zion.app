// app/components/ServiceConfiguratorWidget.tsx
// Client-side wizard widget — receives lean service data as props
// (passed from the server component) so the 516 KB JSON is never bundled.
'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ServiceSummary } from '@/lib/services-data';

interface Props {
  services: ServiceSummary[];
  totalServices: number;
}

type Step = 'budget' | 'needs' | 'services' | 'timeline' | 'review';

const COMPANY = {
  name: 'Zion Tech Group',
  email: 'kleber@ziontechgroup.com',
};

export default function ServiceConfiguratorWidget({ services, totalServices }: Props) {
  const [step, setStep] = useState<Step>('budget');
  const [budget, setBudget] = useState('');
  const [needs, setNeeds] = useState<string[]>([]);

  const filtered = services.filter((s) => {
    if (!needs.length) return true;
    const text = `${s.title} ${s.description} ${(s.features || []).join(' ')}`.toLowerCase();
    return needs.some((n) => text.includes(n.toLowerCase()));
  }).slice(0, 8);

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Service Configurator</h1>
        <p className="text-slate-300 mb-8">
          Step {step === 'budget' ? '1' : step === 'needs' ? '2' : step === 'services' ? '3' : step === 'timeline' ? '4' : '5'} of 5
        </p>

        {step === 'budget' && (
          <div className="glass-card">
            <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Budget</label>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. $5,000"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white"
            />
            <button
              onClick={() => setStep('needs')}
              className="btn-primary w-full mt-4"
              disabled={!budget}
            >
              Next
            </button>
          </div>
        )}

        {step === 'needs' && (
          <div className="glass-card">
            <p className="text-sm text-slate-400 mb-4">Select your key needs:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['automation', 'security', 'analytics', 'scalability', 'integration', 'compliance']
                .map((need) => (
                  <button
                    key={need}
                    onClick={() =>
                      setNeeds((prev) =>
                        prev.includes(need) ? prev.filter((x) => x !== need) : [...prev, need]
                      )
                    }
                    className={`p-3 rounded-lg text-sm transition ${
                      needs.includes(need)
                        ? 'border-purple-500 bg-purple-500/10 text-purple-200'
                        : 'border-slate-700 text-slate-300 hover:border-purple-500/50'
                    }`}
                  >
                    {need}
                  </button>
                ))}
            </div>
            <button
              onClick={() => setStep('services')}
              className="btn-primary w-full mt-4"
            >
              Show Recommendations
            </button>
          </div>
        )}

        {step === 'services' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Recommended Services</h2>
            {filtered.length === 0 ? (
              <p className="text-slate-400">No services matched your criteria.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((s) => (
                  <Link
                    key={s.id}
                    href={s.href || `/services/${s.id}/`}
                    className="glass-card flex flex-col p-5 hover:border-purple-500/40 transition-all group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">
                      {s.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{s.description}</p>
                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{s.category}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-slate-500 text-sm mt-8">
          Browse {totalServices}+ services · Powered by {COMPANY.name}
        </p>
      </div>
    </main>
  );
}
