'use client';

import Link from 'next/link';
import { testimonials, type Testimonial } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container-page py-20">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs">💬</span>
            <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Client Voices</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What clients say <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">about Zion</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real outcomes, real teams, real contracts — from support automation to cloud efficiency and AI adoption.
          </p>
        </div>

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
              <div className="text-amber-300 text-xs mb-3 font-medium">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</div>
              <p className="text-slate-300 leading-relaxed text-sm">{t.review_text}</p>
              <div className="mt-5 pt-4 border-t border-slate-800">
                <Link href="/case-studies" className="text-purple-300 text-xs font-semibold hover:text-white">View similar case studies →</Link>
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
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/20">
                Talk to an Engineer
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-all">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
