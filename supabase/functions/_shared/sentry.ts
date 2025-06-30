import * as Sentry from "npm:@sentry/deno@7.100.1"; // Using a recent version, can be updated

// Ensure this DSN is set in your Supabase project's environment variables for functions
const SENTRY_DSN_SUPABASE = Deno.env.get("SENTRY_DSN_SUPABASE");
const SENTRY_ENVIRONMENT = Deno.env.get("SENTRY_ENVIRONMENT") || Deno.env.get("ENV") || "production";
const SENTRY_RELEASE = Deno.env.get("SENTRY_RELEASE") || "supabase-functions@1.0.0"; // Example release

let isSentryInitialized = false;

export function initSentry() {
  if (SENTRY_DSN_SUPABASE && !SENTRY_DSN_SUPABASE.includes("YOUR_SENTRY_DSN")) {
    if (isSentryInitialized) {
      // console.log("Sentry already initialized for Supabase functions.");
      return;
    }
    try {
      Sentry.init({
        dsn: SENTRY_DSN_SUPABASE,
        environment: SENTRY_ENVIRONMENT,
        release: SENTRY_RELEASE,
        // Add any other Deno-specific Sentry options here
      });
      isSentryInitialized = true;
      console.log(`Sentry initialized for Supabase functions. Release: ${SENTRY_RELEASE}, Env: ${SENTRY_ENVIRONMENT}`);
    } catch (e) {
      console.error("Failed to initialize Sentry for Supabase functions:", e);
    }
  } else {
    // console.log("SENTRY_DSN_SUPABASE not found or is a placeholder. Sentry integration disabled for Supabase functions.");
  }
}

export function captureSupabaseError(error: any, context?: Record<string, unknown>) {
  if (!isSentryInitialized && SENTRY_DSN_SUPABASE && !SENTRY_DSN_SUPABASE.includes("YOUR_SENTRY_DSN")) {
    // Attempt to initialize if not already, useful for cold starts if init wasn't called explicitly
    // Be cautious with this in very high throughput functions to avoid repeated init attempts on every error
    // initSentry();
  }

  if (isSentryInitialized) {
    if (context) {
      Sentry.withScope(scope => {
        for (const key in context) {
          scope.setExtra(key, context[key]);
        }
        Sentry.captureException(error);
      });
    } else {
      Sentry.captureException(error);
    }
  } else {
    // Fallback if Sentry is not initialized
    console.error("[Sentry Fallback] Supabase Function Error:", error, "Context:", context || {});
  }
}

// Initialize Sentry as soon as this module is loaded,
// though it's better to call initSentry() explicitly at the start of each function invocation
// if there are concerns about module caching and re-initialization behavior in Deno Deploy.
// For now, let's rely on explicit calls or ensure this module is imported early.
// initSentry(); // Removed automatic init here, prefer explicit call in function entry or a wrapper.

// Example of a wrapper you could use around your serve() handler
/*
export function withSentry(handler: (req: Request) => Promise<Response>) {
  initSentry(); // Ensure Sentry is initialized for this function invocation
  return async (req: Request) => {
    try {
      return await handler(req);
    } catch (e) {
      captureSupabaseError(e, { request_url: req.url, request_method: req.method });
      // Ensure a response is still sent
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
}
*/

// Structured logging helper
export function logStructured(
  level: "INFO" | "ERROR" | "WARN" | "DEBUG",
  message: string,
  data?: Record<string, unknown>,
  functionName?: string
) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    functionName: functionName || Deno.env.get("SUPABASE_FUNCTION_NAME") || "unknown_function",
    ...(data && { data }),
  };
  if (level === "ERROR") {
    console.error(JSON.stringify(logEntry));
  } else if (level === "WARN") {
    console.warn(JSON.stringify(logEntry));
  } else {
    console.log(JSON.stringify(logEntry));
  }
}
