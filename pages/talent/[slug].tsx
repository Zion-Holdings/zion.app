import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TalentProfile() {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const resp = await fetch('/data/learn/users.json');
      const all = await resp.json();
      setUser(all[slug] || all['demo-user']);
    }
    if (slug) load();
  }, [slug]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{user.name || user.userId}</h1>
      <div className="text-gray-500 text-sm">Certifications</div>
      <div className="flex flex-wrap gap-2">
        {(user.badges || []).length ? (
          user.badges.map((b: string, i: number) => (
            <span key={i} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">{b}</span>
          ))
        ) : (
          <div className="text-sm text-gray-500">No badges yet</div>
        )}
      </div>
    </div>
  );
}