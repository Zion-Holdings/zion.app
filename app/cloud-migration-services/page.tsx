export const metadata = {
  title: 'Cloud Migration Services | Zion Tech Group',
  description: 'Cloud migration services for AWS, Azure, and GCP with zero downtime, cost controls, security, and post-migration optimization.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Cloud Migration Services</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Migrate to AWS, Azure, or GCP with zero downtime, cost controls, security, and observability built in from day one.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Assessment</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Appraisal of workloads, dependencies, and migration readiness.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,500</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Migration</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Lift-and-shift or replatform with IaC, networking, and cutover planning.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $8,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Cost Optimization</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Rightsizing, reservations, FinOps, and anomaly alerts.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $2,500/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Security & Compliance</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>IAM, segmentation, encryption, and compliance automation.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,000/mo</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Book Consultation</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Terraform + Kubernetes + AWS/Azure/GCP + Composio + Stripe + HubSpot.</p>
    </main>
  );
}
