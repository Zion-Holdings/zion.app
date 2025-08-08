import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Zion App</h1>
      <ul>
        <li><Link href="/deploy/genesis">Deploy Genesis</Link></li>
        <li><Link href="/zion/init">Zion Init</Link></li>
      </ul>
    </div>
  );
}