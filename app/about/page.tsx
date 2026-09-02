export const metadata = {
  title: 'About',
  description: 'Zion Tech Group builds AI agents, automation platforms, and revenue systems for B2B teams.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>About Zion Tech Group</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: 18 }}>
        We ship AI-powered revenue and operations systems — agents, workflows, cloud, and security — so technology
        turns into recurring results instead of unused pilots.
      </p>
      <h2>What we do</h2>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.9 }}>
        <li>AI agent platforms for support, sales, and ops</li>
        <li>Revenue automation with Stripe, CRM, and messaging</li>
        <li>Cloud, data, and managed security programs</li>
      </ul>
      <p>
        <a href="/book/">Book a Discovery call</a>
      </p>
    </main>
  );
}
