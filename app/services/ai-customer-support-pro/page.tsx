import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI Customer Support Pro | Zion Tech Group',
  description: '24/7 AI customer support with human escalation and CRM-backed handoff.',
  alternates: { canonical: '/services/ai-customer-support-pro/' },
};

export default function AiCustomerSupportProServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'AI Customer Support Pro', href: '/services/ai-customer-support-pro/' }]} className="mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Customer Support Pro</h1>
        <p className="text-slate-300 text-lg mb-6 max-w-3xl">Always-on support coverage with semantic search, ticket routing, and seamless human escalation.</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1 mb-8 max-w-3xl">
          <li>Answer FAQs and support tickets in real time.</li>
          <li>Escalate complex cases to the right team automatically.</li>
          <li>Track resolution metrics.</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Start a pilot</a>
          <a href="/services/" className="btn-secondary">All services</a>
        </div>
      </div>
    </main>
  );
}
