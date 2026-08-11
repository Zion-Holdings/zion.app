import { useEffect, useState } from 'react';


export const metadata = {
  title: 'Status | Zion Tech Group',
  description: 'Explore Status at Zion Tech Group. Enterprise AI, IT, cloud, security, automation, data, DevOps, blockchain, IoT, and Micro-SaaS services.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/status' },
};
export default function StatusPage() {
  const [up, setUp] = useState<boolean | null>(null);
  useEffect(() => {
    fetch('https://ziontechgroup.com')
      .then((r) => setUp(r.ok))
      .catch(() => setUp(false));
  }, []);
  return (
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
    </main>
  );
}
