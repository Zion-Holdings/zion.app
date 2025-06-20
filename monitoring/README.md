# URL Performance Monitoring Service

## Overview

This Node.js service is designed to monitor the latency and availability of specified API endpoints or URLs. It runs checks at regular intervals (hourly by default), logs performance metrics, and can trigger alerts and custom remediation actions if performance degrades below configured thresholds.

## Features

*   **Scheduled Checks**: Performs health checks on configured endpoints automatically (default: hourly).
*   **Configurable Endpoints**: Endpoints are defined in a JSON configuration file (`monitoring-config.json`).
*   **Latency Thresholds**: Configurable latency threshold to determine if an endpoint is performing poorly.
*   **Consecutive Check Limits**: Configurable limit for how many consecutive checks must fail before an alert is triggered.
*   **Webhook Alerts**: Sends notifications to a configured webhook URL when an alert is triggered.
*   **Extensible Remediation**: Executes a custom shell script (`remediate.sh`) when an alert is triggered, allowing for flexible incident response.
*   **Structured Logging**: Maintains detailed logs of monitoring activities and errors.

## Project Structure (within `monitoring/`)

*   `monitoring-config.json`: The main configuration file for defining endpoints, alert thresholds, and other parameters.
*   `remediate.sh`: A shell script that is executed when an alert is triggered. This script can be customized to perform various remediation actions (e.g., restarting a service).
*   `package.json`: NPM package file, defines dependencies and scripts.
*   `tsconfig.json`: TypeScript compiler configuration.
*   `src/`: Contains the TypeScript source code for the monitoring service.
    *   `index.ts`: The main entry point of the application, sets up the cron job.
    *   `monitor.ts`: Core logic for orchestrating endpoint checks.
    *   `alerter.ts`: Handles alert triggering, consecutive check logic, webhook notifications, and calls the remediation script.
    *   `latencyTester.ts`: Measures the latency of individual endpoints.
    *   `logger.ts`: Configures the Winston logger for structured logging.
*   `logs/perf/` (relative to the project root, i.e., `../../logs/perf/` from `monitoring/src` or `../logs/perf/` from `monitoring/`): Directory where performance and error logs are stored.
    *   `hourly.log`: Logs results of hourly monitoring checks.
    *   `error.log`: Logs any errors encountered by the monitoring service itself.

## Setup

