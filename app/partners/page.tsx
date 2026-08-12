import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Partner with Zion Tech Group. Technology alliances, resellers, and referral partnerships.',
  alternates: { canonical: '/partners/' },

  openGraph: {
    title: 'Partners',
    description: 'Partner with Zion Tech Group. Technology alliances, resellers, and referral partnerships.',
    url: 'https://ziontechgroup.com/partners/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <JsonLd data={@context: "https://schema.org", @type: "WebPage", name: "Partners", description: "Partner with Zion Tech Group. Technology alliances, resellers, and referral partnerships.", url: "https://ziontechgroup.com/partners/"} />
      <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Partners
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Build with Zion Tech Group through technology alliances, reseller programs,
            and referral partnerships.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-20">
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Technology Alliances',
                desc: 'Integrate your platform with our AI, cloud, and security stacks.',
              },
              {
                title: 'Reseller Program',
                desc: 'Offer Zion services under your brand with margin and co-sell support.',
              },
              {
                title: 'Referral Partnerships',
                desc: 'Send leads and earn rewards for qualified opportunities.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                <Link href="/contact/" className="text-purple-300 text-sm hover:underline">
                  Partner Inquiry →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Proven Delivery', desc: ' Hundreds of engagements across AI, cloud, and security.' },
              { title: 'US-Based Team', desc: 'Same-timezone collaboration with clear escalation paths.' },
              { title: 'Joint GTM Support', desc: 'Co-branded assets, case studies, and demand generation.' },
              { title: 'Clear Economics', desc: 'Transparent margin and reward models for every partner tier.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-purple-400 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-10 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Tell us about your company and partnership goals. We’ll respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary">
              Partner Inquiry →
            </Link>
            <Link href="/services/" className="btn-secondary">
              Browse Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
