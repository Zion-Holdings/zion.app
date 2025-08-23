# Monitoring Service

This directory contains a small Node.js service dedicated to monitoring URL performance and health for the Zion platform.

## Overview

The service periodically checks several URLs, measures response times, verifies availability and logs the results. Alerts can be sent if latency thresholds are exceeded.

## Core Technologies

- Node.js & TypeScript
- [axios](https://github.com/axios/axios) for HTTP requests
- [node-cron](https://github.com/node-cron/node-cron) for scheduling hourly checks
- [winston](https://github.com/winstonjs/winston) for structured logging

## Key Features

- URL health checking for several endpoints
- Response time measurement and logging to `logs/perf`
- Alerting via webhook (`ALERT_WEBHOOK_URL`) when latency exceeds a threshold
- Optional service restart through PM2 for non-Kubernetes services
- Endpoints configured via environment variables (see `.env.example`)

## Setup and Local Development

1.  **Prerequisites:**
    *   Node.js (refer to project's Node version).
    *   npm or yarn.

2.  **Install Dependencies:**
    *   Navigate to this `monitoring/` directory.
    *   If it has its own `package.json`:
        ```bash
        cd monitoring
        npm install
        ```
    *   If dependencies are managed in the root `package.json`, they should already be installed.

3.  **Configure Environment Variables:**
    *   Copy `.env.example` to `.env` and adjust values as needed.
    *   Variables include:
        *   `DJANGO_API_BASE_URL`, `NEXTJS_API_BASE_URL`, `CUSTOM_SERVER_BASE_URL` – base URLs for monitored services
        *   `ALERT_WEBHOOK_URL` – where alert notifications are sent
        *   `LOG_LEVEL` – logging verbosity

4.  **Running the Service:**
    *   There might be an npm script in `monitoring/package.json` or the root `package.json`.
    *   Example:
        ```bash
        npm run start:monitoring
        # or
        node monitoring/index.js # (or whatever the entry point is)
        ```

## Running Tests

This submodule currently has no automated tests. Running `npm test` will execute
the placeholder script defined in `package.json`.

## Deployment

The service is designed to run as a background process. The default cron schedule
in `src/index.ts` triggers the monitoring job hourly. In production it can be
run either via `node index.js` or packaged into a container and launched via a
scheduler (e.g., a system cron job or CI runner).

## Integration with Other Systems

Latency alerts are sent to the webhook configured in `ALERT_WEBHOOK_URL`. If a
service is not Kubernetes managed the monitor attempts a PM2 restart when
latency exceeds the threshold.
