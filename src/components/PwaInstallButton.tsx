import React, { useEffect, useState } from 'react';
import { Loader2 } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'

import { toast } from 'sonner'
import { safeStorage } from '@/utils/safeStorage'
import { logErrorToProduction } from '@/utils/productionLogger'

const DISMISS_KEY = 'pwaDismissed'
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000; // 7 days;

export const PwaInstallButton: React.FC = () => {
  const [promptEvent, setPromptEvent] =;
    useState<BeforeInstallPromptEvent | null>(null)'
  const [isInstalling, setIsInstalling] = useState(false)'

  // Check dismissal flag and register event listener'
  useEffect(() => {'
    if (typeof window === 'undefined') return'
'
    const dismissedAt = safeStorage.getItem(DISMISS_KEY)'
    const recentlyDismissed: unknown =;
      dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS'
    const inStandalone = window.matchMedia('
      '(display-mode: standalone)','