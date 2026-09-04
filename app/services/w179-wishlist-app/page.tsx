import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "WishList - Customer Wishlists | Zion Tech Group",
  description: "Let customers save and share wishlists: email reminders, price drop alerts, social sharing.",
  openGraph: {
    title: "WishList - Customer Wishlists | Zion Tech Group",
    description: "Let customers save and share wishlists: email reminders, price drop alerts, social sharing.",
    url: "https://ziontechgroup.com/services/w179-wishlist-app/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-wishlist-app/" },
};

export default function W179WishlistAppPage() {
  return (
    <StandardPage
      title="WishList - Customer Wishlists"
      subtitle="Let customers save and share wishlists: email reminders, price drop alerts, social sharing."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "WishList - Customer Wishlists" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Let customers save and share wishlists: email reminders, price drop alerts, social sharing.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113016) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
