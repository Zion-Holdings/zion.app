import { SITE } from '../lib/site';

export const metadata = {
  title: 'Paid Consultation — $99 Discovery',
  description: 'Zion Tech Group paid consultation is the $99 AI/IT Discovery. Book on /book/ or pay via Stripe.',
  alternates: { canonical: `${SITE.url}/paid-consultation/` },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>Paid consultation</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
        The live product is the $99 AI/IT Discovery (30 minutes, Google Meet). You get a recorded call and a short
        written next-step plan.
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
        <li>Stack review: AI, cloud, security, and revenue automation</li>
        <li>Top 3 opportunities ranked by ROI</li>
        <li>Clear build vs. buy recommendation</li>
      </ul>
      <p style={{ marginTop: 20 }}>
        <a href="/book/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Book a slot
        </a>
        <a href={SITE.stripeDiscovery} style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600 }}>
          Pay $99
        </a>
      </p>
    </main>
  );
}
