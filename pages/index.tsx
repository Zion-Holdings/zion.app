import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Zion OS</h1>
      <p className="text-gray-600 dark:text-gray-300">Launch a full Zion OS instance from a single control panel.</p>
      <div className="flex items-center gap-3">
        <Link href="/zion/init">
          <a className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Deploy Genesis</a>
        </Link>
        <Link href="/automation/cloud">
          <a className="inline-flex items-center px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Autonomous Cloud</a>
        </Link>
      </div>
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h2 className="font-semibold">New: Autonomous Cloud Automation</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fully autonomous, runs in the cloud via scheduled workflows, writes insights and commits directly—no servers, no humans.</p>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
          <li>Market intelligence & docs refresh cycles</li>
          <li>Roadmap and whitepaper synthesis suggestions</li>
          <li>Agent observability and health signals</li>
        </ul>
        <div className="mt-3">
          <Link href="/automation/cloud"><a className="underline text-indigo-600 dark:text-indigo-400">View logs and details</a></Link>
        </div>
      </div>
    </div>
  );
}