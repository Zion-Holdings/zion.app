import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';

export default function CommunityUserProfile() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/community/user/${id}`).then(r => r.json()).then(d => setUser(d.user));
  }, [id]);

  if (!user) return (
    <EnhancedLayout>
      <div className="py-10 text-center text-gray-500">Loading…</div>
    </EnhancedLayout>
  );

  return (
    <EnhancedLayout>
      <div className="max-w-xl mx-auto p-6 rounded border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gray-200" />
          <div>
            <h1 className="text-xl font-semibold">{user.name}</h1>
            <div className="text-sm text-gray-500">Role: {user.role}</div>
          </div>
        </div>
        <div className="mt-4">Reputation: <span className="font-medium">{user.reputation}</span></div>
        <div className="mt-2">
          <div className="text-sm text-gray-500 mb-1">Badges</div>
          <div className="flex gap-2 flex-wrap">
            {user.badges?.length ? user.badges.map((b: string) => (
              <span key={b} className="px-2 py-1 rounded bg-amber-100 text-amber-800 text-xs">{badgeLabel(b)}</span>
            )) : <span className="text-sm text-gray-500">No badges yet</span>}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}

function badgeLabel(b: string) {
  switch (b) {
    case 'first_post': return 'First Post';
    case 'top_contributor': return 'Top Contributor';
    case 'answer_hero': return 'Answer Hero';
    default: return b;
  }
}