export const metadata = {
  title: 'Partner Program | Zion Tech Group',
  description: 'Join the Zion Tech Group partner program: recurring revenue, co-selling, implementation support, and enablement for agencies, MSPs, and VARs.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Partner Program</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Scale revenue with Zion Tech Group. We enable agencies, MSPs, and VARs to sell AI, automation, cybersecurity, and cloud services with proven offers and operational support.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Revenue Share</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Recurring commissions on managed services and subscription platforms.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>Up to 25%</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Co-Selling</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Joint pipeline generation, proposals, and deal strategy with our sales team.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>Included</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Implementation</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Delivery support, playbooks, and SLAs so you can onboard clients faster.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $2,500/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Enablement</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Certification, marketing assets, and partner portal access.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>Free onboarding</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>Apply to Partner Program</a>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>View Partner Pricing</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: HubSpot + Stripe + Resend + Composio + Notion + Slack.</p>
    </main>
  );
}
