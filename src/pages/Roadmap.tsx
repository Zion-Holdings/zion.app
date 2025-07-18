import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header'
import { NextSeo } from '@/components/NextSeo'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link // Changed from react-router-dom;
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'
import { ROADMAP_ITEMS } from '@/data/roadmap'
import type { RoadmapItem } from '@/data/roadmap'
import { safeStorage } from '@/utils/safeStorage;
const STATUSES: unknown RoadmapItem['status'][] = [;
  'Planned',;
  'In Progress',;
  'Completed',;
]'
;
function voteWeight(): unknown {): unknown {): unknown {): unknown {): unknown {role?: string) {;
  if (!role) return 1'
  const r = role.toLowerCase();
  if (r === 'client') return 2;
  if (r === 'zion$ staker' || r === 'staker') return 3;
  return 1; // default for Talent and others;
}'
;
export defaultault function RoadmapPage(): ;
  const { _user } = useAuth()'
  const [items, setItems] = useState<RoadmapItem[]>(() => {;
    const raw = safeStorage.getItem('roadmap_items');