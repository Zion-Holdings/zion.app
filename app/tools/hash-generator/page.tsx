import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hash Generator | Zion Tech Group',
  description: 'Generate and compare SHA-256, SHA-512, MD5, and other hash digests for verification and checksums.',
  openGraph: {
    title: 'Hash Generator | Zion Tech Group',
    description: 'Generate and compare hash digests for verification and checksums.',
    url: 'https://ziontechgroup.com/tools/hash-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hash Generator | Zion Tech Group',
    description: 'Generate and compare hash digests for verification and checksums.',
  },
  alternates: { canonical: '/tools/hash-generator/' },
};

export default function HashGeneratorPage() {
  return (
    <StandardPage
      title="Hash Generator"
      subtitle="Generate and compare SHA-256, SHA-512, MD5, and other hash digests for verification and checksums."
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
      <div className="max-w-5xl mx-auto space-y-6">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">When to use</h2>
          <p className="text-slate-300">
            Use this tool when verifying file integrity, comparing payloads, or generating checksums for downloads and artifacts. It is also useful for debugging token formats and data consistency.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Algorithms</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>MD5 for non-cryptographic checksums</li>
            <li>SHA-1 for legacy compatibility checks</li>
            <li>SHA-256 and SHA-512 for security-sensitive verification</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Security notes</h2>
          <p className="text-slate-300">
            Do not use MD5 or SHA-1 for password storage or tamper protection. Prefer SHA-256 or stronger for new designs.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/base64-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Base64 Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode Base64 safely.</p>
            </a>
            <a href="/tools/uuid-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">UUID Generator</h3>
              <p className="text-slate-400 text-xs">Generate UUIDs v4 instantly.</p>
            </a>
            <a href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON structure.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
