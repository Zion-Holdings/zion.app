export const metadata = {
  title: 'Book AI/IT Discovery — 30 min Google Meet | Zion Tech Group',
  description:
    'Book the live 30-minute Zion Tech Group AI/IT Discovery on Calendly. Google Meet. $99 optional Stripe checkout.',
  alternates: { canonical: 'https://ziontechgroup.com/book/' },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>
        Book the 30-minute Discovery
      </h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.65, marginBottom: 16 }}>
        Only one Calendly event type is active: AI/IT Discovery-1 (Google Meet). Older consultation
        and 30-minute meeting links do not book.
      </p>
      <p style={{ marginBottom: 20 }}>
        <a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Open Calendly
        </a>
        <a href="https://buy.stripe.com/3cIdRa6FO5dt0D53hm4ZG05" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Pay $99
        </a>
        <a href="/plans/" style={{ color: '#a78bfa' }}>Plans</a>
      </p>
      <iframe
        title="Zion Tech Group Discovery calendar"
        src="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1?hide_gdpr_banner=1&embed_domain=ziontechgroup.com&embed_type=Inline"
        style={{ width: '100%', height: 760, border: 0, borderRadius: 16, background: '#fff' }}
      />
    </main>
  );
}
