import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Partnership Playbook | Zion Tech Group',
  description:
    'How tech companies can build AI partnerships that close deals in 2026: partner selection, GTM motions, pricing models, and joint-sales playbook.',
  alternates: { canonical: '/ai-partnership-playbook/' },
};

const modules = [
  { title: 'Partner selection', body: 'Shortlisting criteria, due diligence checklist, and proof-of-concept design.' },
  { title: 'GTM motion', body: 'Co-selling, resell, referral, and embedded motions with revenue splits.' },
  { title: 'Pricing models', body: 'Usage-based, seat-based, outcome-based, and hybrid models.' },
  { title: 'Joint sales playbook', body: 'Discovery questions, objection handlers, proposal templates, and close plans.' },
];

export default function AiPartnershipPlaybookPage() {
  return (
    <StandardPage
      title="AI Partnership Playbook"
      subtitle="How tech companies can build AI partnerships that close deals in 2026: selection, GTM motions, pricing models, and joint-sales execution."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI Partnership Playbook' },
      ]}
      actions={[
        { label: 'Discuss a partnership', href: '/partnerships/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {modules.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-white font-semibold mb-2">{item.title}</h2>
            <p className="text-slate-400 text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </StandardPage>
  );
}
