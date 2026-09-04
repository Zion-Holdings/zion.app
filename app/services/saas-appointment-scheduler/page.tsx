import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Smart Appointment Scheduling Platform | Zion Tech Group",
  description: "Let clients book appointments 24/7 with intelligent calendar sync (Google, Outlook, iCal). Automated reminders, payment collection at booking, Zoom integration, and customizable booking pages. Reduces no-shows by up to 8",
  openGraph: {
    title: "Smart Appointment Scheduling Platform | Zion Tech Group",
    description: "Let clients book appointments 24/7 with intelligent calendar sync (Google, Outlook, iCal). Automated reminders, payment collection at booking, Zoom integration, and customizable booking pages. Reduces no-shows by up to 8",
    url: "https://ziontechgroup.com/services/saas-appointment-scheduler/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-appointment-scheduler/" },
};

export default function SaasAppointmentSchedulerPage() {
  return (
    <StandardPage
      title="Smart Appointment Scheduling Platform"
      subtitle="Let clients book appointments 24/7 with intelligent calendar sync (Google, Outlook, iCal). Automated reminders, payment collection at booking, Zoom integration, and customizable booking pages. Reduces no-shows by up to 8"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Smart Appointment Scheduling Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Let clients book appointments 24/7 with intelligent calendar sync (Google, Outlook, iCal). Automated reminders, payment collection at booking, Zoom integration, and customizable booking pages. Reduces no-shows by up to 8</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607195717) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
