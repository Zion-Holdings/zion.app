import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { safeSessionStorage } from '@/utils/safeStorage';
import type { BeforeInstallPromptEvent } from '@/types/pwa';

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

    const handleAppInstalled = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pwa_install');
      }
    };

    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
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
    <>
      <style>
        {`
          @media(max-width:600px){
            .pwa-install-button {
              transform: scale(0.8);
              transform-origin: bottom right;
            }
          }
        `}
      </style>
      <div className="fixed bottom-4 right-4 z-[1000] bg-zion-blue-dark text-white flex items-center pwa-install-button">
        <Button onClick={install} aria-label="Install PWA">Install</Button>
      </div>
    </>
  );
};

export default InstallPrompt;
