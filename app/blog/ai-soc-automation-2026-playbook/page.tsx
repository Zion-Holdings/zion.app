import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI SOC Automation 2026 Playbook | Zion Tech Group',
  description: 'Practical playbook for AI-driven SOC automation in 2026: alert triage, threat enrichment, runbook automation, and chatops workflows.',
  alternates: { canonical: '/blog/ai-soc-automation-2026-playbook/' },
};

export default function AISOCAutomation2026PlaybookPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">AI SOC Automation 2026 Playbook</h1>
        <p className="mt-4 text-slate-300">Automate SOC workflows with AI: triage, enrichment, playbook execution, and measurable MTTR reduction.</p>
        <div className="mt-8">
          <a href="/contact/" className="btn-primary">Talk to a Security Expert</a>
        </div>
      </main>
    </div>
  );
}
