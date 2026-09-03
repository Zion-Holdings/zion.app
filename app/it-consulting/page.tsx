export const metadata = {
  title: 'IT Consulting | Zion Tech Group',
  description: 'IT consulting services: cloud migration, DevOps, security, data engineering, and AI implementation with measurable outcomes.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>IT Consulting</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>End-to-end IT consulting for cloud, DevOps, security, data, and AI. We focus on delivery outcomes, not slide decks.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Cloud Migration</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>AWS/Azure/GCP migration with zero downtime and cost controls.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $8,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>DevOps</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>CI/CD, IaC, Kubernetes, observability, and incident response.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $5,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Security</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>SOC, incident response, compliance automation, and threat modeling.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,000/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Data Engineering</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Pipelines, lakes, analytics, and AI-ready data platforms.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $6,000</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Book Consultation</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Terraform + Kubernetes + Composio + Stripe + HubSpot.</p>
    </main>
  );
}
