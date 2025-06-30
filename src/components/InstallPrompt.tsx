import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
 // X is imported but not used, consider removing if not needed.
import { Button } from '@/components/ui/button';
import { safeSessionStorage } from '@/utils/safeStorage';

const SHOWN_KEY = 'pwaInstallShown';
const DISMISS_KEY = 'pwaInstallDismissUntil';
const DISMISS_MS = 24 * 60 * 60 * 1000; // 24 hours

// Define BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// Augment the WindowEventMap to include 'beforeinstallprompt'
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
    // appinstalled event is standard, but if issues arise, it can be augmented too
    // appinstalled: Event;
  }
}

export const InstallPrompt: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissUntil = safeSessionStorage.getItem(DISMISS_KEY);
    const isDismissed = dismissUntil && Date.now() < Number(dismissUntil);
    const hasShown = safeSessionStorage.getItem(SHOWN_KEY);

    // Do not show prompt if already installed (standalone mode)
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
        (window as any).gtag('event', 'pwa_install_success'); // More specific event for install success
      }
      setVisible(false); // Hide prompt once installed
      setPromptEvent(null);
    };

    // Add typed event listeners
    window.addEventListener('beforeinstallprompt', handler as EventListener);
    window.addEventListener('appinstalled', handleAppInstalled as EventListener);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener);
      window.removeEventListener('appinstalled', handleAppInstalled as EventListener);
    };
  }, []);

  const install = async () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pwa_install_accepted');
      }
    } else {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pwa_install_dismissed');
      }
    }
    setVisible(false);
    setPromptEvent(null);
  };

  const close = () => {
    setVisible(false);
    setPromptEvent(null); // Clear the event so it doesn't re-appear on next visit in same session
    safeSessionStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_MS));
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'pwa_prompt_closed_manually');
    }
  };

  // Only render if promptEvent is set and visible is true
  if (!promptEvent || !visible) return null;

  return (
    <>
      {/* Styles can be moved to a CSS file or a styled-components block if preferred */}
      <style>
        {`
          @media(max-width:600px){
            .pwa-install-button-container { /* Target a container for better transform control */
              transform: scale(0.9); /* Slightly less aggressive scaling */
              transform-origin: bottom right;
            }
          }
        `}
      </style>
      <div className="fixed bottom-4 right-4 z-[1000] pwa-install-button-container"> {/* Added a container for styling */}
        <div className="bg-zion-blue-dark text-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
          <p className="text-sm">Install our app for a better experience!</p>
          <Button onClick={install} aria-label="Install PWA" size="sm">Install</Button>
          <Button variant="ghost" size="sm" onClick={close} aria-label="Dismiss install prompt">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default InstallPrompt;
