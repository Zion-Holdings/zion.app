import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { logInfo, logWarn } from '@/utils/productionLogger';

export default function OfflineToast() {
  useEffect(() => {
    const handleOffline = () => {
      toast({
        title: 'Offline',
        description:
          'You are offline. Changes will sync when you are back online.',
        variant: 'destructive',
      });
    };

    const handleOnline = () => {
      toast.success('Back online. Syncing queued actions...');
      navigator.serviceWorker.ready
        .then((reg) => {
          try {
            // Use MessageChannel to properly handle async response
            const channel = new MessageChannel();

            // Set up response handler
            channel.port1.onmessage = (event) => {
              if (event.data?.type === 'SYNC_SUCCESS') {
                logInfo('Background sync completed successfully');
              } else if (event.data?.type === 'UNKNOWN_MESSAGE_TYPE') {
                logWarn('Service worker received unknown message type');
              } else if (event.data?.type === 'MESSAGE_ERROR') {
                logWarn('Service worker message error:', event.data.error);
              }
              channel.port1.close();
            };

            // Send message with port
            reg.active?.postMessage({ type: 'SYNC_QUEUE' }, [channel.port2]);
          } catch {
            logWarn('Failed to send sync message to service worker:', {
              data: typeof error === 'object' && error !== null ? error : {},
            });
          }
        })
        .catch((error) => {
          logWarn('Service worker not ready:', {
            data: typeof error === 'object' && error !== null ? error : {},
          });
        });
    };

    const handleMessage = (_event: MessageEvent) => {
      if (event.data?.type === 'QUEUE_SYNCED') {
        toast.success('Offline actions synchronized');
      } else if (event.data?.type === 'SYNC_FAILED') {
        logWarn('Background sync failed:', event.data.error);
      } else if (event.data?.type === 'SYNC_TIMEOUT') {
        logWarn('Background sync timed out:', event.data.error);
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
