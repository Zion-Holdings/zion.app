import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'AI and IT solutions tailored for your industry. Explore solutions by sector including Healthcare, Finance, Retail, Manufacturing, and more.',
  openGraph: {
    title: 'Industry Solutions | Zion Tech Group',
    description: 'AI and IT solutions tailored for your industry. Explore solutions by sector.',
    url: 'https://ziontechgroup.com/industries',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/industries' },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}