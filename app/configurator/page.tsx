import Link from 'next/link';

export const metadata = {
  title: 'Solution Configurator | Zion Tech Group',
  description: 'Configure your ideal AI and IT solution stack.',
};

export default function ConfiguratorPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">Solution Configurator</h1>
        <p className="text-slate-400 mb-6">Design your ideal AI and IT solution stack in minutes.</p>
        <div className="glass-card p-6">
          <p className="text-slate-300">This configurator is coming soon. Contact us for a custom solution design.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/contact/" className="btn-primary">Contact Sales</Link>
            <Link href="/services/" className="btn-secondary">Browse Services</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
