import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "VideoAsk Lite - Video Forms | Zion Tech Group",
  description: "Collect video responses: customer feedback, job applications, surveys. Async video at scale.",
  openGraph: {
    title: "VideoAsk Lite - Video Forms | Zion Tech Group",
    description: "Collect video responses: customer feedback, job applications, surveys. Async video at scale.",
    url: "https://ziontechgroup.com/services/w179-videoask-lite/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-videoask-lite/" },
};

export default function W179VideoaskLitePage() {
  return (
    <StandardPage
      title="VideoAsk Lite - Video Forms"
      subtitle="Collect video responses: customer feedback, job applications, surveys. Async video at scale."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "VideoAsk Lite - Video Forms" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Collect video responses: customer feedback, job applications, surveys. Async video at scale.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607110019) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
