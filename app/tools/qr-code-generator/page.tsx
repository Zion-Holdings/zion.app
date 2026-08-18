import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'QR Code Generator — Zion Tech Group',
  description: 'Generate QR codes for URLs, text, and contact data. Download PNGs for print and web use.',
  alternates: { canonical: '/tools/qr-code-generator/' },
  robots: { index: true, follow: true },
};

export default function QrCodeGeneratorPage() {
  const breadcrumbs = [
    { name: 'Tools', href: '/tools/' },
    { name: 'QR Code Generator', href: '/tools/qr-code-generator/' },
  ];

  return (
    <StandardPage
      title="QR Code Generator"
      description="Create QR codes for URLs, text, and contact data."
      breadcrumbs={breadcrumbs}
      cta={{ label: 'Browse all tools', href: '/tools/' }}
    >
      <p>Generate clean QR codes for campaigns, events, Wi-Fi, and contact sharing with export-ready outputs.</p>
    </StandardPage>
  );
}
