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

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <div className="container">
        <h1>Blog</h1>
        <p className="lead">Latest posts about AI, IT operations, cloud, security, and enterprise automation.</p>
        <div className="grid">
          {posts.map((slug) => (
            <Link key={slug} href={`/blog/${slug}/`} className="card">
              <h3>{slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</h3>
              <span>Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