1.  **Navigate to the monitoring directory**:
    ```bash
    cd monitoring
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure `monitoring-config.json`**:
    Create or modify the `monitoring-config.json` file in the `monitoring/` directory. This file defines which endpoints to monitor and how alerts are handled.

    ```json
    {
      "alertThresholdMs": 500,
      "consecutiveChecksLimit": 3,
      "endpoints": [
        {
          "name": "Django Ping",
          "baseURLKey": "DJANGO_API_BASE_URL",
          "defaultBaseURL": "http://localhost:8000",
          "path": "/api/ping/",
          "serviceName": "django-service",
          "method": "GET", // Optional: GET, POST, PUT, DELETE, HEAD, OPTIONS
          "headers": { "X-Custom-Header": "value" }, // Optional
          "body": { "key": "value" } // Optional, for POST/PUT
        },
        {
          "name": "Next.js Health",
          "baseURLKey": "NEXTJS_API_BASE_URL",
          "defaultBaseURL": "http://localhost:3000",
          "path": "/api/health",
          "serviceName": "nextjs-service"
        }
      ]
    }
    ```
    *   `alertThresholdMs` (number): Latency in milliseconds. If an endpoint's response time exceeds this, it's considered a high-latency event.
    *   `consecutiveChecksLimit` (number): The number of consecutive high-latency events required for an endpoint before an alert is triggered and remediation is attempted.
    *   `endpoints` (array of objects): Each object defines an endpoint to monitor:
        *   `name` (string): A human-readable name for the endpoint (e.g., "Django Ping"). Used in logs and alerts.
        *   `baseURLKey` (string): The key of an environment variable that holds the base URL for this endpoint (e.g., "DJANGO_API_BASE_URL").
        *   `defaultBaseURL` (string): A fallback base URL to use if the environment variable specified by `baseURLKey` is not set.
        *   `path` (string): The specific path for the endpoint (e.g., "/api/ping/"). The full URL will be `baseURL + path`.
        *   `serviceName` (string): An identifier for the service associated with this endpoint (e.g., "django-service"). This is passed to `remediate.sh`.
        *   `method` (string, optional): The HTTP method to use (e.g., "GET", "POST"). Defaults to "GET".
        *   `headers` (object, optional): Key-value pairs for custom HTTP headers.
        *   `body` (any, optional): Request body for methods like POST or PUT.

4.  **Set Environment Variables**:
    The service relies on several environment variables:
    *   `DJANGO_API_BASE_URL`, `NEXTJS_API_BASE_URL`, `CUSTOM_SERVER_BASE_URL`, etc.: Base URLs for your services, corresponding to `baseURLKey` values in `monitoring-config.json`.
    *   `ALERT_WEBHOOK_URL` (optional): The URL for sending webhook notifications if an alert is triggered.
    *   `LOG_LEVEL` (optional): The logging level for the application (e.g., `info`, `debug`, `error`). Defaults to `info`.

5.  **Customize `remediate.sh`**:
    The `monitoring/remediate.sh` script is executed when an alert is triggered for an endpoint. You can customize this script to perform actions appropriate for your environment.
    *   **Purpose**: To attempt automatic recovery actions or to integrate with other incident management systems.
    *   **Arguments Received**:
        1.  `serviceName`: The `serviceName` from `monitoring-config.json` for the affected endpoint.
        2.  `problemURL`: The full URL that triggered the alert.
        3.  `latencyValue`: The measured latency in milliseconds.
    *   **Customization**: Edit the script to add logic based on the `serviceName` or `problemURL`. For example, you might restart a specific PM2 process, trigger a Kubernetes deployment rollout, or call another API.
        ```bash
        #!/bin/bash
        SERVICE_NAME="$1"
        # ... add your custom logic here
        echo "Remediation called for $SERVICE_NAME"
        if [ "$SERVICE_NAME" == "my-critical-service" ]; then
          # pm2 restart my-critical-service
        fi
        ```
    Ensure the script is executable: `chmod +x monitoring/remediate.sh`.

## Running the Service

1.  **Navigate to the monitoring directory**:
    ```bash
    cd monitoring
    ```

2.  **Compile TypeScript to JavaScript**:
    The service is written in TypeScript. Compile it using the TypeScript compiler. This typically creates a `dist/` directory with the compiled JavaScript.
    ```bash
    npx tsc
    ```
    (If you have TypeScript installed globally, you can use `tsc` directly.)

3.  **Run the compiled service**:
    After successful compilation, run the main application script (likely `dist/src/index.js` or `dist/index.js` depending on your `tsconfig.json`'s `rootDir` and `outDir` settings - typically `dist/src/index.js` if `rootDir` is `src`).
    ```bash
    node dist/src/index.js
    ```
    Alternatively, if you have `ts-node` installed (either locally in the project or globally), you can run the service directly without explicit compilation for development:
    ```bash
    npx ts-node src/index.ts
    ```

## Logs

The service generates logs that are stored in the `logs/perf/` directory at the root of the project (i.e., outside the `monitoring` directory).
*   `hourly.log`: Contains logs of the periodic endpoint checks, including latency measurements and success/failure status.
*   `error.log`: Records any errors encountered by the monitoring service itself during its operation.

Log levels and output can be configured via the `LOG_LEVEL` environment variable and by modifying `src/logger.ts`.

---
This README provides a guide to setting up, configuring, and running the URL Performance Monitoring Service.
