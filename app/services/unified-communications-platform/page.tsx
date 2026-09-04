import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Unified Communications as a Service (UCaaS) | Zion Tech Group",
  description: "Cloud-native unified communications platform combining voice, video, messaging, and collaboration. PBX replacement with global PSTN connectivity, team chat, and video conferencing in one platform.",
  openGraph: {
    title: "Unified Communications as a Service (UCaaS) | Zion Tech Group",
    description: "Cloud-native unified communications platform combining voice, video, messaging, and collaboration. PBX replacement with global PSTN connectivity, team chat, and video conferencing in one platform.",
    url: "https://ziontechgroup.com/services/unified-communications-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/unified-communications-platform/" },
};

export default function UnifiedCommunicationsPlatformPage() {
  return (
    <StandardPage
      title="Unified Communications as a Service (UCaaS)"
      subtitle="Cloud-native unified communications platform combining voice, video, messaging, and collaboration. PBX replacement with global PSTN connectivity, team chat, and video conferencing in one platform."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Unified Communications as a Service (UCaaS)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Cloud-native unified communications platform combining voice, video, messaging, and collaboration. PBX replacement with global PSTN connectivity, team chat, and video conferencing in one platform.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105542) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
