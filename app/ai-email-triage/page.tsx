import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Email Triage | Zion Tech Group",
  description: "Zion Tech Group email triage services for IT teams and enterprises.",
  openGraph: {
    title: "Email Triage | Zion Tech Group",
    description: "Zion Tech Group email triage services for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-email-triage/",
    type: 'website',
  },
  alternates: { canonical: "/ai-email-triage/" },
};

export default function AiEmailTriagePage() {
  return (
    <StandardPage
      title="Email Triage"
      subtitle="Zion Tech Group email triage services for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Email Triage" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group email triage services for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
