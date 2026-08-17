import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Contact Zion Tech Group | AI & IT Services',
  description: 'Contact Zion Tech Group for AI implementation, IT support, cloud automation, and managed technology solutions. Request a proposal, schedule a consultation, or call us directly.',
  openGraph: {
    title: 'Contact Zion Tech Group',
    description: 'Contact Zion Tech Group for AI implementation, IT support, cloud automation, and managed technology solutions.',
    url: 'https://ziontechgroup.com/contact/',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/contact/' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
