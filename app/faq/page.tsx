'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQS = [
  { q: 'What services do you offer?', a: 'Managed IT, AI automation, cybersecurity, cloud, networking, and consulting.' },
  { q: 'Do you support remote teams?', a: 'Yes, we support hybrid and remote IT environments globally.' },
  { q: 'How fast is onboarding?', a: 'Most clients are onboarded within 48–72 hours.' },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {FAQS.map((item) => (
            <div key={item.q} className="glass-card p-6">
              <button className="w-full text-left flex justify-between items-center" onClick={() => setOpen(open === item.q ? null : item.q)}>
                <h3 className="text-white font-semibold">{item.q}</h3>
                <span className="text-purple-400">{open === item.q ? '−' : '+'}</span>
              </button>
              {open === item.q && <p className="text-slate-400 mt-3 text-sm">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
