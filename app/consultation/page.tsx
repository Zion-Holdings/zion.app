import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Free Consultation',
  description:
    'Book a free consultation with the Zion Tech Group team to discuss AI, automation, and enterprise IT solutions tailored to your business.',
  alternates: { canonical: '/consultation/' },

  openGraph: {
    title: 'Free Consultation',
    description: 'Book a free consultation with the Zion Tech Group team to discuss AI, automation, and enterprise IT solutions tailored to your business.',
    url: 'https://ziontechgroup.com/consultation/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function ConsultationPage() {
  redirect('/contact/');
}
