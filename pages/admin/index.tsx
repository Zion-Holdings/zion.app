import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export default function AdminIndex() {
  return (
    <EnhancedLayout>
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <ul className="list-disc pl-6">
          <li>
            <Link href="/admin/jobs/syndication"><a className="text-indigo-600 underline">Jobs • Syndication</a></Link>
          </li>
        </ul>
      </div>
    </EnhancedLayout>
  );
}