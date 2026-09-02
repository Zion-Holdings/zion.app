import { SITE } from './lib/site';

const services = [
  ['AI Services', 'Agents, RAG, MLOps, and revenue automation that ship to production.', '/ai-services/'],
  ['Cloud & DevOps', 'AWS, Azure, and GCP migration, Kubernetes, CI/CD, and FinOps.', '/services/cloud/'],
  ['Cybersecurity', 'Managed SOC, threat detection, and compliance automation.', '/services/security/'],
  ['Data & Analytics', 'Pipelines, lakes, and AI-ready analytics platforms.', '/services/data/'],
  ['Blockchain & Web3', 'Smart contracts, audits, and enterprise Web3 integrations.', '/services/blockchain/'],
  ['IoT & Edge', 'Device telemetry, edge inference, and operations automation.', '/services/iot/'],
];

const outcomes = [
  ['−40%', 'ticket handle time with AI support'],
  ['99.99%', 'uptime after cloud migration'],
  ['+28%', 'cash-flow speed from billing automation'],
  ['−60%', 'security incidents with managed SOC'],
];

export default function HomePage() {
  return (
    <main>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 24px 48px', textAlign: 'center' }}>
        <p
          style={{
            display: 'inline-block',
            background: 'rgba(16, 185, 129, 0.16)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#34d399',
            padding: '8px 16px',
            borderRadius: 999,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Free 30-minute Discovery · $99 paid deep-dive available
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            margin: '0 0 20px',
            background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AI & IT that create measurable growth
        </h1>
        <p style={{ fontSize: 20, color: '#94a3b8', maxWidth: 720, margin: '0 auto 28px', lineHeight: 1.65 }}>
          Zion Tech Group designs, ships, and operates AI agents, cloud platforms, and managed security for
          companies that need outcomes — not slide decks.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/book/"
            style={{
              padding: '14px 26px',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #7c3aed, #db2777)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            Book free Discovery
          </a>
          <a
            href="/pricing/"
            style={{
              padding: '14px 26px',
              borderRadius: 12,
              border: '2px solid rgba(167,139,250,0.4)',
              color: '#a78bfa',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            View pricing
          </a>
        </div>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16,
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px 24px',
        }}
      >
        {outcomes.map(([stat, label]) => (
          <div key={label} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 16, padding: 20 }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa' }}>{stat}</div>
            <p style={{ margin: '8px 0 0', color: '#94a3b8' }}>{label}</p>
          </div>
        ))}
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 64px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 32, marginBottom: 24 }}>What we deliver</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {services.map(([title, body, href]) => (
            <article key={href} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 16, padding: 28 }}>
              <h3 style={{ color: '#a78bfa', margin: '0 0 8px' }}>{title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{body}</p>
              <a href={href} style={{ fontWeight: 700 }}>Explore →</a>
            </article>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto 72px', padding: 32, borderRadius: 20, background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(124,58,237,0.25)', textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>Ready in one conversation</h2>
        <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>
          Discovery is 30 minutes on Google Meet. Optional $99 paid consult if you want a written roadmap the same week.
          Starter projects start at $2,500. Growth retainers are $8,000/month.
        </p>
        <p>
          <a href="/book/" style={{ marginRight: 12, fontWeight: 700 }}>Open the calendar</a>
          <a href={SITE.stripeDiscovery} style={{ fontWeight: 700 }}>Pay $99 Discovery</a>
        </p>
      </section>
    </main>
  );
}
