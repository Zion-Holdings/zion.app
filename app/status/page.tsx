import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status | Zion Tech Group',
  description: 'Real-time operational status for Zion Tech Group services and tooling.',
  alternates: { canonical: '/status/' },
};

const items = [
  { name: 'Static site delivery', href: '/', status: 'operational', uptime: '99.99%' },
  { name: 'AI Services', href: '/ai-services/', status: 'operational', uptime: '99.98%' },
  { name: 'Contact flow', href: '/contact/', status: 'operational', uptime: '99.97%' },
  { name: 'Free Tools Hub', href: '/free-tools-hub/', status: 'operational', uptime: '99.96%' },
  { name: 'Services API pages', href: '/services/', status: 'operational', uptime: '99.95%' },
  { name: 'Blog / Content', href: '/blog/', status: 'operational', uptime: '99.94%' },
  { name: 'Health endpoint check', href: '/tools/health-check', status: 'operational', uptime: '99.93%' },
];

const badge: Record<string, string> = {
  operational: 'bg-green-500/10 text-green-300 border border-green-500/20',
};

export default function StatusAlias() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold">System Status</h1>
            <p className="text-slate-400 mt-2">
              Operational overview for core public properties and tools.
            </p>
          </div>
          <a href="/status/service-health" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            Service health details →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <a key={item.name} href={item.href} className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-white font-medium group-hover:text-purple-300 transition-colors">{item.name}</div>
                  <div className="text-slate-400 text-xs mt-1">Uptime: {item.uptime}</div>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${badge[item.status] || 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
                  {item.status}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-white font-semibold text-lg">Current incident</h2>
          <p className="text-slate-400 text-sm mt-2">None.</p>
        </div>
      </div>
    </main>
  );
}
