export const metadata = {
  title: 'AI Automation Services | Zion Tech Group',
  description: 'AI automation services for workflows, support, sales, and operations: RAG, voice agents, DevOps automation, and document intelligence.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>AI Automation Services</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Operationalize AI across workflows, support, sales, and IT. We deliver production-ready automations with measurable ROI.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Workflow Automation</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Composio-driven automations across CRM, email, calendar, and ticketing.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,500</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>AI Support</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>RAG knowledge base, triage, and escalation with full observability.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $4,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Sales Automation</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Lead scoring, follow-up, proposal drafting, and pipeline acceleration.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>DevOps Automation</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>CI/CD, incident response, cost optimization, and infrastructure as code.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $5,500</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Book Consultation</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Composio + OpenAI/Anthropic + HubSpot + Slack + Resend + AWS/Azure/GCP.</p>
    </main>
  );
}
