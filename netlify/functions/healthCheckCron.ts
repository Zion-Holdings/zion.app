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
      console.error(
        `Health check failed for ${healthEndpoint}: Status code ${response.status}. Response: ${await response.text()}`
      );
    } else {
      console.log(`Health check successful for ${healthEndpoint}: Status ${response.status}, Duration ${duration}ms`);
    }

    if (duration > 1000) {
      console.error(
        `Health check latency exceeded for ${healthEndpoint}: ${duration}ms`
      );
    }

  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(
      `Error during health check for ${healthEndpoint}: ${error instanceof Error ? error.message : String(error)}. Duration: ${duration}ms`
    );
  }

  return {
    statusCode: 200, // The function itself completed
  };
};

export { handler };
