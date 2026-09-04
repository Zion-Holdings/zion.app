import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Meeting Intelligence Minutes And Actions | Zion Tech Group",
  description: "Zion Tech Group meeting intelligence minutes and actions services for IT teams and enterprises.",
  openGraph: {
    title: "Meeting Intelligence Minutes And Actions | Zion Tech Group",
    description: "Zion Tech Group meeting intelligence minutes and actions services for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-meeting-intelligence-minutes-and-actions/",
    type: 'website',
  },
  alternates: { canonical: "/ai-meeting-intelligence-minutes-and-actions/" },
};

export default function AiMeetingIntelligenceMinutesAndActionsPage() {
  return (
    <StandardPage
      title="Meeting Intelligence Minutes And Actions"
      subtitle="Zion Tech Group meeting intelligence minutes and actions services for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Meeting Intelligence Minutes And Actions" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group meeting intelligence minutes and actions services for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
