'use client';

import Link from 'next/link';

const ITEMS = [
  {
    quote: 'Zion Tech Group understood our stack instantly and had it live in 3 days.',
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'NovaStream Inc.',
    service: '/services/ai-customer-support-pro/',
    stars: 5,
  },
  {
    quote: 'ROI was visible in the first billing cycle. What used to take 2 weeks now happens overnight.',
    author: 'Marcus Thompson',
    role: 'CTO',
    company: 'DataPillar Analytics',
    service: '/services/ai-workflow-automation/',
    stars: 5,
  },
  {
    quote: 'We ship 3× more features per quarter without hiring additional DevOps engineers.',
    author: 'Rajesh Kumar',
    role: 'Platform Lead',
    company: 'CloudNine SaaS',
    service: '/services/ai-powered-devops/',
    stars: 5,
  },
];

export default function HomepageTestimonialProof() {
  return (
    <section className="py-16" id="testimonials">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
            Client Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by engineering and GTM leaders
          </h2>
          <p className="text-slate-300">
            Real outcomes from real engagements — support, automation, cloud,
            and security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ITEMS.map((item) => (
            <article
              key={item.author}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array.from({ length: item.stars }).map((_, idx) => (
                  <span key={idx} className="text-sm">★</span>
                ))}
              </div>
              <blockquote className="text-slate-200 text-sm leading-relaxed mb-5">
                “{item.quote}”
              </blockquote>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{item.author}</p>
                  <p className="text-xs text-slate-400">
                    {item.role} · {item.company}
                  </p>
                </div>
                <Link
                  href={item.service}
                  className="text-xs font-semibold text-purple-300 hover:text-purple-200"
                >
                  View service →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <Link href="/case-studies/" className="btn-primary">
              View more case studies
            </Link>
            <Link href="/contact/" className="btn-secondary">
              Request similar results
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
