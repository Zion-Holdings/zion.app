import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Zion Global</h1>
      <p>Welcome. Explore the Zion Global Expo to discover multiverse innovation, protocol updates, and partner breakthroughs.</p>
      <div className="flex gap-4">
        <Link href="/expo"><a className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Enter Expo</a></Link>
        <Link href="/events/global"><a className="px-4 py-2 rounded border">Global Event</a></Link>
      </div>
    </div>
  );
}