import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

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
    <div className="max-w-5xl mx-auto space-y-6">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">When to use</h2>
          <p className="text-slate-300">
            Use Image to Base64 when you need reliable encoding, validation, or conversion in developer workflows, automation scripts, and QA checks. It reduces manual errors and keeps formatting consistent across environments.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Open the tool and paste or select your input.</li>
            <li>Choose the target format or operation.</li>
            <li>Review the generated result.</li>
            <li>Copy the output for downstream use.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Tips</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Validate inputs before converting large payloads.</li>
            <li>Keep a repeatable format across systems to avoid drift.</li>
            <li>Use this alongside related tools for end-to-end workflows.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link href="/tools/word-counter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Word Counter</h3>
              <p className="text-slate-400 text-xs">Count words and characters.</p>
            </Link>
            <Link href="/tools/uuid-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">UUID Generator</h3>
              <p className="text-slate-400 text-xs">Generate UUIDs for identifiers.</p>
            </Link>
            <Link href="/tools/qr-code-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">QR Code Generator</h3>
              <p className="text-slate-400 text-xs">Generate QR codes for URLs and text.</p>
            </Link>
          </div>
        </section>
      </div>
  );
}