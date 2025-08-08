import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Zion Autonomous Cloud</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Always-on, intelligent automations continuously analyze and improve the site in the cloud.
        </p>
        <div className="mt-6 inline-flex gap-3">
          <Link href="/automation">
            <a className="px-4 py-2 rounded bg-blue-600 text-white">Automation Dashboard</a>
          </Link>
          <a href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noreferrer" className="px-4 py-2 rounded border">View Cloud Jobs</a>
          <a href="/AUTONOMOUS_CLOUD_REPORT.md" className="px-4 py-2 rounded border">Latest Report</a>
        </div>
      </div>
    </div>
  );
}