import Link from 'next/link';

export default function EnhancedHome() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Enhanced Home</h1>
      <p className="text-gray-600 dark:text-gray-300">Prototype home page.</p>
      <Link href="/"><a className="text-blue-600 dark:text-cyan-400">Go to main →</a></Link>
    </div>
  );
}