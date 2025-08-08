import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Zion</h1>
      <p>Welcome.</p>
      <Link href="/nft/mint"><a>Mint Origin NFT</a></Link>
    </div>
  );
}