import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Contact | Zion Tech Group",
  description: "Contact — Zion Tech Group.",
  openGraph: {
    title: "Contact | Zion Tech Group",
    description: "Contact — Zion Tech Group.",
    url: "https://ziontechgroup.com/about/contact/",
    type: 'website',
  },
  alternates: { canonical: "/about/contact/" },
};

export default function AboutContactPage() {
  return (
    <StandardPage
      title="Contact"
      subtitle="Contact — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about/" },
        { label: "Contact" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Contact — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
