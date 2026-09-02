import { SITE } from '../lib/site';

export const metadata = {
  title: 'Pricing',
  description: 'Transparent pricing: Discovery $99, Starter $2,500, Growth $8,000/month, Enterprise custom.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Transparent pricing</h1>
      <p style={{ color: '#94a3b8' }}>Choose a plan or ask for a custom scope. Implementation support is included.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24 }}>
        {[
          ['Discovery', '$99', '30-minute Google Meet and a written next-step memo.', SITE.stripeDiscovery],
          ['Starter', '$2,500', 'Single AI or automation deliverable in a 2-week sprint.', '/book/'],
          ['Growth', '$8,000/mo', 'Up to 5 agents, monitoring, and weekly optimization.', '/book/'],
          ['Enterprise', 'Custom', 'Private cloud, compliance, and a dedicated team.', '/contact/'],
        ].map(([name, price, body, href]) => (
          <article key={name} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 24 }}>
            <h2 style={{ margin: '0 0 8px' }}>{name}</h2>
            <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', margin: '0 0 12px' }}>{price}</p>
            <p style={{ color: '#cbd5e1' }}>{body}</p>
            <a href={href} style={{ fontWeight: 700 }}>Get started →</a>
          </article>
        ))}
      </div>
    </main>
  );
}
