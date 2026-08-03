import Link from 'next/link';

interface EnergyServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

export default function EnergyServiceTemplate({
  title,
  description,
  features,
  benefits,
}: EnergyServiceTemplateProps) {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚡</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
              <p className="text-slate-400 text-sm mt-1">Energy • Utilities</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">{description}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                {features.map((f, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1 shrink-0">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                {benefits.map((b, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at Contact for Quote</span>
            <a href={`mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(title)}`} className="btn-primary">Contact Us</a>
            <Link href="/services" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Browse Services →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
