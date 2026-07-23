import type { Metadata } from "next";

export const metadata = {
  title: "AI Business Proposal Automation | Zion Tech Group",
  description: "Generate accurate, branded proposals faster with AI proposal automation and CPQ-style workflows.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Business Proposal Automation</h1>
        <p className="text-slate-400 mb-6">Generate accurate, branded proposals faster with AI proposal automation and CPQ-style workflows.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Auto-populate scoping, pricing, and terms</li><li>Brand-consistent templates and review flows</li><li>CRM and pipeline integrations</li><li>Approval chains with SLA tracking</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Review proposal automation</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
