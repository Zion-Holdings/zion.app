import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status | Zion Tech Group',
  description: 'Real-time status of Zion Tech Group services.',
  alternates: {
    canonical: '/status/',
  },
};

export default function StatusAlias() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">System Status</h1>
        <p className="text-slate-300 mb-6">Live platform health is available on the dedicated status page.</p>
        <a href="/status/" className="text-purple-400 hover:text-purple-300">Open Status →</a>
      </div>
    </main>
  );
}
