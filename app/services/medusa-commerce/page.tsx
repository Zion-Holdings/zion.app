import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Medusa Composable Commerce | Zion Tech Group",
  description: "Open-source composable commerce platform built for developers who want full control over their e-commerce stack. Headless, modular, and developer-first \u2014 built on Node.js with a modern API architecture. Provides the core",
  openGraph: {
    title: "Medusa Composable Commerce | Zion Tech Group",
    description: "Open-source composable commerce platform built for developers who want full control over their e-commerce stack. Headless, modular, and developer-first \u2014 built on Node.js with a modern API architecture. Provides the core",
    url: "https://ziontechgroup.com/services/medusa-commerce/",
    type: 'website',
  },
  alternates: { canonical: "/services/medusa-commerce/" },
};

export default function MedusaCommercePage() {
  return (
    <StandardPage
      title="Medusa Composable Commerce"
      subtitle="Open-source composable commerce platform built for developers who want full control over their e-commerce stack. Headless, modular, and developer-first \u2014 built on Node.js with a modern API architecture. Provides the core"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Medusa Composable Commerce" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Open-source composable commerce platform built for developers who want full control over their e-commerce stack. Headless, modular, and developer-first — built on Node.js with a modern API architecture. Provides the core</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607203017) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
