import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Color Converter | Zion Tech Group',
  description: 'Convert between HEX, RGB, HSL, and other color formats for UI and design workflows.',
  openGraph: {
    title: 'Color Converter | Zion Tech Group',
    description: 'Convert between HEX, RGB, HSL, and other color formats.',
    url: 'https://ziontechgroup.com/tools/color-converter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Converter | Zion Tech Group',
    description: 'Convert between HEX, RGB, HSL, and other color formats.',
  },
  alternates: { canonical: '/tools/color-converter/' },
};

export default function ColorConverterPage() {
  return (
    <StandardPage
      title="Color Converter"
      subtitle="Convert between HEX, RGB, HSL, and other color formats for UI and design workflows."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Color Converter' },
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
            Use this tool when converting brand colors for web, mobile, or design tokens. It helps align teams on exact values and reduces copy-paste mistakes across stylesheets.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Formats</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>HEX for CSS and design files</li>
            <li>RGB for canvas, image pipelines, and native UI</li>
            <li>HSL for theme adjustments and accessibility tuning</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Tips</h2>
          <p className="text-slate-300">
            Check contrast against text colors before finalizing UI palettes. Keep a small set of canonical values in design tokens to avoid drift across components.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON structure.</p>
            </a>
            <a href="/tools/qr-code-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">QR Code Generator</h3>
              <p className="text-slate-400 text-xs">Generate QR codes for URLs and text.</p>
            </a>
            <a href="/tools/uuid-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">UUID Generator</h3>
              <p className="text-slate-400 text-xs">Generate UUIDs v4 instantly.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
