import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Timestamp Converter | Zion Tech Group',
  description: 'Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds.',
  openGraph: {
    title: 'Timestamp Converter | Zion Tech Group',
    description: 'Free online Unix timestamp converter — seconds, milliseconds, ISO 8601.',
    url: 'https://ziontechgroup.com/tools/timestamp-converter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timestamp Converter | Zion Tech Group',
    description: 'Free online Unix timestamp converter — seconds, milliseconds, ISO 8601.',
  },
  alternates: { canonical: '/tools/timestamp-converter/' },
};

export default function TimestampConverterPage() {
  return (
    <StandardPage
      title="Timestamp Converter"
      subtitle="Convert between Unix timestamps, ISO 8601, and human-readable dates."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Timestamp Converter' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Quick reference</h2>
          <p className="text-slate-300 text-sm mb-4">Unix timestamps count seconds or milliseconds from Jan 1, 1970 UTC. ISO 8601 adds calendar clarity and timezone awareness.</p>
          <ul className="space-y-2 text-slate-400 text-sm list-disc pl-5">
            <li>10 digits = seconds, 13 digits = milliseconds.</li>
            <li>ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ.</li>
            <li>Relative time helps humans interpret age or delay quickly.</li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Browse services</h3>
            <p className="text-slate-400 text-xs">Automation, observability, and integration services.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">View services →</span>
          </Link>
          <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Talk to an engineer</h3>
            <p className="text-slate-400 text-xs">Need logging, monitoring, or data pipeline help? Contact us.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Contact us →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
