export const metadata = {
  title: 'About Zion Tech Group — 26 years of IT, now AI automation',
  description:
    'Zion Tech Group is a real IT company (26+ years, 250+ cities), not ziontech.biz. CEO Kleber Alcatrao. LinkedIn 4.9k, Instagram 2.9k, YouTube heritage since 2009.',
  alternates: { canonical: 'https://ziontechgroup.com/about/' },
};

const FACTS = [
  { stat: '26+', title: 'Years in IT', body: 'Hardware, storage, green IT, and enterprise support on YouTube since 2009 — UPS, Dell servers, information security — before the AI practice.' },
  { stat: '4,929', title: 'LinkedIn followers', body: 'Company page ziontechgroup. CEO Kleber Alcatrao (Zion Holdings).' },
  { stat: '2,946', title: 'Instagram followers', body: '@zion.tech.group · 791 posts · last reel 2025-06-07 (marketplace). Website still .com.br. Canonical page: /marketplace/.' },
  { stat: '5,888', title: 'YouTube views', body: '@ziontechgroup · 11 videos (2009–2019). Canonical list: /heritage/.' },
];

export default function Page() {
  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>
        A real IT company, now shipping AI agents
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: '#cbd5e1', marginBottom: 16 }}>
        Zion Tech Group has delivered infrastructure, storage, and IT consulting for more than 26 years
        across 250+ cities. Today we run the same company on https://ziontechgroup.com — AI agents,
        Composio-powered automation, cloud, and cybersecurity.
      </p>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        CEO Kleber Alcatrao (Zion Holdings). We are not ziontech.biz and not ziontechnologies.org.
      </p>
      <p style={{ marginBottom: 32 }}>
        <a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Book 30-min Discovery
        </a>
        <a href="/plans/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600 }}>
          View plans
        </a>
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {FACTS.map((fact) => (
          <div key={fact.title} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa' }}>{fact.stat}</div>
            <h2 style={{ color: '#fff', fontSize: 18, margin: '8px 0' }}>{fact.title}</h2>
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{fact.body}</p>
          </div>
        ))}
      </div>
      <p style={{ color: '#94a3b8', fontSize: 14, marginTop: 32 }}>
        How we automate:{' '}
        <a href="/composio-vs-n8n-make/" style={{ color: '#a78bfa' }}>Composio vs n8n vs Make</a>
        {' · '}
        <a href="/integrations/composio/" style={{ color: '#a78bfa' }}>Live stack</a>
      </p>
    </main>
  );
}
