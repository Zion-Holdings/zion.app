import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "ClassBook \u2014 Class Booking System | Zion Tech Group",
  description: "Manage class bookings: scheduling, waitlists, payments, instructor management.",
  openGraph: {
    title: "ClassBook \u2014 Class Booking System | Zion Tech Group",
    description: "Manage class bookings: scheduling, waitlists, payments, instructor management.",
    url: "https://ziontechgroup.com/services/w180-class/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-class/" },
};

export default function W180ClassPage() {
  return (
    <StandardPage
      title="ClassBook \u2014 Class Booking System"
      subtitle="Manage class bookings: scheduling, waitlists, payments, instructor management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "ClassBook \u2014 Class Booking System" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Manage class bookings: scheduling, waitlists, payments, instructor management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608121040) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
