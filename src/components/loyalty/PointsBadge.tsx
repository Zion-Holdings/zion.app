import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { useUser } from '@/hooks/useUser';
import { usePoints } from '@/hooks/usePoints';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LoginModal } from '@/components/auth/LoginModal';

export function PointsBadge() {
  const { user } = useUser();
  const { isAuthenticated } = useAuth();
  const { ledger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);

  const points = user?.points ?? 0;

  const breakdown = ledger.reduce(
    (acc, e) => {
      if (e.reason === 'purchase') acc.purchase += e.delta;
      if (e.reason === 'post') acc.post += e.delta;
      if (e.reason === 'referral') acc.referral += e.delta;
      return acc;
    },
    { purchase: 0, post: 0, referral: 0 }
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={isAuthenticated ? "/points" : "#"}
            onClick={handleClick}
            title={isAuthenticated ? "View points" : "Earn points by creating an account"}
            className="flex items-center gap-1 text-xs text-muted-foreground"
          >
            <Gift className="h-4 w-4" />
            <span>{`${points} pts`}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          {isAuthenticated ? (
            <>
              <p className="text-sm font-medium">Point Breakdown</p>
              <ul className="text-xs mt-1 space-y-0.5">
                <li>Purchases: {breakdown.purchase}</li>
                <li>Posts: {breakdown.post}</li>
                <li>Referrals: {breakdown.referral}</li>
              </ul>
            </>
          ) : (
            <p className="text-sm">Earn points by creating an account</p>
          )}
        </TooltipContent>
      </Tooltip>
      {!isAuthenticated && (
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      )}
    </TooltipProvider>
  );
}
