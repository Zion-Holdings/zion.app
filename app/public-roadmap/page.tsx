export const metadata = {
  title: 'Public Roadmap — Zion Tech Group',
  description: 'Planned releases and feature roadmap for Zion Tech Group services and platform.',
  canonical: 'https://ziontechgroup.com/public-roadmap/',
};
export default function Page() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '64px 20px'}}>
      <h1 style={{fontSize: 32, marginBottom: 16}}>Public Roadmap</h1>
      <p style={{color: '#94a3b8', marginBottom: 24}}>Upcoming features, integrations, and platform improvements.</p>
      <div style={{display:'grid',gap:16}}>
        <div style={{border:'1px solid #334155',borderRadius:12,padding:18,background:'#0b1220'}}>
          <div style={{fontWeight:600}}>Q4 2026</div>
          <div style={{color:'#94a3b8',fontSize:14}}>Expanded AI service catalog and improved onboarding automation.</div>
        </div>
        <div style={{border:'1px solid #334155',borderRadius:12,padding:18,background:'#0b1220'}}>
          <div style={{fontWeight:600}}>Q1 2027</div>
          <div style={{color:'#94a3b8',fontSize:14}}>Self-service portal upgrades and real-time SLA dashboards.</div>
        </div>
      </div>
      <p style={{marginTop:24}}><a href="/contact/" style={{color:'#7dd3fc'}}>Request a feature →</a></p>
    </main>
  );
}
