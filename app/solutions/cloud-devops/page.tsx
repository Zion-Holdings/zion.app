import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Solutions | Zion Tech Group',
    description: 'Cloud migration, DevOps automation, and infrastructure reliability solutions.',
    openGraph: {
    title: 'Cloud & DevOps Solutions | Zion Tech Group',
    description: 'Cloud and DevOps solutions for reliability and speed.',
    url: 'https://ziontechgroup.com/solutions/cloud-devops/',
    type: 'website',
  },
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & DevOps Solutions | Zion Tech Group',
    description: 'Cloud and DevOps solutions for reliability and speed.',
  },
    alternates: { canonical: '/solutions/cloud-devops/' },
};

export default function CloudDevOpsSolutionsPage() {
  return (
    <StandardPage
      title="Cloud & DevOps"
      subtitle="Modernize delivery with cloud-native infrastructure, CI/CD, and reliability practices."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Cloud & DevOps' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse cloud services', href: '/services?category=cloud', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services?category=cloud" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cloud</h3>
          <p className="text-slate-400 text-sm">Migration, cost optimization, and secure cloud architecture.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=devops" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">DevOps</h3>
          <p className="text-slate-400 text-sm">CI/CD, infrastructure as code, and platform engineering.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=observability" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Observability</h3>
          <p className="text-slate-400 text-sm">Metrics, logs, traces, and incident response readiness.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
      <div className="max-w-3xl mx-auto mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-3">Related resources</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/tools/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Developer Tools</h3>
            <p className="text-slate-400 text-xs">Free utilities for JSON, JWT, regex, QR, and text processing.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Use tools →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
