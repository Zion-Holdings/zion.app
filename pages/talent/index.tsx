import { useEffect, useMemo, useState } from 'react';
import EnhancedLoading from '../../components/ui/EnhancedLoading';

type Talent = { id: number; name: string; title: string };

export default function BrowseTalentPage() {
  const [talent, setTalent] = useState<Talent[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const newItems: Talent[] = Array.from({ length: 8 }).map((_, i) => {
        const id = (page - 1) * 8 + i + 1;
        return { id, name: `Talent #${id}`, title: ['Full-Stack Engineer', 'Designer', 'Data Scientist'][id % 3] };
      });
      setTalent((prev) => [...prev, ...newItems]);
      setHasMore(page < 5);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [page]);

  const grid = useMemo(() => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {talent.map((t) => (
        <div key={t.id} className="border rounded-lg p-4 bg-white/50 dark:bg-black/30">
          <div className="font-medium">{t.name}</div>
          <div className="text-sm opacity-80">{t.title}</div>
          <button className="mt-3 px-3 py-1.5 rounded-md bg-blue-600 text-white">View Profile</button>
        </div>
      ))}
    </div>
  ), [talent]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Browse Talent</h1>
      </div>

      {grid}

      {isLoading && <EnhancedLoading rows={3} />}

      {!isLoading && hasMore && (
        <div className="flex justify-center">
          <button onClick={() => setPage((p) => p + 1)} className="px-4 py-2 rounded-md border">
            Load more
          </button>
        </div>
      )}
    </div>
  );
}