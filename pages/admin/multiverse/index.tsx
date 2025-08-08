import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MultiverseAdmin() {
  const [tenants, setTenants] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/multiverse/tenants')
      .then((r) => r.json())
      .then((d) => { if (mounted) setTenants(d?.tenants ?? []); })
      .catch((e) => { if (mounted) setError(String(e)); });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Multiverse</h1>
        <Link href="/admin/multiverse/new"><a className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: 'var(--accent, #3b82f6)' }}>Create Vertical</a></Link>
      </div>
      {error && <p className="text-red-600">Failed to load tenants</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tenants.map((t: any) => (
          <div key={t.id} className="border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              {t.logoUrl ? <img src={t.logoUrl} alt={t.name} className="w-8 h-8 rounded" /> : null}
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.subdomain}.{typeof window === 'undefined' ? 'domain' : window.location.host.split(':')[0].split('.').slice(-2).join('.')}</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Users: —</div>
              <div>Revenue: —</div>
              <div>Projects: —</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}