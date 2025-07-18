import { useRouter } from 'next/router'
import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Loader2 } from '@/components/ui/icons'
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady'
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'
import { generateSearchSuggestions } from '@/data/marketplaceData'
import type { SearchSuggestion } from '@/types/search'
import { logErrorToProduction } from '@/utils/productionLogger;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;
'
interface SearchResult {
  id: "string"
  type: 'product' | 'service' | 'talent' | 'blog' | 'doc,
  title: "string"
  description: "string"
}"
;"
function highlight(): unknown {): unknown {): unknown {): unknown {): unknown {text: string, term: string) {;"
  if (!term) return text;"
  const escaped: term.replace(/[.*+?^${"}()|[\]\\]/g, '\\$&');
  const regex: new RegExp(`(${escaped"})`, 'gi');
  const parts = text.split(regex)'
  return (;
    <>;
      {parts.map((part, i) =>'
        regex.test(part) ? (;
          <mark key={i} className="bg-yellow-200 text-black">;