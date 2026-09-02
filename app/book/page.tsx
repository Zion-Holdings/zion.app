import { SITE } from '../lib/site';

export const metadata = {
  title: 'Book AI/IT Discovery',
  description: 'Book the live 30-minute Zion Tech Group AI/IT Discovery on Calendly. Google Meet. Optional $99 Stripe checkout.',
  alternates: { canonical: `${SITE.url}/book/` },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 12px' }}>Book the 30-minute Discovery</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.65, marginBottom: 16 }}>
        Live event type: AI/IT Discovery-1 on Google Meet. Use the calendar below or pay $99 if you want a written
        roadmap after the call.
      </p>
      <p style={{ marginBottom: 20 }}>
        <a href={SITE.calendly} style={primaryBtn}>Open Calendly</a>
        <a href={SITE.stripeDiscovery} style={secondaryBtn}>Pay $99</a>
        <a href="/pricing/" style={{ color: '#a78bfa' }}>Plans</a>
      </p>
      <iframe
        title="Zion Tech Group Discovery calendar"
        src={`${SITE.calendly}?hide_gdpr_banner=1&embed_domain=ziontechgroup.com&embed_type=Inline`}
        style={{ width: '100%', height: 760, border: 0, borderRadius: 16, background: '#fff' }}
      />
    </main>
  );
}

const primaryBtn = {
  display: 'inline-block',
  padding: '12px 18px',
  borderRadius: 12,
  background: '#7c3aed',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  marginRight: 8,
} as const;

const secondaryBtn = {
  display: 'inline-block',
  padding: '12px 18px',
  borderRadius: 12,
  background: '#0f172a',
  border: '1px solid #334155',
  color: '#e5e7eb',
  textDecoration: 'none',
  fontWeight: 600,
  marginRight: 8,
} as const;
