import PageTemplate from '@/components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure | Zion Tech Group',
  description: 'Scalable, secure cloud infrastructure solutions for enterprises.',
};

export default function Page() {
  return (
    <PageTemplate
      title="Cloud Infrastructure"
      description="Scalable, secure cloud infrastructure solutions for enterprises."
      actions={[
        { label: 'Cloud Services', href: '/services', style: 'secondary' },
        { label: 'Learn More', href: '/contact', style: 'secondary' },
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
