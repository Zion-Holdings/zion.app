import Link from 'next/link';

export const metadata = {
  title: 'Cyber Threat Intelligence | Zion Tech Group',
  description: 'Autonomous threat detection, SOC automation, and incident response.',
  alternates: { canonical: '/solutions/cyber-threat-intelligence' },
};

export default function Page() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Cyber Threat Intelligence</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">Autonomous threat detection, SOC automation, and incident response.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div key="cyber-threat-intelligence-0" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Threat hunting</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="cyber-threat-intelligence-1" className="glass-card">
          <h3 className="font-semibold text-white mb-2">SOAR playbooks</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="cyber-threat-intelligence-2" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Vulnerability prioritization</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="cyber-threat-intelligence-3" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Incident response</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
      </div>
    </div>
  );
}
