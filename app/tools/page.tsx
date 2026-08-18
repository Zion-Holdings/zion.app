import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free developer tools and utilities from Zion Tech Group.',
  openGraph: {
    title: 'Tools | Zion Tech Group',
    description: 'Utilities for JSON, JWT, regex, UUID, QR, and text processing.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools | Zion Tech Group',
    description: 'Utilities for JSON, JWT, regex, UUID, QR, and text processing.',
  },
  alternates: { canonical: '/tools/' },
};


export default function ToolsPage() {
  return (
    <StandardPage
      title="Developer Tools"
      subtitle="Free utilities built by Zion. No sign-up required."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
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
        <a href="/tools/color-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Color Converter</h3>
          <p className="text-slate-400 text-sm">Convert between HEX, RGB, and HSL with live preview.</p>
        </a>
        <a href="/tools/hash-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Hash Generator</h3>
          <p className="text-slate-400 text-sm">Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes.</p>
        </a>
        <a href="/tools/timestamp-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Timestamp Converter</h3>
          <p className="text-slate-400 text-sm">Convert Unix timestamps to dates and vice versa.</p>
        </a>
        <a href="/tools/base64-encoder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Base64 Encoder</h3>
          <p className="text-slate-400 text-sm">Encode and decode Base64 with UTF-8 support.</p>
        </a>
        <a href="/tools/url-encoder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">URL Encoder</h3>
          <p className="text-slate-400 text-sm">Encode and decode URLs with UTF-8 support.</p>
        </a>
        <a href="/tools/password-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Password Generator</h3>
          <p className="text-slate-400 text-sm">Generate secure, customizable passwords.</p>
        </a>
        <a href="/tools/json-diff/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON Diff</h3>
          <p className="text-slate-400 text-sm">Compare two JSON objects and highlight differences.</p>
        </a>
        <a href="/tools/markdown-previewer/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Markdown Previewer</h3>
          <p className="text-slate-400 text-sm">Preview markdown rendering in real-time.</p>
        </a>
        <a href="/tools/jwt-decoder/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JWT Decoder Pro</h3>
          <p className="text-slate-400 text-sm">Decode JWT tokens with signature verification.</p>
        </a>
        <a href="/tools/regex-tester/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Regex Tester Pro</h3>
          <p className="text-slate-400 text-sm">Test regex patterns with match highlighting.</p>
        </a>
        <a href="/tools/json-formatter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON Formatter Pro</h3>
          <p className="text-slate-400 text-sm">Format, minify, and validate JSON with syntax highlighting.</p>
        </a>
        <a href="/tools/qr-code-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">QR Code Generator Pro</h3>
          <p className="text-slate-400 text-sm">Generate and download QR codes instantly.</p>
        </a>
        <a href="/tools/image-to-base64/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Image to Base64</h3>
          <p className="text-slate-400 text-sm">Convert images to base64 strings.</p>
        </a>
        <a href="/tools/cron-parser/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cron Parser</h3>
          <p className="text-slate-400 text-sm">Parse and explain cron expressions.</p>
        </a>
        <a href="/tools/uuid-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">UUID Generator</h3>
          <p className="text-slate-400 text-sm">Generate UUID v4 identifiers instantly.</p>
        </a>
        <a href="/tools/word-counter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Word Counter</h3>
          <p className="text-slate-400 text-sm">Count words, characters, and reading time.</p>
        </a>
        <a href="/tools/excel-to-json/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Excel to JSON</h3>
          <p className="text-slate-400 text-sm">Convert CSV/TSV data to JSON.</p>
        </a>
        <a href="/tools/yaml-to-json/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">YAML to JSON</h3>
          <p className="text-slate-400 text-sm">Convert YAML to JSON instantly.</p>
        </a>
        <a href="/tools/password-strength/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Password Strength</h3>
          <p className="text-slate-400 text-sm">Analyze password strength and crack time.</p>
        </a>
        <a href="/tools/json-to-yaml/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JSON to YAML</h3>
          <p className="text-slate-400 text-sm">Convert JSON to YAML instantly.</p>
        </a>
        <a href="/tools/blog-post-generator/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Blog Post Generator</h3>
          <p className="text-slate-400 text-sm">Generate blog outlines and introductions.</p>
        </a>
        <a href="/tools/color-contrast/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Color Contrast Checker</h3>
          <p className="text-slate-400 text-sm">Check WCAG color contrast ratios.</p>
        </a>
        <a href="/tools/timestamp-to-cron/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Timestamp to Cron</h3>
          <p className="text-slate-400 text-sm">Convert timestamps to cron expressions.</p>
        </a>
        <a href="/tools/mime-lookup/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">MIME Type Lookup</h3>
          <p className="text-slate-400 text-sm">Look up MIME types by extension.</p>
        </a>
        <a href="/tools/number-base-converter/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Number Base Converter</h3>
          <p className="text-slate-400 text-sm">Convert between binary, octal, decimal, hex.</p>
        </a>
        <a href="/tools/text-to-speech/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Text to Speech</h3>
          <p className="text-slate-400 text-sm">Convert text to speech with multiple voices.</p>
        </a>
        <a href="/tools/jwt-decoder-pro/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">JWT Decoder Pro</h3>
          <p className="text-slate-400 text-sm">Decode JWT with signature verification.</p>
        </a>
        <a href="/tools/css-minifier/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">CSS Minifier</h3>
          <p className="text-slate-400 text-sm">Minify and compress CSS code.</p>
        </a>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Tooling philosophy</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Built for speed with no sign-up or backend dependency.</li>
          <li>Privacy-first: inputs stay in your browser and are never stored.</li>
          <li>Expanded based on real developer workflow needs.</li>
          <li>Request new utilities through our contact form.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Request a tool</a>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Explore related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Enterprise Services</h3>
            <p className="text-slate-400 text-xs mb-3">AI, IT, security, and data programs with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/solutions/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Industry Solutions</h3>
            <p className="text-slate-400 text-xs mb-3">Purpose-built AI and IT solutions by industry.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View solutions →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}