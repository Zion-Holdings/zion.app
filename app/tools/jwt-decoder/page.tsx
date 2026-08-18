import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'JWT Decoder — Zion Tech Group',
  description: 'Decode JWT tokens to inspect header, payload, and signature data securely in your browser.',
  alternates: { canonical: '/tools/jwt-decoder/' },
  robots: { index: true, follow: true },
};

export default function JwtDecoderPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'JWT Decoder' },
  ];

  return (
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
    </StandardPage>
  );
}
