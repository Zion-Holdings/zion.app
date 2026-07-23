import type { Metadata } from "next";

export const metadata = {
  title: "AI Email Tuning Free Tools | Zion Tech Group",
  description: "Free AI email tuning tools for deliverability, reply classification, and outreach performance.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Email Tuning Free Tools</h1>
        <p className="text-slate-400 mb-6">Free AI email tuning tools for deliverability, reply classification, and outreach performance.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Subject and content tuning</li><li>Reply intent classification</li><li>A/B templates and send-time optimization</li><li>Deliverability and bounce diagnostics</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Use the email tools</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
