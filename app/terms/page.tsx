import type { Metadata } from 'next';
import Link from 'next/link';

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
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
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
