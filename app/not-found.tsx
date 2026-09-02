export default function NotFound() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
      <p style={{ color: '#a78bfa', fontWeight: 700 }}>404</p>
      <h1 style={{ fontSize: 36, margin: '8px 0 16px' }}>This page is not published yet</h1>
      <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>
        The live site is being rebuilt from source. Try a core route or book a Discovery call.
      </p>
      <p style={{ marginTop: 24 }}>
        <a href="/" style={{ marginRight: 12 }}>Home</a>
        <a href="/services/" style={{ marginRight: 12 }}>Services</a>
        <a href="/book/">Book Discovery</a>
      </p>
    </main>
  );
}
