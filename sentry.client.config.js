import * as Sentry from '@sentry/nextjs';

const SENTRY_RELEASE = 'jules-operator@' + (process.env.npm_package_version || '0.0.1');
const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.NODE_ENV;

// Regular expression for matching email addresses
const EMAIL_REGEX = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
// Regular expression for matching common credit card patterns
// This regex is a simplified version and might not catch all card numbers or could have false positives.
// It aims to cover Visa, Mastercard, American Express, and Discover.
const CREDIT_CARD_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: SENTRY_RELEASE,
  environment: SENTRY_ENVIRONMENT,
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    // Scrub email addresses
    if (event.request && event.request.data) {
      try {
        let dataStr = JSON.stringify(event.request.data);
        dataStr = dataStr.replace(EMAIL_REGEX, '[REDACTED_EMAIL]');
        event.request.data = JSON.parse(dataStr);
      } catch (e) {
        // console.error("Failed to scrub email from event.request.data", e);
      }
    }

    // Scrub sensitive information from breadcrumbs
    if (event.breadcrumbs) {
      event.breadcrumbs.forEach(breadcrumb => {
        if (breadcrumb.message) {
          breadcrumb.message = breadcrumb.message.replace(EMAIL_REGEX, '[REDACTED_EMAIL]');
          // Basic credit card check for breadcrumb messages (less strict)
          if (breadcrumb.message.match(/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{2,4}/)) { // Heuristic for CC-like numbers
             breadcrumb.message = breadcrumb.message.replace(/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{2,4}/g, '[REDACTED_CREDIT_CARD_LIKE]');
          }
        }
        if (breadcrumb.data) {
          try {
            let dataStr = JSON.stringify(breadcrumb.data);
            dataStr = dataStr.replace(EMAIL_REGEX, '[REDACTED_EMAIL]');
            // More specific credit card check for structured data
            Object.keys(breadcrumb.data).forEach(key => {
                if (typeof breadcrumb.data[key] === 'string' && CREDIT_CARD_REGEX.test(breadcrumb.data[key])) {
                    dataStr = dataStr.replace(new RegExp(`"${key}"\s*:\s*"${breadcrumb.data[key]}"`), `"${key}":"[REDACTED_CREDIT_CARD]"`);
                }
            });
            breadcrumb.data = JSON.parse(dataStr);
          } catch (e) {
            // console.error("Failed to scrub breadcrumb.data", e);
          }
        }
      });
    }

    // Scrub emails from user object
    if (event.user && event.user.email) {
        event.user.email = '[REDACTED_EMAIL]';
    }

    // Check for credit card numbers in various parts of the event (simplified example)
    // This is a basic example. For robust scrubbing, you'd need to traverse the event object more deeply
    // and potentially use more sophisticated data inspection techniques.
    const originalException = hint?.originalException;
    if (typeof originalException === 'string') {
        if (CREDIT_CARD_REGEX.test(originalException)) {
            // This case is unlikely for exceptions but included for completeness
            event.exception.values[0].value = '[REDACTED_CREDIT_CARD_IN_EXCEPTION]';
        }
    } else if (originalException instanceof Error && originalException.message) {
        if (CREDIT_CARD_REGEX.test(originalException.message)) {
             event.exception.values[0].value = originalException.message.replace(CREDIT_CARD_REGEX, '[REDACTED_CREDIT_CARD_IN_EXCEPTION_MESSAGE]');
        }
    }

    // It's important to return the event, otherwise it won't be sent.
    return event;
  },
  // You can add other client-specific integrations here
  // Example: Replay for session recording
  // integrations: [
  //   Sentry.replayIntegration({
  //     // Additional Replay configuration options can be set here
  //     maskAllText: true, // Mask all text input fields
  //     blockAllMedia: true, // Block all media (images, videos, etc.)
  //   }),
  // ],
  // replaysSessionSampleRate: 0.1, // Capture Replay for 10% of sessions
  // replaysOnErrorSampleRate: 1.0, // Capture Replay for 100% of sessions that have an error
});
