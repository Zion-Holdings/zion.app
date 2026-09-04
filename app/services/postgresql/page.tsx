import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "PostgreSQL Database Solutions | Zion Tech Group",
  description: "PostgreSQL is the world's most advanced open-source relational database, trusted by millions of developers and enterprises for mission-critical applications. With over 35 years of active development, PostgreSQL offers un",
  openGraph: {
    title: "PostgreSQL Database Solutions | Zion Tech Group",
    description: "PostgreSQL is the world's most advanced open-source relational database, trusted by millions of developers and enterprises for mission-critical applications. With over 35 years of active development, PostgreSQL offers un",
    url: "https://ziontechgroup.com/services/postgresql/",
    type: 'website',
  },
  alternates: { canonical: "/services/postgresql/" },
};

export default function PostgresqlPage() {
  return (
    <StandardPage
      title="PostgreSQL Database Solutions"
      subtitle="PostgreSQL is the world's most advanced open-source relational database, trusted by millions of developers and enterprises for mission-critical applications. With over 35 years of active development, PostgreSQL offers un"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "PostgreSQL Database Solutions" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">PostgreSQL is the world&#x27;s most advanced open-source relational database, trusted by millions of developers and enterprises for mission-critical applications. With over 35 years of active development, PostgreSQL offers un</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608112618) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
