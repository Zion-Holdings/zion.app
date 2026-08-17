import PageTemplate from '@/components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Level Agreements | Zion Tech Group',
  description: 'Our commitment to uptime, performance, and support response times.',
};

export default function Page() {
  return (
    <PageTemplate
      title="Service Level Agreements"
      description="Our commitment to uptime, performance, and support response times."
      actions={[
        { label: 'Pricing Plans', href: '/pricing', style: 'secondary' },
        { label: 'Contact Sales', href: '/contact', style: 'secondary' },
      ]}
    >
      <div className="mt-12">
        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-white mb-3">Get Started Today</h2>
          <p className="text-slate-400 mb-4">Contact our team for a free consultation.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="tel:+130****0950" className="text-emerald-400">📞 +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400">✉️ kleber@ziontechgroup.com</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
