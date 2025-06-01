import { Gift } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { usePoints } from '@/hooks/usePoints';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function PointsBadge() {
  const { user } = useAuth();
  const { ledger, balance } = usePoints();
  const [points, setPoints] = useState(balance);

  useEffect(() => {
    setPoints(balance);
  }, [balance]);

  const breakdown = ledger.reduce(
    (acc, e) => {
      if (e.reason === 'purchase') acc.purchase += e.delta;
      if (e.reason === 'post') acc.post += e.delta;
      if (e.reason === 'referral') acc.referral += e.delta;
      return acc;
    },
    { purchase: 0, post: 0, referral: 0 }
  );

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
          <p className="text-sm font-medium">Point Breakdown</p>
          <ul className="text-xs mt-1 space-y-0.5">
            <li>Purchases: {breakdown.purchase}</li>
            <li>Posts: {breakdown.post}</li>
            <li>Referrals: {breakdown.referral}</li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
