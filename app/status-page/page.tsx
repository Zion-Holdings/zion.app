export const metadata = {
  title: 'Status Page — Zion Tech Group',
  description: 'Service health and incident updates for Zion Tech Group clients and prospects.',
  canonical: 'https://ziontechgroup.com/status-page/',
};
export default function Page() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '64px 20px'}}>
      <h1 style={{fontSize: 32, marginBottom: 16}}>Status Page</h1>
      <p style={{color: '#4ade80', fontWeight: 600, marginBottom: 12}}>All systems operational</p>
      <p style={{color: '#94a3b8', marginBottom: 18}}>Service health and incident updates for clients and prospects.</p>
      <div style={{display:'grid',gap:14}}>
        {['Website & Marketing','Client Portal','Support & Alerts'].map((name)=> (
          <div key={name} style={{border:'1px solid #334155',borderRadius:12,padding:16,background:'#0b1220',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontWeight:600}}>{name}</div>
              <div style={{fontSize:13,color:'#94a3b8'}}>Operational</div>
            </div>
            <div style={{color:'#4ade80',fontWeight:600,fontSize:14}}>Operational</div>
          </div>
        ))}
      </div>
      <p style={{marginTop:18,fontSize:13,color:'#94a3b8'}}>Last updated: {new Date().toLocaleString()}</p>
      <p style={{marginTop:18}}><a href="/contact/" style={{color:'#7dd3fc'}}>Report an issue →</a></p>
    </main>
  );
}
