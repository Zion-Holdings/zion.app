import React from 'react';

type Plan = { summary?: any; tasks?: any[] };

export default function AlignmentReport() {
  const [plan, setPlan] = React.useState<Plan | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/reports/alignment/plan-latest.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load plan');
        const json = await res.json();
        setPlan(json);
      } catch (e: any) {
        setError(e?.message || 'Error');
      }
    }
    load();
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: 960, margin: '0 auto' }}>
      <h1>Alignment Report</h1>
      <p>This page summarizes alignment between the shared chat, the Google Doc, and the live site.</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!plan && !error && <p>Loading…</p>}
      {plan && (
        <div>
          <h2>Summary</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#f6f8fa', padding: '1rem', borderRadius: 6 }}>
            {JSON.stringify(plan.summary, null, 2)}
          </pre>
          <h2>Top Tasks</h2>
          <ul>
            {(plan.tasks || []).slice(0, 50).map((t, i) => (
              <li key={i}>
                <strong>{t.type}</strong>{' '} {t.keyword ? <code>{t.keyword}</code> : null} {t.url ? <a href={t.url}>{t.url}</a> : null}
                <div>{t.recommendation}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


