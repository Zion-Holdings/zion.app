// app/blog/[slug]/page.tsx — Dynamic blog post layout (fallback)
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Post | Zion Tech Group',
  description: 'Read this article on AI, IT, and automation insights from Zion Tech Group.',
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Article Not Found</h1>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          This blog post may have been moved or is no longer available.
        </p>
        <Link href="/blog/" className="btn-primary inline-block">
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
