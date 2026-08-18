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

function formatSlug(slug: string) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

export default function BlogIndexPage() {
  const posts = [
    { slug: '5g-solutions-2026', title: '5G Solutions 2026', category: 'Infrastructure' },
    { slug: 'ai-3d-asset-generator-2026', title: 'AI 3D Asset Generator 2026', category: 'AI' },
    { slug: 'ai-accessibility-auditor-2026', title: 'AI Accessibility Auditor 2026', category: 'AI' },
    { slug: 'ai-agent-safety-evaluation-2026', title: 'AI Agent Safety Evaluation 2026', category: 'AI' },
    { slug: 'micro-saas-ai-social-media-manager-2026', title: 'Micro SAAS AI Social Media Manager 2026', category: 'Growth' },
  ];

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
          {posts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}/`} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
              <span className="text-xs font-semibold text-purple-300">{post.category}</span>
              <h3 className="text-white font-semibold mb-2">{post.title}</h3>
              <p className="text-slate-400 text-sm">Read the full guide and implementation notes.</p>
            </a>
          ))}
        </div>
      </div>
    </StandardPage>
  );
}
