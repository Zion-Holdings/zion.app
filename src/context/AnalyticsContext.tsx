import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { logInfo } from '@/utils/productionLogger';

// Analytics event types
export type AnalyticsEventType = 
  | 'page_view'
  | 'button_click'
  | 'form_submit'
  | 'form_error'
  | 'search'
  | 'filter'
  | 'conversion'
  | 'listing_view'
  | 'listing_contact'
  | 'payment_initiated'
  | 'payment_completed'
  | 'signup'
  | 'login'
  | 'feature_usage'
  | 'session_duration';

// Interface for analytics events
export interface AnalyticsEvent {
  type: AnalyticsEventType;
  path?: string;
  component?: string;
  elementId?: string;
  timestamp: number;
  userId?: string | null;
  metadata?: Record<string, unknown>;
}

export interface AnalyticsContextType {
  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, unknown>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, unknown>) => void;
  pageViews: number;
  lastEvent: AnalyticsEvent | null;
  events: AnalyticsEvent[];
  clearEvents: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
);

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === 'development') {
    logInfo('[AnalyticsProvider] Initializing...');
  }
  const [pageViews, setPageViews] = useState(0);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [lastEvent, setLastEvent] = useState<AnalyticsEvent | null>(null);
  const router = useRouter();
  const { _user } = useAuth();

  // Function to track general analytics events
  const trackEvent = useCallback(async (type: AnalyticsEventType, metadata: Record<string, unknown> = {}) => {
    const event: AnalyticsEvent = {
      type,
      timestamp: Date.now(),
      path: router.pathname,
      userId: user?.id ?? null,
      metadata: {
        ...metadata,
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      }
    };

    try {
      // Store event in Supabase for persistent analytics
      if (supabase) {
        await supabase.from('analytics_events').insert([{
          event_type: type,
          path: router.pathname,
          user_id: user?.id,
          metadata: event.metadata,
          created_at: event.timestamp
        }]);
      }
    } catch {
      // Log error but don't fail the tracking
      console.warn('Failed to store analytics event:', error);
    }

    // Send to analytics service if configured
    // if (analytics) {
    //   try {
    //     analytics.track(type, event.metadata);
    //   } catch {
    //     console.warn('Failed to send analytics event:', error);
    //   }
    // }
  }, [user, router.pathname]);

  // Function to track conversion events
  const trackConversion = (conversionType: string, value?: number, metadata: Record<string, unknown> = {}) => {
    trackEvent('conversion', { 
      conversionType, 
      value, 
      ...metadata 
    });
  };
  
  // Clear events (for development or testing)
  const clearEvents = () => {
    setEvents([]);
    setLastEvent(null);
  };

  // Track page views when location changes
  useEffect(() => {
    trackEvent('page_view', { path: router.pathname });
    setPageViews((prev) => prev + 1);
  }, [router.pathname, trackEvent]);

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent,
        trackConversion,
        pageViews,
        lastEvent,
        events,
        clearEvents
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  // Cast is used here because the context default is undefined until provided
  // by `AnalyticsProvider`. The runtime check above ensures it's defined.
  return context as AnalyticsContextType;
};
