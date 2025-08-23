# Performance Monitoring Setup

This document describes how to set up and use the `scripts/perf/monitor.js` script, which periodically checks the performance of configured backend endpoints, logs slow responses, and can optionally send alerts or restart services.

## Prerequisites

1.  **Node.js**: The script is a Node.js script.
2.  **`node-fetch`**: Used for making HTTP requests. This should be installed as part of project dependencies (`npm install`).
3.  **`node-cron`**: Used for scheduling periodic checks. Also part of project dependencies.
4.  **Process Manager (Recommended)**: To ensure the script runs continuously in the background, a process manager like PM2 is highly recommended.
    *   To install PM2 globally: `npm install pm2 -g`

## Script Overview

The `scripts/perf/monitor.js` script performs the following actions:

1.  **Scheduled Execution**: Uses `node-cron` to run checks hourly by default (at minute 0 of every hour). It also runs once immediately when the script starts.
2.  **Endpoint Checks**: Fetches specified backend API endpoints to measure their response times.
3.  **Logging**:
    *   Logs the 5 slowest endpoint responses to `logs/perf/hourly.log`.
    *   The log file is rotated if it exceeds a max size (5MB by default).
    *   The `logs/perf/` directory will be created if it doesn't exist.
4.  **Alerting (Optional)**: If an endpoint's average response time exceeds a threshold (default 500ms), it can send an alert to a configured webhook URL.
5.  **Service Restart (Optional)**: If an endpoint is slow, it can execute a command to restart services (e.g., `pm2 restart all`).

## Configuration

The script can be configured using environment variables:

*   `BACKEND_BASE_URL`: The base URL for the backend services to monitor.
    *   Default: `http://localhost:3001`
*   `MONITOR_ENDPOINTS`: A comma-separated list of endpoint paths to monitor (e.g., `/healthz,/api/users`).
    *   Default: `/healthz,/recommendations,/sync/status`
*   `WATCHDOG_LOG_PATH`: Base directory for logs. The script will create a `perf` subdirectory here.
    *   Default: `../../logs` (relative to the script's location, so effectively `project_root/logs`)
*   `ALERT_WEBHOOK_URL`: Webhook URL to send alerts to if an endpoint is slow.
    *   Default: Not set (alerts disabled).
*   `RESTART_CMD`: Command to execute if a slow endpoint is detected.
    *   Default: `pm2 restart all`

These environment variables should be set in the environment where the `scripts/perf/monitor.js` script is run (e.g., in your PM2 ecosystem file or shell environment).

## Running with a Process Manager (PM2 Example)

To run the script continuously and ensure it restarts on failure or server reboot, use PM2:

1.  **Start the script with PM2**:
    Navigate to your project root directory and run:
    ```bash
    pm2 start scripts/perf/monitor.js --name zion-perf-monitor
    ```
    *   `--name zion-perf-monitor`: Assigns a name to the PM2 process for easier management.

2.  **Configure Environment Variables for PM2**:
    It's best to use an ecosystem file for PM2 to manage environment variables. Create an `ecosystem.config.js` file in your project root (or use an existing one):

    ```javascript
    // ecosystem.config.js
    module.exports = {
      apps : [{
        name   : "zion-perf-monitor",
        script : "./scripts/perf/monitor.js",
        env: {
          NODE_ENV: "production", // Or "development"
          // Define your environment variables here
          // BACKEND_BASE_URL: "https://api.yourdomain.com",
          // MONITOR_ENDPOINTS: "/api/v1/health,/api/v1/status",
          // ALERT_WEBHOOK_URL: "https://your.webhook.receiver/endpoint",
          // RESTART_CMD: "pm2 restart your-api-service-name",
          // WATCHDOG_LOG_PATH: "/path/to/your/project/logs" // Absolute path recommended for PM2
        }
      }]
    }
    ```
    Then start PM2 with the ecosystem file:
    ```bash
    pm2 start ecosystem.config.js
    ```
    Make sure to adjust the `script` path if your `ecosystem.config.js` is not in the project root. Using an absolute path for `WATCHDOG_LOG_PATH` is also a good practice when using PM2.

3.  **Save PM2 Process List**:
    To make PM2 automatically restart your script after a server reboot:
    ```bash
    pm2 save
    ```
    And follow the instructions provided by `pm2 startup` if you haven't set it up before.

4.  **Monitoring PM2**:
    *   List processes: `pm2 list`
    *   View logs for the script: `pm2 logs zion-perf-monitor`

## Log Files

*   **Performance Log**: `logs/perf/hourly.log` (relative to `WATCHDOG_LOG_PATH`, which defaults to project root `logs/`)
    *   Contains timestamped logs of the slowest endpoint responses recorded each hour.
*   **PM2 Logs (if using PM2)**:
    *   PM2 will manage its own logs for the script's stdout/stderr, typically found in `~/.pm2/logs/`. These are useful for debugging the script itself if it fails to run.

Make sure the log directory (`logs/perf/`) is writable by the user running the script or PM2 process. The script attempts to create this directory if it doesn't exist.

This setup ensures that `logs/perf/hourly.log` is regularly updated, allowing the `scripts/watchdog.js` script to monitor it effectively.
