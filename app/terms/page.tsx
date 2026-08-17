import type { Metadata } from 'next';
import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Terms of Service | Zion Tech Group',
  description: 'Terms of service for Zion Tech Group website, tools, and AI/IT services.',
  alternates: { canonical: '/terms' },
};

const sections = [
  { title: 'Agreement', body: 'By using Zion Tech Group services or website, you agree to these terms.' },
  { title: 'Services', body: 'Services include AI/IT consulting, implementation, support, and associated software. Specific terms may apply per proposal.' },
  { title: 'Acceptable Use', body: 'You agree not to misuse services, attempt unauthorized access, or interfere with operations.' },
  { title: 'Intellectual Property', body: 'Content and deliverables remain with their respective owners unless otherwise agreed in writing.' },
  { title: 'Limitation of Liability', body: 'To the maximum extent permitted by law, Zion Tech Group is not liable for indirect or incidental damages from service use.' },
  { title: 'Contact', body: 'Questions? Contact kleber@ziontechgroup.com or https://ziontechgroup.com/contact.' },
];

export default function TermsOfServicePage() {
  return (
    <PageTemplate
      title="Terms of Service"
      description="Effective date: 2026-07-13"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Terms of Service', href: '/terms' },
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
