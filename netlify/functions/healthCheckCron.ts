import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const siteUrl = process.env.URL;
  if (!siteUrl) {
    console.error("Base URL (process.env.URL) is not set. Cannot perform health check.");
    return {
      statusCode: 500, // Internal server error for the function itself
      body: "Base URL not configured.",
    };
  }

  const healthEndpoint = `${siteUrl}/api/health`;
  const startTime = Date.now();

  try {
    const response = await fetch(healthEndpoint);
    const duration = Date.now() - startTime;

    if (response.status !== 200) {
      const responseText = await response.text();
      console.error(
        `Health check failed for ${healthEndpoint}: Status code ${response.status}. Response: ${responseText.substring(0, 100)}... (truncated)`
      );
    } else {
      console.log(`Health check successful for ${healthEndpoint}: Status ${response.status}, Duration ${duration}ms`);
    }

    if (duration > 1000) {
      console.warn(
        `Health check latency exceeded for ${healthEndpoint}: ${duration}ms`
      );
    }

  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(
      `Error during health check for ${healthEndpoint}: ${error instanceof Error ? error.message : String(error)}. Duration: ${duration}ms. Stack: ${error instanceof Error ? error.stack?.substring(0, 100) : String(error)}...(truncated)`
    );
  }

  return {
    statusCode: 200, // The function itself completed
  };
};

export { handler };
