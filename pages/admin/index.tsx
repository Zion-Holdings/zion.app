import Link from 'next/link';

export default function AdminIndexPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <ul className="list-disc pl-6">
        <li><Link href="/admin/vendors"><a>Vendors</a></Link></li>
      </ul>
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}