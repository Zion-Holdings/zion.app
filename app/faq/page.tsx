export const metadata = {
  title: 'AI Services FAQ | Frequently Asked Questions | Zion Tech Group',
  description:
    'Who Zion Tech Group is (not ziontech.biz), $99 Discovery, Composio vs n8n vs Make, marketplace, and live plans.',
  alternates: { canonical: 'https://ziontechgroup.com/faq/' },
};

const QA = [
  ['Who is Zion Tech Group?', 'A 26-year IT company at ziontechgroup.com. CEO Kleber Alcatrao. Not ziontech.biz or ziontechnologies.org.'],
  ['How do I book Discovery?', 'Only https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1 is active (30 min, Google Meet). Or pay $99 on Stripe.'],
  ['What are the prices?', 'Discovery $99 · Starter $2,500 · Growth $8,000/month · Enterprise custom.'],
  ['How is this different from n8n or Make?', 'Those are canvases. Composio lets the agent choose authenticated tools at runtime. See /composio-vs-n8n-make/.'],
  ['What is ZionAI Marketplace?', 'Talent, AI solutions, and 24/7 onsite IT. Canonical page: /marketplace/.'],
];

export default function Page() {
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: '#fff' }}>Frequently asked questions</h1>
      {QA.map(([q, a]) => (
        <div key={q} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 12, padding: 16, marginTop: 12 }}>
          <h2 style={{ color: '#fff', fontSize: 18, margin: '0 0 8px' }}>{q}</h2>
          <p style={{ color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>{a}</p>
        </div>
      ))}
      <p style={{ marginTop: 24 }}>
        <a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" style={{ color: '#a78bfa' }}>Book Discovery</a>
        {' · '}
        <a href="/plans/" style={{ color: '#a78bfa' }}>Plans</a>
      </p>
    </main>
  );
}
