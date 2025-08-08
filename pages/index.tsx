import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Welcome to Zion</h1>
      <p className="mt-2 text-sm opacity-80">Explore our app to hire from anywhere and track milestones on the go.</p>
      <div className="mt-4">
        <Link href="/download"><a className="text-indigo-600 underline">Get the mobile app</a></Link>
      </div>
    </div>
  );
}