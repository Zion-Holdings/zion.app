import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Whatsapp Lead Nurturing | Zion Tech Group",
  description: "Monetize IT services with Calendly, Stripe, WhatsApp, and AI revenue automation. See how Zion Tech Group builds recurring revenue systems for agencies and MSPs.",
  openGraph: {
    title: "Whatsapp Lead Nurturing | Zion Tech Group",
    description: "Monetize IT services with Calendly, Stripe, WhatsApp, and AI revenue automation. See how Zion Tech Group builds recurring revenue systems for agencies and MSPs.",
    url: "https://ziontechgroup.com/ai-whatsapp-lead-nurturing/",
    type: 'website',
  },
  alternates: { canonical: "/ai-whatsapp-lead-nurturing/" },
};

export default function AiWhatsappLeadNurturingPage() {
  return (
    <StandardPage
      title="Whatsapp Lead Nurturing"
      subtitle="Monetize IT services with Calendly, Stripe, WhatsApp, and AI revenue automation. See how Zion Tech Group builds recurring revenue systems for agencies and MSPs."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Whatsapp Lead Nurturing" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Monetize IT services with Calendly, Stripe, WhatsApp, and AI revenue automation. See how Zion Tech Group builds recurring revenue systems for agencies and MSPs.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
