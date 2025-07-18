import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header'
import { useAdminQuotes } from '@/hooks/useAdminQuotes'
import { useAuth } from '@/hooks/useAuth'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/router'
import type { QuoteRequest } from '@/types/quotes'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { QuoteDetails } from '@/components/quotes/QuoteDetails'
import { ExportToCSV } from '@/components/quotes/ExportToCSV'
import {;
  QuoteStatusCards,;
  QuotesFilter,'
  QuotesTable,;
} from '@/components/admin/quotes'