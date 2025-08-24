import Link from 'next/link';

export default function EnhancedHome() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Zion Enhanced Home</h1>
      <p className="text-gray-600 dark:text-gray-400">Accelerate your genesis deployment.</p>
      <Link href="/zion/init"><a className="underline text-indigo-600 dark:text-indigo-400">Open Deploy Panel</a></Link>
    </div>
  );
}