import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'YAML to JSON Converter | Zion Tech Group',
  description: 'Convert YAML snippets to JSON online. Paste YAML and get clean structured JSON instantly.',
  openGraph: {
    title: 'YAML to JSON Converter | Zion Tech Group',
    description: 'Convert YAML snippets to JSON online. Paste YAML and get clean structured JSON instantly.',
    url: 'https://ziontechgroup.com/tools/yaml-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAML to JSON Converter | Zion Tech Group',
    description: 'Convert YAML snippets to JSON online. Paste YAML and get clean structured JSON instantly.',
  },
  alternates: { canonical: '/tools/yaml-to-json/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'YAML to JSON Converter',
  description: 'Convert YAML snippets to JSON online.',
  url: 'https://ziontechgroup.com/tools/yaml-to-json/',
};

export default function YamlToJsonPage() {
  return (
<>
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "YAML to JSON Converter",
  "description": "Convert YAML snippets to JSON online. Paste YAML and get clean structured JSON instantly.",
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
  "url": "https://ziontechgroup.com/tools/yaml-to-json/",
  "@id": "https://ziontechgroup.com/tools/yaml-to-json/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
    <StandardPage
      title="YAML to JSON"
      subtitle="Convert YAML configuration snippets into structured JSON safely in your browser."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'YAML to JSON' },
      ]}
      actions={[
        { label: 'All tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm">
            <li>Paste your YAML content into the input area.</li>
            <li>Review the generated JSON output.</li>
            <li>Copy the result for use in configs, APIs, or docs.</li>
          </ol>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Use cases</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
            <li>Translate Kubernetes or CI configs to JSON.</li>
            <li>Debug YAML payloads before sending to APIs.</li>
            <li>Inspect structured exports in JSON form.</li>
          </ul>
        </div>
      </div>
    
      {/* Injected JSON-LD Schemas */}
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": [
    "SoftwareApplication",
    "WebApplication"
  ],
  "name": "Yaml To Json",
  "applicationCategory": "WebApplication",
  "applicationSubCategory": "DeveloperTool",
  "description": "Interactive tool: Yaml To Json.",
  "url": "https://ziontechgroup.com/tools/yaml-to-json/",
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
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Yaml To Json free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this tool is completely free. No registration or payment required."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Yaml To Json?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply open the Yaml To Json page, enter your inputs, and click run to get instant results."
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