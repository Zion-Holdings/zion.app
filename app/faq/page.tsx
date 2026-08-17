import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about services, engagement models, pricing, and support at Zion Tech Group.',
  alternates: { canonical: '/faq/' },
};

const ITEMS = [
  {
    q: 'What industries do you support?',
    a: 'We work across technology, healthcare, manufacturing, finance, and SaaS. Our playbooks are adaptable, but many engagements start with regulated or cloud-heavy environments.',
  },
  {
    q: 'How fast can we start a pilot?',
    a: 'Most pilots begin within 5–10 business days after the discovery call. We use standardized scoping, automated environment setup, and reusable service modules to reduce lead time.',
  },
  {
    q: 'Do you offer project-based or retainer models?',
    a: 'Both. Choose project-based for defined milestones, or a managed retainer for ongoing support, monitoring, and continuous improvement.',
  },
  {
    q: 'Is the team US-based?',
    a: 'Yes. Our engineers, architects, and support staff are based in the US. We prioritize direct communication and clear escalation paths.',
  },
  {
    q: 'Do you support compliance requirements?',
    a: 'Yes. We implement controls and evidence packages aligned to SOC 2, HIPAA, and NIST frameworks. Compliance readiness is built into our standard delivery lifecycle.',
  },
  {
    q: 'What does pricing look like?',
    a: 'Pilot engagements typically start at $5,000–$15,000, with managed services priced by scope and SLA tier. Custom proposals include transparent line items and no hidden fees.',
  },
];

export default function FAQPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Quick answers about working with Zion Tech Group. If you need more detail, contact us directly.
          </p>
        </div>
        <div className="max-w-3xl space-y-6">
          {ITEMS.map((item) => (
            <div key={item.q} className="glass-card">
              <h2 className="text-lg font-semibold text-white mb-2">{item.q}</h2>
              <p className="text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/contact/" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
