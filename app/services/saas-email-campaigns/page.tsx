import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Email Campaign & Automation Platform | Zion Tech Group",
  description: "Design, send, and automate email campaigns with a drag-and-drop editor. Includes list management, segmentation, A/B testing, deliverability optimization, and detailed analytics. SMTP relay included.",
  openGraph: {
    title: "Email Campaign & Automation Platform | Zion Tech Group",
    description: "Design, send, and automate email campaigns with a drag-and-drop editor. Includes list management, segmentation, A/B testing, deliverability optimization, and detailed analytics. SMTP relay included.",
    url: "https://ziontechgroup.com/services/saas-email-campaigns/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-email-campaigns/" },
};

export default function SaasEmailCampaignsPage() {
  return (
    <StandardPage
      title="Email Campaign & Automation Platform"
      subtitle="Design, send, and automate email campaigns with a drag-and-drop editor. Includes list management, segmentation, A/B testing, deliverability optimization, and detailed analytics. SMTP relay included."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Email Campaign & Automation Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Design, send, and automate email campaigns with a drag-and-drop editor. Includes list management, segmentation, A/B testing, deliverability optimization, and detailed analytics. SMTP relay included.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607203042) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
