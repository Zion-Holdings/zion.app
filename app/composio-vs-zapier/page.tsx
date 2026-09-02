export const metadata = {
  title: 'Composio vs Zapier — Zion Tech Group',
  description:
    'Composio is the agent/MCP tool layer. Zapier is visual orchestration. Zion runs 31 live Composio toolkits.',
  alternates: { canonical: 'https://ziontechgroup.com/composio-vs-zapier/' },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff' }}>Composio vs Zapier</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
        Zapier is a visual orchestration platform (Zaps, Agents, MCP). Composio is the tool layer
        for agents you already run. Zapier MCP bills two tasks per tool call — fine for low-volume
        niche apps, wrong for high-volume agent loops.
      </p>
      <p style={{ marginTop: 20 }}>
        <a href="/book/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
          Book Discovery
        </a>
        <a href="/composio-vs-n8n-make/" style={{ color: '#a78bfa' }}>vs n8n / Make</a>
      </p>
    </main>
  );
}
