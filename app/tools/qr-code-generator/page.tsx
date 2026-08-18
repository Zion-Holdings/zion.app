import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'QR Code Generator — Zion Tech Group',
  description: 'Generate QR codes for URLs, text, and contact data. Download PNGs for print and web use.',
  alternates: { canonical: '/tools/qr-code-generator/' },
  robots: { index: true, follow: true },
};

export default function QrCodeGeneratorPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'QR Code Generator' },
  ];

  return (
    <StandardPage
      title="QR Code Generator"
      subtitle="Create QR codes for URLs, text, and contact data."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
      ]}
    >
      <p>Generate clean QR codes for campaigns, events, Wi-Fi, and contact sharing with export-ready outputs.</p>
    </StandardPage>
  );
}
