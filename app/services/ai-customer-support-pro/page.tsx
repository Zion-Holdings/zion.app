import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Support Pro | Zion Tech Group',
  description: 'AI-powered customer support platform with automation, routing, and analytics from Zion Tech Group.',
  alternates: { canonical: '/services/ai-customer-support-pro/' },
};

export default function AICustomerSupportProPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Customer Support Pro</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Deploy AI-assisted customer support with triage, answers, and escalation workflows.
          </p>
        </div>
        <section className="max-w-3xl mx-auto glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Platform Capabilities</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
            <li>Ticket triage and priority routing</li>
            <li>Knowledge-grounded responses with citations</li>
            <li>Omnichannel handoff to human agents</li>
            <li>CSAT, resolution time, and backlog analytics</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact/" className="btn-primary text-lg px-10 py-4 inline-block">
              Request Demo →
            </Link>
            <Link href="/services/" className="btn-secondary text-lg px-10 py-4 inline-block">
              View Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
