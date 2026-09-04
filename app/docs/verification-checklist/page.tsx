import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Zion Verification Checklist | Composio & Monetization | Zion Tech Group",
  description: "Step-by-step verification checklist for Zion Tech Group: Composio connections, Stripe billing, Calendly bookings, WhatsApp, Resend, and site deployment.",
  openGraph: {
    title: "Zion Verification Checklist | Composio & Monetization | Zion Tech Group",
    description: "Step-by-step verification checklist for Zion Tech Group: Composio connections, Stripe billing, Calendly bookings, WhatsApp, Resend, and site deployment.",
    url: "https://ziontechgroup.com/docs/verification-checklist/",
    type: 'website',
  },
  alternates: { canonical: "/docs/verification-checklist/" },
};

export default function DocsVerificationChecklistPage() {
  return (
    <StandardPage
      title="Zion Verification Checklist | Composio & Monetization"
      subtitle="Step-by-step verification checklist for Zion Tech Group: Composio connections, Stripe billing, Calendly bookings, WhatsApp, Resend, and site deployment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Verification Checklist" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Step-by-step verification checklist for Zion Tech Group: Composio connections, Stripe billing, Calendly bookings, WhatsApp, Resend, and site deployment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
