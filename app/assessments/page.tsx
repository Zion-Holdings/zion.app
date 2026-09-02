export const metadata = {
  title: 'AI Readiness Assessments',
  description: 'Free AI readiness audit and paid discovery assessments from Zion Tech Group.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Assessments</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: 18 }}>
        Start with a free readiness audit, then optionally upgrade to a $99 Discovery if you want a written roadmap.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24 }}>
        <article style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
          <h2>Free AI Readiness Audit</h2>
          <p style={{ color: '#cbd5e1' }}>Data, automation potential, security posture, and a 30-day action plan.</p>
          <a href="/free-ai-readiness-audit/">Start free audit →</a>
        </article>
        <article style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 16, padding: 20 }}>
          <h2>$99 Discovery</h2>
          <p style={{ color: '#cbd5e1' }}>30-minute Google Meet plus a written next-step memo.</p>
          <a href="/paid-consultation/">Book paid consult →</a>
        </article>
      </div>
    </main>
  );
}
