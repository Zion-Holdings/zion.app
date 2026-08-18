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
  alternates: { canonical: '/tools/hash-generator/' },
};

const SCRIPT = `
async function generate() {
  const input = document.getElementById('input').value;
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const algorithms = ['SHA-1','SHA-256','SHA-384','SHA-512'];
  for (const algo of algorithms) {
    const subtleAlgo = algo.replace('-', '');
    const hashBuffer = await crypto.subtle.digest(subtleAlgo, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    document.getElementById(algo.toLowerCase().replace('-','')).value = hashArray.map(b => b.toString(16).padStart(2,'0')).join('');
  }
}
`;

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
        { label: 'Back to Tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 mb-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">Input Text</label>
          <textarea id="input" rows={4} placeholder="Enter text to hash..."
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white font-mono text-sm mb-4"
            onInput="generate()"></textarea>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-slate-400">SHA-1</label>
              <input id="sha1" readOnly className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 font-mono text-xs" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400">SHA-256</label>
              <input id="sha256" readOnly className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 font-mono text-xs" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400">SHA-384</label>
              <input id="sha384" readOnly className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 font-mono text-xs" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400">SHA-512</label>
              <input id="sha512" readOnly className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 font-mono text-xs" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-3">About These Algorithms</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><span className="text-indigo-400 font-medium">SHA-1</span> — 160-bit hash. Deprecated for security, still used in Git.</li>
            <li><span className="text-indigo-400 font-medium">SHA-256</span> — 256-bit hash. Gold standard for integrity verification.</li>
            <li><span className="text-indigo-400 font-medium">SHA-384 / SHA-512</span> — Higher security margin for sensitive applications.</li>
          </ul>
          <p className="text-slate-400 text-sm mt-4">All hashing is done locally using the Web Crypto API. Your data never leaves your device.</p>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
    </StandardPage>
  );
}
