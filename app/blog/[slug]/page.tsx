// app/blog/[slug]/page.tsx — Dynamic blog post layout (fallback)
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Blog Post',
  description: 'Read AI, IT, and automation insights from Zion Tech Group.',
  alternates: { canonical: '/blog/' },
};

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const slugs = entries
    .filter(e => e.isDirectory() && e.name !== '[slug]')
    .map(e => ({ slug: e.name }));
  return slugs;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const postDir = path.join(blogDir, params.slug);

  if (!fs.existsSync(postDir)) {
    notFound();
  }

  const postPath = path.join(postDir, 'page.tsx');
  if (!fs.existsSync(postPath)) {
    notFound();
  }

  return (
    <StandardPage
      title={params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog/' },
        { label: params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) },
      ]}
    >
      <div className="text-center max-w-4xl mx-auto">
        <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 block">
          404
        </span>
        <h1 className="text-3xl font-bold text-white mb-3">Article Not Found</h1>
        <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
          This blog post may have been moved or is no longer available.
        </p>
        <Link href="/blog/" className="btn-primary inline-block">
          ← Back to Blog
        </Link>
      </div>
    </StandardPage>
  );
}
