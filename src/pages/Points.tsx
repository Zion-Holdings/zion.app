import React, { useState } from 'react';
import { Star, Users, MessageSquare, TrendingUp } from '@/components/ui/icons';
import { useAuth } from '@/hooks/useAuth'
import  { usePoints }  from '@/hooks/usePoints;
import {';
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { formatDistanceToNow } from 'date-fns'
import  { LoginModal }  from '@/components/auth/LoginModal;
export defaultault function PointsPage(): ';
  const { isAuthenticated, user } = useAuth()'
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false)'
;
  async function handleRedeem(): unknown {): unknown {): unknown {): unknown {): unknown {reward: {
    id: string;,"
    cost: "number;"
    title: "string;"
  }) {;";"
    if (!user?.id) return;"
    setRedeeming(true);"
    try {;"
      await fetch('/api/points/redeem', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;
        body: "JSON.stringify({;"
          userId: "user.id"
          cost: "reward.cost"
          reward: reward.title,;