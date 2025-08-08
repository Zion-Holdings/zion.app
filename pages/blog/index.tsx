import { useEffect, useState } from 'react';
import { useTenant } from '../../components/multiverse/TenantProvider';

export default function BlogIndex() {
  const { tenant } = useTenant();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    const params = new URLSearchParams();
    if (tenant?.id) {
      params.set('tenantId', tenant.id);
      params.set('scope', 'tenant');
    }
    fetch(`/api/multiverse/content?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => { if (mounted) setPosts(d?.content ?? []); })
      .catch(() => {});
    return () => { mounted = false; };
  }, [tenant?.id]);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <article key={p.id} className="border rounded-md p-4">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.type}</p>
          </article>
        ))}
        {posts.length === 0 && <p className="text-gray-500">No posts yet.</p>}
      </div>
    </div>
  );
}