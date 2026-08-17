import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What clients say about Zion | Zion Tech Group',
  description: 'Real outcomes, real teams, real contracts — from support automation to cloud efficiency and AI adoption.',
  alternates: { canonical: '/testimonials/' },
};

export default function TestimonialsPage() {
  return (
    <PageTemplate
      title="What clients say about Zion"
      description="Real outcomes, real teams, real contracts — from support automation to cloud efficiency and AI adoption."
      category="Client Voices"
      heroIcon="💬"
      actions={[
        { label: 'View Case Studies', href: '/case-studies', style: 'secondary' },
        { label: 'Contact us', href: '/contact', style: 'primary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Testimonials', href: '/testimonials' },
      ]}
      layout="hero"
      showBottomCta={false}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="glass-card p-6 hover:border-purple-500/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{t.avatar_emoji}</div>
              <div>
                <div className="text-white font-semibold">{t.client_name}</div>
                <div className="text-slate-400 text-xs">{t.role} · {t.company}</div>
              </div>
            </div>
            <div className="text-amber-300 text-xs mb-3 font-medium">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
            <p className="text-slate-300 leading-relaxed text-sm">{t.review_text}</p>
            <div className="mt-5 pt-4 border-t border-slate-800">
              <Link href="/case-studies" className="text-purple-300 text-xs font-semibold hover:text-white">View similar case studies →</Link>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
