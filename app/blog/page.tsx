import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'AI, IT, and automation insights, guides, and industry trends from Zion Tech Group.',
  openGraph: {
    title: 'Blog | Zion Tech Group',
    description: 'AI, IT, and automation insights, guides, and industry trends from Zion Tech Group.',
    url: 'https://ziontechgroup.com/blog/',
    type: 'website',
  },
  alternates: { canonical: '/blog/' },
};

interface BlogPost {
  slug: string;
  title: string;
}

export default function BlogPage() {
  return (
    <StandardPage
      title="Blog"
      subtitle="AI, IT, and automation insights, guides, and industry trends from Zion Tech Group."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-slate-300">Latest posts coming soon.</p>
      </div>
    </StandardPage>
  );
}
