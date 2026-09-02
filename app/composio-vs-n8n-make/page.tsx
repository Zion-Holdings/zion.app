export const metadata = {
  title: 'Composio vs n8n vs Make | Zion Tech Group',
  description:
    'Composio is the agent/MCP tool layer. n8n is an open-source canvas. Make is a visual scenario builder. Zion runs 31 live Composio toolkits so agents choose tools at runtime.',
  alternates: { canonical: 'https://ziontechgroup.com/composio-vs-n8n-make/' },
};

const ROWS = [
  ['Job', 'Give an agent 1,000+ authenticated tools', 'Draw and run a workflow', 'Draw and run a visual scenario'],
  ['Who picks the next step', 'The model, from a tool catalog + schema', 'The canvas (plus optional AI nodes)', 'The scenario graph'],
  ['Auth', 'Managed OAuth / API keys per user', 'Per-node credentials on the instance', 'Per-module connections'],
  ['Best when', 'You already have an agent (Cursor, Claude, custom)', 'You want self-hosted, inspectable flows', 'Ops teams want a visual builder'],
  ['Wrong abstraction', 'Replacing a finance approval canvas', 'Expecting the agent to invent tools mid-run', 'Same — the graph is the program'],
];

export default function Page() {
  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>
        Composio vs n8n vs Make
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: '#cbd5e1', marginBottom: 24 }}>
        They are not substitutes. n8n and Make are canvases: a human draws the path. Composio is the
        tool layer for agents — authenticated actions the model chooses at runtime through MCP or
        function calling.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#0f172a' }}>
          <thead>
            <tr>
              {['', 'Composio', 'n8n', 'Make'].map((h) => (
                <th key={h} style={{ textAlign: 'left', color: '#fff', padding: 12, border: '1px solid #334155' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} style={{ padding: 12, border: '1px solid #334155', color: '#cbd5e1', fontSize: 14 }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 style={{ color: '#fff', marginTop: 32 }}>How Zion uses this</h2>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
        <li>Cloud agents discover the newest ACTIVE Composio account per toolkit.</li>
        <li>Revenue: Calendly Discovery → Stripe links → Resend on a verified domain.</li>
        <li>Ops: Gmail + Notion + Slack + Telegram Zion Agents. Airtable/Sheets while HubSpot is expired.</li>
        <li>n8n/Make still belong on deterministic, human-approved sequences. We do not force those onto the agent.</li>
      </ul>
      <p style={{ marginTop: 24 }}>
        <a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Book Discovery
        </a>
        <a href="/integrations/composio/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#0f172a', border: '1px solid #334155', color: '#e5e7eb', textDecoration: 'none', fontWeight: 600 }}>
          Live apps
        </a>
      </p>
    </main>
  );
}
