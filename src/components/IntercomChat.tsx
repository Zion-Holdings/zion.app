import { useEffect } from 'react';
import { logInfo, logWarn } from '@/utils/productionLogger';


declare global {
  interface Window {
    Intercom?: (...args: any[]) => void & { q?: any[]; c?: (args: any) => void };
    intercomSettings?: Record<string, any>;
  }
}

// Known placeholder/invalid Intercom App IDs
const INVALID_INTERCOM_APP_IDS = [
  'your_intercom_app_id_here',
  'your_app_id_here',
  'placeholder',
  'test',
  'demo',
];

function isValidIntercomAppId(appId: string | undefined): boolean {
  if (!appId) return false;
  if (INVALID_INTERCOM_APP_IDS.includes(appId.toLowerCase())) return false;
  // Basic format check for Intercom App IDs (usually 8-character alphanumeric)
  return /^[a-zA-Z0-9]{6,}$/.test(appId);
}

export default function IntercomChat() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;
    
    // Validate App ID before attempting to initialize
    if (!isValidIntercomAppId(appId)) {
      if (process.env.NODE_ENV === 'development') {
        logWarn('Intercom: Invalid or placeholder App ID detected. Intercom chat disabled.', { data:  { appId } });
      }
      return;
    }

    if (process.env.NODE_ENV === 'development') {
      logInfo('Intercom: Initializing with App ID', { data: appId?.substring(0, 4) + '****' });
    }

    window.intercomSettings = { app_id: appId };

    (function () {
      const w = window as any;
      const ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        const d = document;
        const i: any = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args: any) {
          (i.q as any).push(args);
        };
        w.Intercom = i;
        const l = function () {
          const script = d.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://widget.intercom.io/widget/' + appId;
          const x = d.getElementsByTagName('script')[0];
          if (x) {
            x.parentNode?.insertBefore(script, x);
          } else {
            d.head.appendChild(script);
          }
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();

    return () => {
      if (typeof window.Intercom === 'function') {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
}
