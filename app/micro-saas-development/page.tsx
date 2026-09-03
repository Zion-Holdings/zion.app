export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Micro SaaS development: design, build, launch, and grow web apps with monetization, auth, payments, and analytics built in.',
};
export default function Page() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Micro SaaS Development</h1>
      <p style={{fontSize: 18, lineHeight: 1.6, color: '#cbd5e1'}}>We design, build, and ship Micro SaaS products with monetization, auth, payments, and analytics from day one.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24}}>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>MVP</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Lean scope, fast launch, and validated learning loops.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $12,000</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Monetization</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Stripe/Chargebee pricing, trials, invoices, and churn controls.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $3,500</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Growth</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Analytics, onboarding, referral loops, and retention automation.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $4,000/mo</p>
        </div>
        <div style={{background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>Operations</h3>
          <p style={{margin: 0, fontSize: 14, color: '#cbd5e1'}}>Hosting, CI/CD, support ops, and incident response.</p>
          <p style={{fontSize: 22, fontWeight: 700, marginTop: 12}}>From $2,000/mo</p>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <a href="/pricing/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8}}>View Pricing</a>
        <a href="/paid-consultation/" style={{display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600}}>Start Building</a>
      </div>
      <p style={{color: '#94a3b8', fontSize: 13, marginTop: 24, textAlign: 'center'}}>Stack: Next.js + Stripe/Chargebee + Composio + Resend + Vercel/AWS.</p>
    </main>
  );
}
