import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'JWT Decoder — Zion Tech Group',
  description: 'Decode JWT tokens to inspect header, payload, and signature data securely in your browser.',
  keywords: ['JWT decoder', 'JWT inspector', 'token decoder', 'developer tools'],
  openGraph: {
    title: 'JWT Decoder — Zion Tech Group',
    description: 'Decode JWT tokens to inspect header, payload, and signature data securely in your browser.',
    url: 'https://ziontechgroup.com/tools/jwt-decoder/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JWT Decoder — Zion Tech Group',
    description: 'Decode JWT tokens to inspect header, payload, and signature data securely in your browser.',
  },
  alternates: { canonical: '/tools/jwt-decoder/' },
  robots: { index: true, follow: true },
};


export default function JwtDecoderPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'JWT Decoder' },
  ];

  return (
<>
    <StandardPage
      title="JWT Decoder"
      subtitle="Inspect JWT header, payload, and signature details safely."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Talk to us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Inspect claims</h3>
          <p className="text-slate-400 text-sm">View issuer, audience, expiry, and custom claims without backend access.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Debug auth flows</h3>
          <p className="text-slate-400 text-sm">Spot scope, role, and token lifecycle issues quickly during development.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Stay private</h3>
          <p className="text-slate-400 text-sm">Decode locally and avoid pasting sensitive tokens into unknown sites.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Use cases</h3>
          <p className="text-slate-400 text-sm">Auth debugging, integration QA, and access-policy review.</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Security reminders</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Always decode tokens locally; never paste secrets into untrusted sites.</li>
          <li>Check expiry, issuer, and audience claims before trusting tokens.</li>
          <li>Inspect scopes and roles to catch over-permissioned access.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/tools/" className="btn-primary text-center">All tools</a>
          <a href="/contact/" className="btn-secondary text-center">Talk to us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}