import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Request a free consultation with Zion Tech Group. Tell us about your project and we\'ll propose the right AI and IT services for your budget and goals.',
  openGraph: {
    title: 'Free Consultation | Zion Tech Group',
    description: 'Request a free consultation with Zion Tech Group. Tell us about your project and we\'ll propose the right AI and IT services for your budget and goals.',
    url: 'https://ziontechgroup.com/free-contact/',
    type: 'website',
  },
  alternates: { canonical: '/free-contact/' },
};

export default function Page() {
  return (
    <PageTemplate
      title="Free Consultation | Zion Tech Group"
      description="{card.desc}"
      actions={[
        { label: 'Get Started', href: '/contact', style: 'primary' },
        { label: 'View Pricing', href: '/pricing', style: 'secondary' },
      ]}
    >
      <div className="text-center py-16">
        <p className="text-slate-400">+1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709</p>
        <a href="/contact/" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Free Consultation</a>
      </div>
    </PageTemplate>
  );
}
