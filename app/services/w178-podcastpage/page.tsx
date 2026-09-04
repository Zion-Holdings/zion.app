import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "PodcastPage \u2014 Podcast Hosting | Zion Tech Group",
  description: "All-in-one podcast hosting: upload, distribute, analytics, monetization. RSS feed and website.",
  openGraph: {
    title: "PodcastPage \u2014 Podcast Hosting | Zion Tech Group",
    description: "All-in-one podcast hosting: upload, distribute, analytics, monetization. RSS feed and website.",
    url: "https://ziontechgroup.com/services/w178-podcastpage/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-podcastpage/" },
};

export default function W178PodcastpagePage() {
  return (
    <StandardPage
      title="PodcastPage \u2014 Podcast Hosting"
      subtitle="All-in-one podcast hosting: upload, distribute, analytics, monetization. RSS feed and website."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "PodcastPage \u2014 Podcast Hosting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">All-in-one podcast hosting: upload, distribute, analytics, monetization. RSS feed and website.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113154) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
