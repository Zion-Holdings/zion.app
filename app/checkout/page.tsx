import { SITE } from '../lib/site';

export const metadata = {
  title: 'Checkout',
  description: 'Pay for Zion Tech Group Discovery or ask for a custom invoice.',
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Secure checkout</h1>
      <p style={{ color: '#cbd5e1' }}>
        Discovery is live on Stripe. Starter and Growth projects are invoiced after scoping.
      </p>
      <article style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 24, margin: '24px 0' }}>
        <h2>AI/IT Discovery</h2>
        <p style={{ fontSize: 32, fontWeight: 800, color: '#a78bfa' }}>$99</p>
        <ul style={{ color: '#cbd5e1' }}>
          <li>30-minute Google Meet</li>
          <li>Written next-step memo</li>
          <li>Credit toward a Starter project</li>
        </ul>
        <a href={SITE.stripeDiscovery} style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
          Pay with Stripe
        </a>
      </article>
      <p>
        Need Starter ($2,500) or Growth ($8,000/mo)? <a href="/book/">Book a call</a> and we send a Stripe invoice.
      </p>
    </main>
  );
}
