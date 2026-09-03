export const metadata = {
  title: 'Revenue Calculator | Zion Tech Group',
  description: 'Estimate recurring revenue uplift from AI automation, managed services, and partner programs with the Zion Tech Group revenue calculator.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Revenue Calculator</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Model monthly recurring revenue potential from managed services, AI automation, and partner programs.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Managed Services</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Baseline recurring IT management and support contracts.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>$3,000 - $15,000/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>AI Automation</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Workflow, support, sales, and DevOps automations with measurable ROI.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,500/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Partner Program</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Recurring commissions and co-selling with Zion.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>Up to 25%</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>AI Platforms</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Cybersecurity, observability, and knowledge platforms.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $8,000/mo</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>Get a Custom Model</a>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>View Pricing</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Stripe + HubSpot + Composio + Resend.</p>
    </main>
  );
}
