export const metadata = {
  title: 'Free AI Readiness Audit | Zion Tech Group',
  description: 'Get a free AI readiness audit from Zion Tech Group. Evaluate automation potential, data readiness, and implementation roadmap.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Free AI Readiness Audit</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Assess your organization’s readiness for AI: data quality, workflow automation potential, security posture, and implementation roadmap.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Data Readiness</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Evaluate data quality, integration, and governance for AI use cases.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>Included</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Automation Potential</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Map workflows with highest ROI for AI and automation.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>Top 5 opportunities</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Security Posture</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Review access control, compliance gaps, and AI risks.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>Risk score</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Implementation Roadmap</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Prioritized plan with quick wins and long-term milestones.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>30-day action plan</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>Request Free Audit</a>
        <a href="/ai-automation-services/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Explore Automation</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Composio + HubSpot + Resend + Notion + Slack.</p>
    </main>
  );
}
