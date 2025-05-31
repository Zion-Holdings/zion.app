import { Gift } from 'lucide-react';
import { usePoints } from '@/hooks/usePoints';
import { useNavigate } from 'react-router-dom';

export function PointsBadge() {
  const { balance, loading } = usePoints();
  const navigate = useNavigate();
  return (
    <span
      onClick={() => navigate('/rewards')}
      className="flex items-center gap-1 text-xs text-muted-foreground cursor-pointer"
    >
      <Gift className="h-4 w-4" />
      {loading ? '...' : `${balance} pts`}
    </span>
  );
}
