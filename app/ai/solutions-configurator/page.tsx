import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Solutions Configurator',
  description: 'Configure your custom AI & IT solutions',
  alternates: { canonical: '/ai/solutions-configurator' },
  openGraph: {
    title: 'Solutions Configurator',
    description: 'Configure your custom AI & IT solutions',
    url: 'https://ziontechgroup.com/ai/solutions-configurator',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function SolutionsConfiguratorPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">

    <JsonLd data={@context: "https://schema.org", @type: "WebPage", name: "Solutions Configurator", description: "Configure your custom AI & IT solutions", url: "https://ziontechgroup.com/ai/solutions-configurator/"} />
      <div className="container-page text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Solutions Configurator</h1>
        <p className="text-slate-400">Custom AI & IT solutions configuration coming soon.</p>
        <p className="text-slate-500 text-sm mt-4">Use /configurator for the active configurator.</p>
      </div>
    </main>
  );
}
