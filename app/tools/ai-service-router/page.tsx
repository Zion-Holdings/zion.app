
// app/tools/ai-service-router/page.tsx — AI Service Router (server wrapper)
import RouterPing from './pingClient';

import AIServiceRouterClient from './AIServiceRouterClient';

export const metadata = {
  title: 'AI Service Router',
  description: 'Describe what you need and our AI instantly routes you to the best-matching service from our comprehensive AI-powered service catalog.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/tools/ai-service-router/' },

  openGraph: {
    title: 'AI Service Router',
    description: 'Describe what you need and our AI instantly routes you to the best-matching service from our comprehensive AI-powered service catalog.',
    url: 'https://ziontechgroup.com/tools/ai-service-router/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function AIServiceRouterPage() {


  return <>
    <RouterPing />
    <AIServiceRouterClient />
  </>;
}
