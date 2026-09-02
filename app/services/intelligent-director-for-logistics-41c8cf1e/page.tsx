export const metadata = {
  title: "Intelligent Director for Logistics",
  description: "Zion Tech Group delivers Intelligent Director for Logistics with measurable outcomes.",
  alternates: { canonical: "https://ziontechgroup.com/services/intelligent-director-for-logistics-41c8cf1e/" },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Intelligent Director for Logistics</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: 18 }}>
        Zion Tech Group delivers Intelligent Director for Logistics with measurable outcomes.
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.9 }}>
        <li>Production implementation with monitoring and handover</li>
        <li>Integrations across CRM, billing, and operations tools</li>
        <li>Clear success criteria and a 30-day action plan</li>
      </ul>
      <p style={{ marginTop: 24 }}>
        <a href="/book/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 700, marginRight: 8 }}>
          Book Discovery
        </a>
        <a href="/pricing/">Pricing</a>
      </p>
    </main>
  );
}
