import type { Metadata } from "next";

export const metadata = {
  title: "AI Security Operations Automation | Zion Tech Group",
  description: "Enhance SOC efficiency with AI security automation, alert triage, and playbook execution.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Security Operations Automation</h1>
        <p className="text-slate-400 mb-6">Enhance SOC efficiency with AI security automation, alert triage, and playbook execution.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Alert normalization and prioritization</li><li>Playbook execution and containment</li><li>Vulnerability trend analysis</li><li>Reporting for governance and audits</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Explore security automation</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
