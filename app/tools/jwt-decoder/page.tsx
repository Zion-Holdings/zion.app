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
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JWT Decoder — Zion Tech Group",
  "description": "Decode JWT tokens to inspect header, payload, and signature data securely in your browser.",
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
  "url": "https://ziontechgroup.com/tools/jwt-decoder/",
  "@id": "https://ziontechgroup.com/tools/jwt-decoder/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
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
    
      {/* Injected JSON-LD Schemas */}
      <JsonLd data={{ {
  "@context": "https://schema.org",
  "@type": [
    "SoftwareApplication",
    "WebApplication"
  ],
  "name": "Jwt Decoder",
  "applicationCategory": "WebApplication",
  "applicationSubCategory": "DeveloperTool",
  "description": "Interactive tool: Jwt Decoder.",
  "url": "https://ziontechgroup.com/tools/jwt-decoder/",
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
} }} />
      <JsonLd data={{ {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Jwt Decoder free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this tool is completely free. No registration or payment required."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Jwt Decoder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply open the Jwt Decoder page, enter your inputs, and click run to get instant results."
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
} }} /></StandardPage>
  </>
  );
}