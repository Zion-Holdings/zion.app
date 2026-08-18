import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'JWT Decoder — Zion Tech Group',
  description: 'Decode JWT tokens to inspect header, payload, and signature data securely in your browser.',
  alternates: { canonical: '/tools/jwt-decoder/' },
  robots: { index: true, follow: true },
};

export default function JwtDecoderPage() {
  const breadcrumbs = [
    { name: 'Tools', href: '/tools/' },
    { name: 'JWT Decoder', href: '/tools/jwt-decoder/' },
  ];

  return (
    <StandardPage
      title="JWT Decoder"
      description="Inspect JWT header, payload, and signature details safely."
      breadcrumbs={breadcrumbs}
      cta={{ label: 'Browse all tools', href: '/tools/' }}
    >
      <p>Paste a JWT to decode its claims, expiry, issuer, and scopes without sending secrets to a backend.</p>
    </StandardPage>
  );
}
