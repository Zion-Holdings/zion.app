import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "how to win ai services clients in latam | Zion Tech Group",
  description: "how to win ai services clients in latam — Zion Tech Group.",
  openGraph: {
    title: "how to win ai services clients in latam | Zion Tech Group",
    description: "how to win ai services clients in latam — Zion Tech Group.",
    url: "https://ziontechgroup.com/blog/how-to-win-ai-services-clients-in-latam/",
    type: 'website',
  },
  alternates: { canonical: "/blog/how-to-win-ai-services-clients-in-latam/" },
};

export default function BlogHowToWinAiServicesClientsInLatamPage() {
  return (
    <StandardPage
      title="how to win ai services clients in latam"
      subtitle="how to win ai services clients in latam — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "How To Win Ai Services Clients In Latam" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">how to win ai services clients in latam — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
