import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials | Zion Tech Group',
  description: 'Client outcomes from Zion Tech Group engagements: AI, IT, security, automation, and cloud.',
  openGraph: {
    title: 'Testimonials | Zion Tech Group',
    description: 'Real outcomes from Zion Tech Group clients.',
    url: 'https://ziontechgroup.com/testimonials/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | Zion Tech Group',
    description: 'Real outcomes from Zion Tech Group clients.',
  },
  alternates: { canonical: '/testimonials/' },
};


export default function TestimonialsPage() {
  return (
<>
    <StandardPage
      title={
        <>
          What clients say{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
            about Zion
          </span>
        </>
      }
      subtitle="Real outcomes, real teams, real contracts — from support automation to cloud efficiency and AI adoption."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Testimonials' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {(testimonials).map((t) => (
          <div key={t.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{t.avatar_emoji}</div>
              <div>
                <div className="text-white font-semibold">{t.client_name}</div>
                <div className="text-slate-400 text-xs">{t.role} · {t.company}</div>
              </div>
            </div>
            <div className="text-amber-300 text-xs mb-3 font-medium">
              {'★'.repeat(Math.max(0, Math.min(5, t.rating ?? 5)))}{'☆'.repeat(Math.max(0, 5 - Math.max(0, Math.min(5, t.rating ?? 5))))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">{t.review_text}</p>
            <div className="mt-5 pt-4 border-t border-slate-800">
              <Link href="/services/" className="text-purple-300 text-xs font-semibold hover:text-white">View similar services →</Link>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 border-t border-slate-800/60 pt-10">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-white font-semibold text-lg mb-2">Want similar results?</h3>
            <p className="text-slate-300 text-sm">Tell us your goal and we’ll return a short list of best-fit services with estimated ROI and timeline.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/services/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/20">
              Talk to an Engineer
            </Link>
            <Link href="/services/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-all">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-slate-400">
          <Link href="/services/" className="hover:text-purple-300 transition-colors">Our services →</Link>
          <Link href="/contact/" className="hover:text-purple-300 transition-colors">Contact us →</Link>
        </div>
      </section>
    </StandardPage>
  </>
  );
}