export const metadata = {
  title: 'Managed IT Services | Zion Tech Group',
  description: 'Managed IT services for small and medium businesses: support, security, monitoring, backup, and help desk with guaranteed SLAs.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Managed IT Services</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Reliable IT operations for growing businesses: support, security, monitoring, backup, and help desk with clear SLAs.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Support</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Help desk, onboarding, device management, and user support.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $1,500/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Security</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>EDR, MFA, patching, incident response, and compliance checks.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $2,000/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Monitoring</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Uptime, performance, capacity, and anomaly alerting.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $900/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Backup & Recovery</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Immutable backups, DR plan, and tested restores.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $800/mo</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Talk to Us</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Composio + HubSpot + Resend + Slack + AWS/Azure/GCP.</p>
    </main>
  );
}
