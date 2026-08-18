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
    </StandardPage>
  </>
  );
}