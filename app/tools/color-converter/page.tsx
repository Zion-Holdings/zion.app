import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Color Converter | Zion Tech Group',
    description: 'Convert colors between HEX, RGB, and HSL formats with real-time previews and accessibility checks.',
    openGraph: {
    title: 'Color Converter | Zion Tech Group',
    description: 'Free online color converter — HEX, RGB, HSL with live preview.',
    url: 'https://ziontechgroup.com/tools/color-converter/',
    type: 'website',
  },
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Converter | Zion Tech Group',
    description: 'Free online color converter — HEX, RGB, HSL with live preview.',
  },
    alternates: { canonical: '/tools/color-converter/' },
};

export default function ColorConverterPage() {
  return (
    <StandardPage
      title="Color Converter"
      subtitle="Convert between HEX, RGB, and HSL with live preview and contrast checks."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Color Converter' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Color formats</h2>
          <p className="text-slate-300 text-sm mb-4">Use HEX for web colors, RGB for screen channels, and HSL for intuitive adjustments.</p>
          <ul className="space-y-2 text-slate-400 text-sm list-disc pl-5">
            <li>HEX: #RRGGBB notation used in CSS and design tools.</li>
            <li>RGB: 0–255 channels for display and image processing.</li>
            <li>HSL: Hue, saturation, and lightness for perceptually uniform edits.</li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Browse services</h3>
            <p className="text-slate-400 text-xs">See delivery patterns for AI, cloud, security, and data programs.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">View services →</span>
          </Link>
          <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Talk to an engineer</h3>
            <p className="text-slate-400 text-xs">Need design-system or accessibility support? Contact us.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Contact us →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
