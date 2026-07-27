import { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'IT Staff Augmentation with AI Copilots | Zion Tech Group',
  description:
    'High-output staff augmentation adds AI copilots, not just seats. Zion Tech Group combines senior delivery with autonomous tooling to ship faster.',
  openGraph: {
    title: 'IT Staff Augmentation with AI Copilots',
    description: 'Senior delivery paired with autonomous AI tooling for faster implementation.',
    url: 'https://ziontechgroup.com/services/ai-it-staff-augmentation',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/services/ai-it-staff-augmentation' },
};

export default function AiItStaffAugmentationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-24 space-y-10">
      <SiteBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'IT Staff Augmentation with AI Copilots', href: '/services/ai-it-staff-augmentation' },
        ]}
      />

      <header className="text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            IT Staff Augmentation with AI Copilots
          </span>
        </h1>
        <p className="text-slate-300 text-xl leading-relaxed mb-8">High-output staff augmentation adds AI copilots, not just seats. We combine senior delivery with autonomous tooling to ship faster.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/contact/" className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-semibold">Request Engagement</a>
          <a href="/services/" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Services</a>
          <a href="/careers/" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Careers</a>
        </div>
      </header>

      <section className="mt-24 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-white font-semibold mb-2">Engagement models</h2>
          <p className="text-slate-300 text-sm">Fixed-scope AI proof of concept, managed support automation retainer, or embedded team augmentation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-white font-semibold mb-2">Delivery model</h2>
          <p className="text-slate-300 text-sm">Senior engineers paired with AI-assisted workflows, reusable templates, and measurable acceptance criteria.</p>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to scale delivery?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Tell us your roadmap and constraints. We return a staffing and automation plan within days.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/contact/" className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-semibold">Contact Us</a>
          <a href="/free-consultation/" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Book Consultation</a>
        </div>
      </section>

      <footer className="mt-28 border-t border-slate-800 pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <div>
          <a className="font-semibold text-white" href="/">Zion Tech Group</a>
          <span className="ml-2 text-slate-500">AI & IT services for modern teams</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a consultation</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/services" className="hover:text-white transition-colors">Services</a>
        </div>
      </footer>
    </main>
  );
}
