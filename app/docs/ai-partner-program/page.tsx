import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Partner Program | Zion Tech Group",
  description: "Join the Zion partner program to deliver AI services, co-sell implementations, and grow recurring revenue together.",
  openGraph: {
    title: "AI Partner Program | Zion Tech Group",
    description: "Join the Zion partner program to deliver AI services, co-sell implementations, and grow recurring revenue together.",
    url: "https://ziontechgroup.com/docs/ai-partner-program/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-partner-program/" },
};

export default function DocsAiPartnerProgramPage() {
  return (
    <StandardPage
      title="AI Partner Program"
      subtitle="Join the Zion partner program to deliver AI services, co-sell implementations, and grow recurring revenue together."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Partner Program" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Join the Zion partner program to deliver AI services, co-sell implementations, and grow recurring revenue together.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
