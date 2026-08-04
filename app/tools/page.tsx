import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free AI and IT tools from Zion Tech Group.',
  alternates: { canonical: '/tools/' },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Tools</h1>
        <p className="mt-4 text-slate-400">Practical utilities to speed up IT and security work.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/tools/json-formatter/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">JSON Formatter</h2>
            <p className="mt-2 text-sm text-slate-400">Format, validate, and minify JSON.</p>
          </Link>
          <Link href="/tools/base64/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Base64 Converter</h2>
            <p className="mt-2 text-sm text-slate-400">Encode and decode Base64 quickly.</p>
          </Link>
          <Link href="/tools/roi-calculator/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">ROI Calculator</h2>
            <p className="mt-2 text-sm text-slate-400">Estimate automation returns.</p>
          </Link>
          <Link href="/tools/unit-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Unit Converter</h2>
            <p className="mt-2 text-sm text-slate-400">Convert common IT units and formats.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
