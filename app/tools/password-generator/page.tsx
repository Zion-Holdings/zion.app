import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Password Generator | Zion Tech Group',
  description: 'Generate strong, customizable passwords for accounts, APIs, and admin users.',
  openGraph: {
    title: 'Password Generator | Zion Tech Group',
    description: 'Generate strong, customizable passwords for accounts, APIs, and admin users.',
    url: 'https://ziontechgroup.com/tools/password-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Password Generator | Zion Tech Group',
    description: 'Generate strong, customizable passwords for accounts, APIs, and admin users.',
  },
  alternates: { canonical: '/tools/password-generator/' },
};


export default function Page() {
  return (
<>
    <StandardPage
      title="Password Generator"
      subtitle="Generate strong, customizable passwords for accounts, APIs, and admin users."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Password Generator' },
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
            Use this tool when you need to generate strong passwords for user accounts, service credentials, API keys, or admin access. It helps enforce complexity without reusing patterns.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Common use cases</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Creating passwords for new user accounts</li>
            <li>Rotating service and database credentials</li>
            <li>Generating API keys and integration tokens</li>
            <li>Setting temporary admin passwords</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Security notes</h2>
          <p className="text-slate-300">
            Use at least 16 characters for admin and service accounts. Store generated passwords in a password manager. Avoid reusing passwords across systems.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/hash-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Hash Generator</h3>
              <p className="text-slate-400 text-xs">Generate hash digests for verification workflows.</p>
            </a>
            <a href="/tools/base64-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Base64 Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode Base64 safely.</p>
            </a>
            <a href="/tools/uuid-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">UUID Generator</h3>
              <p className="text-slate-400 text-xs">Create UUIDs for identifiers and tokens.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  </>
  );
}