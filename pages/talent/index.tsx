import Link from 'next/link';

export default function TalentIndex() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Talent</h1>
      <p className="text-zinc-600 mb-4">Go to your dashboard to build your resume and portfolio.</p>
      <Link href="/dashboard/talent/portfolio"><a className="text-indigo-600 underline">Open Portfolio Builder</a></Link>
    </div>
  );
}