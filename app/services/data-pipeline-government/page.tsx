import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Professional Data Pipeline Solutions | Zion Tech Group',
  description: 'Professional data pipeline solutions for government. Get expert implementation, support, and results.',
  alternates: { canonical: '/services/data-pipeline/government/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">Professional Data Pipeline Solutions</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">Professional data pipeline solutions for government. Get expert implementation, support, and results.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="glass-card p-6">
            <h3 className="text-white font-semibold mb-2">Benefits</h3>
            <ul className="text-slate-300 text-sm space-y-2 list-disc pl-4">
              <li>Reduce government costs by 30-50%</li>
          <li>Improve government efficiency by 40%</li>
          <li>Scale data pipeline without infrastructure limits</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white font-semibold mb-2">Implementation</h3>
            <p className="text-slate-300 text-sm">Typical timeline: 3 weeks</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-white font-semibold mb-2">ROI Potential</h3>
            <p className="text-slate-300 text-sm">44% cost reduction</p>
          </div>
        </div>
        <Link href="/contact/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>
      </div>
    <section className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
<h2 className="text-xl font-bold text-white mb-2">Why it matters</h2>
<p className="text-slate-300">This page is part of Zion Tech Group's core catalog. It connects visitors to the right service, tool, or workflow without leaving the site.</p>
<ul className="list-disc pl-6 text-slate-300 space-y-1">
<li>Clear next steps aligned to the current page topic</li>
<li>Direct paths to contact, proposal, or demo flows</li>
<li>Consistent navigation and footer on every route</li>
</ul>
</section>
</main>
  
      <Footer />
    </div>);
}
