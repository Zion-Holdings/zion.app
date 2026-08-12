import RouterPing from './pingClient';
import AIServiceRouterClient from './AIServiceRouterClient';

export const metadata = {
  title: 'AI Service Router',
  description: 'Describe what you need and our AI instantly routes you to the best-matching service from our comprehensive AI-powered service catalog.',
  robots: { index: true, follow: true },
};

export default function AIServiceRouterPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <RouterPing />
      <AIServiceRouterClient />
    </main>
  );
}
