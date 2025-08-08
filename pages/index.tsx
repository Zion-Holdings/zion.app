import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '3rem', maxWidth: 960, margin: '0 auto' }}>
      <h1>Zion AI Marketplace</h1>
      <p>Welcome. Explore our Enterprise licensing for teams and organizations.</p>
      <div style={{ marginTop: '1.5rem' }}>
        <Link href="/plans/enterprise">View Enterprise Plans</Link>
      </div>
    </main>
  );
}