export const metadata = {
  title: 'ZionAI Marketplace — talent, AI solutions, 24/7 onsite | Zion Tech Group',
  description:
    'ZionAI Marketplace matches certified tech talent, AI automation, and 24/7 onsite IT. Book a 30-minute Discovery. Not ziontech.biz.',
  alternates: { canonical: 'https://ziontechgroup.com/marketplace/' },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>ZionAI Marketplace</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: '#cbd5e1', marginBottom: 24 }}>
        The same offer Instagram already shows: certified tech talent, AI solutions, and 24/7 onsite IT —
        matched by Zion Tech Group. This is the canonical .com page for those reels.
      </p>
      <p style={{ marginBottom: 32 }}>
        <a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Book a 30-min match
        </a>
        <a href="/plans/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600 }}>
          See plans
        </a>
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {[
          ['Tech talent', 'Engineers and operators for AI, cloud, SOC, and onsite work.'],
          ['AI solutions', 'Composio agents across 31 live apps. Runtime tool choice, not a babysat canvas.'],
          ['24/7 onsite', 'Hardware and field IT since the 2009–2019 YouTube years, next to the AI practice.'],
          ['How you buy', 'Discovery $99 · Starter $2,500 · Growth $8,000/month. Live Stripe + Calendly.'],
        ].map(([title, body]) => (
          <div key={title} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
            <h2 style={{ color: '#fff', fontSize: 18, margin: '0 0 8px' }}>{title}</h2>
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
