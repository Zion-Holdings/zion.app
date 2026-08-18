import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'Latam AI Partnership Playbook | Zion Tech Group',
  description: 'Discover partnership models for LATAM expansion with AI services, co-selling, and integration-ready delivery.',

  alternates: {
    canonical: 'https://ziontechgroup.com/blog/latam-ai-partnership-playbook-for-tech-companies-2026/',
  },
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <ArticleStructuredData
        title="Latam AI Partnership Playbook"
        description="A practical guide for building AI partnerships in LATAM."
        canonical="https://ziontechgroup.com/blog/latam-ai-partnership-playbook-for-tech-companies-2026"
        publishDate="2026-07-07"
      />
      <SiteBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Latam AI Partnership Playbook', href: '/blog/latam-ai-partnership-playbook-for-tech-companies-2026' },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Latam AI Partnership Playbook</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore proven partnership models for growing AI/IT services in LATAM: co-selling, integration support, and managed delivery.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Visit <Link className="underline" href="/">ziontechgroup.com</Link> to explore new AI services and free AI tools.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Want a structured conversation? Start with the <Link className="underline" href="/free-ai-readiness-audit">Free AI Readiness Audit</Link>.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="px-4 py-2 rounded bg-black text-white">Visit Zion Tech Group</Link>
        <Link href="/free-ai-readiness-audit" className="px-4 py-2 rounded border">Get Free AI Readiness Audit</Link>
      </div>
    </main>
  );
}
