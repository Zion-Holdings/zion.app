
import Link from 'next/link';

export const metadata = { title: 'Innovation Bundles', description: 'Curated bundles of AI and IT services at discounted prices. Combine solutions for maximum impact.', alternates: { canonical: 'https://ziontechgroup.com/innovation-bundles/' } };

export default function InnovationBundlesPage() {
  const bundles = [
    { name: 'AI Starter Bundle', price: '$997/mo', original: '$1,497', savings: '33%', services: ['AI Chatbot Builder', 'Email Automation', 'Analytics Dashboard', 'Basic Support'], emoji: '🚀' },
    { name: 'Cloud Migration Bundle', price: '$4,997/mo', original: '$7,497', savings: '33%', services: ['Cloud Infrastructure', 'Data Migration', 'Security Audit', 'DevOps Setup', 'Training'], emoji: '☁️' },
    { name: 'Cybersecurity Bundle', price: '$3,497/mo', original: '$5,247', savings: '33%', services: ['Penetration Testing', 'SIEM Setup', 'DLP Implementation', 'Compliance Audit', '24/7 Monitoring'], emoji: '🔒' },
    { name: 'Digital Transformation Bundle', price: '$9,997/mo', original: '$14,997', savings: '33%', services: ['AI Platform', 'Cloud Migration', 'Process Automation', 'Data Analytics', 'Change Management'], emoji: '🔄' },
    { name: 'Healthcare AI Bundle', price: '$7,997/mo', original: '$11,997', savings: '33%', services: ['AI Diagnostics', 'EHR Integration', 'HIPAA Compliance', 'Telemedicine', 'Patient Analytics'], emoji: '🏥' },
    { name: 'Enterprise Full Stack', price: '$19,997/mo', original: '$29,997', savings: '33%', services: ['All AI Services', 'Cloud Infrastructure', 'Cybersecurity', 'DevOps', '24/7 Support', 'Dedicated CTO'], emoji: '🏢' },
  ];
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Innovation Bundles</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Curated Service Bundles</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Combine complementary AI and IT services at discounted prices. Save up to 33% vs. buying individually.</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bundles.map((b, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{b.emoji}</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">Save {b.savings}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{b.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{b.price}</span>
                  <span className="text-sm text-slate-500 line-through">{b.original}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {b.services.map((s, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-purple-400">✓</span> {s}
                    </li>
                  ))}
                </ul>
                <Link href="/consultation" className="mt-4 block w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-center text-sm font-semibold text-white">
                  Get This Bundle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
