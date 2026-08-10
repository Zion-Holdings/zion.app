import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Configurator',
  description: 'Configure your custom AI & IT solutions',
  alternates: { canonical: '/ai/solutions-configurator' },};

export default function SolutionsConfiguratorPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Solutions Configurator</h1>
        <p className="text-slate-400">Custom AI & IT solutions configuration coming soon.</p>
        <p className="text-slate-500 text-sm mt-4">Use /configurator for the active configurator.</p>
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
