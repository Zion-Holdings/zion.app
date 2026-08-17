import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Press | Zion Tech Group',
  description: 'Press releases, media mentions, and company announcements from Zion Tech Group.',
  openGraph: { title: 'Press | Zion Tech Group', description: 'News and announcements.', url: 'https://ziontechgroup.com/press/', type: 'website' },
  alternates: { canonical: '/press/' },
};

export default function PressPage() {
  return (
    <StandardPage title="Press" subtitle="Press releases, media mentions, and announcements." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Press' }]} actions={[{ label: 'Media contact', href: '/contact/', style: 'primary' }]}>
      <div className="max-w-4xl mx-auto space-y-4 text-slate-300">
        <p>For media inquiries, contact our communications team. We share updates on product releases, client outcomes, and industry perspectives.</p>
        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact communications →</Link>
      </div>
    </StandardPage>
  );
}
