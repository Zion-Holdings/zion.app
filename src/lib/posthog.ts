import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

declare global {
  interface Window {
    posthog?: PostHogInstance;
  }
}

interface PostHogInstance {
  __loaded?: boolean;
  _i: unknown[];
  init: (key: string, opts: { api_host: string }) => void;
  capture: (name: string, properties?: Record<string, unknown>) => void;
  identify: (...args: unknown[]) => void;
  alias: (...args: unknown[]) => void;
  people: {
    set: (...args: unknown[]) => void;
    set_once: (...args: unknown[]) => void;
    unset: (...args: unknown[]) => void;
    increment: (...args: unknown[]) => void;
    append: (...args: unknown[]) => void;
    delete_property: (...args: unknown[]) => void;
    remove: (...args: unknown[]) => void;
  };
  push: (args: unknown[]) => void;
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

  if (typeof window.posthog === 'object' && window.posthog !== null && '__loaded' in window.posthog && (window.posthog as PostHogInstance).__loaded) {
    return;
  }

  (function(c: Document, a: PostHogInstance){
    (window as { posthog?: PostHogInstance }).posthog = a;
    a._i = [];
    a.init = function(k: string, opts: { apihost: string }) {
      function p(method: string) {
        return function(...args: unknown[]) { a.push([method].concat(args as string[])); };
      }
      const methods = ['capture','identify','alias','people.set','people.set_once','people.unset','people.increment','people.append','people.delete_property','people.remove'];
      a.people = a.people || {};
      for (let i = 0; i < methods.length; i++) {
        const method = methods[i]!; // Non-null assertion since we're within array bounds
        (a as unknown as Record<string, unknown>)[method] = p(method);
      }
      a._i.push([k, opts]);
      const script = c.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = opts.api_host + '/static/array.js';
      c.head.appendChild(script);
    };
  })(document, (window as { posthog?: PostHogInstance }).posthog || [] as unknown as PostHogInstance);

  (window.posthog as unknown as PostHogInstance).init(key, { api_host: host });
};

export const captureEvent = (name: string, properties?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  if (!(window.posthog as unknown as PostHogInstance)?.capture) {
    logErrorToProduction('PostHog not initialized. Call initPostHog() first.', new Error('PostHog not initialized'), { eventName: name });
    return;
  }
  (window.posthog as unknown as PostHogInstance).capture(name, properties);
};
