import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Markdown Previewer | Zion Tech Group',
  description: 'Render Markdown to live HTML preview with common extensions.',
  openGraph: {
    title: 'Markdown Previewer | Zion Tech Group',
    description: 'Render Markdown to live HTML preview with common extensions.',
    url: 'https://ziontechgroup.com/tools/markdown-previewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown Previewer | Zion Tech Group',
    description: 'Render Markdown to live HTML preview with common extensions.',
  },
  alternates: { canonical: '/tools/markdown-previewer/' },
};

export default function Page() {
  return (
    <StandardPage
      title="Markdown Previewer"
      subtitle="Render Markdown to live HTML preview with common extensions."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Markdown Previewer' },
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
