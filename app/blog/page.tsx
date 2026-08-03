import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { promises as fs } from 'fs';
import path from 'path';

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Insights on AI, IT operations, cloud, security, and enterprise automation.',
};

async function getPosts() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const entries = await fs.readdir(blogDir, { withFileTypes: true });
  const slugs: string[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pagePath = path.join(blogDir, entry.name, 'page.tsx');
      try {
        await fs.access(pagePath);
        slugs.push(entry.name);
      } catch {
        // skip directories without page.tsx
      }
    }
  }
  slugs.sort();
  return slugs;
}

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Insights on AI, IT operations, cloud, security, and enterprise automation.',
  alternates: { canonical: '/blog' },
};

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
          ]}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Blog</h1>
        <p className="section-subheading text-center max-w-2xl mx-auto mb-12">
          Latest posts about AI, IT operations, cloud, security, and enterprise automation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((slug) => (
            <Link key={slug} href={`/blog/${slug}/`} className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</h3>
              <span className="text-purple-400 text-sm hover:underline">Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
