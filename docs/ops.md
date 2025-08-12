# Operations Documentation

This document outlines operational aspects of the application, including monitoring and health checks.

## Health Check Endpoint

**Endpoint:** `/api/health`

**Method:** `GET`

**Purpose:** Provides a simple health check of the application. It returns the application status, current deployed commit SHA, application version, and the server timestamp.

**Success Response (200 OK):**
```json
{
  "status": "ok",
  "commit": "<GIT_COMMIT_SHA>",
  "version": "<APP_VERSION>",
  "timestamp": "<ISO_8601_TIMESTAMP>"
}
```
Where:
-   `status`: Always "ok" if the application is running.
-   `commit`: The Git commit SHA of the currently deployed version. Defaults to "unknown" if not available.
-   `version`: The application version, typically sourced from `NEXT_PUBLIC_APP_VERSION`. Defaults to "unknown" if not available.
-   `timestamp`: The ISO 8601 timestamp of when the response was generated.

**Error Responses:**
-   `405 Method Not Allowed`: If a method other than GET is used.
-   `500 Internal Server Error`: If there's an issue fetching the version or other internal processing.

## Scheduled Health Monitoring

**Function:** `healthCheckCron` (Netlify Scheduled Function)

**Schedule:** Runs every 5 minutes.

**Purpose:** Proactively monitors the `/api/health` endpoint to ensure the application is responsive and performing adequately.

**Checks Performed:**
1.  **Endpoint Availability:** Fetches the `/api/health` endpoint.
2.  **Status Code:** Verifies that the HTTP response status code is `200 OK`.
3.  **Latency:** Measures the response time for the health check.

**Logging / Alerts:**
-   An error is logged to the Netlify function logs if:
    -   The `/api/health` endpoint returns a non-200 status code.
    -   The response latency for the `/api/health` endpoint exceeds 1000 milliseconds (1 second).
    -   An unexpected error occurs while trying to perform the health check.

(Further alert mechanisms like PagerDuty integration can be added here if implemented.)
