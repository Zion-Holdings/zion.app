import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Zion Tech Group — AI, IT & Micro SAAS Solutions', template: '%s | Zion Tech Group' },
  description: 'Enterprise AI services, IT solutions, and Micro SAAS platforms. Machine learning, cybersecurity, cloud infrastructure, automation, and more.',
  keywords: 'AI services, IT consulting, machine learning, cybersecurity, cloud migration, Micro SAAS, automation, NLP, computer vision',
  authors: [{ name: 'Kleber Garcia Alcatrão', url: 'https://ziontechgroup.com' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    title: 'Zion Tech Group — AI, IT & Micro SAAS Solutions',
    description: 'Enterprise AI services, IT solutions, and Micro SAAS platforms — from machine learning and cybersecurity to cloud infrastructure and automation.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    images: [{ url: 'https://ziontechgroup.com/og-home.svg', width: 1200, height: 630, alt: 'Zion Tech Group — AI, IT & Micro SAAS Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, IT & Micro SAAS Solutions',
    description: 'Enterprise AI services, IT solutions, and Micro SAAS platforms.',
    images: ['https://ziontechgroup.com/og-home.svg'],
  },
  alternates: { canonical: 'https://ziontechgroup.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <Navigation />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
