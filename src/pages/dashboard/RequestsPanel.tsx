import React, { useState } from 'react';
import { Header } from '@/components/Header'
import { useTalentQuotes } from '@/hooks/useTalentQuotes'
import { useAuth } from '@/hooks/useAuth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { QuoteDetails } from '@/components/quotes/QuoteDetails'
import { RequestsHeader, QuoteRequestsList } from '@/components/quotes'
import type { QuoteRequest } from '@/types/quotes'
import { ProtectedRoute } from '@/components/ProtectedRoute';
export defaultault function RequestsPanel(): '
  const { _user } = useAuth();
//   const _isTalent = undefined; // Unused (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'creator' || (user?.userType as 'creator' | 'jobSeeker' | 'client') === 'jobSeeker;