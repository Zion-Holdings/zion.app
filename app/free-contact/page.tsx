import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Request a free consultation with Zion Tech Group. Tell us about your project and we’ll propose the right AI and IT services for your budget and goals.',
  alternates: { canonical: '/free-contact' },
};

export default function FreeContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start With a <span className="gradient-text">Free Consultation</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us your goals, timeline, and budget. A Zion engineer will review your needs and send a tailored proposal — usually within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              emoji: '🚀',
              title: 'AI Services',
              desc: 'Autonomous agents, document intelligence, chat assistants, and predictive analytics for measurable outcomes.',
              href: '/services?category=ai',
            },
            {
              emoji: '☁️',
              title: 'Cloud & DevOps',
              desc: 'Infrastructure automation, CI/CD hardening, cost optimization, and platform reliability at scale.',
              href: '/services?category=cloud',
            },
            {
              emoji: '🔐',
              title: 'Security & Compliance',
              desc: 'Incident response, security scanning, access governance, and cyber readiness assessments.',
              href: '/services?category=security',
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="glass-card flex flex-col gap-3 p-6 hover:border-purple-500/40 group"
            >
              <span className="text-3xl">{card.emoji}</span>
              <div>
                <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">{card.title}</h3>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">{card.desc}</p>
              </div>
              <span className="text-purple-300 text-xs font-semibold mt-auto">Explore services →</span>
            </Link>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:+13024640950" className="btn-primary text-lg px-8 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg px-8 py-4">
              📅 Book a Consultation
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            Or email us at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200 underline">
              kleber@ziontechgroup.com
            </a>
            . We’ll respond within one business day.
          </p>
        </div>
      </div>
    </main>
  );
}
