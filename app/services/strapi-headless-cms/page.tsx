import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Strapi Headless CMS | Zion Tech Group",
  description: "Leading open-source headless CMS giving developers full control over content architecture while providing a beautiful admin panel for content editors. Self-hostable, API-first, and framework-agnostic \u2014 works with Next.js",
  openGraph: {
    title: "Strapi Headless CMS | Zion Tech Group",
    description: "Leading open-source headless CMS giving developers full control over content architecture while providing a beautiful admin panel for content editors. Self-hostable, API-first, and framework-agnostic \u2014 works with Next.js",
    url: "https://ziontechgroup.com/services/strapi-headless-cms/",
    type: 'website',
  },
  alternates: { canonical: "/services/strapi-headless-cms/" },
};

export default function StrapiHeadlessCmsPage() {
  return (
    <StandardPage
      title="Strapi Headless CMS"
      subtitle="Leading open-source headless CMS giving developers full control over content architecture while providing a beautiful admin panel for content editors. Self-hostable, API-first, and framework-agnostic \u2014 works with Next.js"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Strapi Headless CMS" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Leading open-source headless CMS giving developers full control over content architecture while providing a beautiful admin panel for content editors. Self-hostable, API-first, and framework-agnostic — works with Next.js</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614133137) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
