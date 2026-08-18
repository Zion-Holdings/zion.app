import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Image to Base64 | Zion Tech Group',
  description: 'Convert images to Base64 strings for embedding in HTML, CSS, or JSON.',
  openGraph: {
    title: 'Image to Base64 | Zion Tech Group',
    description: 'Convert images to Base64 strings for embedding in HTML, CSS, or JSON.',
    url: 'https://ziontechgroup.com/tools/image-to-base64/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to Base64 | Zion Tech Group',
    description: 'Convert images to Base64 strings for embedding in HTML, CSS, or JSON.',
  },
  alternates: { canonical: '/tools/image-to-base64/' },
};

export default function Page() {
  return (
    <StandardPage
      title="Image to Base64"
      subtitle="Convert images to Base64 strings for embedding in HTML, CSS, or JSON."
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
            Use this tool when you need to inline small images in emails, HTML prototypes, or JSON payloads. Base64 avoids extra HTTP requests for tiny assets.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Upload an image file.</li>
            <li>Copy the generated Base64 string.</li>
            <li>Paste it into HTML, CSS, or JSON as needed.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON structure.</p>
            </a>
            <a href="/tools/base64-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Base64 Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode Base64 safely.</p>
            </a>
            <a href="/tools/qr-code-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">QR Code Generator</h3>
              <p className="text-slate-400 text-xs">Generate QR codes for links and data.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
