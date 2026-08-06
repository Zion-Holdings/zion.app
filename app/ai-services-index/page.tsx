import Link from 'next/link';

export const metadata = {
  title: 'AI Services Index | Zion Tech Group',
  description: 'Comprehensive AI services portfolio for enterprise transformation. AI observability, automation, code review, customer success, and more.',
  keywords: ['AI services', 'enterprise AI', 'AI automation', 'Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'AI Services Index | Zion Tech Group',
    description: 'Comprehensive AI services portfolio for enterprise transformation.',
    url: 'https://ziontechgroup.com/ai-services-index/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: 'https://ziontechgroup.com/ai-services-index/' },
};

export default function AIServicesIndexPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI Services Index
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Explore our comprehensive AI services for enterprise transformation
          </p>
        </header>

        <section className="prose prose-invert max-w-none">
          <h2>Why AI Matters Now</h2>
          <p>
            Buyers evaluating AI services in 2026 are prioritizing measurable outcomes over feature checklists. 
            This index provides visibility into our complete AI capabilities portfolio.
          </p>

          <h2>Our AI Service Categories</h2>
          <ul>
            <li><Link href="/services/ai-customer-onboarding-automation-reduce-time-to-value/">AI Customer Onboarding Automation</Link> - Reduce time to value by 60%</li>
            <li><Link href="/services/ai-code-review-automation-security-style-and-architecture-gates/">AI Code Review Automation</Link> - Security, style, and architecture gates</li>
            <li><Link href="/services/ai-customer-support-pro/">AI Customer Support Pro</Link> - Context-aware support with human escalation</li>
            <li><Link href="/services/ai-observability/">AI Observability</Link> - Monitoring and anomaly detection</li>
            <li><Link href="/services/ai-it-operations-automation-2026/">AI IT Operations</Link> - DevOps and infrastructure automation</li>
            <li><Link href="/services/ai-data-analytics-platform-modern-enterprise-2026/">AI Data Analytics Platform</Link> - Lakehouse and streaming pipelines</li>
          </ul>

          <h2>AI-First Transformation Framework</h2>
          <p>
            Our services are organized around a phased adoption model:
          </p>
          <ol>
            <li><strong>Assessment</strong> - Identify high-impact automation opportunities</li>
            <li><strong>Enablement</strong> - Build foundational AI capabilities with proper governance</li>
            <li><strong>Scale</strong> - Expand use cases with operational excellence</li>
          </ol>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Get Started</h2>
            <p className="text-slate-300">Begin your AI transformation with a discovery session.</p>
            <Link
              href="/contact/"
              className="mt-4 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Contact Us
            </Link>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">View Services</h2>
            <p className="text-slate-300">Browse our full service catalog.</p>
            <Link
              href="/services/"
              className="mt-4 inline-block rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Our Services
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}