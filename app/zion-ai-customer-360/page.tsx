import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Customer 360',
  description: 'Unify customer data from all touchpoints into a single view with AI-powered insights and next-best-action recommendations.',
  alternates: { canonical: '/zion-ai-customer-360/' },
};

export default function Page() {
  return (
    <PageTemplate
      title="Zion AI Customer 360"
      description="Unify customer data from all touchpoints into a single view with AI-powered insights and next-best-action recommendations."
      actions={[
        { label: 'Get Started', href: '/contact', style: 'primary' },
        { label: 'View Pricing', href: '/pricing', style: 'secondary' },
      ]}
    >
      <div className="text-center py-16">
        <p className="text-slate-400">+1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709</p>
        <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Free Consultation</a>
      </div>
    </PageTemplate>
  );
}
