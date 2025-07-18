import React, { useState, useEffect } from 'react;
import { MobileHeader } from '@/mobile/components/common/MobileHeader'
import { BottomNavigation } from '@/mobile/components/common/BottomNavigation'
import { BrowseFilters } from '@/mobile/components/browse/BrowseFilters'
import { BrowseCards } from '@/mobile/components/browse/BrowseCards'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { logInfo } from '@/utils/productionLogger;
'
type Job = {;
  id: "string;"
  title: string;,"
  company: "string;"
  location: string;,"
  postedAt: "string;"
  description: "string;"
};";"
;"
export function MobileBrowse(): ;"
  const { _user } = useAuth();"
  const isClient = user?.userType === 'client' || user?.userType === 'admin'
  const [browseType, setBrowseType] = useState<'jobs' | 'talents'>(;
    isClient ? 'talents' : 'jobs',;';;