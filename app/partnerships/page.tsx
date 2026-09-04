import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Partnerships | Zion Tech Group',
  description:
    'Partner with Zion to deliver AI, automation, and cybersecurity solutions. Explore reseller, integration, and co-selling programs.',
  openGraph: {
    title: 'Partnerships | Zion Tech Group',
    description:
      'Reseller, integration, and co-selling programs for AI, automation, and cybersecurity.',
    url: 'https://ziontechgroup.com/partnerships/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnerships | Zion Tech Group',
    description:
      'Reseller, integration, and co-selling programs for AI, automation, and cybersecurity.',
  },
  alternates: { canonical: '/partnerships/' },
};

const programs = [
  {
    title: 'Reseller',
    body: 'White-label or co-branded delivery of Zion AI, automation, and managed security services.',
  },
  {
    title: 'Integration',
    body: 'Connect Zion platforms to your CRM, ITSM, and data stack with shared implementation playbooks.',
  },
  {
    title: 'Co-selling',
    body: 'Joint pursuits with shared pipeline, solution design, and customer success ownership.',
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Partnerships — Zion Tech Group',
          url: 'https://ziontechgroup.com/partnerships/',
          description:
            'Partner with Zion to deliver AI, automation, and cybersecurity solutions.',
        }}
      />
      <StandardPage
        title="Partnerships"
        subtitle="Partner with Zion to deliver AI, automation, and cybersecurity solutions."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Partnerships' },
        ]}
        actions={[
          { label: 'Talk to partnerships', href: '/contact/', style: 'primary' },
          { label: 'Partner program', href: '/partner-program/', style: 'secondary' },
        ]}
      >
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-slate-300 text-sm leading-relaxed">
            Explore reseller, integration, and co-selling programs. We work with agencies,
            MSPs, and platform vendors who want a reliable AI and automation delivery partner.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h2 className="text-white font-semibold mb-2">{program.title}</h2>
              <p className="text-slate-400 text-sm">{program.body}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Link href="/partners/" className="text-purple-400 hover:underline text-sm">
            Browse the partner ecosystem
          </Link>
        </div>
      </StandardPage>
    </>
  );
}
