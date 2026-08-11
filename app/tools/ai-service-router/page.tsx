
// app/tools/ai-service-router/page.tsx — AI Service Router (server wrapper)
import RouterPing from './pingClient';

import AIServiceRouterClient from './AIServiceRouterClient';

export const metadata = { title: 'Tools — Zion Tech Group', alternates: { canonical: '/tools/ai-service-router/' } description: 'Explore Zion Tech Group services, tools, and insights.', }

export default function AIServiceRouterPage() {


  return <>
    <RouterPing />
    <AIServiceRouterClient />
  </>;
}
