import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Jellyfin Open-Source Media Streaming | Zion Tech Group",
  description: "Jellyfin is a fully open-source media system that lets you collect, manage, and stream your own media library \u2014 a free alternative to Plex, Emby, and Netflix-style self-hosting. Unlike Plex (which requires Plex Pass for ",
  openGraph: {
    title: "Jellyfin Open-Source Media Streaming | Zion Tech Group",
    description: "Jellyfin is a fully open-source media system that lets you collect, manage, and stream your own media library \u2014 a free alternative to Plex, Emby, and Netflix-style self-hosting. Unlike Plex (which requires Plex Pass for ",
    url: "https://ziontechgroup.com/services/jellyfin/",
    type: 'website',
  },
  alternates: { canonical: "/services/jellyfin/" },
};

export default function JellyfinPage() {
  return (
    <StandardPage
      title="Jellyfin Open-Source Media Streaming"
      subtitle="Jellyfin is a fully open-source media system that lets you collect, manage, and stream your own media library \u2014 a free alternative to Plex, Emby, and Netflix-style self-hosting. Unlike Plex (which requires Plex Pass for "
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Jellyfin Open-Source Media Streaming" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Jellyfin is a fully open-source media system that lets you collect, manage, and stream your own media library — a free alternative to Plex, Emby, and Netflix-style self-hosting. Unlike Plex (which requires Plex Pass for </p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614105916) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
