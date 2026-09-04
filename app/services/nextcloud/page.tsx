import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Nextcloud Self-Hosted Collaboration Platform | Zion Tech Group",
  description: "Nextcloud is the most widely deployed open-source self-hosted collaboration platform, providing a complete alternative to Google Workspace, Microsoft 365, and Dropbox. It combines file sync & share, collaborative documen",
  openGraph: {
    title: "Nextcloud Self-Hosted Collaboration Platform | Zion Tech Group",
    description: "Nextcloud is the most widely deployed open-source self-hosted collaboration platform, providing a complete alternative to Google Workspace, Microsoft 365, and Dropbox. It combines file sync & share, collaborative documen",
    url: "https://ziontechgroup.com/services/nextcloud/",
    type: 'website',
  },
  alternates: { canonical: "/services/nextcloud/" },
};

export default function NextcloudPage() {
  return (
    <StandardPage
      title="Nextcloud Self-Hosted Collaboration Platform"
      subtitle="Nextcloud is the most widely deployed open-source self-hosted collaboration platform, providing a complete alternative to Google Workspace, Microsoft 365, and Dropbox. It combines file sync & share, collaborative documen"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Nextcloud Self-Hosted Collaboration Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Nextcloud is the most widely deployed open-source self-hosted collaboration platform, providing a complete alternative to Google Workspace, Microsoft 365, and Dropbox. It combines file sync &amp; share, collaborative documen</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614103909) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
