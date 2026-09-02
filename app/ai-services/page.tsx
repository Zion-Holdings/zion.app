export const metadata = {
  title: 'AI Services for Enterprise',
  description: 'Enterprise AI services from Zion Tech Group: agents, RAG, MLOps, AIOps, and revenue automation.',
};

export default function Page() {
  const items = [
    ['AI workflow automation', '/ai-automation-services/'],
    ['Chatbots and voice agents', '/ai-chatbot-solutions/'],
    ['ML and analytics', '/ai-ml-services/'],
    ['Enterprise AI platforms', '/ai-enterprise-solutions/'],
    ['Integrations', '/ai-integration-services/'],
    ['Free readiness audit', '/free-ai-readiness-audit/'],
  ];
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>AI Services for Enterprise</h1>
      <p style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.7 }}>
        Production AI — agents, retrieval, observability, and monetization — designed for measurable outcomes.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24 }}>
        {items.map(([title, href]) => (
          <a key={href} href={href} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20, color: '#e6f0ff', textDecoration: 'none' }}>
            <h3 style={{ margin: 0 }}>{title}</h3>
          </a>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        <a href="/book/">Book Discovery</a> · <a href="/pricing/">Pricing</a>
      </p>
    </main>
  );
}
