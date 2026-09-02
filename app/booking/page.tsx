import { SITE } from '../lib/site';

export const metadata = {
  title: 'Booking',
  description: 'Schedule a Zion Tech Group Discovery session.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Book your strategy session</h1>
      <p style={{ color: '#cbd5e1' }}>The live calendar is AI/IT Discovery-1. Free 30 minutes, or pay $99 for a written plan.</p>
      <p>
        <a href="/book/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 700, marginRight: 8 }}>
          Open calendar
        </a>
        <a href={SITE.stripeDiscovery}>Pay $99</a>
      </p>
    </main>
  );
}
