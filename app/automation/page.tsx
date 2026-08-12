import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Automation | Zion Tech Group',
  description: 'Workflow automation, AI agents, and operational automation from Zion Tech Group.',
  alternates: { canonical: '/automation/' },

  openGraph: {
    title: 'Automation | Zion Tech Group',
    description: 'Workflow automation, AI agents, and operational automation from Zion Tech Group.',
    url: 'https://ziontechgroup.com/automation/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function AutomationPage() {
  const items = [
    { title: 'Workflow Automation', desc: 'Reduce manual work with orchestrated workflows and integrations.' },
    { title: 'AI Agents', desc: 'Autonomous agents for support, triage, and operational tasks.' },
    { title: 'Monitoring & Alerts', desc: 'Detect issues early with automated health checks and notifications.' },
    { title: 'Data Pipelines', desc: 'Reliable ingestion, transformation, and delivery automation.' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-20">

    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Automation | Zion Tech Group", description: "Workflow automation, AI agents, and operational automation from Zion Tech Group.", url: "https://ziontechgroup.com/automation/"}} />
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
    </main>
  );
}
