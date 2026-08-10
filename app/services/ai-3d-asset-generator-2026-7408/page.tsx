import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'AI 3D Asset Generator | Zion Tech Group',
  description: 'End-to-end ai 3d asset generator services: assessment, deployment, and managed operations.',
  alternates: { canonical: '/services/ai-3d-asset-generator-2026-7408/' },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">AI 3D Asset Generator</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
          End-to-end ai 3d asset generator services: assessment, deployment, and managed operations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Implementation', href: '/contact', desc: 'Production-ready deployment with governance.' },
            { title: 'Managed Support', href: '/contact', desc: '24/7 monitoring and incident response.' },
            { title: 'Automation', href: '/contact', desc: 'Workflow automation with measurable outcomes.' }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="glass-card p-6 block hover:border-purple-500/40 transition-colors">
              <h2 className="text-white font-semibold mb-2">{item.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              <span className="text-purple-400 text-sm mt-4 inline-block">Contact us →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  
      <Footer />
    </div>);
}
