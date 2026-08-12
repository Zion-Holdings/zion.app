import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import BlogPostStructuredData from '@/components/BlogPostStructuredData';

export const metadata = {
  title: 'How CloudFirst Saved $100K annually with Vision System',
  description: 'CloudFirst case study: 99.9% uptime and $100K annually with Zion Tech Group.',
  alternates: { canonical: '/case-studies/cloudfirst-99-uptime-case-study/' },

  openGraph: {
    title: 'How CloudFirst Saved $100K annually with Vision System',
    description: 'CloudFirst case study: 99.9% uptime and $100K annually with Zion Tech Group.',
    url: 'https://ziontechgroup.com/case-studies/cloudfirst-99-uptime-case-study/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "How CloudFirst Saved $100K annually with Vision System",
  "description": "CloudFirst case study: 99.9% uptime and $100K annually with Zion Tech Group.",
  "author": { "@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com" },
  "publisher": { "@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com" },
  "datePublished": "2026-08-07",
  "mainEntityOfPage": "https://ziontechgroup.com/case-studies/cloudfirst-99-uptime-case-study/"
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">

    <BlogPostStructuredData title="How CloudFirst Saved $100K annually with Vision System | Zion Tech Group" description="CloudFirst case study: 99.9% uptime and $100K annually with Zion Tech Group." datePublished="2026-08-07" url="https://ziontechgroup.com/blog/cloudfirst-99-uptime-case-study/" />
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'How CloudFirst Saved $100K annually with Vision System', }
        ]} className="mb-8" />
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">How CloudFirst Saved $100K annually with Vision System</h1>
          <p className="mt-4 text-lg text-slate-300">Customer: CloudFirst</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Challenge</h2>
            <p className="text-slate-300">CloudFirst was facing inefficient processes and needed a modern solution.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Solution</h2>
            <p className="text-slate-300">We implemented security overhaul to address their needs.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Results</h2>
            <p className="text-slate-300">99.9% uptime · $100K annually</p>
          </div>
          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-slate-300">"99.9% uptime exceeded our expectations. The team delivered exceptional results." - CloudFirst Leadership</blockquote>
        </section>

        <section className="mt-12 p-6 rounded-2xl border border-violet-500/30 bg-slate-900/60">
          <h2 className="text-xl font-bold text-white mb-2">Next steps</h2>
          <p className="text-slate-300 mb-4">Talk with Zion Tech Group about your environment and goals.</p>
          <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Contact us</Link>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </article>
    </div>
  );
}
