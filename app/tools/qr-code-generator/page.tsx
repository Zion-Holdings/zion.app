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
        { label: 'Talk to us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Fast generation</h3>
          <p className="text-slate-400 text-sm">Create QR codes instantly from URLs, text, and contact data.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Export ready</h3>
          <p className="text-slate-400 text-sm">Download clean PNG outputs for web, print, and events.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Event friendly</h3>
          <p className="text-slate-400 text-sm">Use for campaigns, tickets, Wi-Fi sharing, and business cards.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Use cases</h3>
          <p className="text-slate-400 text-sm">Marketing, venue entry, and contact sharing.</p>
        </div>
      </div>
    </StandardPage>
  );
}
