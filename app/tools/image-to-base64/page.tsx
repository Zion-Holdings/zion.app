import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Image to Base64 | Zion Tech Group',
  description: 'Convert images to Base64 data URIs for HTML, CSS, and API payloads.',
  openGraph: {
    title: 'Image to Base64 | Zion Tech Group',
    description: 'Convert images to Base64 data URIs for HTML, CSS, and API payloads.',
    url: 'https://ziontechgroup.com/tools/image-to-base64/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to Base64 | Zion Tech Group',
    description: 'Convert images to Base64 data URIs for HTML, CSS, and API payloads.',
  },
  alternates: { canonical: '/tools/image-to-base64/' },
};

export default function ImageToBase64Page() {
  return (
    <StandardPage
      title="Image to Base64"
      subtitle="Convert images to Base64 data URIs for HTML, CSS, and API payloads."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Image to Base64' },
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
            Use this tool when embedding small images directly into HTML emails, markdown, or CSS backgrounds without external file hosting. It reduces request count and simplifies single-file distribution.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Upload an image or paste an image URL.</li>
            <li>Choose output format and MIME type.</li>
            <li>Copy the data URI for use in HTML, CSS, or JSON.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Notes</h2>
          <p className="text-slate-300">
            Prefer external image hosting for large media. Data URIs are best for icons, small illustrations, and single-file demos.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/base64-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Base64 Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode Base64 safely.</p>
            </a>
            <a href="/tools/qr-code-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">QR Code Generator</h3>
              <p className="text-slate-400 text-xs">Generate QR codes for URLs and text.</p>
            </a>
            <a href="/tools/url-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">URL Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode URLs safely.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
