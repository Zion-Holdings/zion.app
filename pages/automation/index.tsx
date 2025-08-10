import Link from 'next/link';

export default function Automation() {
  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Automation Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300">Autonomous systems running in the cloud.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/reports/performance/">
            <a className="text-blue-600 dark:text-blue-400">Lighthouse Mobile Reports</a>
          </Link>
        </li>
        <li>
          <Link href="/reports/security/">
            <a className="text-blue-600 dark:text-blue-400">Security Audit Reports</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}