export const metadata = {
  title: 'Live stack status — Zion Tech Group',
  description:
    'Honest Composio stack status: 31 live apps, expired HubSpot, $0 Stripe charges, reconnect list. Verified 2026-09-02.',
  alternates: { canonical: 'https://ziontechgroup.com/status/' },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ color: '#fff' }}>Live stack status</h1>
      <p style={{ color: '#cbd5e1' }}>
        31 Composio toolkits ACTIVE. kleber@ connections are expired. Stripe charges $0. Book at{' '}
        <a href="/book/" style={{ color: '#a78bfa' }}>/book/</a>
        {' · '}
        <a href="/plans/" style={{ color: '#a78bfa' }}>/plans/</a>
        {' · '}
        <a href="/faq/" style={{ color: '#a78bfa' }}>/faq/</a>.
      </p>
    </main>
  );
}
