export const metadata = {
  title: 'Services',
  description: 'AI, cloud, security, data, blockchain, and IoT services from Zion Tech Group.',
};

export default function Page() {
  const hubs = [
    ['AI Services', '/ai-services/', 'Agents, RAG, MLOps, and automation.'],
    ['Cloud & DevOps', '/services/cloud/', 'Migration, Kubernetes, CI/CD, FinOps.'],
    ['Cybersecurity', '/services/security/', 'SOC, detection, and compliance.'],
    ['Data & Analytics', '/services/data/', 'Pipelines and AI-ready platforms.'],
    ['Blockchain & Web3', '/services/blockchain/', 'Contracts, audits, integrations.'],
    ['IoT & Edge', '/services/iot/', 'Telemetry and edge inference.'],
    ['IT Consulting', '/it-consulting/', 'Delivery-focused consulting.'],
    ['Managed IT', '/managed-it-services/', 'Operations with measurable SLAs.'],
  ];
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Services</h1>
      <p style={{ color: '#cbd5e1', fontSize: 18 }}>Enterprise AI, IT, and Micro-SaaS built for outcomes.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24 }}>
        {hubs.map(([title, href, body]) => (
          <a key={href} href={href} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20, color: '#e6f0ff', textDecoration: 'none' }}>
            <h3 style={{ color: '#a78bfa', margin: '0 0 8px' }}>{title}</h3>
            <p style={{ margin: 0, color: '#94a3b8' }}>{body}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
