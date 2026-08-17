import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Insights on AI, IT, automation, and enterprise delivery from Zion Tech Group.',
  openGraph: {
    title: 'Blog | Zion Tech Group',
    description: 'Insights on AI, IT, automation, and enterprise delivery.',
    url: 'https://ziontechgroup.com/blog/',
    type: 'website',
  },
  alternates: { canonical: '/blog/' },
};

export default function BlogIndexPage() {
  return (
    <StandardPage
      title="Blog"
      subtitle="Insights on AI, IT, automation, and enterprise delivery."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Coming soon</h3>
            <p className="text-slate-400 text-sm">New posts are being prepared. Check back soon for practical guides on AI, cloud, and automation.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Topics</h3>
            <p className="text-slate-400 text-sm">Managed AI, observability, compliance automation, and enterprise delivery.</p>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
