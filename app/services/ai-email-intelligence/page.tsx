export const metadata = {
  title: 'AI Email Intelligence — Zion Tech Group',
  description: 'AI email intelligence services: triage, classification, routing, and automated response drafting.',
  alternates: { canonical: '/services/ai-email-intelligence/' },
};

export default function AiEmailIntelligencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">AI Email Intelligence</h1>
      <p className="mt-2 text-slate-300">
        Automate email handling with classification, routing, reply suggestions, and compliance-ready audit trails.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Inbox Triage</h2>
          <p className="mt-2 text-sm text-slate-300">
            Classify incoming email by intent, urgency, and owner with high accuracy.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Smart Routing</h2>
          <p className="mt-2 text-sm text-slate-300">
            Route messages to teams, queues, and escalation paths automatically.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Drafting</h2>
          <p className="mt-2 text-sm text-slate-300">
            Generate reply drafts with tone controls and approval workflows.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="text-xl font-semibold text-white">Compliance</h2>
          <p className="mt-2 text-sm text-slate-300">
            Retain audit evidence, redact sensitive data, and satisfy retention requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
