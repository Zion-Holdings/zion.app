export const metadata = {
  title: 'Success Stories | Zion Tech Group',
  description: 'Client success stories from Zion Tech Group: AI automation, managed services, cloud migration, and cybersecurity outcomes.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Success Stories</h1>
      <p style={{fontSize: 16, lineHeight: 1.6, color: '#cbd5e1', background: '#0f172a', border: '1px solid #7c3aed', borderRadius: 16, padding: 16}}>
        If you just paid via Stripe, thank you — Discovery, Starter, and Growth links redirect here.
        {' '}<a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" style={{color:'#a78bfa'}}>Book the 30-min Discovery</a> if you have not already.
      </p>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Real outcomes from our clients: faster deployments, lower cost, stronger security, and new revenue streams.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>AI Support</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Reduced ticket resolution time with RAG and automation.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>-40% handle time</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Cloud Migration</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>AWS/Azure migration with zero downtime and cost controls.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>99.99% uptime</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Revenue Automation</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Faster invoicing, billing, and collections with automations.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>+28% cash flow</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Managed SOC</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Continuous monitoring and incident response at scale.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>-60% incidents</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/case-studies/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Case Studies</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Book Consultation</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Composio + Stripe + Calendly + Resend + Airtable/Sheets (HubSpot reconnect pending).</p>
    </main>
  );
}
