import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

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
  metadata?: Record<string, any>;
}

export interface AnalyticsContextType {
  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, any>) => void;
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
  const { user } = useAuth();

  // Track page views when location changes
  useEffect(() => {
    trackEvent('page_view', { path: router.pathname });
    setPageViews((prev) => prev + 1);
     
  }, [router.pathname]);

  // Function to track general analytics events
  const trackEvent = async (type: AnalyticsEventType, metadata: Record<string, any> = {}) => {
    const event: AnalyticsEvent = {
      type,
      path: router.pathname,
      timestamp: Date.now(),
      userId: user?.id,
      metadata
    };
    
    setEvents((prevEvents) => [...prevEvents, event]);
    setLastEvent(event);
    
    try {
      // Store event in Supabase for persistent analytics
      await supabase.from('analytics_events').insert([{
        event_type: type,
        path: router.pathname,
        user_id: user?.id,
        metadata: metadata
      }]);
      
      if (process.env.NODE_ENV === 'development') {
        logInfo(`Analytics event tracked: ${type}`, { data: metadata });
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        logErrorToProduction('Error logging analytics event:', { data: error });
      }
    }
  };

  // Function to track conversion events
  const trackConversion = (conversionType: string, value?: number, metadata: Record<string, any> = {}) => {
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
