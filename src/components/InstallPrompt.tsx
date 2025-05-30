import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { safeSessionStorage } from '@/utils/safeStorage';

const SHOWN_KEY = 'pwaInstallShown';
const DISMISS_KEY = 'pwaInstallDismissUntil';
const DISMISS_MS = 24 * 60 * 60 * 1000; // 24 hours

export const InstallPrompt: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissUntil = safeSessionStorage.getItem(DISMISS_KEY);
    const isDismissed = dismissUntil && Date.now() < Number(dismissUntil);
    const hasShown = safeSessionStorage.getItem(SHOWN_KEY);

    if (isDismissed || hasShown || window.matchMedia('(display-mode: standalone)').matches) {
      return;
    }

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      safeSessionStorage.setItem(SHOWN_KEY, 'true');
      setPromptEvent(e);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    if (result.outcome === 'accepted') {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pwa_install');
      }
    }
    setVisible(false);
    setPromptEvent(null);
  };

  const close = () => {
    setVisible(false);
    setPromptEvent(null);
    safeSessionStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_MS));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark text-white border-t border-zion-purple/30 p-3 flex items-center">
      <span className="flex-1">Install Zion Marketplace for quick access.</span>
      <Button onClick={install} className="mr-2">Install</Button>
      <button onClick={close} aria-label="Dismiss" className="text-gray-400">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default InstallPrompt;
