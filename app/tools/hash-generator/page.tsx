import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Hash Generator | Zion Tech Group',
    description: 'Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text input. Client-side only.',
    openGraph: {
    title: 'Hash Generator | Zion Tech Group',
    description: 'Free online hash generator — SHA-1, SHA-256, SHA-384, SHA-512.',
    url: 'https://ziontechgroup.com/tools/hash-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hash Generator | Zion Tech Group',
    description: 'Free online hash generator — SHA-1, SHA-256, SHA-384, SHA-512.',
  },
    alternates: { canonical: '/tools/hash-generator/' },
};

export default function HashGeneratorPage() {
  return (
    <StandardPage
      title="Hash Generator"
      subtitle="Generate cryptographic hashes from any text — runs entirely in your browser."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Hash Generator' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Hashing algorithms</h2>
          <p className="text-slate-300 text-sm mb-4">Client-side hashing with the Web Crypto API keeps your data local while producing reproducible digests.</p>
          <ul className="space-y-2 text-slate-400 text-sm list-disc pl-5">
            <li>SHA-1: legacy, still useful for Git and non-security checksums.</li>
            <li>SHA-256: modern baseline for integrity verification.</li>
            <li>SHA-384 / SHA-512: larger digests for sensitive verification workflows.</li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Browse services</h3>
            <p className="text-slate-400 text-xs">Security, automation, and managed AI services.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">View services →</span>
          </Link>
          <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Talk to an engineer</h3>
            <p className="text-slate-400 text-xs">Need validation pipelines or security automation? Contact us.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Contact us →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
