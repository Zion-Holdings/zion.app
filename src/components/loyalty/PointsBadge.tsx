import { Gift } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints';

export function PointsBadge() {
  const { balance, loading } = usePoints();
  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <Gift className="h-4 w-4" />
      {loading ? '...' : `${balance} pts`}
    </div>
  );
}
