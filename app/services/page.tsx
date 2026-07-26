import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Browse Zion Tech Group services: AI, IT, cloud, security, data, automation, Micro-SaaS, DevOps, blockchain, IoT, and email intelligence solutions.',
  alternates: { canonical: '/services/' },
};
export default function Page() {
  return (
    <main>
      <h1>Services</h1>
      <p>End-to-end AI, cloud, and growth operations services.</p>
    </main>
  );
}
