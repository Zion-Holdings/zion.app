import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-backup-disaster-recovery | Zion Tech Group",
  description: "Professional Ai-backup-disaster-recovery services from Zion Tech Group. AI-driven automation, monitoring, and support.",
  openGraph: {
    title: "Ai-backup-disaster-recovery | Zion Tech Group",
    description: "Professional Ai-backup-disaster-recovery services from Zion Tech Group. AI-driven automation, monitoring, and support.",
    url: "https://ziontechgroup.com/docs/ai-backup-disaster-recovery/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-backup-disaster-recovery/" },
};

export default function DocsAiBackupDisasterRecoveryPage() {
  return (
    <StandardPage
      title="Ai-backup-disaster-recovery"
      subtitle="Professional Ai-backup-disaster-recovery services from Zion Tech Group. AI-driven automation, monitoring, and support."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Backup Disaster Recovery" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Professional Ai-backup-disaster-recovery services from Zion Tech Group. AI-driven automation, monitoring, and support.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
