import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Free Consultation | Zion Tech Group",
  description: "Book a free AI and IT consultation with Zion Tech Group. 30-minute discovery call, same-day proposal.",
  openGraph: {
    title: "Free Consultation | Zion Tech Group",
    description: "Book a free AI and IT consultation with Zion Tech Group. 30-minute discovery call, same-day proposal.",
    url: "https://ziontechgroup.com/docs/free-consultation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/free-consultation/" },
};

export default function DocsFreeConsultationPage() {
  return (
    <StandardPage
      title="Free Consultation"
      subtitle="Book a free AI and IT consultation with Zion Tech Group. 30-minute discovery call, same-day proposal."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Free Consultation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Book a free AI and IT consultation with Zion Tech Group. 30-minute discovery call, same-day proposal.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
