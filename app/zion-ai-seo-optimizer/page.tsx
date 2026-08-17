import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI SEO Optimizer | Zion Tech Group',
  description: 'AI-powered SEO optimization platform for keyword research, content analysis, and ranking improvement.',
  alternates: { canonical: '/zion-ai-seo-optimizer/' },
};

export default function Page() {
  return (
    <PageTemplate
      title="Zion AI SEO Optimizer"
      description="AI-powered SEO optimization platform for keyword research, content analysis, and ranking improvement."
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
