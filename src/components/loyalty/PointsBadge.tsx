import { Gift } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function PointsBadge() {
  const { user, isLoading: isAuthLoading } = useAuth();

  const points = user?.points;
  // Display loading if auth is loading or if points are not yet defined (e.g., initial load before fetchUserPoints completes)
  const displayLoading = isAuthLoading || typeof points !== 'number';

  if (!user) {
    return null; // Don't show points badge if user is not logged in
  }

  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <Gift className="h-4 w-4" />
      {displayLoading ? '...' : `${points} pts`}
    </div>
  );
}
