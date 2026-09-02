import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Excel to JSON Converter | Zion Tech Group',
  description: 'Convert Excel spreadsheets to JSON online. Paste CSV or upload XLSX and get clean JSON output instantly.',
  openGraph: {
    title: 'Excel to JSON Converter | Zion Tech Group',
    description: 'Convert Excel spreadsheets to JSON online. Paste CSV or upload XLSX and get clean JSON output instantly.',
    url: 'https://ziontechgroup.com/tools/excel-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel to JSON Converter | Zion Tech Group',
    description: 'Convert Excel spreadsheets to JSON online. Paste CSV or upload XLSX and get clean JSON output instantly.',
  },
  alternates: { canonical: '/tools/excel-to-json/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Excel to JSON Converter',
  description: 'Convert Excel spreadsheets to JSON online.',
  url: 'https://ziontechgroup.com/tools/excel-to-json/',
};

export default function ExcelToJsonPage() {
  return (
<>
    <StandardPage
      title="Excel to JSON"
      subtitle="Convert spreadsheet rows into structured JSON without leaving your browser."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Excel to JSON' },
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
            <li>Open your Excel file and copy the sheet content.</li>
            <li>Paste it into the input area below.</li>
            <li>Review the generated JSON output and copy it to your clipboard.</li>
          </ol>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Use cases</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
            <li>Migrate tabular data into web apps.</li>
            <li>Prepare sample datasets for APIs.</li>
            <li>Quickly inspect exported spreadsheet data in JSON form.</li>
          </ul>
        </div>
      </div>
    </StandardPage>
  </>
  );
}