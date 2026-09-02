export const metadata = {
  title: 'AI Data Analytics | Zion Tech Group',
  description: 'AI data analytics services: pipelines, lakes, BI, predictive analytics, and real-time dashboards for faster decisions.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>AI Data Analytics</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>Turn raw data into decisions with AI analytics, modern BI, and real-time pipelines.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Pipelines</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Reliable ingestion and transformation for analytics and AI.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $5,500</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>BI Dashboards</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Executive dashboards with KPIs, forecasts, and anomaly alerts.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $4,500</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Predictive Analytics</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Demand, churn, and revenue forecasting with ML models.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $7,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Data Governance</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Quality, lineage, catalog, and compliance for analytics.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,500</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Talk to an Analyst</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: AWS/Azure/GCP + Snowflake/BigQuery + Composio + HubSpot + Resend.</p>
    </main>
  );
}
