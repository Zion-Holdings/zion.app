import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation | Zion Tech Group',
  description: 'Workflow automation, AI agents, and operational automation from Zion Tech Group.',
  alternates: { canonical: '/automation/' },
};

export default function AutomationPage() {
  const items = [
    { title: 'Workflow Automation', desc: 'Reduce manual work with orchestrated workflows and integrations.', icon: '⚙️' },
    { title: 'AI Agents', desc: 'Autonomous agents for support, triage, and operational tasks.', icon: '🤖' },
    { title: 'Monitoring & Alerts', desc: 'Detect issues early with automated health checks and notifications.', icon: '🔔' },
    { title: 'Data Pipelines', desc: 'Reliable ingestion, transformation, and delivery automation.', icon: '🔄' },
  ];

  return (
    <PageWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Enterprise Automation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Automation & AI Orchestration
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Practical automation that reduces toil, improves reliability, and scales operations.
              From RPA + AI hybrid workflows to full-stack orchestration — we build systems that work 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {items.map((item) => (
              <div key={item.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Workflow?</h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Book a free consultation to discuss your automation needs and get a tailored implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-consultation/"
                className="btn-primary px-8 py-3 text-lg"
              >
                📧 Get Free Consultation
              </Link>
              <Link
                href="/services/"
                className="btn-secondary px-8 py-3 text-lg"
              >
                Browse Services →
              </Link>
            </div>
          </div>
        </div>
      </PageWrapper>
  );
}
