import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation | Zion Tech Group',
  description: 'Workflow automation, AI agents, and operational automation from Zion Tech Group.',
  alternates: { canonical: '/automation/' },
};

export default function AutomationPage() {
  const items = [
    { title: 'Workflow Automation', desc: 'Reduce manual work with orchestrated workflows and integrations.' },
    { title: 'AI Agents', desc: 'Autonomous agents for support, triage, and operational tasks.' },
    { title: 'Monitoring & Alerts', desc: 'Detect issues early with automated health checks and notifications.' },
    { title: 'Data Pipelines', desc: 'Reliable ingestion, transformation, and delivery automation.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Automation</h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-10">
          Practical automation that reduces toil, improves reliability, and scales operations.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    <section className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
<h2 className="text-xl font-bold text-white mb-2">Why it matters</h2>
<p className="text-slate-300">This page is part of Zion Tech Group's core catalog. It connects visitors to the right service, tool, or workflow without leaving the site.</p>
<ul className="list-disc pl-6 text-slate-300 space-y-1">
<li>Clear next steps aligned to the current page topic</li>
<li>Direct paths to contact, proposal, or demo flows</li>
<li>Consistent navigation and footer on every route</li>
</ul>
</section>
</main>
  
      <Footer />
    </div>);
}
