import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
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
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-gray-600">Effective date: 2026-07-13</p>

      <div className="mt-10 space-y-8">
        {sections.map(s => (
          <section key={s.title}>
            <h2 className="text-xl font-medium">{s.title}</h2>
            <p className="mt-2">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/" className="text-sm underline">Back to homepage</Link>
      </div>
    </main>
  );
}
