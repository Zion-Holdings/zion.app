import { Gift } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function PointsBadge() {
  const { user } = useAuth();
  const [points, setPoints] = useState(user?.points ?? 0);

  useEffect(() => {
    setPoints(user?.points ?? 0);
  }, [user?.points]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to="/wallet"
            title="View wallet"
            className="flex items-center gap-1 text-xs text-muted-foreground"
          >
            <Gift className="h-4 w-4" />
            <span>{`${points} pts`}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>View wallet</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
