import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

declare global {
  interface Window {
    posthog?: any;
  }
}

export const initPostHog = () => {
  if (typeof window === 'undefined') return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  // Skip initialization if key is not defined or is a placeholder
  if (!key || key === 'your_posthog_key_here' || key.includes('placeholder') || key.includes('your_')) {
    logInfo('PostHog key not configured or is placeholder. PostHog initialization skipped.');
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
        const method = methods[i]!; // Non-null assertion since we're within array bounds
        a[method] = p(method);
      }
      a._i.push([k, opts]);
      const script = c.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = opts.api_host + '/static/array.js';
      c.head.appendChild(script);
    };
  })(document, window.posthog || []);

  window.posthog.init(key, { api_host: host });
};

export const captureEvent = (name: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  if (!window.posthog?.capture) {
    logErrorToProduction('PostHog not initialized. Call initPostHog() first.', new Error('PostHog not initialized'), { eventName: name });
    return;
  }
  window.posthog.capture(name, properties);
};
