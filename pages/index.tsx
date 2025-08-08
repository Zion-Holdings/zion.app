import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">Zion AI Marketplace</h1>
        <p className="text-white/80">Explore dashboards for admins and talent.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link href="/admin/quotes"><a className="block p-5 border rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900">Admin • Quote Request Manager</a></Link>
        <Link href="/dashboard/requests"><a className="block p-5 border rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900">Talent • My Requests</a></Link>
      </div>
    </div>
  );
}