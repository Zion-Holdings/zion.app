import { NAV, SITE } from '../lib/site';

export function SiteNav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(12px)',
        background: 'rgba(11, 18, 32, 0.82)',
        borderBottom: '1px solid rgba(124,58,237,0.18)',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Zion Tech Group
        </a>
        <nav style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: 14 }}>
              {item.label}
            </a>
          ))}
          <a
            href="/book/"
            style={{
              display: 'inline-block',
              padding: '8px 14px',
              borderRadius: 10,
              background: 'linear-gradient(135deg, #7c3aed, #db2777)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Book Discovery
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ marginTop: 72, borderTop: '1px solid rgba(124,58,237,0.15)', padding: '36px 20px 48px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p style={{ margin: '0 0 12px', color: '#94a3b8' }}>
          {SITE.address} · <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · <a href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
        <p style={{ margin: 0 }}>
          <a href="/services/">Services</a> · <a href="/ai-services/">AI</a> · <a href="/pricing/">Pricing</a> ·{' '}
          <a href="/book/">Book</a> · <a href="/faq/">FAQ</a> · <a href="/privacy-policy/">Privacy</a> ·{' '}
          <a href="/terms-of-service/">Terms</a> · <a href={SITE.whatsapp}>WhatsApp</a>
        </p>
        <p style={{ color: '#64748b', fontSize: 13, marginTop: 16 }}>© {new Date().getFullYear()} Zion Tech Group</p>
      </div>
    </footer>
  );
}
