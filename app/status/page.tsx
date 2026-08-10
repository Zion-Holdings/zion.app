import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
'use client';

import { useEffect, useState } from 'react';

export default function StatusPage() {
  const [up, setUp] = useState<boolean | null>(null);
  useEffect(() => {
    fetch('https://ziontechgroup.com')
      .then((r) => setUp(r.ok))
      .catch(() => setUp(false));
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">Site Status</h1>
        <p className="text-slate-300 mb-6">
          {up === null ? 'Checking...' : up ? 'All systems operational.' : 'Service interruption detected.'}
        </p>
        <p className="text-slate-400 text-sm">
          For immediate assistance contact <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13044640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a>.
        </p>
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
