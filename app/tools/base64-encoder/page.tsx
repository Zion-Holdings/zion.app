import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Base64 Encoder/Decoder | Zion Tech Group',
    description: 'Encode and decode Base64 strings online. Supports UTF-8 text and URL-safe variants.',
    openGraph: {
    title: 'Base64 Encoder/Decoder | Zion Tech Group',
    description: 'Free online Base64 encode and decode tool with UTF-8 support.',
    url: 'https://ziontechgroup.com/tools/base64-encoder/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 Encoder/Decoder | Zion Tech Group',
    description: 'Free online Base64 encode and decode tool with UTF-8 support.',
  },
    alternates: { canonical: '/tools/base64-encoder/' },
};

export default function Base64EncoderPage() {
  return (
    <StandardPage
      title="Base64 Encoder/Decoder"
      subtitle="Encode and decode Base64 strings with full UTF-8 support."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Base64 Encoder' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">About Base64</h2>
          <p className="text-slate-300 text-sm mb-4">Base64 encodes binary data as ASCII text using 64 characters (A-Z, a-z, 0-9, +, /). It is common in data URIs, email attachments, API tokens, and basic obfuscation.</p>
          <ul className="space-y-2 text-slate-400 text-sm list-disc pl-5">
            <li>UTF-8 safe encode/decode with URL-safe variants.</li>
            <li>Local execution in browser; no data is transmitted.</li>
            <li>Padding rules and length constraints validated in UI.</li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Browse services</h3>
            <p className="text-slate-400 text-xs">AI, cloud, security, and data services with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">View services →</span>
          </Link>
          <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Talk to an engineer</h3>
            <p className="text-slate-400 text-xs">Need an integration or internal tooling project? Contact us.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Contact us →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}