'use client';

import { useState } from 'react';

type Ticket = {
  id: string;
  subject: string;
  body: string;
  priority: string;
  category: string;
  team: string;
  rationale: string;
};

const categories = ['Billing', 'Access', 'Outage', 'Bug', 'Feature', 'Security', 'Onboarding', 'Performance'];
const teams = ['Support', 'SRE', 'Security', 'Billing', 'Product', 'IT Ops'];

function classifyTicket(subject: string, body: string): Ticket {
  const text = `${subject} ${body}`.toLowerCase();
  let priority = 'P3';
  let category = 'Support';
  let team = 'Support';
  let rationale = 'Standard support request based on subject and body content.';

  if (/outage|down|offline|500|unreachable|emergency/.test(text)) {
    priority = 'P1';
    category = 'Outage';
    team = 'SRE';
    rationale = 'Service availability language indicates an active incident.';
  } else if (/security|breach|phish|compromise|unauthorized|exfil/.test(text)) {
    priority = 'P1';
    category = 'Security';
    team = 'Security';
    rationale = 'Security-related terms suggest potential incident exposure.';
  } else if (/billing|invoice|charge|refund|past due|payment/.test(text)) {
    priority = 'P2';
    category = 'Billing';
    team = 'Billing';
    rationale = 'Financial transaction terms map to billing workflows.';
  } else if (/access|login|lockout|mfa|password|identity|sso/.test(text)) {
    priority = 'P2';
    category = 'Access';
    team = 'IT Ops';
    rationale = 'Access and identity terms indicate identity/access operations.';
  } else if (/slow|latency|performance|capacity|timeout/.test(text)) {
    priority = 'P2';
    category = 'Performance';
    team = 'SRE';
    rationale = 'Performance or capacity language points to reliability review.';
  } else if (/bug|error|crash|exception|traceback/.test(text)) {
    priority = 'P2';
    category = 'Bug';
    team = 'Product';
    rationale = 'Defect-oriented language matches engineering triage.';
  } else if (/feature|request|enhancement|roadmap|road map/.test(text)) {
    priority = 'P3';
    category = 'Feature';
    team = 'Product';
    rationale = 'No immediate operational risk detected; route to product intake.';
  } else if (/onboard|new hire|setup|provision/.test(text)) {
    priority = 'P2';
    category = 'Onboarding';
    team = 'IT Ops';
    rationale = 'Provisioning language indicates onboarding automation path.';
  }

  const id =
    'TCK-' +
    Math.floor(1000 + Math.random() * 9000) +
    '-' +
    categories.indexOf(category).toString(16).toUpperCase();

  return { id, subject, body, priority, category, team, rationale };
}

export default function AiSupportTicketClassifier() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [result, setResult] = useState<Ticket | null>(null);

  const classify = () => {
    const trimmed = subject.trim() || 'General support request';
    const bodyTrimmed = body.trim();
    setResult(classifyTicket(trimmed, bodyTrimmed));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tools
        </a>

        <h1 className="text-3xl font-bold mb-2">🎫 AI Support Ticket Classifier</h1>
        <p className="text-slate-400 mb-6">
          Classify support tickets by priority, category, and owning team. Built for triage speed and consistent routing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Site is down for EU users"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
            />

            <label className="block text-sm font-medium text-slate-300 mt-4 mb-2">Body</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Describe the issue, impact, or request..."
              rows={6}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100 focus:border-purple-500 focus:outline-none"
            />

            <button
              onClick={classify}
              className="mt-4 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500"
            >
              Classify ticket
            </button>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-xl font-semibold mb-4">Classification result</h2>
            {!result ? (
              <p className="text-slate-400 text-sm">Submit a ticket subject or body to see routing guidance.</p>
            ) : (
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Ticket ID</span>
                  <span className="font-mono text-white">{result.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Priority</span>
                  <span className="font-semibold text-white">{result.priority}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Category</span>
                  <span className="text-white">{result.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Owning team</span>
                  <span className="text-white">{result.team}</span>
                </div>
                <div>
                  <span className="text-slate-400">Rationale</span>
                  <p className="mt-1 text-white">{result.rationale}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
