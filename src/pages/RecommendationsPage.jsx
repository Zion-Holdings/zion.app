import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ListingScoreCard } from '@/components/ListingScoreCard';
import Skeleton from '@/components/ui/skeleton';
import { useDelayedError } from '@/hooks/useDelayedError';

export default function RecommendationsPage() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const delayedError = useDelayedError(error);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    fetch(`/api/recommendations?userId=${encodeURIComponent(user.id)}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch recommendations');
        return res.json();
      })
      .then((data) => {
        setItems(Array.isArray(data) ? data.slice(0, 5) : []);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading || (error && !delayedError)) {
    return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">
            <Skeleton className="h-48 w-full bg-zion-blue-light/20" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-6 w-1/3 bg-zion-blue-light/20" />
              <Skeleton className="h-8 w-5/6 bg-zion-blue-light/20" />
              <Skeleton className="h-4 w-full bg-zion-blue-light/20" />
              <Skeleton className="h-4 w-4/5 bg-zion-blue-light/20" />
              <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (delayedError) {
    return (
      <div className="py-12 text-center text-red-400">Failed to load recommendations.</div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-blue py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Equipment Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ListingScoreCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.images && item.images[0]}
            category={item.category}
            aiScore={item.aiScore ?? item.confidence}
          />
        ))}
      </div>
    </div>
  );
}
