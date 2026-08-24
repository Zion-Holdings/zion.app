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
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "QR Code Generator — Zion Tech Group",
  "description": "Generate QR codes for URLs, text, and contact data. Download PNGs for print and web use.",
  "applicationCategory": "BusinessApplication",
  "applicationSuite": "Zion Tech Group Tools",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "url": "https://ziontechgroup.com/tools/qr-code-generator/",
  "@id": "https://ziontechgroup.com/tools/qr-code-generator/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
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
    
      {/* Injected JSON-LD Schemas */}
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": [
    "SoftwareApplication",
    "WebApplication"
  ],
  "name": "Qr Code Generator",
  "applicationCategory": "WebApplication",
  "applicationSubCategory": "DeveloperTool",
  "description": "Interactive tool: Qr Code Generator.",
  "url": "https://ziontechgroup.com/tools/qr-code-generator/",
  "featureList": [
    "Free online tool",
    "No registration required",
    "Instant results",
    "Browser-based",
    "Client-side processing"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "email": "hello@ziontechgroup.com",
    "telephone": "+1 (302) 464 0950"
  },
  "operatingSystem": "All (web-based)",
  "browserRequirements": "Modern web browser with JavaScript enabled",
  "softwareVersion": "1.0"
}} />
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Qr Code Generator free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this tool is completely free. No registration or payment required."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Qr Code Generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply open the Qr Code Generator page, enter your inputs, and click run to get instant results."
      }
    },
    {
      "@type": "Question",
      "name": "Does this tool store my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All processing happens client-side. Your data never leaves your browser."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this tool for commercial projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our free tools can be used for both personal and commercial projects."
      }
    }
  ]
}} /></StandardPage>
  </>
  );
}