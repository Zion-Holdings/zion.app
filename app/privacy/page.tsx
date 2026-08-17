import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  description: 'Privacy policy for Zion Tech Group services, website, and AI tools.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  { title: 'Information We Collect', body: 'We collect information you provide directly, such as contact forms, scheduling requests, and communications with Zion Tech Group.' },
  { title: 'How We Use Information', body: 'We use information to deliver AI/IT services, improve website performance, and communicate about projects or proposals.' },
  { title: 'Data Sharing', body: 'We do not sell personal data. We may share data with service providers necessary to deliver services, under confidentiality obligations.' },
  { title: 'Security', body: 'We apply reasonable technical and organizational measures to protect data during engagement.' },
  { title: 'Your Choices', body: 'You may request updates or deletion of personal data by contacting kleber@ziontechgroup.com.' },
  { title: 'Contact', body: 'For privacy questions, email kleber@ziontechgroup.com or use https://ziontechgroup.com/contact.' },
];

export default function PrivacyPolicyPage() {
  return (
    <PageTemplate
      title="Privacy Policy"
      description="Effective date: 2026-07-13"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Privacy Policy', href: '/privacy' },
      ]}
      layout="centered"
      showBottomCta={false}
    >
      <div className="max-w-4xl">
        <div className="mt-10 space-y-8">
          {sections.map(s => (
            <div key={s.title} className="space-y-3">
              <h2 className="text-xl font-medium text-white">{s.title}</h2>
              <p className="text-slate-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
