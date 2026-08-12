import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import PageShell from '@/components/PageShell';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory() && e.name !== '[slug]').map((e) => ({ slug: e.name }));
  return slugs.slice(0, 200);
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ').replace(/2026/g, '').trim() || 'Blog'} | Zion Tech Group`,
    description: `Insights and guides from Zion Tech Group.`,
    alternates: { canonical: `/blog/${slug}/` },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx');
  if (!fs.existsSync(filePath)) notFound();

  const module = await import(`@/app/blog/${slug}/page.tsx`);
  const Page = module.default;
  return (
    <PageShell
      title={module.metadata?.title || `${slug} | Zion Tech Group`}
      description={module.metadata?.description || ''}
      canonical={`https://ziontechgroup.com/blog/${slug}/`}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: module.metadata?.title || slug,
        description: module.metadata?.description || '',
        author: { '@type': 'Organization', name: 'Zion Tech Group' },
        publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        mainEntityOfPage: `https://ziontechgroup.com/blog/${slug}/`,
      }}
    >
      <Page />
    </PageShell>
  );
}
