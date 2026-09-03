export const metadata = {
  title: 'AI Chatbot Solutions | Zion Tech Group',
  description: 'AI chatbot solutions: support bots, lead capture, WhatsApp/Telegram bots, RAG assistants, and workflow automations.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>AI Chatbot Solutions</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Deploy AI chatbots for support, lead capture, and operations across web, WhatsApp, Telegram, and Slack.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Support Bot</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>24/7 triage, knowledge-base answers, and escalation rules.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $4,500</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Lead Capture</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Conversational forms, qualification, and CRM sync.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,500</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>WhatsApp / Telegram</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Business messaging bots with orders, alerts, and support flows.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>RAG Assistant</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Document-grounded answers with citations and admin controls.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $5,500</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Book Consultation</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: OpenAI/Anthropic + Composio + WhatsApp + Telegram + Slack + Resend.</p>
    </main>
  );
}
