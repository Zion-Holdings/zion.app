// app/industries/page.tsx — Industries We Serve
'use client';

import Link from 'next/link';
import industries from '@/app/data/industries';

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
        <div className="relative container-page pt-20 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">Industries We Serve</h1>
            <p className="text-slate-400">
              AI & IT solutions across 9 industries—healthcare, finance, manufacturing, retail, education, legal, energy, logistics, and technology.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 pb-20">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {industries.map((item) => (
              <Link key={item.key} href={item.href} className="group block rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-purple-500/40 hover:bg-slate-800/60 transition-all">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{item.label}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">AI, automation, cloud, security, and data solutions tailored for this vertical.</p>
                <div className="mt-3 text-xs text-purple-400 group-hover:text-purple-300 font-medium">Explore solutions →</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14 space-x-4">
            <Link href="/services" className="btn-primary">Browse All Services</Link>
            <Link href="/contact" className="btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
