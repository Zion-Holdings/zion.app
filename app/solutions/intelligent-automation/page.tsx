import Link from 'next/link';

export const metadata = {
  title: 'Intelligent Automation Suite | Zion Tech Group',
  description: 'End-to-end workflow automation with AI decision-making and human-in-the-loop controls.',
  alternates: { canonical: '/solutions/intelligent-automation' },
};

export default function Page() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Intelligent Automation Suite</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">End-to-end workflow automation with AI decision-making and human-in-the-loop controls.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div key="intelligent-automation-0" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Process mining</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="intelligent-automation-1" className="glass-card">
          <h3 className="font-semibold text-white mb-2">RPA orchestration</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="intelligent-automation-2" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Decision engine</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="intelligent-automation-3" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Audit trails</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
      </div>
    </div>
  );
}
