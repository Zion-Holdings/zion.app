import { SITE } from '../lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Talk to Zion Tech Group about AI, IT, and Micro-SaaS solutions. Book a free Discovery.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Contact</h1>
      <p style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.7 }}>
        Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, call <a href={SITE.phoneHref}>{SITE.phone}</a>, or
        message us on <a href={SITE.whatsapp}>WhatsApp</a>.
      </p>
      <p style={{ color: '#94a3b8' }}>{SITE.address}</p>
      <p style={{ marginTop: 24 }}>
        <a href="/book/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Book Discovery
        </a>
        <a href="/pricing/" style={{ color: '#a78bfa' }}>Pricing</a>
      </p>
    </main>
  );
}
