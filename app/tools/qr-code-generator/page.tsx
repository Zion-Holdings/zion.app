import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'QR Code Generator — Zion Tech Group',
  description: 'Generate QR codes for URLs, text, and contact data. Download PNGs for print and web use.',
  keywords: ['QR code generator', 'QR code', 'developer tools', 'print QR'],
  openGraph: {
    title: 'QR Code Generator — Zion Tech Group',
    description: 'Generate QR codes for URLs, text, and contact data. Download PNGs for print and web use.',
    url: 'https://ziontechgroup.com/tools/qr-code-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Code Generator — Zion Tech Group',
    description: 'Generate QR codes for URLs, text, and contact data. Download PNGs for print and web use.',
  },
  alternates: { canonical: '/tools/qr-code-generator/' },
  robots: { index: true, follow: true },
};


export default function QrCodeGeneratorPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'QR Code Generator' },
  ];

  return (
<>
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

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Best practices</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Keep QR payloads short to improve scan reliability on low-resolution cameras.</li>
          <li>Use error correction when printing for outdoor or damaged-surface use.</li>
          <li>Combine with analytics redirects to measure campaign performance.</li>
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