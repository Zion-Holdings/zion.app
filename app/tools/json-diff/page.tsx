import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'JSON Diff | Zion Tech Group',
  description: 'Compare JSON documents side by side and spot differences fast.',
  openGraph: {
    title: 'JSON Diff | Zion Tech Group',
    description: 'Compare JSON documents side by side and spot differences fast.',
    url: 'https://ziontechgroup.com/tools/json-diff/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Diff | Zion Tech Group',
    description: 'Compare JSON documents side by side and spot differences fast.',
  },
  alternates: { canonical: '/tools/json-diff/' },
};

export default function Page() {
  return (
    <StandardPage
      title="JSON Diff"
      subtitle="Compare JSON documents side by side and spot differences fast."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'JSON Diff' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-slate-300">This tool is being updated. You can still explore related utilities in the Tools section.</p>
      </div>
    </StandardPage>
  );
}
