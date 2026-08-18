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
  alternates: { canonical: '/tools/base64-encoder/' },
};

const SCRIPT = `
function encode() {
  const input = document.getElementById('input').value;
  try {
    const encoded = btoa(unescape(encodeURIComponent(input)));
    document.getElementById('output').value = encoded;
    document.getElementById('error').style.display = 'none';
  } catch(e) {
    document.getElementById('error').textContent = 'Error: ' + e.message;
    document.getElementById('error').style.display = 'block';
  }
}
function decode() {
  const input = document.getElementById('output').value;
  try {
    const decoded = decodeURIComponent(escape(atob(input)));
    document.getElementById('input').value = decoded;
    document.getElementById('error').style.display = 'none';
  } catch(e) {
    document.getElementById('error').textContent = 'Error: Invalid Base64 — ' + e.message;
    document.getElementById('error').style.display = 'block';
  }
}
function swap() {
  const tmp = document.getElementById('input').value;
  document.getElementById('input').value = document.getElementById('output').value;
  document.getElementById('output').value = tmp;
}
function clearAll() {
  document.getElementById('input').value = '';
  document.getElementById('output').value = '';
  document.getElementById('error').style.display = 'none';
}
`;

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
        { label: 'Back to Tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 mb-6">
          <div className="flex gap-2 mb-4 flex-wrap">
            <button onClick="encode()" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-sm font-medium">Encode →</button>
            <button onClick="decode()" className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg text-white text-sm font-medium">← Decode</button>
            <button onClick="swap()" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-medium">⇄ Swap</button>
            <button onClick="clearAll()" className="px-4 py-2 bg-red-600/80 hover:bg-red-500 rounded-lg text-white text-sm font-medium">Clear</button>
          </div>
          <div id="error" className="bg-red-900/50 border border-red-700 rounded-lg px-3 py-2 text-red-300 text-sm mb-4" style={{display:'none'}}></div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Plain Text</label>
              <textarea id="input" rows={8} placeholder="Type or paste text here..."
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white font-mono text-sm"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Base64</label>
              <textarea id="output" rows={8} placeholder="Base64 output..."
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white font-mono text-sm"></textarea>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-3">About Base64</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><span className="text-indigo-400 font-medium">What it does</span> — Encodes binary data as ASCII text using 64 characters (A-Z, a-z, 0-9, +, /).</li>
            <li><span className="text-indigo-400 font-medium">Common uses</span> — Data URIs in CSS/HTML, email attachments (MIME), API tokens, basic obfuscation.</li>
            <li><span className="text-indigo-400 font-medium">Padding</span> — Base64 strings end with '=' to make length a multiple of 4.</li>
            <li><span className="text-indigo-400 font-medium">URL-safe</span> — Replace + with - and / with _ for use in URLs.</li>
          </ul>
          <p className="text-slate-400 text-sm mt-4">All encoding/decoding happens locally in your browser. No data is transmitted.</p>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
    </StandardPage>
  );
}
