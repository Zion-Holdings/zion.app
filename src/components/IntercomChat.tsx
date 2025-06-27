import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom?: (...args: any[]) => void & { q?: any[]; c?: (args: any) => void };
    intercomSettings?: Record<string, any>;
  }
}

export default function IntercomChat() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;
    if (!appId) return;

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
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/' + appId;
          const x = d.getElementsByTagName('script')[0];
          if (x) {
            x.parentNode?.insertBefore(s, x);
          } else {
            d.head.appendChild(s);
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
