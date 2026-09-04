import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Cybersecurity Platform | Zion Tech Group",
  description: "AI-driven cybersecurity platform with threat detection, endpoint protection, and compliance automation for modern enterprises.",
  openGraph: {
    title: "AI Cybersecurity Platform | Zion Tech Group",
    description: "AI-driven cybersecurity platform with threat detection, endpoint protection, and compliance automation for modern enterprises.",
    url: "https://ziontechgroup.com/ai-cybersecurity-platform/",
    type: 'website',
  },
  alternates: { canonical: "/ai-cybersecurity-platform/" },
};

export default function AiCybersecurityPlatformPage() {
  return (
    <StandardPage
      title="AI Cybersecurity Platform"
      subtitle="AI-driven cybersecurity platform with threat detection, endpoint protection, and compliance automation for modern enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Cybersecurity Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-driven cybersecurity platform with threat detection, endpoint protection, and compliance automation for modern enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
