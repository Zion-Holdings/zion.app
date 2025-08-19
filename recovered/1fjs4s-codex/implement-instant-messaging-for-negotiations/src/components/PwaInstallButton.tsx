import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { safeStorage } from '@/utils/safeStorage';

const DISMISS_KEY = 'pwaDismissed';
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export const PwaInstallButton: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  // Check dismissal flag and register event listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissedAt = safeStorage.getItem(DISMISS_KEY);
    const recentlyDismissed = dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS;
    const inStandalone = window.matchMedia('(display-mode: standalone)').matches;

    if (recentlyDismissed || inStandalone) return;

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {
    return null;
  }

  const onClick = async () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    if (result.outcome === 'accepted') {
      setPromptEvent(null);
    } else {
      safeStorage.setItem(DISMISS_KEY, Date.now().toString());
      setPromptEvent(null);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick}>Install App</Button>
    </div>
  );
};

export default PwaInstallButton;
