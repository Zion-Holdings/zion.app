import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Ai-whatsapp-billing | Zion Tech Group",
  description: "Monetize IT services with Ai-whatsapp-billing. Calendly bookings, Stripe payments, WhatsApp follow-ups, and AI revenue automation.",
  openGraph: {
    title: "Ai-whatsapp-billing | Zion Tech Group",
    description: "Monetize IT services with Ai-whatsapp-billing. Calendly bookings, Stripe payments, WhatsApp follow-ups, and AI revenue automation.",
    url: "https://ziontechgroup.com/docs/ai-whatsapp-billing/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-whatsapp-billing/" },
};

export default function DocsAiWhatsappBillingPage() {
  return (
    <StandardPage
      title="Ai-whatsapp-billing"
      subtitle="Monetize IT services with Ai-whatsapp-billing. Calendly bookings, Stripe payments, WhatsApp follow-ups, and AI revenue automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Whatsapp Billing" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Monetize IT services with Ai-whatsapp-billing. Calendly bookings, Stripe payments, WhatsApp follow-ups, and AI revenue automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
