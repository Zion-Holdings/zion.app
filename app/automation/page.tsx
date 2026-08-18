import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

export const metadata = {
  title: 'AI Automation | Zion Tech Group',
  description: 'AI automation services and tooling from Zion Tech Group.',
  alternates: { canonical: '/automation/' },
};

export default function AutomationPage() {
  return (
    <PageTemplate
      title="AI Automation"
      subtitle="Streamline operations with practical AI automation."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Automation', href: '/automation/' },
      ]}
      actions={[
        { label: 'Start a project', href: '/start-project/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto space-y-6 text-slate-300">
        <p>Explore automation opportunities across your workflows.</p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Support automation</h3>
            <p className="text-slate-400 text-sm">Ticket routing, response drafting, and escalation handling.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Report automation</h3>
            <p className="text-slate-400 text-sm">Generate reports from structured data with consistent formatting.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Revenue operations</h3>
            <p className="text-slate-400 text-sm">Lead follow-up sequencing, reminders, and pipeline hygiene.</p>
          </div>
        </div>
        <p>
          For tailored options, visit <Link href="/services/" className="text-purple-300 font-semibold hover:text-white">services</Link> or <Link href="/contact/" className="text-purple-300 font-semibold hover:text-white">contact</Link>.
        </p>
      </div>
    </PageTemplate>
  );
}
