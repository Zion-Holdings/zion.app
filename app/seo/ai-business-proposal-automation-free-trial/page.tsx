import type { Metadata } from "next";

export const metadata = {
  title: "AI Business Proposal Automation Free Trial | Zion Tech Group",
  description: "Pilot AI business proposal automation with a guided free trial and measurable outcomes.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Business Proposal Automation Free Trial</h1>
        <p className="text-slate-400 mb-6">Pilot AI business proposal automation with a guided free trial and measurable outcomes.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Setup and template onboarding</li><li>Workflow pilot with success metrics</li><li>Team training and handoff</li><li>Conversion path to full deployment</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Start the free trial</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
