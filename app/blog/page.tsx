import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI, automation, enterprise IT, and digital transformation from the Zion Tech Group team.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndexPage() {
  const postsDir = path.join(process.cwd(), 'app', 'blog');
  let slugs: string[] = [];
  try {
    slugs = fs
      .readdirSync(postsDir)
      .filter((name) => fs.statSync(path.join(postsDir, name)).isDirectory())
      .sort();
  } catch {
    slugs = [];
  }

  const posts = slugs.map((slug) => ({
    slug,
    title: slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()),
  }));

  return (
    <PageWrapper>
      <div className="container-page">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Insights on AI, automation, enterprise IT, and digital transformation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="glass-card group hover:border-purple-500/40 transition-colors block"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {post.title}
              </h3>
              <span className="text-purple-400 text-sm inline-flex items-center gap-1">
                Read more <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
