import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dashboard | Zion Tech Group',
  description: 'AI Agent Monitoring Dashboard - Monitor and manage your AI agents in real-time.',
  alternates: { canonical: '/dashboard/' },
  openGraph: {
    title: 'Dashboard | Zion Tech Group',
    description: 'AI Agent Monitoring Dashboard - Monitor and manage your AI agents in real-time.',
    url: 'https://ziontechgroup.com/dashboard/',
    type: 'page',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard | Zion Tech Group',
    description: 'AI Agent Monitoring Dashboard - Monitor and manage your AI agents in real-time.',
  },
};

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-6">AI Agent Dashboard</h1>
          <p className="text-slate-300 text-lg mb-8">
            Monitor and manage your AI agents from a centralized dashboard. Track performance,
            monitor autonomous workflows, and optimize your AI investments.
          </p>

          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Dashboard Features</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Real-time agent status monitoring</li>
              <li>• Performance metrics and analytics</li>
              <li>• Alert notifications for anomalies</li>
              <li>• Historical trend analysis</li>
              <li>• Multi-agent orchestration controls</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">Access Portal</h3>
              <Link href="/portal" className="text-purple-400 hover:underline">Login to agent portal →</Link>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">View Services</h3>
              <Link href="/services/" className="text-purple-400 hover:underline">AI Services →</Link>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
              <Link href="/configurator/" className="text-purple-400 hover:underline">Get started →</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
