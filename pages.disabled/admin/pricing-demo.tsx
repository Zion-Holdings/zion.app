import React, { useState } from 'react';
import ClientBudgetRecommender from '@/components/monetization/ClientBudgetRecommender';
import TalentRateRecommender from '@/components/monetization/TalentRateRecommender';

export default function PricingDemoPage() {
  const [clientForm, setClientForm] = useState({
    title: 'React.js Developer',
    category: 'Frontend',
    timelineWeeks: 2,
    scope: 'Build UI components and integrate APIs',
    experienceLevel: 'mid' as 'junior' | 'mid' | 'senior',
    applied: '',
  });

  const [talentForm, setTalentForm] = useState({
    skills: 'DevOps, Kubernetes, AWS',
    yearsExperience: 4,
    location: 'Brazil',
    applied: '',
  });

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-10">
      <h1 className="text-2xl font-bold">Pricing Suggestion Demo</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Client Budget Recommender</h2>
        <div className="grid grid-cols-1 gap-3">
          <input className="border p-2 rounded" placeholder="Title" value={clientForm.title} onChange={(e) => setClientForm({ ...clientForm, title: e.target.value })} />
          <input className="border p-2 rounded" placeholder="Category" value={clientForm.category} onChange={(e) => setClientForm({ ...clientForm, category: e.target.value })} />
          <input className="border p-2 rounded" placeholder="Timeline Weeks" type="number" value={clientForm.timelineWeeks} onChange={(e) => setClientForm({ ...clientForm, timelineWeeks: Number(e.target.value) })} />
          <input className="border p-2 rounded" placeholder="Scope" value={clientForm.scope} onChange={(e) => setClientForm({ ...clientForm, scope: e.target.value })} />
          <select className="border p-2 rounded" value={clientForm.experienceLevel} onChange={(e) => setClientForm({ ...clientForm, experienceLevel: e.target.value as any })}>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <ClientBudgetRecommender
          title={clientForm.title}
          category={clientForm.category}
          timelineWeeks={clientForm.timelineWeeks}
          scope={clientForm.scope}
          experienceLevel={clientForm.experienceLevel}
          onApplySuggestion={(min, max) => setClientForm({ ...clientForm, applied: `Applied: $${min}–$${max}` })}
        />
        {clientForm.applied && <div className="text-sm text-gray-700">{clientForm.applied}</div>}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Talent Rate Recommender</h2>
        <div className="grid grid-cols-1 gap-3">
          <input className="border p-2 rounded" placeholder="Skills (comma separated)" value={talentForm.skills} onChange={(e) => setTalentForm({ ...talentForm, skills: e.target.value })} />
          <input className="border p-2 rounded" placeholder="Years Experience" type="number" value={talentForm.yearsExperience} onChange={(e) => setTalentForm({ ...talentForm, yearsExperience: Number(e.target.value) })} />
          <input className="border p-2 rounded" placeholder="Location" value={talentForm.location} onChange={(e) => setTalentForm({ ...talentForm, location: e.target.value })} />
        </div>
        <TalentRateRecommender
          skills={talentForm.skills.split(',').map((s) => s.trim()).filter(Boolean)}
          yearsExperience={talentForm.yearsExperience}
          location={talentForm.location}
          onApplySuggestion={(hourly, min, max) => setTalentForm({ ...talentForm, applied: `Applied: $${hourly}/hour; Range $${min}–$${max}` })}
        />
        {talentForm.applied && <div className="text-sm text-gray-700">{talentForm.applied}</div>}
      </section>

      <p className="text-xs text-gray-500">Disclaimer: Based on market data & trends. Do not auto-submit changes.</p>
    </div>
  );
}