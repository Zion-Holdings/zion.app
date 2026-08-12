import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Tools & Calculators',
  description:
    'Free online tools: ROI Calculator, Port Scanner, SSL Checker, Service Comparison, AI Service Router, and Service Recommender — no sign-up required.',
  alternates: { canonical: '/tools' },
};

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Tools &amp; Calculators</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Practical utilities built by the Zion Tech Group team. No account, no API key, no
            tracking — everything runs in your browser or via lightweight public endpoints.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/tools/roi-calculator', title: 'ROI Calculator', desc: 'Estimate the return on your AI, cloud, or automation investment over 3 years.' },
              { href: '/tools/port-scanner', title: 'Port Scanner', desc: 'Scan common ports on any host to check which services are exposed.' },
              { href: '/tools/ssl-checker', title: 'SSL Checker', desc: 'Verify certificate expiry, issuer, and chain trust for any domain.' },
              { href: '/service-comparison', title: 'Service Comparison', desc: 'Compare AI, IT, cloud, and automation services side by side.' },
              { href: '/tools/ai-service-router', title: 'AI Service Router', desc: 'Find the right AI service for your use case in seconds.' },
              { href: '/tools/service-recommender', title: 'Service Recommender', desc: 'Get a ranked list of recommended services for your business challenge.' },
              { href: '/tools/health-check', title: 'Platform Status', desc: 'Run a free autonomous health check on Zion Tech Group infrastructure.' },
              { href: '/tools/analytics', title: 'Usage Analytics', desc: 'See how the free tools are being used across the platform.' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40 hover:bg-slate-800/60 transition-all duration-200 flex flex-col text-left"
              >
                <h2 className="text-lg font-semibold text-white mb-2">{tool.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{tool.desc}</p>
                <span className="mt-4 text-sm font-medium text-purple-400">Open tool →</span>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/contact/" className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity">
              Get Free Consultation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
