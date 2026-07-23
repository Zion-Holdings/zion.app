import type { Metadata } from "next";

export const metadata = {
  title: "AI Support Automation Playbook | Zion Tech Group",
  description: "Deploy an AI support automation playbook to deflect tickets, improve CSAT, and scale L1 support.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Support Automation Playbook</h1>
        <p className="text-slate-400 mb-6">Deploy an AI support automation playbook to deflect tickets, improve CSAT, and scale L1 support.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Ticket classification and routing</li><li>AI-assisted responses and summaries</li><li>SLA forecasting and backlog governance</li><li>Self-service knowledge retrieval</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Build your support playbook</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
