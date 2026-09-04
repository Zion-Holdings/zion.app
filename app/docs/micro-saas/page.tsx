import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Micro SaaS Services | Zion Tech Group",
  description: "Micro SaaS development, AI-powered platforms, and automation services for startups and enterprises.",
  openGraph: {
    title: "Micro SaaS Services | Zion Tech Group",
    description: "Micro SaaS development, AI-powered platforms, and automation services for startups and enterprises.",
    url: "https://ziontechgroup.com/docs/micro-saas/",
    type: 'website',
  },
  alternates: { canonical: "/docs/micro-saas/" },
};

export default function DocsMicroSaasPage() {
  return (
    <StandardPage
      title="Micro SaaS Services"
      subtitle="Micro SaaS development, AI-powered platforms, and automation services for startups and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Micro Saas" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Micro SaaS development, AI-powered platforms, and automation services for startups and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
