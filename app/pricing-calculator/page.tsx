'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/SmartServiceCard';
import { allServices } from '../data/servicesData';
import type { Service } from '../data/servicesData';


const CATEGORY_MAP: Record<string, string> = {
  'manual email': 'automation',
  'slow response': 'automation',
  'support tickets': 'automation',
  'missed opportunities': 'ai',
  'workflows': 'automation',
  'security': 'security',
  'retention': 'ai',
  'analytics': 'data',
  'scalability': 'cloud',
  'operational costs': 'automation',
  'compliance': 'security',
  'automation': 'automation',
};

function matchServices(painPoints: string[], budget: number): Service[] {
  const keywords = new Set<string>();
  for (const p of painPoints) {
    keywords.add(p.toLowerCase());
    const mapped = CATEGORY_MAP[p.toLowerCase()];
    if (mapped) keywords.add(mapped);
  }

  const scored = allServices
    .filter((s) => {
      const text = `${s.title} ${s.description} ${(s.features || []).join(' ')}`.toLowerCase();
      const hay = `${text} ${s.category}`;
      return [...keywords].some((k) => hay.includes(k));
    })
    .map((s) => {
      const text = `${s.title} ${s.description} ${(s.features || []).join(' ')}`.toLowerCase();
      let score = 0;
      for (const k of keywords) if (text.includes(k)) score += 3;
      if (s.popular) score += 2;
      const firstTier = Object.values(s.pricing || {})[0] as string | undefined;
      const numeric = firstTier ? parseInt(firstTier.replace(/[^0-9]/g, ''), 10) : NaN;
      if (!Number.isNaN(numeric) && budget > 0 && numeric <= budget * 1.2) score += 4;
      if ((s.features || []).length >= 5) score += 1;
      return { service: s, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((x) => x.service);

  return scored;
}

export default function PricingCalculatorPage() {
  const [employees, setEmployees] = useState(50);
  const [revenue, setRevenue] = useState(5000000);
  const [painPoints, setPainPoints] = useState<string[]>([]);
  const [budgetText, setBudgetText] = useState('');
  const [results, setResults] = useState<Service[] | null>(null);

  const budgetNumber = budgetText ? parseInt(budgetText.replace(/[^0-9]/g, ''), 10) : 0;

  const toggle = (item: string) => {
    setPainPoints((prev) => (prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]));
  };

  const calculate = () => setResults(matchServices(painPoints, budgetNumber));

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">💰 Pricing Calculator & Service Matcher</h1>
          <p className="section-subheading">Tell us your context and we'll recommend priced services from the catalog</p>
        </div>

        <div className="max-w-4xl mx-auto glass-card mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Employees</label>
              <input type="number" value={employees} onChange={(e) => setEmployees(parseInt(e.target.value || '0', 10))} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Annual Revenue ($)</label>
              <input type="number" value={revenue} onChange={(e) => setRevenue(parseInt(e.target.value || '0', 10))} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Budget ($)</label>
              <input type="number" value={budgetText} onChange={(e) => setBudgetText(e.target.value)} placeholder="e.g. 10000" className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white" />
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium text-slate-300 mb-3">Pain Points</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
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
              ].map((point) => (
                <button key={point} onClick={() => toggle(point)} className={`p-3 border rounded-lg text-left text-sm transition ${painPoints.includes(point) ? 'border-purple-500 bg-purple-500/10 text-purple-200' : 'border-slate-700 text-slate-300 hover:border-purple-500/50'}`}>
                  {point}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button onClick={calculate} className="btn-primary w-full">⚡ Find Matching Services</button>
            <Link href="/services/" className="btn-secondary w-full text-center">Browse All</Link>
          </div>
        </div>

        {results && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Recommended Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((service) => (
                <ServiceCard key={service.id} service={service} relationship="featured" relevance={95} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
