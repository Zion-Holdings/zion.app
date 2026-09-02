import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter, SiteNav } from './components/SiteChrome';
import { SITE } from './lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Zion Tech Group — AI & IT Services for Measurable Growth',
    template: '%s | Zion Tech Group',
  },
  description:
    'Zion Tech Group delivers AI, cloud, cybersecurity, data, blockchain, and Micro-SaaS solutions with measurable outcomes. Book a 30-minute Discovery.',
  alternates: { canonical: SITE.url },
  openGraph: {
    title: 'Zion Tech Group — AI & IT Services',
    description: 'Enterprise AI, cloud, cybersecurity, and automation with measurable outcomes.',
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
