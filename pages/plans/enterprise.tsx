import Link from 'next/link';

const features = [
  { key: 'private_portal', label: 'Private hiring portal' },
  { key: 'dedicated_talent_pool', label: 'Dedicated talent pool' },
  { key: 'custom_sla', label: 'Custom SLA' },
  { key: 'branded_onboarding', label: 'Branded onboarding' },
  { key: 'admin_dashboards', label: 'Admin dashboards' },
];

const tiers = [
  {
    id: 'teams',
    name: 'Teams',
    price: '$199/mo',
    blurb: 'Up to 10 users, core collaboration features',
    highlights: ['10 seats', 'Private portal', 'Admin dashboard'],
    includes: { private_portal: true, dedicated_talent_pool: false, custom_sla: false, branded_onboarding: true, admin_dashboards: true },
  },
  {
    id: 'business',
    name: 'Business',
    price: '$499/mo',
    blurb: 'Up to 50 users, advanced controls and limits',
    highlights: ['50 seats', 'Dedicated talent pool', 'SLA options'],
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true },
  },
  {
    id: 'enterprise-custom',
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Unlimited users, custom contracts and SLAs',
    highlights: ['Unlimited seats', 'Custom SLA', 'Dedicated CSM'],
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true },
  },
];

export default function EnterprisePlans() {
  return (
    <main style={{ padding: '3rem', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Enterprise Plans</h1>
        <p>Team-based access with admin controls, branded environments, and usage limits.</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {tiers.map(t => (
          <div key={t.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
            <h3 style={{ marginBottom: 4 }}>{t.name}</h3>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{t.price}</div>
            <p style={{ color: '#4b5563' }}>{t.blurb}</p>
            <ul style={{ marginTop: 8 }}>
              {t.highlights.map(h => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <Link href="/enterprise" passHref legacyBehavior>
                <a style={{ padding: '0.5rem 0.75rem', background: '#111827', color: 'white', borderRadius: 8 }}>Request Quote</a>
              </Link>
              <a href="mailto:sales@zion.ai" style={{ padding: '0.5rem 0.75rem', border: '1px solid #111827', borderRadius: 8 }}>Schedule a Demo</a>
            </div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Feature comparison</h2>
        <div style={{ overflowX: 'auto', marginTop: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Feature</th>
                {tiers.map(t => (
                  <th key={t.id} style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' }}>{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map(f => (
                <tr key={f.key}>
                  <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{f.label}</td>
                  {tiers.map(t => (
                    <td key={t.id + f.key} style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                      {t.includes[f.key as keyof typeof t.includes] ? '✓' : '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginTop: '2rem', display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>SSL</span>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>ISO 27001</span>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>SOC 2</span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/enterprise/admin">Admin Dashboard</Link>
        </div>
      </section>
    </main>
  );
}