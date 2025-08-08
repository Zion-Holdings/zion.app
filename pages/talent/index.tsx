import Link from 'next/link';

export default function TalentIndex() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Talent</h1>
      <p className="text-gray-700 dark:text-gray-300">Browse verified experts.</p>
      <Link href="/search"><a className="text-indigo-600 hover:underline">Search Talent</a></Link>
    </div>
  );
}