import { logger } from '@/utils/logger';
import { captureEvent } from './posthog';

export const initGA = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId) {
    logger.error('VITE_GA_ID is not defined. GA4 initialization skipped.');
    return;
  }

  const doNotTrack = navigator.doNotTrack;
  if (doNotTrack === '1' || doNotTrack === 'yes') {
    logger.info('Do Not Track is enabled. GA4 initialization skipped.');
    return;
  }

  if (window.gtag) {
    window.gtag('config', measurementId);
  }
};

export const fireEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else {
    logger.error('gtag is not defined. Make sure GA4 is initialized.');
  }

  captureEvent(eventName, eventParams);
};
