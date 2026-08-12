// app/tools/ai-service-router/page.tsx — AI Service Router (server wrapper)
import AIServiceRouterClient from './AIServiceRouterClient';

export const metadata = {
  title: 'AI Service Router — Zion Tech Group',
  description: 'Describe what you need and our AI instantly routes you to the best-matching service from our comprehensive AI-powered service catalog.',
  alternates: { canonical: '/tools/ai-service-router/' },
  robots: { index: true, follow: true },
};

export default function AIServiceRouterPage() {
  return <AIServiceRouterClient />;
}
