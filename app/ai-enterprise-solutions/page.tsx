export const metadata = {
  title: 'AI Enterprise Solutions | Zion Tech Group',
  description: 'Enterprise AI programs: governance, security, architecture, and change management for regulated and high-scale environments.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>AI Enterprise Solutions</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Enterprise-grade AI programs with governance, security, architecture, and adoption at scale.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Governance</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Responsible AI, compliance, and audit-ready controls.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $8,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Security</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Data residency, access control, and threat modeling.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $10,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Architecture</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Scalable platforms with MLOps, observability, and SLOs.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $12,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Change Management</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Training, adoption programs, and ROI measurement.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $6,000</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Enterprise Consultation</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Composio + OpenAI/Anthropic + Azure/AWS/GCP + HubSpot + Notion + Slack + Resend.</p>
    </main>
  );
}
