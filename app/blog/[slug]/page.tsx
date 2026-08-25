// app/blog/[slug]/page.tsx — Dynamic blog post layout (data-driven)
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';
import blogPosts from '@/data/blogPosts.json';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  article_html: string;
}

// Generate static params from the JSON data (not filesystem directories)
// This avoids compiling 4,000+ individual page.tsx files
export async function generateStaticParams() {
  return (blogPosts as BlogPost[]).map((post) => ({ slug: post.slug }));
}

// No dynamic params — only generate pages listed in generateStaticParams
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);
  if (!post) return { title: 'Blog Post Not Found' };

  return {
    title: `${post.title} | Zion Tech Group`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      url: `https://ziontechgroup.com/blog/${slug}/`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || post.title,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    return (
      <StandardPage
        title="Article Not Found"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog/' },
          { label: 'Not Found' },
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

  const title = post.title;
  const description = post.description;
  const canonical = `https://ziontechgroup.com/blog/${slug}/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: { '@type': 'Organization', name: 'Zion Tech Group' },
    publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <StandardPage
        title={title}
        subtitle={description}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog/' },
          { label: title },
        ]}
      >
        <article
          className="max-w-3xl mx-auto space-y-6 text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.article_html }}
        />
      </StandardPage>
    </>
  );
}
