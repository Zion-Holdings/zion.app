import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const InstallPrompt: React.FC = () => {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferred(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!deferred) return null;

  const onClick = async () => {
    deferred.prompt();
    const result = await deferred.userChoice;
    if (result.outcome !== 'accepted') {
      // keep for later
      setDeferred(deferred);
    } else {
      setDeferred(null);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick}>Install App</Button>
    </div>
  );
};

export default InstallPrompt;
