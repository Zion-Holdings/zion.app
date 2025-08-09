import Head from 'next/head';
import licenses from '../../data/automation/licenses.json';

type Entry = { name: string; license: string };

export default function LicenseComplianceAuditor() {
  const items = (licenses.items as Entry[]) || [];
  return (
    <div>
      <Head>
        <title>License Compliance Auditor</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-2">License Compliance Auditor</h1>
      <p className="text-sm opacity-80 mb-4">Updated {new Date(licenses.updatedAt).toLocaleString()}</p>
      <div className="enhanced-card border border-gray-100 dark:border-gray-800 mb-4">
        <div className="font-medium mb-2">Summary</div>
        <div className="text-sm">Total packages: <span className="tabular-nums">{licenses.total}</span></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.slice(0, 40).map((e, i) => (
          <div key={i} className="enhanced-card border border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm">
            <span className="opacity-80">{e.name}</span>
            <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{e.license}</span>
          </div>
        ))}
        {items.length === 0 && <div className="opacity-60">No licenses found.</div>}
      </div>
    </div>
  );
}