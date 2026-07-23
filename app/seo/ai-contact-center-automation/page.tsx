import type { Metadata } from "next";

export const metadata = {
  title: "AI Contact Center Automation | Zion Tech Group",
  description: "Modernize contact center operations with AI automation for routing, compliance, and workforce optimization.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Contact Center Automation</h1>
        <p className="text-slate-400 mb-6">Modernize contact center operations with AI automation for routing, compliance, and workforce optimization.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Interaction routing and scheduling</li><li>Real-time assist and summaries</li><li>Quality assurance and coaching</li><li>Reporting for SLAs and compliance</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Modernize your contact center</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
