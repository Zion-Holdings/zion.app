import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UserPortal() {
  const [tenants, setTenants] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/api/multiverse/tenants')
      .then((r) => r.json())
      .then((d) => { if (mounted) setTenants(d?.tenants ?? []); })
      .catch(() => {});
    return () => { mounted = false; };
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Your Multiverse</h1>
      <p className="text-gray-600 dark:text-gray-300">Linked identities across industries. Switch context while retaining your profile and AI resume per vertical.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {tenants.map((t: any) => (
          <div key={t.id} className="border rounded-lg p-4">
            <div className="font-semibold mb-1">{t.name}</div>
            <div className="text-sm text-gray-500 mb-3">{t.subdomain}.your-domain.com</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 rounded-md text-white" style={{ backgroundColor: 'var(--accent, #3b82f6)' }}>Switch</button>
              <Link href="/profile"><a className="px-3 py-2 rounded-md border">View Profile</a></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}