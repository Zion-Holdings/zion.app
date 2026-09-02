export const metadata = {
  title: 'Free AI Tools',
  description: 'Free AI and IT tools from Zion Tech Group, including readiness audits and ROI calculators.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Free tools</h1>
      <p style={{ color: '#cbd5e1' }}>Start with a readiness audit or revenue calculator, then book Discovery if you want a build plan.</p>
      <ul style={{ color: '#cbd5e1', lineHeight: 2 }}>
        <li><a href="/free-ai-readiness-audit/">Free AI Readiness Audit</a></li>
        <li><a href="/revenue-calculator/">Revenue calculator</a></li>
        <li><a href="/assessments/">Assessments</a></li>
        <li><a href="/book/">Book Discovery</a></li>
      </ul>
    </main>
  );
}
