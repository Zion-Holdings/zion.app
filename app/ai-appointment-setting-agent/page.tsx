import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Appointment Setting Agent | Zion Tech Group",
  description: "Monetize IT services with Calendly, Stripe, WhatsApp, and AI revenue automation. See how Zion Tech Group builds recurring revenue systems for agencies and MSPs.",
  openGraph: {
    title: "Appointment Setting Agent | Zion Tech Group",
    description: "Monetize IT services with Calendly, Stripe, WhatsApp, and AI revenue automation. See how Zion Tech Group builds recurring revenue systems for agencies and MSPs.",
    url: "https://ziontechgroup.com/ai-appointment-setting-agent/",
    type: 'website',
  },
  alternates: { canonical: "/ai-appointment-setting-agent/" },
};

export default function AiAppointmentSettingAgentPage() {
  return (
    <StandardPage
      title="Appointment Setting Agent"
      subtitle="Monetize IT services with Calendly, Stripe, WhatsApp, and AI revenue automation. See how Zion Tech Group builds recurring revenue systems for agencies and MSPs."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Appointment Setting Agent" }
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
