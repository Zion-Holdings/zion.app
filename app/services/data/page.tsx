export const metadata = {
  title: 'Data & Analytics',
  description: 'Modern data platforms, pipelines, and AI-powered analytics from Zion Tech Group.',
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Data & Analytics</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
        Lakes, warehouses, and pipelines that make AI and reporting trustworthy.
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.9 }}>
        <li>Ingestion and transformation pipelines</li>
        <li>Governance and lineage</li>
        <li>BI and decision support</li>
        <li>AI-ready feature and document stores</li>
      </ul>
      <p>
        <a href="/ai-data-analytics/">AI analytics</a> · <a href="/book/">Book Discovery</a>
      </p>
    </main>
  );
}
