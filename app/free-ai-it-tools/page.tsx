import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI & IT Tools | Zion Tech Group',
  description: 'Free developer tools from Zion Tech Group: JSON formatter, JWT decoder, regex tester, QR generator, and more.',
  openGraph: {
    title: 'Free AI & IT Tools | Zion Tech Group',
    description: 'Utilities for JSON, JWT, regex, UUID, QR, and text processing.',
    url: 'https://ziontechgroup.com/free-ai-it-tools/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI & IT Tools | Zion Tech Group',
    description: 'Utilities for JSON, JWT, regex, UUID, QR, and text processing.',
  },
  alternates: { canonical: '/free-ai-it-tools/' },
};


export default function FreeAiItToolsPage() {
  return (
<>
    <StandardPage
      title="Free AI & IT Tools"
      subtitle="Developer utilities built by Zion. No sign-up required."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
        { label: 'Free AI & IT Tools' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">
        Use these utilities to inspect, transform, and validate common formats without installing extra software.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <a href="/tools/json-formatter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON Formatter</h3>
          <p className="text-slate-400 text-sm">Format, minify, and validate JSON quickly.</p>
        </a>
        <a href="/tools/jwt-decoder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JWT Decoder</h3>
          <p className="text-slate-400 text-sm">Inspect header and payload without sending data anywhere.</p>
        </a>
        <a href="/tools/regex-tester/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Regex Tester</h3>
          <p className="text-slate-400 text-sm">Test patterns and matches in real time.</p>
        </a>
        <a href="/tools/qr-code-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">QR Code Generator</h3>
          <p className="text-slate-400 text-sm">Generate QR codes for URLs and text.</p>
        </a>
        <a href="/tools/word-counter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Word Counter</h3>
          <p className="text-slate-400 text-sm">Count words, characters, and sentences.</p>
        </a>
        <a href="/tools/uuid-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">UUID Generator</h3>
          <p className="text-slate-400 text-sm">Generate UUIDs v4 instantly.</p>
        </a>
      </div>
    </StandardPage>
  </>
  );
}