import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Zion Tech Group',
  description:
    'Common questions about AI and IT services, engagement models, pricing, onboarding, support, security, and deployment timelines.',
  openGraph: {
    title: 'FAQ | Zion Tech Group',
    description:
      'Common questions about AI and IT services, timing, security, pricing, and onboarding.',
    url: 'https://ziontechgroup.com/faq/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/faq/' },
};

const faqs = [
  { q: 'How fast can you start?', a: 'Most engagements begin within 7 days. Managed services and advisory work can onboard faster if the scope is clear.' },
  { q: 'Do you support HIPAA and compliance regimes?', a: 'Yes. We design delivery with privacy-first controls and can support compliance evidence packages and operational requirements.' },
  { q: 'What does managed AI include?', a: 'Monitoring, cost controls, model updates, observability, performance tuning, and incident response for production AI systems.' },
  { q: 'How do you price engagements?', a: 'We use time-and-materials, fixed-price, and retainer models. After a short scoping call, we return a proposal with clear cost structure and milestones.' },
  { q: 'Can you work with our existing AI providers?', a: 'Yes — we integrate with AWS, GCP, Azure, OpenAI, Anthropic, and open-source stacks. We pick the best tool for each job.' },
  { q: 'What is your deployment process?', a: 'We follow a phased approach: discovery, prototype, production deployment, and continuous optimization — with clear milestones at each stage.' },
];

export default function FAQPage() {
  return (
    <PageTemplate
      title="Frequently Asked Questions"
      description="Straight answers about AI and IT services, pricing, onboarding, support, and what to expect from a Zion engagement."
      category="Help & FAQs"
      heroIcon="💬"
      actions={[
        { label: 'Ask a question', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'FAQ', href: '/faq' },
      ]}
      layout="hero"
      showBottomCta={false}
    >
      <div className="grid gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-2">{faq.q}</h2>
            <p className="text-slate-300 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
