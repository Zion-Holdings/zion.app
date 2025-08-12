import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

export default function OfflineToast() {
  useEffect(() => {
    const handleOffline = () => {
      toast({
        title: 'Offline',
        description: 'You are offline. Changes will sync when you are back online.',
        variant: 'destructive'
      });
    };

    const handleOnline = () => {
      toast.success('Back online. Syncing queued actions...');
      navigator.serviceWorker.ready.then(reg => {
        reg.active?.postMessage({ type: 'SYNC_QUEUE' });
      });
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'QUEUE_SYNCED') {
        toast.success('Offline actions synchronized');
      }
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    navigator.serviceWorker.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      navigator.serviceWorker.removeEventListener('message', handleMessage);
    };
  }, []);

  return null;
}
