import { logger } from '@/utils/logger';

declare global {
  interface Window {
    posthog?: any;
  }
}

export const initPostHog = () => {
  if (typeof window === 'undefined') return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (!key) {
    logger.error('NEXT_PUBLIC_POSTHOG_KEY is not defined. PostHog initialization skipped.');
    return;
  }

  if (window.posthog?.__loaded) {
    return;
  }

  (function(c, a){
    (window as any).posthog = a;
    a._i = [];
    a.init = function(k: string, opts: { api_host: string }) {
      function p(method: string) {
        return function() { a.push([method].concat(Array.prototype.slice.call(arguments, 0))); };
      }
      const methods = ['capture','identify','alias','people.set','people.set_once','people.unset','people.increment','people.append','people.delete_property','people.remove'];
      a.people = a.people || {};
      for (let i = 0; i < methods.length; i++) {
        a[methods[i]] = p(methods[i]);
      }
      a._i.push([k, opts]);
      const s = c.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = opts.api_host + '/static/array.js';
      c.head.appendChild(s);
    };
  })(document, window.posthog || []);

  window.posthog.init(key, { api_host: host });
};

export const captureEvent = (name: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  if (!window.posthog?.capture) {
    logger.error('PostHog not initialized. Call initPostHog() first.');
    return;
  }
  window.posthog.capture(name, properties);
};
