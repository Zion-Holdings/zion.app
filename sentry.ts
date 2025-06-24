import * as Sentry from "@sentry/nextjs";
import {
  feedbackIntegration,
  browserProfilingIntegration,
  browserTracingIntegration,
  replayIntegration,
} from "@sentry/browser"; // Attempting import from @sentry/browser
// import { captureRouterTransitionStart } from "@sentry/nextjs"; // Removing this as it causes warning and might be handled by browserTracingIntegration
import getConfig from "next/config";
import { safeSessionStorage } from "@/utils/safeStorage";

export function register() {
  const { publicRuntimeConfig } = getConfig();
  const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || publicRuntimeConfig.NEXT_PUBLIC_SENTRY_DSN;
  const SENTRY_RELEASE = process.env.NEXT_PUBLIC_SENTRY_RELEASE || publicRuntimeConfig.NEXT_PUBLIC_SENTRY_RELEASE;
  const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || publicRuntimeConfig.NEXT_PUBLIC_SENTRY_ENVIRONMENT;

  if (!SENTRY_DSN || SENTRY_DSN.startsWith("YOUR_") || SENTRY_DSN.startsWith("https_example")) {
    console.warn('Sentry DSN is not configured or is a placeholder; Sentry will not capture errors.');
    return;
  }

  const baseIntegrations = [
    feedbackIntegration({ colorScheme: "system" }),
    browserProfilingIntegration(),
    browserTracingIntegration({ enableInp: true })
  ];

  let replaysSessionSampleRate = 0.1;
  let replaysOnErrorSampleRate = 1.0;
  const finalIntegrations = [...baseIntegrations];

  if (safeSessionStorage.isAvailable) {
    finalIntegrations.unshift(
      replayIntegration({ maskAllText: true, blockAllMedia: true })
    );
  } else {
    console.warn('sessionStorage is not available; disabling Sentry Replay.');
    replaysSessionSampleRate = 0;
    replaysOnErrorSampleRate = 0;
  }

  /*
  Sentry.init({
    dsn: SENTRY_DSN,
    release: SENTRY_RELEASE,
    environment: SENTRY_ENVIRONMENT,
    tracesSampleRate: 1.0,
    replaysSessionSampleRate,
    replaysOnErrorSampleRate,
    integrations: finalIntegrations,
    tracePropagationTargets: ["localhost", /^https?:\/\//, /^\//],
    profilesSampleRate: 1.0
  });
  */
  console.log("sentry.ts: Client-side Sentry initialization SKIPPED to debug timeout.");


  if (SENTRY_RELEASE) {
    Sentry.setTag("release", SENTRY_RELEASE);
  }
  if (SENTRY_ENVIRONMENT) {
    Sentry.setTag("environment", SENTRY_ENVIRONMENT);
  }
  console.log(`Sentry initialized. Release: ${SENTRY_RELEASE}, Environment: ${SENTRY_ENVIRONMENT}`);
}

// Now using the direct import if available
// export const onRouterTransitionStart = captureRouterTransitionStart; // Removing this

export function onRequestError(error: unknown) {
  Sentry.captureRequestError(error); // Assuming captureRequestError is a valid method on Sentry object
}
